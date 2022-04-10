import { DeployedContract } from "../types/deployed-contract";
import deployedContracts from "../contracts/deploy-info/deploys.json";

const findLastContractDeployedById = (chainId: number, name: string) => {
  return (deployedContracts as DeployedContract[]).find(
    (contract) => contract.chainId === chainId && contract.name === name
  );
};

const getContracts = (chainId: number): Partial<Chain> => {
  return {
    nftContractAddress: findLastContractDeployedById(chainId, "AgioERC1155")
      ?.address,
    nftContractBlock: findLastContractDeployedById(chainId, "AgioERC1155")
      ?.block,
    erc20ContractAddress: findLastContractDeployedById(
      chainId,
      "AgioGovernance"
    )?.address,
    erc20ContractBlock: findLastContractDeployedById(chainId, "AgioGovernance")
      ?.block,
    governorContractAddress: findLastContractDeployedById(
      chainId,
      "AgioSMARTDAO"
    )?.address,
    governorContractBlock: findLastContractDeployedById(chainId, "AgioSMARTDAO")
      ?.block,
  };
};

export interface Chain {
  id: number;
  name: string;
  decimals: number;
  symbol: string;
  logoURI: string;
  explorerUrl: string;
  tokenListUrl?: string;
  rpcUrl?: string;
  swapUrl: string;
  waitConfirmations?: number;
  nftContractAddress?: string;
  nftContractBlock?: number;
  erc20ContractAddress?: string;
  erc20ContractBlock?: number;
  governorContractAddress?: string;
  governorContractBlock?: number;
  blockSpeed?: number;
}

export enum ChainId {
  Ethereum = 1,
  Fantom = 250,
  Polygon = 137,
  Avax = 43114,
  FantomTestnet = 4002,
  Local = 31337,
  Mumbai = 80001,
  Rinkeby = 4,
  Arbitrum = 42161,
}

const allChains: Chain[] = [
  {
    id: ChainId.Polygon,
    name: "Polygon",
    symbol: "MATIC",
    decimals: 18,
    rpcUrl: "https://rpc-mainnet.matic.quiknode.pro",
    explorerUrl: "https://polygonscan.com/",
    swapUrl: "https://quickswap.exchange/#/swap",
    tokenListUrl:
      "https://gist.githubusercontent.com/cwdx/5a38661dfa2f036252863c6cc6fdc551/raw/polygon-tokens.json?",
    logoURI: "https://wallet-asset.matic.network/img/tokens/matic.svg",
    blockSpeed: 2 * 1000,
  },
  {
    id: ChainId.Mumbai,
    name: "Polygon (Mumbai)",
    symbol: "MATIC",
    decimals: 18,
    rpcUrl: "https://rpc-mumbai.maticvigil.com/",
    explorerUrl: "https://mumbai.polygonscan.com/",
    ...getContracts(ChainId.Mumbai),
    logoURI: "https://mumbai.polygonscan.com/images/svg/brands/poly.png?v=1.3",
    tokenListUrl:
      "https://gist.githubusercontent.com/cwdx/5a38661dfa2f036252863c6cc6fdc551/raw/polygon-tokens.json?",
    swapUrl: "https://quickswap.exchange/#/swap",
    blockSpeed: 5 * 1000,
  },
  {
    id: ChainId.Rinkeby,
    name: "Ethereum (Rinkeby)",
    logoURI:
      "https://res.cloudinary.com/sushi-cdn/image/fetch/w_128/https://raw.githubusercontent.com/sushiswap/logos/main/network/fantom/0x74b23882a30290451A17c44f4F05243b6b58C76d.jpg",
    decimals: 18,
    symbol: "ETH",
    ...getContracts(ChainId.Rinkeby),
    explorerUrl: "https://rinkeby.etherscan.io/",
    rpcUrl: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    swapUrl: "https://app.uniswap.org/#/swap",
    tokenListUrl: "https://www.gemini.com/uniswap/manifest.json",
    blockSpeed: 15.5 * 1000,
  },
  {
    id: ChainId.Fantom,
    name: "Fantom Opera",
    symbol: "FTM",
    explorerUrl: "https://ftmscan.com/",
    decimals: 18,
    logoURI:
      "https://app.sushi.com/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Fsushiswap%2Ficons%2Fmaster%2Fnetwork%2Ffantom.jpg&w=32&q=75",
    swapUrl: "https://spookyswap.finance/swap",
    rpcUrl: "https://rpc.ftm.tools/",
    tokenListUrl:
      "https://gist.githubusercontent.com/cwdx/bc2b33acf22856d9aa81b9c4f578962d/raw/fantom-tokens.json",
    waitConfirmations: 5,
  },
  {
    id: ChainId.Avax,
    name: "Avax C-Chain",
    explorerUrl: "https://snowtrace.io/",
    symbol: "AVAX",
    decimals: 18,
    logoURI:
      "https://assets.website-files.com/6059b554e81c705f9dd2dd32/60ec6a944b52e3e96e16af68_Avalanche_Square_Red_Circle-p-500.png",
    rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
    swapUrl: "https://traderjoexyz.com/#/trade",
    tokenListUrl:
      "https://gist.githubusercontent.com/cwdx/8e6981c938b8ba90a6560fc71497114c/raw/avax-tokens.json",
  },
  {
    id: ChainId.Ethereum,
    name: "Ethereum",
    logoURI:
      "https://res.cloudinary.com/sushi-cdn/image/fetch/w_128/https://raw.githubusercontent.com/sushiswap/logos/main/network/fantom/0x74b23882a30290451A17c44f4F05243b6b58C76d.jpg",
    decimals: 18,
    symbol: "ETH",
    explorerUrl: "https://etherscan.io/",
    rpcUrl: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    swapUrl: "https://app.uniswap.org/#/swap",
    tokenListUrl: "https://www.gemini.com/uniswap/manifest.json",
    blockSpeed: 13.19 * 1000,
  },
  {
    id: ChainId.Arbitrum,
    name: "Arbitrum One",
    symbol: "AETH",
    decimals: 18,
    rpcUrl: "https://arb1.arbitrum.io/rpc",
    explorerUrl: "https://arbiscan.io/",
    swapUrl: "https://app.uniswap.org/#/swap",
    tokenListUrl: "https://www.gemini.com/uniswap/manifest.json",
    logoURI:
      "https://pbs.twimg.com/profile_images/1480556279953199109/E2wCNMep_400x400.jpg",
  },
  {
    id: ChainId.Local,
    name: "Local",
    logoURI:
      "https://ipfs.io/ipfs/QmUUd8q3YW8CgJcdBbRScfeWvteY8cPD5sxUww6WUtg6Ed",
    decimals: 18,
    symbol: "xETH",
    explorerUrl: "https://etherscan.io/",
    rpcUrl: "http://127.0.0.1:8545",
    swapUrl: "https://app.uniswap.org/#/swap",
    ...getContracts(ChainId.Local),
    tokenListUrl:
      "https://gist.githubusercontent.com/cwdx/8229196f591c172469714c683c77a540/raw/local-tokens.json",
  },
];

export const chains = allChains.filter((c) => {
  if (location.hostname === "localhost") return true;
  else return ![ChainId.FantomTestnet, ChainId.Local].includes(c.id);
});

export const getChainById = (id: number): Chain => {
  return chains.find((c) => c.id === id) as Chain;
};

export const chainIdtoHex = (num: number) => {
  return "0x" + num.toString(16);
};
