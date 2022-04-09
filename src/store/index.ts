import { useCatchedFetchRequest } from "../hooks/useCachedFetch";
import {
  defaults,
  isAddress,
  isEqualAddress,
  isNativeToken,
  maxInt,
  nativeToken,
  useConfig,
} from "../hooks/useConfig";
import { useAccount, useChainId } from "../hooks/useEthereum";
import { useProvider, useRpcProvider } from "../hooks/useProvider";
import { Chain, chains } from "../lib/chains";
import { Tx } from "../types/tx";
import { ethers } from "ethers";
import { defineStore } from "pinia";
import { truncate } from "../hooks/useFormat";
import IERC20 from "../lib/abi/erc20.abi.json";
import BN from "bignumber.js";
import {
  Token,
  TokenListResponse,
  TokenWithUserData,
  Usertoken,
} from "../types/token";
import { createMessage, Message, MessagePayload } from "../types/message";
import { useChain } from "../hooks/useChain";
import { useLocalStorageRaw } from "../hooks/useLocalStorage";
import pkg from "../../package.json";
import { parseErrorMessage } from "../lib/error-handling";

interface State {
  account: string;
  chainId: number;
  balance: string;
  txs: Tx<any>[];
  userTokens: Usertoken[];
  tokenList: Token[];
  messages: Message[];
  tokenInput: Token | undefined;
  blockNumber: number;
  loading: boolean;
  version: string;
  chains: Chain[];
}

export const useStore = defineStore("main", {
  state: () => {
    return <State>{
      chainId: useChainId() || defaults.chainId,
      account: "",
      balance: "0",
      tokenList: [],
      userTokens: [],
      txs: [],
      loading: false,
      tokenInput: undefined,
      messages: [],
      blockNumber: 0,
      version: pkg.version,
      chains: [],
    };
  },
  persist: {
    key: "agiodao:pinia:main",
    paths: ["chainId", "blockNumber", "tokenInput", "txs", "chains"],
  },
  actions: {
    GET_PROVIDER() {
      const provider:
        | undefined
        | ethers.providers.Web3Provider
        | ethers.providers.JsonRpcProvider = this.chain?.rpcUrl
        ? useRpcProvider(this.chain.rpcUrl)
        : useProvider();
      return provider;
    },
    GET_SIGNER() {
      const provider = useProvider();
      const signer = provider?.getSigner();
      if (!provider || !signer) return;
      return signer;
    },
    async GET_ACCOUNT_INFO() {
      try {
        const account = await useAccount();
        this.account = account ? ethers.utils.getAddress(account) : "";
        const provider = useProvider();

        if (this.account && provider?.getBalance) {
          this.balance = (
            (await provider.getBalance(this.account)) ||
            ethers.BigNumber.from(0)
          ).toString();
        } else {
          this.balance = "0";
        }

        this.UPDATE_USER_TOKEN(nativeToken);
      } catch (error) {
        console.warn(error);
      }
    },
    async GET_TOKEN_LIST() {
      if (!this.chain?.tokenListUrl) {
        this.tokenList = [];
        return;
      }
      try {
        const list = await useCatchedFetchRequest<TokenListResponse>(
          this.chain.tokenListUrl!
        );
        if (list.value)
          this.tokenList = list.value.tokens.filter(
            (token) => token.chainId === this.chainId
          );
      } catch {
        this.tokenList = [];
      }
    },
    async GET_USER_TOKEN(address: string) {
      if (!this.chain) return;
      if (!isAddress(address)) return;

      const userToken: Usertoken = {
        address,
        account: this.account,
        balance: "0",
        allowance: "0",
        state: "pending",
      };

      if (isNativeToken(address)) {
        userToken.balance = this.balance;
        userToken.allowance = maxInt.toString();
        return userToken;
      }

      const provider = this.GET_PROVIDER();

      if (!this.account || !provider) return userToken;

      const TokenContract = new ethers.Contract(address, IERC20, provider);

      try {
        const [balance] = await Promise.all([
          <Promise<ethers.BigNumber>>TokenContract.balanceOf(this.account),
        ]);
        userToken.allowance = "0";
        userToken.balance = balance.toString();
      } catch {
        console.log("Error");
      }

      return userToken;
    },
    async UPDATE_USER_TOKEN(address: string) {
      const token = await this.GET_USER_TOKEN(address);
      if (!token) return;
      this.userTokens = this.userTokens.filter(
        (token) => token.address.toLowerCase() !== address.toLowerCase()
      );
      this.userTokens = this.userTokens.concat(token);
    },
    PATCH_USER_TOKEN(payload: Partial<Usertoken>) {
      if (!payload.address) return;
      const token = this.userTokens.find(
        ({ address }) =>
          address.toLowerCase() === payload.address!.toLowerCase()
      );
      if (!token) return;
      this.userTokens = this.userTokens.filter(
        (token) =>
          token.address.toLowerCase() !== payload.address!.toLowerCase()
      );
      this.userTokens = this.userTokens.concat(
        Object.assign({}, token, payload)
      );
    },
    async APPROVE_TOKEN(address: string) {
      if (!this.chain?.nftContractAddress) return;
      const signer = this.GET_SIGNER();
      if (!signer) return;
      const { maxInt } = useConfig();
      const TokenContract = new ethers.Contract(address, IERC20, useProvider());
      const TokenContractWithSigner = new ethers.Contract(
        address,
        IERC20,
        signer
      );
      let hash = "";

      const listener: ethers.providers.Listener = async (
        userAddress: string
      ) => {
        if (isEqualAddress(userAddress, this.account)) {
          this.UPDATE_USER_TOKEN(address);
          this.PATCH_USER_TOKEN({ address, state: "pending" });
          this.GET_ACCOUNT_INFO();
          this.ADD_MESSAGE({
            title: "Token Approved",
            action: ["Explore", useChain(this.chainId).txUrl(hash)],
            type: "success",
          });
          TokenContract.removeListener("Approval", listener);
          this.PATCH_TX({
            txState: "confirmed",
            hash,
          });
        }
      };

      TokenContract.on("Approval", listener);

      const tx: ethers.ContractTransaction =
        await TokenContractWithSigner.approve(
          this.chain.nftContractAddress,
          maxInt
        );
      hash = tx.hash;

      this.PATCH_USER_TOKEN({ address, state: "approving" });

      this.UPDATE_TX({
        hash,
        timestamp: tx.timestamp || new Date().getTime(),
        txState: "pending",
        contractName: "approval",
        payload: {
          address,
        },
      });

      this.ADD_MESSAGE({
        title: "Approving Token",
        action: ["Explore", useChain(this.chainId).txUrl(hash)],
      });
    },
    async UPDATE_TX(tx: Tx<any>) {
      this.txs = this.txs
        .filter((_tx) => tx.hash !== _tx.hash)
        .concat(tx)
        .sort((a, b) => b.timestamp - a.timestamp);
      return tx;
    },
    ADD_MESSAGE(payload: MessagePayload) {
      const message = createMessage(payload);
      this.messages.push(message);
      setTimeout(() => {
        this.DISMISS_MESSAGE(message.id);
      }, message.duration || 6000);
    },
    PATCH_MESSAGE(payload: Partial<Message>) {
      const message = this.messages.find((m) => m.id === payload?.id);
      if (!message) return;
      const newMessage = {
        ...message,
        ...payload,
      };
      this.messages = this.messages
        .filter((m) => m.id !== payload.id)
        .concat(newMessage);
    },
    PATCH_TX(payload: Partial<Tx>) {
      const tx = this.txs.find((tx) => tx.hash === payload?.hash);
      if (!tx) return;
      const newTx = {
        ...tx,
        ...payload,
      };
      this.txs = this.txs
        .filter((tx) => tx.hash !== payload.hash)
        .concat(newTx)
        .sort((a, b) => b.timestamp - a.timestamp);
    },
    async HANDLE_TX<T>(
      func: Promise<T>,
      functionName = "Transaction",
      confirmedCallback?: (receipt: ethers.ContractReceipt) => any,
      errorCallback?: (error: any) => any,
      startedCallback?: (tx: ethers.ContractTransaction) => any
    ) {
      const chain = useChain(this.chainId);
      const result = {
        success: false,
        tx: undefined as undefined | ethers.ContractTransaction,
        errorData: undefined as any,
      };
      try {
        const tx: ethers.ContractTransaction = (await func) as any;
        this.ADD_MESSAGE({
          title: `${functionName} broadcasted`,
          type: "info",
          action: ["explore", chain.txUrl(tx.hash)],
        });
        result.tx = tx;
        result.success = true;

        this.UPDATE_TX({
          hash: tx.hash,
          timestamp: tx.timestamp || new Date().getTime(),
          txState: "pending",
          contractName: functionName,
        });

        if (typeof startedCallback === "function") {
          startedCallback(tx);
        }

        tx.wait()
          .then((receipt) => {
            this.ADD_MESSAGE({
              title: `${functionName} confirmed`,
              type: "info",
              action: ["explore", chain.txUrl(tx.hash)],
            });
            this.PATCH_TX({
              hash: tx.hash,
              txState: "confirmed",
            });
            if (typeof confirmedCallback === "function") {
              confirmedCallback(receipt);
            }
          })
          .catch((e: any) => {
            if (e?.code === 4001) return;
            this.ADD_MESSAGE({
              title: parseErrorMessage(e),
              type: "error",
            });
            this.PATCH_TX({
              hash: tx.hash,
              txState: "error",
            });
            if (typeof errorCallback === "function") {
              errorCallback(e);
            }
          })
          .finally(() => {
            this.GET_ACCOUNT_INFO();
          });
      } catch (e: any) {
        if (e?.code === 4001) return;
        this.ADD_MESSAGE({
          title: parseErrorMessage(e),
          type: "error",
        });
        result.success = false;
        result.errorData = e;
        result.tx = undefined;
      }
      return result;
    },
    DISMISS_MESSAGE(id: string) {
      this.PATCH_MESSAGE({ id, dismissed: true });
    },
    async INIT(options?: { chainId?: number; reset?: boolean }) {
      if (!this.chains.length) {
        this.chains = chains;
      } else if (JSON.stringify(this.chains) !== JSON.stringify(chains)) {
        localStorage.clear();
        this.$reset();
        this.chains = chains;
        console.log("NEW VERSION");
      }
      this.loading = true;

      if (options?.reset) {
        this.$reset();
      }
      const connected = useProvider();
      if (options?.chainId)
        this.chainId = useLocalStorageRaw<number>("chainId").set(
          options.chainId
        )!;
      // const supported = chains.some(c => c.id === this.chainId);

      if (connected) {
        await this.GET_ACCOUNT_INFO();
        this.UPDATE_BLOCK_NUMBER();
      } else {
        this.ADD_MESSAGE({
          title: "Unsupported: Please install a Web3 wallet",
          action: ["Get MetaMask", "https://metamask.io/download"],
        });
      }

      // if (supported) {
      //   await this.GET_TOKEN_LIST();
      //   this.SELECT_TOKEN(
      //     this.tokenList.find((t) => isNativeToken(t.address)) ||
      //     this.tokenList[0]
      //   );
      // }

      // if (connected && supported) {
      //   this.tokenList.forEach(({ address }) => this.UPDATE_USER_TOKEN(address));
      // }

      setTimeout(() => {
        this.loading = false;
      }, 300);
    },
    async UPDATE_BLOCK_NUMBER() {
      const provider = useProvider();
      if (provider) {
        this.blockNumber = await provider.getBlockNumber();
      } else {
        this.blockNumber = -1;
      }
    },
    SELECT_TOKEN(token: Token) {
      this.tokenInput = token;
    },
    COPY(value: string) {
      const input = document.createElement("input");
      input.value = value;
      input.select();
      input.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(input.value).then(() => {
        this.ADD_MESSAGE({
          title: `Copied: ${truncate(value, 30)}`,
          duration: 3000,
        });
      });
    },
    LOGOUT() {
      this.$reset();
      this.GET_TOKEN_LIST().then(() => {
        this.SELECT_TOKEN(
          this.tokenList.find((t) => isNativeToken(t.address)) ||
            this.tokenList[0]
        );
      });
    },
    LOGIN() {
      this.INIT();
    },
  },

  getters: {
    loggedIn({ account }) {
      return account && account !== "0x0" && account !== nativeToken;
    },
    chain({ chainId }) {
      const chain = chains.find((chain) => chain.id === chainId);
      return chain;
    },
    unsupported({ chainId }) {
      const chain = chains.find((chain) => chain.id === chainId);
      return !chain?.nftContractAddress;
    },
    userToken: (state) => (address: string) =>
      state.userTokens.find(
        (token) => token.address.toLowerCase() === address.toLowerCase()
      ) || {
        account: "",
        address: address,
        allowance: "0",
        balance: "0",
      },
    tx: (state) => (hash: string) => state.txs.find((tx) => tx.hash === hash),
    token: (state) => (address: string) =>
      state.tokenList.find(
        (token) => token.address.toLowerCase() === address.toLowerCase()
      ),
    message: (state) => (id: string) =>
      state.messages.find((message) => message.id === id),
    isApproved: () => (allowance: string) => {
      const { maxInt } = useConfig();
      return ethers.BigNumber.from(allowance).gt(maxInt.div(2));
    },
    tokenListWithUserData: (ctx): TokenWithUserData[] => {
      const tokens = ctx.tokenList.map((token) => {
        return {
          ...token,
          ...((ctx as any).userToken(token.address) as TokenWithUserData),
        };
      });
      return tokens.sort((a, b) => (new BN(a.balance).gt(b.balance) ? -1 : 0));
    },
  },
});
