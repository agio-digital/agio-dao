import { chainIdtoHex, getChainById } from "../lib/chains";
import { BigNumber, ethers } from "ethers";
import { defaults } from "./useConfig";

interface ExtendedWindow {
  ethereum: ethers.providers.ExternalProvider;
}

export const useEthereum = () => {
  const ethereum = (window as unknown as ExtendedWindow).ethereum;
  return ethereum;
};

export const useAccount = async (): Promise<string> => {
  try {
    const eth = useEthereum();
    if (!eth?.request) return "";
    const accounts = await eth.request({
      method: "eth_requestAccounts",
    });
    return accounts[0] || "";
  } catch {
    return "";
  }
};

export const useChainId = (): number => {
  try {
    const eth = useEthereum() as any;
    const _nativeEthereumChainId = BigNumber.from(
      (window as any).ethereum?.chainId || "0"
    ).toNumber();
    const chainId = BigNumber.from(eth.chainId).toNumber();
    return chainId || _nativeEthereumChainId || defaults.chainId;
  } catch {
    return defaults.chainId;
  }
};

export const useConfigureChain = (chainId: number) => {
  const chain = getChainById(chainId);
  const ethereum = useEthereum();
  if (!chain || !ethereum?.request) return;

  const params = {
    chainId: chainIdtoHex(chain.id), // A 0x-prefixed hexadecimal string
    chainName: chain.name,
    nativeCurrency: {
      name: chain.name,
      symbol: chain.symbol, // 2-6 characters long
      decimals: chain.decimals,
    },
    rpcUrls: [chain.rpcUrl],
    blockExplorerUrls: [chain.explorerUrl ?? ""],
  };

  const account: string | undefined = (ethereum as any).selectedAddress;

  return ethereum?.request({
    method: "wallet_addEthereumChain",
    params: [params, account],
  });
};
