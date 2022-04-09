import axios from "axios";
import { useCatchedFetchRequest } from "./useCachedFetch";

const apiKey = "ckey_d0cb2f3310cf4a71924a27fdca3";

export interface CovalentNftResponse<T> {
  data: T;
  error: boolean;
  error_message: string | null;
  error_code: number | null;
}

export interface Attribute {
  display_type: string;
  trait_type: string;
  value: number;
}

export interface ExternalData {
  name: string;
  description: string;
  image: string;
  image_256: string;
  image_512: string;
  image_1024: string;
  animation_url: string;
  external_url: string;
  attributes: Attribute[];
  owner?: any;
}

export interface NftData {
  token_id: string;
  token_balance: string;
  token_url: string;
  supports_erc: string[];
  token_price_wei?: any;
  token_quote_rate_eth?: any;
  original_owner: string;
  external_data: ExternalData;
  owner?: any;
  owner_address: string;
  burned: boolean;
}

export interface Item {
  contract_decimals: number;
  contract_name: string;
  contract_ticker_symbol: string;
  contract_address: string;
  supports_erc: string[];
  logo_url: string;
  last_transferred_at?: any;
  type: string;
  balance?: any;
  balance_24h?: any;
  quote_rate?: any;
  quote_rate_24h?: any;
  quote?: any;
  quote_24h?: any;
  nft_data: NftData[];
}

export interface CovalentTokenByIdResponse {
  updated_at: string;
  items: Item[];
  pagination?: any;
}

export interface CovalentResponseItem {
  contract_decimals: number;
  contract_name: string;
  contract_ticker_symbol: string;
  contract_address: string;
  supports_erc: string[]; //["erc20"],
  logo_url: string; //"https://logos.covalenthq.com/tokens/137/0xbee7aac35883052329580bd265d58896253ae7e0.png",
  last_transferred_at?: string; //null,
  type: string; //"nft",
  balance?: number; //null,
  balance_24h?: number; //null,
  quote_rate?: number; //null,
  quote_rate_24h?: number; //null,
  quote?: number; //null,
  quote_24h?: number; //,
  nft_data?: any; //null
}
export interface CovalentResponse {
  updated_at: string;
  items: CovalentResponseItem[];
  error?: string;
  error_message?: string;
  error_meserror_codesage?: string;
}

const baseURL = "https://api.covalenthq.com/v1";
const client = axios.create({
  baseURL,
  params: {
    key: apiKey,
  },
});

const getNft = async (contractId: string, chainId: number, tokenId: number) => {
  const url = `${baseURL}/${chainId}/tokens/${contractId}/nft_metadata/${tokenId}/?key=${apiKey}`;
  const res = await useCatchedFetchRequest<
    CovalentNftResponse<CovalentTokenByIdResponse>
  >(url, "network-only");
  return res.value;
};

const getHistoricalNFTCollectionData = async <CovalentResponse>(
  contractId: string,
  networkId: number
) => {
  try {
    const url = `/${networkId}/tokens/${contractId}/all`;
    const res = await client.get<CovalentResponse>(url);

    return {
      success: true,
      data: res.data,
    };
  } catch (e: any) {
    console.warn(e);

    if (axios.isAxiosError(e)) {
      return {
        success: false,
        message:
          e.response?.data?.error || "Error getting historical NFT market data",
      };
    } else {
      return {
        success: false,
        message: "Error getting historical NFT market data",
      };
    }
  }
};

export const useCovalent = () => {
  return {
    getHistoricalNFTCollectionData,
    getNft,
  };
};
