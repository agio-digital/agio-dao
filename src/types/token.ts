export interface Token {
  logoURI: string;
  name: string;
  symbol: string;
  chainId: number;
  decimals: number;
  address: string;
}

export interface TokenListResponse {
  keywords: string[];
  logoURI: string;
  name: string;
  timestamp: Date;
  tokens: Token[];
  version: {
    major: number;
    minor: number;
    patch: number;
  };
}

export type UserTokenState = "pending" | "approving" | "depositing" | "loading";

export interface Usertoken {
  address: string;
  allowance: string;
  balance: string;
  account: string;
  state: UserTokenState;
}

export interface TokenWithUserData extends Usertoken, Token {}
