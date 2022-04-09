import { ethers } from "ethers";

export const getAddress = ethers.utils.getAddress;

export const BN = ethers.BigNumber.from;

export const equalAddress = (addressX?: string, addressY?: string) =>
  addressX && addressY && getAddress(addressX) === getAddress(addressY);
