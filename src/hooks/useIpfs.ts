import axios from "axios";
import pkg from "../../package.json";

const pinata_api_key = "58dd25b62c97bf60189f";
const pinata_secret_api_key =
  "3c097b6388a8476006fbc783330680289cb34b186986a9818a0893086e33b067";
const appUrl = pkg.homepage;

export interface IpfsResponse {
  IpfsHash: string;
  PinSize: number;
  Timestamp: string;
  isDuplicate: boolean;
}

export interface NFTMetaDataAttribute {
  display_type?: string;
  trait_type: string;
  value?: number | string;
}

export interface NFTMetaData {
  image: string;
  image_data?: string;
  external_url: string;
  description: string;
  name: string;
  background_color?: string;
  animation_url: string;
  youtube_url?: string;
  attributes: NFTMetaDataAttribute[];
}

const client = axios.create({
  baseURL: "https://api.pinata.cloud",
  headers: {
    pinata_api_key,
    pinata_secret_api_key,
  },
});

const hashRegex =
  /Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,}/;

export const isValidHash = (hash?: string) => {
  return hashRegex.test(hash || "");
};

export const getHashFromUri = (uri?: string) => {
  return (uri || "").match(hashRegex)?.[0] || "";
};

export const getIpfsUrl = (hash?: string) => {
  return isValidHash(hash) ? `https://ipfs.io/ipfs/${hash}` : "";
};

export const createMetaData = (
  tokenId: number,
  name: string,
  description: string,
  imageHash?: string,
  animationHash?: string,
  backgroundColor = ""
) => {
  const metadata: NFTMetaData = {
    image: getIpfsUrl(imageHash),
    image_data: "",
    external_url: `${appUrl}?tokenId=${tokenId}`,
    description,
    name,
    background_color: backgroundColor,
    animation_url: getIpfsUrl(animationHash),
    youtube_url: "",
    attributes: [
      {
        display_type: "date",
        trait_type: "birthday",
        value: new Date().getTime(),
      },
    ],
  };
  return metadata;
};

export const pinJSON = async <T>(data: T) => {
  try {
    const res = await client.post<IpfsResponse>("/pinning/pinJSONToIPFS", data);
    return {
      success: true,
      message: "Successfully uploaded JSON to ipfs",
      data: res.data,
    };
  } catch (e: any) {
    console.warn(e);

    if (axios.isAxiosError(e)) {
      return {
        success: false,
        message: e.response?.data?.error || "Upload JSON error",
      };
    } else {
      return {
        success: false,
        message: "Upload JSON error",
      };
    }
  }
};

export const pinFile = async (file: File | Blob) => {
  const form = new FormData();
  form.append("file", file);

  try {
    const res = await client.post<IpfsResponse>(
      "/pinning/pinFileToIPFS",
      form,
      {
        withCredentials: true,
        maxBodyLength: -1,
        headers: {
          "Content-type": `multipart/form-data; boundary= ${file.size}`,
        },
      }
    );
    console.log(res);
    return {
      success: true,
      message: "Successfully uploaded File to ipfs",
      data: res.data,
    };
  } catch (e: any) {
    console.warn(e);

    if (axios.isAxiosError(e)) {
      return {
        success: false,
        message: e.response?.data?.error || "Upload File error",
      };
    } else {
      return {
        success: false,
        message: "Upload File error",
      };
    }
  }
};

export const getIpfsGateWayUrl = (url?: string) => {
  if (!url?.trim()) return "";
  const ipfsUrl = "https://ipfs.io/ipfs/";
  const pinataUrl = "https://gateway.pinata.cloud/ipfs/";
  const hash = url.split(pinataUrl)[1] || "";
  if (url.startsWith(pinataUrl)) {
    return isValidHash(hash) ? ipfsUrl + hash : "";
  } else {
    return url;
  }
};

export const getIpfsGateWayUrlByHash = (hash?: string) => {
  const ipfsUrl = "https://ipfs.io/ipfs/";
  // const pinataUrl = "https://gateway.pinata.cloud/ipfs/";
  return ipfsUrl + hash;
};

export const getNftMetaData = async (url: string) => {
  try {
    const res = await axios.get<NFTMetaData>(url);
    if (res.data?.name) return res.data;
    else return undefined;
  } catch {
    return undefined;
  }
};

export const useIpfs = () => {
  return {
    pinJSON,
    pinFile,
    createMetaData,
    getIpfsUrl,
    getNftMetaData,
    getIpfsGateWayUrl,
    getIpfsGateWayUrlByHash,
    isValidHash,
    getHashFromUri,
    hashRegex,
  };
};
