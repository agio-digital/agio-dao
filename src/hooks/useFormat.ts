import { ethers } from "ethers";
import BN from "bignumber.js";

export const formatEth = (
  value: number | string = "0",
  unit: string,
  maximumFractionDigits = 6
) => {
  const n = ethers.utils.formatEther(value || 0).toString();
  const formatted = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits,
  }).format(+n);

  return formatted + " " + unit;
};

export const shortAddress = (address: string, padSize = 4) => {
  if (address.length < padSize * 2 + 2) return address;
  return address.slice(0, padSize + 2) + "…" + address.slice(-padSize);
};

export const hash = (key: string) =>
  ethers.utils.solidityKeccak256(["string"], [key]);

export const formatToken = (
  value: string | number | undefined | null,
  symbol: string,
  decimals = 18,
  maximumFractionDigits = 8
) => {
  const multiplier = new BN(10).pow(decimals);
  const n = new BN(value ?? 0).div(multiplier).toString();

  let formatted = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits,
  }).format(+n);
  if (formatted === "NaN") formatted = "0";
  return formatted + " " + symbol;
};

export const truncate = (value: string, max = 80) => {
  if (value.length < max) return value;
  else return value.substring(0, max) + "…";
};

export const useFormat = () => {
  return {
    formatEth,
    shortAddress,
    formatToken,
    hash,
    truncate,
  };
};
