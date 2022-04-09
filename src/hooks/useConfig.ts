import { ethers } from "ethers";
import { ChainId } from "../lib/chains";

export const maxInt = ethers.BigNumber.from(2).pow(255).sub(1);
export const nativeToken = "0x0000000000000000000000000000000000000000";
export const defaults = {
  chainId: ChainId.Mumbai
}

export const isAddress = (address: string) => {
  return ethers.utils.isAddress(address);
};

export const isEqualAddress = (addressA: string, addressB: string) => {
  return (
    isAddress(addressA) &&
    isAddress(addressB) &&
    addressA.toLowerCase() === addressB.toLowerCase()
  );
};

export const isNativeToken = (address: string) => {
  return isEqualAddress(address, nativeToken);
};

export const useConfig = () => {
  return {
    maxInt,
    nativeToken,
    isNativeToken,
    isEqualAddress,
    defaults
  };
};
