export type TxState = "idle" | "pending" | "confirmed" | "error" | "timeout";

export interface Tx<T = any> {
  hash: string;
  txState: TxState;
  confirmations?: number;
  contractName?: string;
  error?: string;
  block?: number;
  payload?: T;
  timestamp: number;
}
