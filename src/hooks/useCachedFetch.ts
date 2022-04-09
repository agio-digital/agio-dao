export type FetchingStrategy = "lazy" | "cache-only" | "network-only";
import axios from "axios";
import { ethers } from "ethers";
import { Ref } from "vue";
import useLocalStorageRef from "./useLocalStorage";

export const hash = (value: any) => {
  return ethers.utils.hashMessage(
    typeof value === "string" ? value : value.toString()
  );
};

export const useCatchedFetchRequest = async <T>(
  url: string,
  strategy: FetchingStrategy = "lazy"
) => {
  const response = useLocalStorageRef<T | undefined>("cf:" + url) as Ref<T | undefined>

  const refetch = async () => {
    try {
      const res = await axios.get<T>(url);
      response.value = res.data;
    } catch (e) {
      response.value = undefined;
    }
    return response.value;
  };

  if (strategy === "network-only") {
    await refetch();
  } else if(strategy === "lazy") {
    refetch();
  } else if (strategy === "cache-only") {
    // from cache
  }

  return response;
};