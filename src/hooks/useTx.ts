import { Tx } from "../types/tx";
import { ethers } from "ethers";
import { ref } from "vue";

export const useTx = async <T>(
  _tx: ethers.ContractTransaction,
  contractName = "",
  payload: T,
  callback?: (tx: Tx<T>, oldTx?: Tx<T>) => any,
  waitConfirmations = 3
) => {
  const tx = ref<Tx<T>>({
    hash: _tx.hash,
    block: _tx.blockNumber,
    confirmations: 0,
    txState: "pending",
    contractName,
    payload,
    timestamp: new Date().getTime(),
  });

  const timeout = setTimeout(() => {
    if (!tx.value.confirmations ?? 0 > 0) {
      tx.value.txState = "timeout";
    }
    clearTimeout(timeout);
  }, 3 * 1000 * 60);

  const handleReceipt = (receipt: ethers.ContractReceipt) => {
    clearTimeout(timeout);
    const oldTx = Object.assign({}, tx.value);

    tx.value.txState = "confirmed";
    tx.value.confirmations = receipt.confirmations;
    tx.value.block = receipt.blockNumber;
    if (typeof callback === "function")
      callback(tx.value as Tx<T>, oldTx as Tx<T>);
  };

  const handleError = (error: any) => {
    const oldTx = Object.assign({}, tx.value);
    console.warn(error);
    tx.value.txState = "error";
    tx.value.error = error;
    if (typeof callback === "function")
      callback(tx.value as Tx<T>, oldTx as Tx<T>);
  };

  _tx.wait(waitConfirmations).then(handleReceipt).catch(handleError);
  _tx
    .wait(waitConfirmations * 2)
    .then(handleReceipt)
    .catch(handleError);

  return {
    data: tx,
  };
};
