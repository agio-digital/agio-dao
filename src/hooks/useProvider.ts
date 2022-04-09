import { ethers } from "ethers";

interface ExtendedWindow {
  ethereum: ethers.providers.ExternalProvider;
}

export const useProvider = () => {
  const ethereum = (window as unknown as ExtendedWindow).ethereum;

  if (!ethereum?.request) {
    return;
  }

  const provider = new ethers.providers.Web3Provider(ethereum);
  return provider;
};

export const useRpcProvider = (url: string) => {
  const provider = new ethers.providers.JsonRpcProvider(url);
  return provider;
};

export const useSigner = (
  provider: ethers.providers.Web3Provider,
  address?: string
) => {
  const signer = provider.getSigner(address);
  return signer;
};
