import { useGovernorStore } from "../store/governor";
import type { ArrayElement } from "./array-element";

export type Proposal = ArrayElement<
  ReturnType<typeof useGovernorStore>["proposals"]
>;
