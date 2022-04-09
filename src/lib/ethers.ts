import { LogDescription } from "ethers/lib/utils";
import { AgioSMARTDAO } from "../contracts/typechain-types/AgioSMARTDAO";
import {
  TypedEvent,
  TypedEventFilter,
} from "../contracts/typechain-types/common";

export const getLogs = async <T extends TypedEvent>(
  contract: AgioSMARTDAO,
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
