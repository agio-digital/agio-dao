import { LogDescription } from "ethers/lib/utils";
import { AgioERC1155 } from "../contracts/typechain-types";
import {
  TypedEvent,
  TypedEventFilter,
} from "../contracts/typechain-types/common";

export const getLogs = async <T extends TypedEvent>(
  contract: AgioERC1155,
  filter: TypedEventFilter<T>
) => {
  const logs = await contract.provider.getLogs(filter);
  interface TypedLog extends LogDescription {
    args: T["args"];
  }
  const mapped = logs.map((log) => ({
    parsedLog: contract.interface.parseLog(log) as TypedLog,
    log,
  }));
  return mapped;
};
