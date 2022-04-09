import { ChainId, chains } from "../lib/chains";
import { computed } from "vue";

export const useChain = (id: number) => {
  const chain = computed(() => chains.find((c) => c.id === id));

  const addressUrl = (address: string) => {
    if (!chain.value) return "";
    return chain.value.explorerUrl + "address/" + address;
  };

  const txUrl = (hash: string) => {
    if (!chain.value) return "";

    return chain.value.explorerUrl + `tx/${hash}`;
  };

  const buyTokenUrl = (tokenAddress: string) => {
    if (!chain.value) return "";
    return chain.value.swapUrl + "?outputCurrency=" + tokenAddress;
  };

  const contractUrl = (contractAddress: string) => {
    if (!chain.value) return "";

    return chain.value.explorerUrl + `address/${contractAddress}#code`;
  };

  const nftUrl = (tokenId?: string | number) => {
    const chainId = chain.value?.id;
    const testnet = chainId === ChainId.Mumbai || chainId === ChainId.Rinkeby;
    let path = (chain.value?.symbol || 'eth').toLowerCase();
    if (chainId === ChainId.Mumbai) path = "mumbai";
    if (chainId === ChainId.Rinkeby) path = "rinkeby";
    const contractAddress = chain.value?.nftContractAddress;
    const url = `https://${testnet ? 'testnets.' : ''}opensea.io/assets/${path}/${contractAddress}/${tokenId ?? ''}`;
    return url;
  }

  const nftAccountUrl = (account: string) => {
    const mumbai = chain.value?.id === ChainId.Mumbai;
    const url = `https://${mumbai ? 'testnets.' : ''}opensea.io/${account}`;
    return url;
  }

  return {
    chain,
    addressUrl,
    txUrl,
    buyTokenUrl,
    contractUrl,
    nftUrl,
    nftAccountUrl
  };
};
