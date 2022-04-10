import { ArrayElement } from "./array-element";
import { Proposal } from "./proposal";

export type Vote = ArrayElement<Proposal["votecast"]>;
