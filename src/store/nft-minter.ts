import { defineStore } from "pinia";
import { BigNumber, ethers, utils } from "ethers";
import { useStore } from ".";
import { NFTMetaData, useIpfs } from "../hooks/useIpfs";
import { NftData, useCovalent } from "../hooks/useCovalent";
import { ChainId } from "../lib/chains";

// ABI interfaces (typesafe)
import AgioERC1155 from "../artifacts/contracts/AgioERC1155.sol/AgioERC1155.json";
import { nativeToken } from "../hooks/useConfig";
import { BN, equalAddress } from "../lib/utils";
import { id } from "ethers/lib/utils";
import { getLogs } from "../lib/ethers";
import { uniqBy } from "lodash";
import { fileToHash } from "../lib/fs";
import {
  TransferSingleEventFilter,
  AgioERC1155 as IAgioERC1155,
} from "../contracts/typechain-types/AgioERC1155";

const IAgioERC1155 = AgioERC1155.abi;
const ipfs = useIpfs();

export type SupportedFile = File;
export type Nullable<T> = T | undefined | null;

export interface MintForm {
  file: Nullable<SupportedFile>;
  name: Nullable<string>;
  description: Nullable<string>;
  metadataHash: Nullable<string>;
  tokenId: Nullable<number>;
}

export interface NftMinterState {
  loaded: boolean;
  listing: boolean;
  totalTokens: number;
  nfts: Nft[];
  balances: NftBalance[];
  form: MintForm;
  mintingMetaData: boolean;
  mintingNft: boolean;
  mintedMetaData?: NFTMetaData;
}

export interface NftEvent {
  name: string;
  txHash: string;
  index: number;
  from?: string;
  to?: string;
  value?: string;
  data?: string;
  timestamp: number;
}

export interface Nft {
  id: number;
  metadata?: NFTMetaData;
  status?: "pending" | "minting" | "confirmed" | "transfering";
  covalentData?: NftData;
  metadataHash?: string;
  minter?: string;
  owner?: string;
  previousOwner?: string;
  name?: string;
  events?: NftEvent[];
}

export interface NftBalance {
  id: number;
  balance: string;
}

const defaultForm: MintForm = Object.freeze({
  name: "",
  description: "",
  file: null,
  metadataHash: "",
  tokenId: null,
});

export const useNftMinterStore = defineStore("nft-minter", {
  state: (): NftMinterState => ({
    loaded: false,
    listing: false,
    totalTokens: 0,
    nfts: [],
    balances: [],
    form: { ...defaultForm },
    mintingMetaData: false,
    mintingNft: false,
    mintedMetaData: undefined,
  }),
  persist: {
    key: "agiodao:pinia:nft-minter",
    paths: ["nfts", "balances", "form"],
  },
  actions: {
    GET_CONTRACT(withSigner?: boolean) {
      const parent = useStore();
      const provider = withSigner ? parent.GET_SIGNER() : parent.GET_PROVIDER();
      const address = parent.chain?.nftContractAddress;
      if (!address || !provider) return;

      const DegenContract = new ethers.Contract(
        address,
        IAgioERC1155,
        provider
      ) as unknown as IAgioERC1155;

      return DegenContract;
    },
    RESET_FORM() {
      this.mintedMetaData = undefined;
      this.form = { ...defaultForm };
    },
    SET_FORM(form: MintForm) {
      this.form = { ...form };
    },
    PATCH_FORM(form: Partial<MintForm>) {
      this.form = { ...this.form, ...form };
    },
    async INIT() {
      const contract = this.GET_CONTRACT();
      if (!contract) return;
      this.nfts = this.nfts.filter((n) => n.status === "confirmed");

      this.LIST_NFTS().then(() => {
        this.nfts.forEach(async (nft) => {
          const transferTokenEvent =
            contract.interface.events[
              "TransferSingle(address,address,address,uint256,uint256)"
            ].format();
          console.log(transferTokenEvent);
          const transferTokenFilter: TransferSingleEventFilter = {
            topics: [
              id(transferTokenEvent),
              null,
              null,
              utils.hexZeroPad(nft.owner || "", 32),
            ] as any,
          };

          const transfers = (
            await getLogs(contract, transferTokenFilter)
          ).filter((log) => log.parsedLog.args.id.eq(nft.id));
          transfers.forEach(async (tf) => {
            const event: NftEvent = {
              index: tf.log.logIndex,
              txHash: tf.log.transactionHash,
              name: tf.parsedLog.name,
              from: tf.parsedLog.args.from,
              to: tf.parsedLog.args.to,
              value: tf.parsedLog.args.value.toString(),
              timestamp: (await contract.provider.getBlock(tf.log.blockNumber))
                .timestamp,
            };
            this.PATCH_NFT({
              id: nft.id,
              events: uniqBy([event, ...(nft.events || [])], "index"),
            });
          });
        });

        //   const addLikeFilter: AddLikeEventFilter = {
        //     address: parent.chain?.nftContractAddress,
        //     topics: [
        //       id(addLikeEvent),
        //       null as unknown as string,
        //       hexZeroPad(ethers.utils.getAddress(parent.account), 32),
        //     ]
        //   }

        //   const mintTokenFilter: MintTokenEventFilter = {
        //     address: parent.chain?.nftContractAddress,
        //     topics: [
        //       id(mintTokenEvent),
        //     ]
        //   }

        // getLogs(addLikeFilter).then(logs => console.log(logs?.[0]?.name, logs.map(l => l.args)))
        // getLogs(mintTokenFilter).then(logs => console.log(logs?.[0]?.name, logs.map(l => l.args)))
      });
      this.loaded = true;
    },
    SET_NFT(nft: Nft) {
      this.nfts = [nft, ...this.nfts.filter((n) => n.id !== nft.id)].sort(
        (a, b) => b.id - a.id
      );
    },
    PATCH_NFT(nft: Partial<Nft>) {
      if (!nft.id) return;
      const found: Nft = this.nfts.find((n) => n.id === nft.id) || {
        id: nft.id,
      };
      this.nfts = [
        { ...found, ...nft },
        ...this.nfts.filter((n) => n.id !== nft.id),
      ].sort((a, b) => b.id - a.id);
    },
    RESET() {
      this.nfts = [];
      this.balances = [];
      this.totalTokens = 0;
      this.loaded = false;
      this.mintedMetaData = undefined;
    },
    async MINT_METADATA(payload: MintForm) {
      const notify = useStore().ADD_MESSAGE;
      const contract = this.GET_CONTRACT();
      if (!contract) return;
      if (!payload.file && !payload.file) {
        return notify({
          title: "Document is missing",
          type: "error",
        });
      } else if (!payload.name) {
        return notify({
          title: "Name is missing",
          type: "error",
        });
      }
      try {
        this.mintingMetaData = true;
        this.mintedMetaData = undefined;
        const tokenId = (
          (await contract.getNextTokenId()) as BigNumber
        ).toNumber();
        const empty$ = async () => {
          return undefined;
        };

        const file$ = payload.file ? ipfs.pinFile(payload.file) : empty$();
        notify({
          title: "Starting media upload...",
          type: "info",
        });

        console.log(1, await fileToHash(payload.file));

        const [file] = await Promise.all([file$]);
        const fileHash = file?.data?.IpfsHash || "";
        console.log(2, fileHash);

        if (fileHash) {
          notify({
            title: "Document upload complete",
            type: "info",
            action: ["Open on IPFS", ipfs.getIpfsUrl(fileHash)],
          });
        }
        const metadata = ipfs.createMetaData(
          tokenId,
          payload.name,
          payload.description || ""
          // imageHash,
          // videoHash
        );
        const json = await ipfs.pinJSON(metadata);
        const metadataHash = json?.data?.IpfsHash || "";
        if (!metadataHash) {
          return notify({
            title: "Couldn't upload Metadata 1",
            type: "info",
          });
        }
        this.mintedMetaData = metadata;
        this.mintingMetaData = false;
        return {
          metadataHash,
          tokenId,
          metadata,
        };
      } catch (e) {
        console.log(e);
        this.mintedMetaData = undefined;
        this.mintingMetaData = false;
        return notify({
          title: "Couldn't upload Metadata 2",
          type: "info",
        });
      }
    },
    async MINT(
      tokenId: number,
      metadataHash: string,
      metadata?: NFTMetaData,
      to?: string
    ) {
      const parent = useStore();
      const contract = this.GET_CONTRACT(true);
      const owner = to || parent.account;

      console.log(
        contract,
        tokenId,
        ipfs.isValidHash(metadataHash),
        this.form?.name
      );

      if (
        !contract ||
        !tokenId ||
        !ipfs.isValidHash(metadataHash) ||
        !this.form?.name
      )
        return;

      const pendingNft: Nft = {
        id: tokenId,
        metadata,
        metadataHash,
        minter: ethers.utils.getAddress(parent.account),
        owner: ethers.utils.getAddress(owner),
        name: this.form.name,
        previousOwner: nativeToken,
        status: "minting",
      };

      const call = contract.mintToken(
        BN(tokenId),
        owner,
        metadataHash,
        this.form.name
      );

      const res = await parent.HANDLE_TX(
        call,
        "MintToken",
        () => {
          this.mintingNft = false;
          this.LIST_NFTS();
          this.PATCH_NFT({
            id: tokenId,
            status: "confirmed",
          });
        },
        () => {
          this.mintingNft = false;
          this.PATCH_NFT({
            id: tokenId,
            status: "confirmed",
          });
        }
      );

      if (res?.success) {
        this.mintingNft = true;
        this.SET_NFT(pendingNft);
        this.LIST_NFTS();
        this.PATCH_NFT({
          id: tokenId,
          status: "minting",
        });
      }

      return res;
    },
    async LIST_NFTS() {
      const contract = this.GET_CONTRACT();
      let timeout: any;
      if (!contract) return;
      try {
        timeout = setTimeout(() => {
          this.listing = false;
        }, 30 * 1000);
        this.listing = true;
        const tokens = await contract.allTokens();
        tokens.forEach((token) => {
          this.PATCH_NFT({
            id: token.id.toNumber(),
            owner: ethers.utils.getAddress(token.owner),
            minter: ethers.utils.getAddress(token.minter),
            previousOwner: ethers.utils.getAddress(token.previousOwner),
            metadataHash: token.metadataHash,
            name: token.name,
          });
        });

        tokens
          .map(({ id }) => id.toNumber())
          .forEach(async (id, i) => {
            const nft = await this.GET_NFT(id);
            this.PATCH_NFT(nft);
            if (i === tokens.length - 1) this.MY_BALANCES();
          });
      } finally {
        this.listing = false;
        clearTimeout(timeout);
      }
    },
    async GET_NFT_ONCHAIN(id: number): Promise<Nft | undefined> {
      try {
        const contract = this.GET_CONTRACT();
        if (!contract) return;
        const metadataHash: string = (await contract.tokens(BN(id)))
          .metadataHash;
        const metadata = ipfs.isValidHash(metadataHash)
          ? await ipfs.getNftMetaData(
              ipfs.getIpfsGateWayUrlByHash(metadataHash)
            )
          : undefined;
        const nft: Nft = {
          metadataHash,
          id,
          metadata,
          status: "confirmed",
        };
        return nft;
      } catch (e) {
        console.error(e);
        return;
      }
    },
    async GET_NFT_OFFCHAIN(id: number): Promise<Nft | undefined> {
      try {
        const covalent = useCovalent();
        const mainStore = useStore();
        if (
          mainStore.chainId === ChainId.Rinkeby ||
          mainStore.chainId === ChainId.Local
        )
          return;
        const contractAddress = mainStore.chain?.nftContractAddress;
        const chainId = mainStore.chainId;
        if (!contractAddress || !chainId) return;
        const res = await covalent.getNft(contractAddress, chainId, id);
        if (res?.error) return;
        const item = res?.data.items[0];
        const nftData = item?.nft_data?.[0];
        if (!item) return;

        const nft: Nft = {
          id,
          status: "confirmed",
          metadata: item.nft_data?.[0]?.external_data,
          metadataHash: ipfs.getHashFromUri(nftData?.token_url),
          covalentData: nftData,
        };

        return nft;
      } catch (e) {
        console.error(e);
        return;
      }
    },
    async TRANSFER(id: number, to: string) {
      const contract = this.GET_CONTRACT(true);
      const parent = useStore();
      const NON_FUNGABLE = BN(1);
      if (!contract) return;
      const tx: ethers.ContractTransaction = await contract.safeTransferFrom(
        parent.account,
        to,
        BN(id),
        NON_FUNGABLE,
        "0x"
      );
      return tx;
    },
    async GET_NFT(id: number): Promise<Nft> {
      const defaultNft: Nft = { id, status: "confirmed" };
      const nft = await this.GET_NFT_OFFCHAIN(id);
      if (nft?.metadataHash) return nft;
      else {
        return (await this.GET_NFT_ONCHAIN(id)) || defaultNft;
      }
    },
    async MY_BALANCES() {
      const parent = useStore();
      const contract = this.GET_CONTRACT();
      if (!contract || !parent.account) return;
      const ids = this.nfts.map((n) => BN(n.id));
      const accounts = this.nfts.map(() => parent.account);
      const res: BigNumber[] = await contract.balanceOfBatch(accounts, ids);
      const balances = res.map((bn, i) => ({
        id: ids[i].toNumber(),
        balance: bn.toString(),
      }));
      this.SET_BALANCES(balances);
    },
    SET_BALANCES(balances: NftBalance[]) {
      this.balances = balances;
    },
    PATCH_BALANCE(balance: Partial<NftBalance>) {
      const found = this.balances.find((b) => b.id === balance.id);
      if (!found) return;
      this.balances = [
        ...this.balances.filter((b) => b.id !== balance.id),
        { ...found, ...balance },
      ];
    },
  },
  getters: {
    nft: (state) => (id: number | string) =>
      state.nfts.find((n) => n.id === +id),
    balance: (state) => (id: number | string) =>
      state.balances.find((n) => n.id === +id)?.balance ?? "",
    myTokens: ({ nfts }) =>
      nfts.filter(({ owner }) => equalAddress(owner, useStore().account)),
  },
});
