import Hash from "ipfs-only-hash";

export const blobToFile = (blob: Blob, name = "file") => {
  return new File([blob], name);
};

export const fileToBase64 = (file: File): Promise<string> =>
  new Promise((res, rej) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => res((reader.result as string) || "");
    reader.onerror = (error) => rej(error);
  });

export const fileToUInt8 = (file: File): Promise<Uint8Array> =>
  new Promise((res, rej) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      const arrayBuffer = reader.result as ArrayBuffer;
      const arr = new Uint8Array(arrayBuffer);
      res(arr);
    };
    reader.onerror = (error) => rej(error);
  });

export const fileToHash = async (file: File): Promise<string> => {
  const cid: string = await Hash.of(await fileToUInt8(file));
  return cid;
};

export const formatBytes = (bytes: number, decimals = 4) => {
  if (bytes == 0) return "0 Bytes";
  const k = 1024,
    dm = decimals || 2,
    sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
