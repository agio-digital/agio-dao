export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = "deny",
}

export type Account = {
  asERC1155?: Maybe<Erc1155Contract>;
  asERC20?: Maybe<Erc20Contract>;
  asGovernor?: Maybe<Governor>;
  asVoting?: Maybe<VotingContract>;
  delegateChangedEvent: Array<DelegateChanged>;
  delegateChangedFromEvent: Array<DelegateChanged>;
  delegateChangedToEvent: Array<DelegateChanged>;
  delegateVotesChangedEvent: Array<DelegateVotesChanged>;
  delegationFrom: Array<VoteDelegation>;
  delegationTo: Array<VoteDelegation>;
  ERC1155balances: Array<Erc1155Balance>;
  ERC1155operatorOperator: Array<Erc1155Operator>;
  ERC1155operatorOwner: Array<Erc1155Operator>;
  ERC1155transferFromEvent: Array<Erc1155Transfer>;
  ERC1155transferOperatorEvent: Array<Erc1155Transfer>;
  ERC1155transferToEvent: Array<Erc1155Transfer>;
  ERC20approvalsOwner: Array<Erc20Approval>;
  ERC20approvalsSpender: Array<Erc20Approval>;
  ERC20balances: Array<Erc20Balance>;
  ERC20transferFromEvent: Array<Erc20Transfer>;
  ERC20transferToEvent: Array<Erc20Transfer>;
  events: Array<Event>;
  id: Scalars["ID"];
  proposed: Array<Proposal>;
  proposedCalls: Array<ProposalCall>;
  voted: Array<VoteReceipt>;
  voteWeigth: Array<VoteWeight>;
};

export type AccountDelegateChangedEventArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DelegateChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<DelegateChanged_Filter>;
};

export type AccountDelegateChangedFromEventArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DelegateChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<DelegateChanged_Filter>;
};

export type AccountDelegateChangedToEventArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DelegateChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<DelegateChanged_Filter>;
};

export type AccountDelegateVotesChangedEventArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DelegateVotesChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<DelegateVotesChanged_Filter>;
};

export type AccountDelegationFromArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VoteDelegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VoteDelegation_Filter>;
};

export type AccountDelegationToArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VoteDelegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VoteDelegation_Filter>;
};

export type AccountErc1155balancesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc1155Balance_Filter>;
};

export type AccountErc1155operatorOperatorArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Operator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc1155Operator_Filter>;
};

export type AccountErc1155operatorOwnerArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Operator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc1155Operator_Filter>;
};

export type AccountErc1155transferFromEventArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc1155Transfer_Filter>;
};

export type AccountErc1155transferOperatorEventArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc1155Transfer_Filter>;
};

export type AccountErc1155transferToEventArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc1155Transfer_Filter>;
};

export type AccountErc20approvalsOwnerArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc20Approval_Filter>;
};

export type AccountErc20approvalsSpenderArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc20Approval_Filter>;
};

export type AccountErc20balancesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc20Balance_Filter>;
};

export type AccountErc20transferFromEventArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc20Transfer_Filter>;
};

export type AccountErc20transferToEventArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc20Transfer_Filter>;
};

export type AccountEventsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Event_Filter>;
};

export type AccountProposedArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Proposal_Filter>;
};

export type AccountProposedCallsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalCall_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProposalCall_Filter>;
};

export type AccountVotedArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VoteReceipt_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VoteReceipt_Filter>;
};

export type AccountVoteWeigthArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VoteWeight_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VoteWeight_Filter>;
};

export type Account_Filter = {
  asERC1155?: InputMaybe<Scalars["String"]>;
  asERC1155_contains?: InputMaybe<Scalars["String"]>;
  asERC1155_contains_nocase?: InputMaybe<Scalars["String"]>;
  asERC1155_ends_with?: InputMaybe<Scalars["String"]>;
  asERC1155_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asERC1155_gt?: InputMaybe<Scalars["String"]>;
  asERC1155_gte?: InputMaybe<Scalars["String"]>;
  asERC1155_in?: InputMaybe<Array<Scalars["String"]>>;
  asERC1155_lt?: InputMaybe<Scalars["String"]>;
  asERC1155_lte?: InputMaybe<Scalars["String"]>;
  asERC1155_not?: InputMaybe<Scalars["String"]>;
  asERC1155_not_contains?: InputMaybe<Scalars["String"]>;
  asERC1155_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asERC1155_not_ends_with?: InputMaybe<Scalars["String"]>;
  asERC1155_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asERC1155_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asERC1155_not_starts_with?: InputMaybe<Scalars["String"]>;
  asERC1155_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asERC1155_starts_with?: InputMaybe<Scalars["String"]>;
  asERC1155_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asERC20?: InputMaybe<Scalars["String"]>;
  asERC20_contains?: InputMaybe<Scalars["String"]>;
  asERC20_contains_nocase?: InputMaybe<Scalars["String"]>;
  asERC20_ends_with?: InputMaybe<Scalars["String"]>;
  asERC20_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asERC20_gt?: InputMaybe<Scalars["String"]>;
  asERC20_gte?: InputMaybe<Scalars["String"]>;
  asERC20_in?: InputMaybe<Array<Scalars["String"]>>;
  asERC20_lt?: InputMaybe<Scalars["String"]>;
  asERC20_lte?: InputMaybe<Scalars["String"]>;
  asERC20_not?: InputMaybe<Scalars["String"]>;
  asERC20_not_contains?: InputMaybe<Scalars["String"]>;
  asERC20_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asERC20_not_ends_with?: InputMaybe<Scalars["String"]>;
  asERC20_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asERC20_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asERC20_not_starts_with?: InputMaybe<Scalars["String"]>;
  asERC20_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asERC20_starts_with?: InputMaybe<Scalars["String"]>;
  asERC20_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asGovernor?: InputMaybe<Scalars["String"]>;
  asGovernor_contains?: InputMaybe<Scalars["String"]>;
  asGovernor_contains_nocase?: InputMaybe<Scalars["String"]>;
  asGovernor_ends_with?: InputMaybe<Scalars["String"]>;
  asGovernor_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asGovernor_gt?: InputMaybe<Scalars["String"]>;
  asGovernor_gte?: InputMaybe<Scalars["String"]>;
  asGovernor_in?: InputMaybe<Array<Scalars["String"]>>;
  asGovernor_lt?: InputMaybe<Scalars["String"]>;
  asGovernor_lte?: InputMaybe<Scalars["String"]>;
  asGovernor_not?: InputMaybe<Scalars["String"]>;
  asGovernor_not_contains?: InputMaybe<Scalars["String"]>;
  asGovernor_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asGovernor_not_ends_with?: InputMaybe<Scalars["String"]>;
  asGovernor_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asGovernor_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asGovernor_not_starts_with?: InputMaybe<Scalars["String"]>;
  asGovernor_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asGovernor_starts_with?: InputMaybe<Scalars["String"]>;
  asGovernor_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asVoting?: InputMaybe<Scalars["String"]>;
  asVoting_contains?: InputMaybe<Scalars["String"]>;
  asVoting_contains_nocase?: InputMaybe<Scalars["String"]>;
  asVoting_ends_with?: InputMaybe<Scalars["String"]>;
  asVoting_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asVoting_gt?: InputMaybe<Scalars["String"]>;
  asVoting_gte?: InputMaybe<Scalars["String"]>;
  asVoting_in?: InputMaybe<Array<Scalars["String"]>>;
  asVoting_lt?: InputMaybe<Scalars["String"]>;
  asVoting_lte?: InputMaybe<Scalars["String"]>;
  asVoting_not?: InputMaybe<Scalars["String"]>;
  asVoting_not_contains?: InputMaybe<Scalars["String"]>;
  asVoting_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asVoting_not_ends_with?: InputMaybe<Scalars["String"]>;
  asVoting_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asVoting_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asVoting_not_starts_with?: InputMaybe<Scalars["String"]>;
  asVoting_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asVoting_starts_with?: InputMaybe<Scalars["String"]>;
  asVoting_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
};

export enum Account_OrderBy {
  AsErc1155 = "asERC1155",
  AsErc20 = "asERC20",
  AsGovernor = "asGovernor",
  AsVoting = "asVoting",
  DelegateChangedEvent = "delegateChangedEvent",
  DelegateChangedFromEvent = "delegateChangedFromEvent",
  DelegateChangedToEvent = "delegateChangedToEvent",
  DelegateVotesChangedEvent = "delegateVotesChangedEvent",
  DelegationFrom = "delegationFrom",
  DelegationTo = "delegationTo",
  Erc1155balances = "ERC1155balances",
  Erc1155operatorOperator = "ERC1155operatorOperator",
  Erc1155operatorOwner = "ERC1155operatorOwner",
  Erc1155transferFromEvent = "ERC1155transferFromEvent",
  Erc1155transferOperatorEvent = "ERC1155transferOperatorEvent",
  Erc1155transferToEvent = "ERC1155transferToEvent",
  Erc20approvalsOwner = "ERC20approvalsOwner",
  Erc20approvalsSpender = "ERC20approvalsSpender",
  Erc20balances = "ERC20balances",
  Erc20transferFromEvent = "ERC20transferFromEvent",
  Erc20transferToEvent = "ERC20transferToEvent",
  Events = "events",
  Id = "id",
  Proposed = "proposed",
  ProposedCalls = "proposedCalls",
  Voted = "voted",
  VoteWeigth = "voteWeigth",
}

/** The block at which the query should be executed. */
export type Block_Height = {
  /** Value containing a block hash */
  hash?: InputMaybe<Scalars["Bytes"]>;
  /** Value containing a block number */
  number?: InputMaybe<Scalars["Int"]>;
  /**
   * Value containing the minimum block number.
   * In the case of `number_gte`, the query will be executed on the latest block only if
   * the subgraph has progressed to or past the minimum block number.
   * Defaults to the latest block when omitted.
   */
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type DelegateChanged = Event & {
  contract: VotingContract;
  delegation?: Maybe<VoteDelegation>;
  delegator: Account;
  emitter: Account;
  fromDelegate: Account;
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  toDelegate: Account;
  transaction: Transaction;
};

export type DelegateChanged_Filter = {
  contract?: InputMaybe<Scalars["String"]>;
  contract_contains?: InputMaybe<Scalars["String"]>;
  contract_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_ends_with?: InputMaybe<Scalars["String"]>;
  contract_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_gt?: InputMaybe<Scalars["String"]>;
  contract_gte?: InputMaybe<Scalars["String"]>;
  contract_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_lt?: InputMaybe<Scalars["String"]>;
  contract_lte?: InputMaybe<Scalars["String"]>;
  contract_not?: InputMaybe<Scalars["String"]>;
  contract_not_contains?: InputMaybe<Scalars["String"]>;
  contract_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_not_starts_with?: InputMaybe<Scalars["String"]>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_starts_with?: InputMaybe<Scalars["String"]>;
  contract_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  delegation?: InputMaybe<Scalars["String"]>;
  delegation_contains?: InputMaybe<Scalars["String"]>;
  delegation_contains_nocase?: InputMaybe<Scalars["String"]>;
  delegation_ends_with?: InputMaybe<Scalars["String"]>;
  delegation_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  delegation_gt?: InputMaybe<Scalars["String"]>;
  delegation_gte?: InputMaybe<Scalars["String"]>;
  delegation_in?: InputMaybe<Array<Scalars["String"]>>;
  delegation_lt?: InputMaybe<Scalars["String"]>;
  delegation_lte?: InputMaybe<Scalars["String"]>;
  delegation_not?: InputMaybe<Scalars["String"]>;
  delegation_not_contains?: InputMaybe<Scalars["String"]>;
  delegation_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  delegation_not_ends_with?: InputMaybe<Scalars["String"]>;
  delegation_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  delegation_not_in?: InputMaybe<Array<Scalars["String"]>>;
  delegation_not_starts_with?: InputMaybe<Scalars["String"]>;
  delegation_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  delegation_starts_with?: InputMaybe<Scalars["String"]>;
  delegation_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  delegator?: InputMaybe<Scalars["String"]>;
  delegator_contains?: InputMaybe<Scalars["String"]>;
  delegator_contains_nocase?: InputMaybe<Scalars["String"]>;
  delegator_ends_with?: InputMaybe<Scalars["String"]>;
  delegator_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  delegator_gt?: InputMaybe<Scalars["String"]>;
  delegator_gte?: InputMaybe<Scalars["String"]>;
  delegator_in?: InputMaybe<Array<Scalars["String"]>>;
  delegator_lt?: InputMaybe<Scalars["String"]>;
  delegator_lte?: InputMaybe<Scalars["String"]>;
  delegator_not?: InputMaybe<Scalars["String"]>;
  delegator_not_contains?: InputMaybe<Scalars["String"]>;
  delegator_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  delegator_not_ends_with?: InputMaybe<Scalars["String"]>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  delegator_not_in?: InputMaybe<Array<Scalars["String"]>>;
  delegator_not_starts_with?: InputMaybe<Scalars["String"]>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  delegator_starts_with?: InputMaybe<Scalars["String"]>;
  delegator_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter?: InputMaybe<Scalars["String"]>;
  emitter_contains?: InputMaybe<Scalars["String"]>;
  emitter_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_gt?: InputMaybe<Scalars["String"]>;
  emitter_gte?: InputMaybe<Scalars["String"]>;
  emitter_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_lt?: InputMaybe<Scalars["String"]>;
  emitter_lte?: InputMaybe<Scalars["String"]>;
  emitter_not?: InputMaybe<Scalars["String"]>;
  emitter_not_contains?: InputMaybe<Scalars["String"]>;
  emitter_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_not_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  fromDelegate?: InputMaybe<Scalars["String"]>;
  fromDelegate_contains?: InputMaybe<Scalars["String"]>;
  fromDelegate_contains_nocase?: InputMaybe<Scalars["String"]>;
  fromDelegate_ends_with?: InputMaybe<Scalars["String"]>;
  fromDelegate_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  fromDelegate_gt?: InputMaybe<Scalars["String"]>;
  fromDelegate_gte?: InputMaybe<Scalars["String"]>;
  fromDelegate_in?: InputMaybe<Array<Scalars["String"]>>;
  fromDelegate_lt?: InputMaybe<Scalars["String"]>;
  fromDelegate_lte?: InputMaybe<Scalars["String"]>;
  fromDelegate_not?: InputMaybe<Scalars["String"]>;
  fromDelegate_not_contains?: InputMaybe<Scalars["String"]>;
  fromDelegate_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  fromDelegate_not_ends_with?: InputMaybe<Scalars["String"]>;
  fromDelegate_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  fromDelegate_not_in?: InputMaybe<Array<Scalars["String"]>>;
  fromDelegate_not_starts_with?: InputMaybe<Scalars["String"]>;
  fromDelegate_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  fromDelegate_starts_with?: InputMaybe<Scalars["String"]>;
  fromDelegate_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  toDelegate?: InputMaybe<Scalars["String"]>;
  toDelegate_contains?: InputMaybe<Scalars["String"]>;
  toDelegate_contains_nocase?: InputMaybe<Scalars["String"]>;
  toDelegate_ends_with?: InputMaybe<Scalars["String"]>;
  toDelegate_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  toDelegate_gt?: InputMaybe<Scalars["String"]>;
  toDelegate_gte?: InputMaybe<Scalars["String"]>;
  toDelegate_in?: InputMaybe<Array<Scalars["String"]>>;
  toDelegate_lt?: InputMaybe<Scalars["String"]>;
  toDelegate_lte?: InputMaybe<Scalars["String"]>;
  toDelegate_not?: InputMaybe<Scalars["String"]>;
  toDelegate_not_contains?: InputMaybe<Scalars["String"]>;
  toDelegate_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  toDelegate_not_ends_with?: InputMaybe<Scalars["String"]>;
  toDelegate_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  toDelegate_not_in?: InputMaybe<Array<Scalars["String"]>>;
  toDelegate_not_starts_with?: InputMaybe<Scalars["String"]>;
  toDelegate_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  toDelegate_starts_with?: InputMaybe<Scalars["String"]>;
  toDelegate_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum DelegateChanged_OrderBy {
  Contract = "contract",
  Delegation = "delegation",
  Delegator = "delegator",
  Emitter = "emitter",
  FromDelegate = "fromDelegate",
  Id = "id",
  Timestamp = "timestamp",
  ToDelegate = "toDelegate",
  Transaction = "transaction",
}

export type DelegateVotesChanged = Event & {
  contract: VotingContract;
  delegate: Account;
  emitter: Account;
  id: Scalars["ID"];
  newValue: Scalars["BigInt"];
  oldValue: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
  voteWeight?: Maybe<VoteWeight>;
};

export type DelegateVotesChanged_Filter = {
  contract?: InputMaybe<Scalars["String"]>;
  contract_contains?: InputMaybe<Scalars["String"]>;
  contract_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_ends_with?: InputMaybe<Scalars["String"]>;
  contract_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_gt?: InputMaybe<Scalars["String"]>;
  contract_gte?: InputMaybe<Scalars["String"]>;
  contract_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_lt?: InputMaybe<Scalars["String"]>;
  contract_lte?: InputMaybe<Scalars["String"]>;
  contract_not?: InputMaybe<Scalars["String"]>;
  contract_not_contains?: InputMaybe<Scalars["String"]>;
  contract_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_not_starts_with?: InputMaybe<Scalars["String"]>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_starts_with?: InputMaybe<Scalars["String"]>;
  contract_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  delegate?: InputMaybe<Scalars["String"]>;
  delegate_contains?: InputMaybe<Scalars["String"]>;
  delegate_contains_nocase?: InputMaybe<Scalars["String"]>;
  delegate_ends_with?: InputMaybe<Scalars["String"]>;
  delegate_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  delegate_gt?: InputMaybe<Scalars["String"]>;
  delegate_gte?: InputMaybe<Scalars["String"]>;
  delegate_in?: InputMaybe<Array<Scalars["String"]>>;
  delegate_lt?: InputMaybe<Scalars["String"]>;
  delegate_lte?: InputMaybe<Scalars["String"]>;
  delegate_not?: InputMaybe<Scalars["String"]>;
  delegate_not_contains?: InputMaybe<Scalars["String"]>;
  delegate_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  delegate_not_ends_with?: InputMaybe<Scalars["String"]>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  delegate_not_in?: InputMaybe<Array<Scalars["String"]>>;
  delegate_not_starts_with?: InputMaybe<Scalars["String"]>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  delegate_starts_with?: InputMaybe<Scalars["String"]>;
  delegate_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter?: InputMaybe<Scalars["String"]>;
  emitter_contains?: InputMaybe<Scalars["String"]>;
  emitter_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_gt?: InputMaybe<Scalars["String"]>;
  emitter_gte?: InputMaybe<Scalars["String"]>;
  emitter_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_lt?: InputMaybe<Scalars["String"]>;
  emitter_lte?: InputMaybe<Scalars["String"]>;
  emitter_not?: InputMaybe<Scalars["String"]>;
  emitter_not_contains?: InputMaybe<Scalars["String"]>;
  emitter_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_not_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  newValue?: InputMaybe<Scalars["BigInt"]>;
  newValue_gt?: InputMaybe<Scalars["BigInt"]>;
  newValue_gte?: InputMaybe<Scalars["BigInt"]>;
  newValue_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  newValue_lt?: InputMaybe<Scalars["BigInt"]>;
  newValue_lte?: InputMaybe<Scalars["BigInt"]>;
  newValue_not?: InputMaybe<Scalars["BigInt"]>;
  newValue_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  oldValue?: InputMaybe<Scalars["BigInt"]>;
  oldValue_gt?: InputMaybe<Scalars["BigInt"]>;
  oldValue_gte?: InputMaybe<Scalars["BigInt"]>;
  oldValue_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  oldValue_lt?: InputMaybe<Scalars["BigInt"]>;
  oldValue_lte?: InputMaybe<Scalars["BigInt"]>;
  oldValue_not?: InputMaybe<Scalars["BigInt"]>;
  oldValue_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  voteWeight?: InputMaybe<Scalars["String"]>;
  voteWeight_contains?: InputMaybe<Scalars["String"]>;
  voteWeight_contains_nocase?: InputMaybe<Scalars["String"]>;
  voteWeight_ends_with?: InputMaybe<Scalars["String"]>;
  voteWeight_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  voteWeight_gt?: InputMaybe<Scalars["String"]>;
  voteWeight_gte?: InputMaybe<Scalars["String"]>;
  voteWeight_in?: InputMaybe<Array<Scalars["String"]>>;
  voteWeight_lt?: InputMaybe<Scalars["String"]>;
  voteWeight_lte?: InputMaybe<Scalars["String"]>;
  voteWeight_not?: InputMaybe<Scalars["String"]>;
  voteWeight_not_contains?: InputMaybe<Scalars["String"]>;
  voteWeight_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  voteWeight_not_ends_with?: InputMaybe<Scalars["String"]>;
  voteWeight_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  voteWeight_not_in?: InputMaybe<Array<Scalars["String"]>>;
  voteWeight_not_starts_with?: InputMaybe<Scalars["String"]>;
  voteWeight_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  voteWeight_starts_with?: InputMaybe<Scalars["String"]>;
  voteWeight_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum DelegateVotesChanged_OrderBy {
  Contract = "contract",
  Delegate = "delegate",
  Emitter = "emitter",
  Id = "id",
  NewValue = "newValue",
  OldValue = "oldValue",
  Timestamp = "timestamp",
  Transaction = "transaction",
  VoteWeight = "voteWeight",
}

export type Erc1155Balance = {
  account?: Maybe<Account>;
  contract: Erc1155Contract;
  id: Scalars["ID"];
  token: Erc1155Token;
  transferFromEvent: Array<Erc1155Transfer>;
  transferToEvent: Array<Erc1155Transfer>;
  value: Scalars["BigDecimal"];
  valueExact: Scalars["BigInt"];
};

export type Erc1155BalanceTransferFromEventArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc1155Transfer_Filter>;
};

export type Erc1155BalanceTransferToEventArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc1155Transfer_Filter>;
};

export type Erc1155Balance_Filter = {
  account?: InputMaybe<Scalars["String"]>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contract?: InputMaybe<Scalars["String"]>;
  contract_contains?: InputMaybe<Scalars["String"]>;
  contract_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_ends_with?: InputMaybe<Scalars["String"]>;
  contract_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_gt?: InputMaybe<Scalars["String"]>;
  contract_gte?: InputMaybe<Scalars["String"]>;
  contract_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_lt?: InputMaybe<Scalars["String"]>;
  contract_lte?: InputMaybe<Scalars["String"]>;
  contract_not?: InputMaybe<Scalars["String"]>;
  contract_not_contains?: InputMaybe<Scalars["String"]>;
  contract_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_not_starts_with?: InputMaybe<Scalars["String"]>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_starts_with?: InputMaybe<Scalars["String"]>;
  contract_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["BigDecimal"]>;
  value_gt?: InputMaybe<Scalars["BigDecimal"]>;
  value_gte?: InputMaybe<Scalars["BigDecimal"]>;
  value_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value_lt?: InputMaybe<Scalars["BigDecimal"]>;
  value_lte?: InputMaybe<Scalars["BigDecimal"]>;
  value_not?: InputMaybe<Scalars["BigDecimal"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  valueExact?: InputMaybe<Scalars["BigInt"]>;
  valueExact_gt?: InputMaybe<Scalars["BigInt"]>;
  valueExact_gte?: InputMaybe<Scalars["BigInt"]>;
  valueExact_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  valueExact_lt?: InputMaybe<Scalars["BigInt"]>;
  valueExact_lte?: InputMaybe<Scalars["BigInt"]>;
  valueExact_not?: InputMaybe<Scalars["BigInt"]>;
  valueExact_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Erc1155Balance_OrderBy {
  Account = "account",
  Contract = "contract",
  Id = "id",
  Token = "token",
  TransferFromEvent = "transferFromEvent",
  TransferToEvent = "transferToEvent",
  Value = "value",
  ValueExact = "valueExact",
}

export type Erc1155Contract = {
  asAccount: Account;
  balances: Array<Erc1155Balance>;
  id: Scalars["ID"];
  operators: Array<Erc1155Operator>;
  tokens: Array<Erc1155Token>;
  transfers: Array<Erc1155Transfer>;
};

export type Erc1155ContractBalancesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc1155Balance_Filter>;
};

export type Erc1155ContractOperatorsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Operator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc1155Operator_Filter>;
};

export type Erc1155ContractTokensArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc1155Token_Filter>;
};

export type Erc1155ContractTransfersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc1155Transfer_Filter>;
};

export type Erc1155Contract_Filter = {
  asAccount?: InputMaybe<Scalars["String"]>;
  asAccount_contains?: InputMaybe<Scalars["String"]>;
  asAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_ends_with?: InputMaybe<Scalars["String"]>;
  asAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_gt?: InputMaybe<Scalars["String"]>;
  asAccount_gte?: InputMaybe<Scalars["String"]>;
  asAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  asAccount_lt?: InputMaybe<Scalars["String"]>;
  asAccount_lte?: InputMaybe<Scalars["String"]>;
  asAccount_not?: InputMaybe<Scalars["String"]>;
  asAccount_not_contains?: InputMaybe<Scalars["String"]>;
  asAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  asAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  asAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_starts_with?: InputMaybe<Scalars["String"]>;
  asAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
};

export enum Erc1155Contract_OrderBy {
  AsAccount = "asAccount",
  Balances = "balances",
  Id = "id",
  Operators = "operators",
  Tokens = "tokens",
  Transfers = "transfers",
}

export type Erc1155Operator = {
  approved: Scalars["Boolean"];
  contract: Erc1155Contract;
  id: Scalars["ID"];
  operator: Account;
  owner: Account;
};

export type Erc1155Operator_Filter = {
  approved?: InputMaybe<Scalars["Boolean"]>;
  approved_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  approved_not?: InputMaybe<Scalars["Boolean"]>;
  approved_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  contract?: InputMaybe<Scalars["String"]>;
  contract_contains?: InputMaybe<Scalars["String"]>;
  contract_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_ends_with?: InputMaybe<Scalars["String"]>;
  contract_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_gt?: InputMaybe<Scalars["String"]>;
  contract_gte?: InputMaybe<Scalars["String"]>;
  contract_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_lt?: InputMaybe<Scalars["String"]>;
  contract_lte?: InputMaybe<Scalars["String"]>;
  contract_not?: InputMaybe<Scalars["String"]>;
  contract_not_contains?: InputMaybe<Scalars["String"]>;
  contract_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_not_starts_with?: InputMaybe<Scalars["String"]>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_starts_with?: InputMaybe<Scalars["String"]>;
  contract_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  operator?: InputMaybe<Scalars["String"]>;
  operator_contains?: InputMaybe<Scalars["String"]>;
  operator_contains_nocase?: InputMaybe<Scalars["String"]>;
  operator_ends_with?: InputMaybe<Scalars["String"]>;
  operator_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  operator_gt?: InputMaybe<Scalars["String"]>;
  operator_gte?: InputMaybe<Scalars["String"]>;
  operator_in?: InputMaybe<Array<Scalars["String"]>>;
  operator_lt?: InputMaybe<Scalars["String"]>;
  operator_lte?: InputMaybe<Scalars["String"]>;
  operator_not?: InputMaybe<Scalars["String"]>;
  operator_not_contains?: InputMaybe<Scalars["String"]>;
  operator_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  operator_not_ends_with?: InputMaybe<Scalars["String"]>;
  operator_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  operator_not_in?: InputMaybe<Array<Scalars["String"]>>;
  operator_not_starts_with?: InputMaybe<Scalars["String"]>;
  operator_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  operator_starts_with?: InputMaybe<Scalars["String"]>;
  operator_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  owner?: InputMaybe<Scalars["String"]>;
  owner_contains?: InputMaybe<Scalars["String"]>;
  owner_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_ends_with?: InputMaybe<Scalars["String"]>;
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_gt?: InputMaybe<Scalars["String"]>;
  owner_gte?: InputMaybe<Scalars["String"]>;
  owner_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_lt?: InputMaybe<Scalars["String"]>;
  owner_lte?: InputMaybe<Scalars["String"]>;
  owner_not?: InputMaybe<Scalars["String"]>;
  owner_not_contains?: InputMaybe<Scalars["String"]>;
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_not_starts_with?: InputMaybe<Scalars["String"]>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_starts_with?: InputMaybe<Scalars["String"]>;
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Erc1155Operator_OrderBy {
  Approved = "approved",
  Contract = "contract",
  Id = "id",
  Operator = "operator",
  Owner = "owner",
}

export type Erc1155Token = {
  balances: Array<Erc1155Balance>;
  contract: Erc1155Contract;
  id: Scalars["ID"];
  identifier: Scalars["BigInt"];
  totalSupply: Erc1155Balance;
  transfers: Array<Erc1155Transfer>;
  uri?: Maybe<Scalars["String"]>;
};

export type Erc1155TokenBalancesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc1155Balance_Filter>;
};

export type Erc1155TokenTransfersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc1155Transfer_Filter>;
};

export type Erc1155Token_Filter = {
  contract?: InputMaybe<Scalars["String"]>;
  contract_contains?: InputMaybe<Scalars["String"]>;
  contract_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_ends_with?: InputMaybe<Scalars["String"]>;
  contract_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_gt?: InputMaybe<Scalars["String"]>;
  contract_gte?: InputMaybe<Scalars["String"]>;
  contract_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_lt?: InputMaybe<Scalars["String"]>;
  contract_lte?: InputMaybe<Scalars["String"]>;
  contract_not?: InputMaybe<Scalars["String"]>;
  contract_not_contains?: InputMaybe<Scalars["String"]>;
  contract_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_not_starts_with?: InputMaybe<Scalars["String"]>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_starts_with?: InputMaybe<Scalars["String"]>;
  contract_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  identifier?: InputMaybe<Scalars["BigInt"]>;
  identifier_gt?: InputMaybe<Scalars["BigInt"]>;
  identifier_gte?: InputMaybe<Scalars["BigInt"]>;
  identifier_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  identifier_lt?: InputMaybe<Scalars["BigInt"]>;
  identifier_lte?: InputMaybe<Scalars["BigInt"]>;
  identifier_not?: InputMaybe<Scalars["BigInt"]>;
  identifier_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalSupply?: InputMaybe<Scalars["String"]>;
  totalSupply_contains?: InputMaybe<Scalars["String"]>;
  totalSupply_contains_nocase?: InputMaybe<Scalars["String"]>;
  totalSupply_ends_with?: InputMaybe<Scalars["String"]>;
  totalSupply_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  totalSupply_gt?: InputMaybe<Scalars["String"]>;
  totalSupply_gte?: InputMaybe<Scalars["String"]>;
  totalSupply_in?: InputMaybe<Array<Scalars["String"]>>;
  totalSupply_lt?: InputMaybe<Scalars["String"]>;
  totalSupply_lte?: InputMaybe<Scalars["String"]>;
  totalSupply_not?: InputMaybe<Scalars["String"]>;
  totalSupply_not_contains?: InputMaybe<Scalars["String"]>;
  totalSupply_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  totalSupply_not_ends_with?: InputMaybe<Scalars["String"]>;
  totalSupply_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  totalSupply_not_in?: InputMaybe<Array<Scalars["String"]>>;
  totalSupply_not_starts_with?: InputMaybe<Scalars["String"]>;
  totalSupply_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  totalSupply_starts_with?: InputMaybe<Scalars["String"]>;
  totalSupply_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  uri?: InputMaybe<Scalars["String"]>;
  uri_contains?: InputMaybe<Scalars["String"]>;
  uri_contains_nocase?: InputMaybe<Scalars["String"]>;
  uri_ends_with?: InputMaybe<Scalars["String"]>;
  uri_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  uri_gt?: InputMaybe<Scalars["String"]>;
  uri_gte?: InputMaybe<Scalars["String"]>;
  uri_in?: InputMaybe<Array<Scalars["String"]>>;
  uri_lt?: InputMaybe<Scalars["String"]>;
  uri_lte?: InputMaybe<Scalars["String"]>;
  uri_not?: InputMaybe<Scalars["String"]>;
  uri_not_contains?: InputMaybe<Scalars["String"]>;
  uri_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  uri_not_ends_with?: InputMaybe<Scalars["String"]>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  uri_not_in?: InputMaybe<Array<Scalars["String"]>>;
  uri_not_starts_with?: InputMaybe<Scalars["String"]>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  uri_starts_with?: InputMaybe<Scalars["String"]>;
  uri_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Erc1155Token_OrderBy {
  Balances = "balances",
  Contract = "contract",
  Id = "id",
  Identifier = "identifier",
  TotalSupply = "totalSupply",
  Transfers = "transfers",
  Uri = "uri",
}

export type Erc1155Transfer = Event & {
  contract: Erc1155Contract;
  emitter: Account;
  from?: Maybe<Account>;
  fromBalance?: Maybe<Erc1155Balance>;
  id: Scalars["ID"];
  operator: Account;
  timestamp: Scalars["BigInt"];
  to?: Maybe<Account>;
  toBalance?: Maybe<Erc1155Balance>;
  token: Erc1155Token;
  transaction: Transaction;
  value: Scalars["BigDecimal"];
  valueExact: Scalars["BigInt"];
};

export type Erc1155Transfer_Filter = {
  contract?: InputMaybe<Scalars["String"]>;
  contract_contains?: InputMaybe<Scalars["String"]>;
  contract_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_ends_with?: InputMaybe<Scalars["String"]>;
  contract_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_gt?: InputMaybe<Scalars["String"]>;
  contract_gte?: InputMaybe<Scalars["String"]>;
  contract_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_lt?: InputMaybe<Scalars["String"]>;
  contract_lte?: InputMaybe<Scalars["String"]>;
  contract_not?: InputMaybe<Scalars["String"]>;
  contract_not_contains?: InputMaybe<Scalars["String"]>;
  contract_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_not_starts_with?: InputMaybe<Scalars["String"]>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_starts_with?: InputMaybe<Scalars["String"]>;
  contract_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter?: InputMaybe<Scalars["String"]>;
  emitter_contains?: InputMaybe<Scalars["String"]>;
  emitter_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_gt?: InputMaybe<Scalars["String"]>;
  emitter_gte?: InputMaybe<Scalars["String"]>;
  emitter_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_lt?: InputMaybe<Scalars["String"]>;
  emitter_lte?: InputMaybe<Scalars["String"]>;
  emitter_not?: InputMaybe<Scalars["String"]>;
  emitter_not_contains?: InputMaybe<Scalars["String"]>;
  emitter_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_not_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  from?: InputMaybe<Scalars["String"]>;
  from_contains?: InputMaybe<Scalars["String"]>;
  from_contains_nocase?: InputMaybe<Scalars["String"]>;
  from_ends_with?: InputMaybe<Scalars["String"]>;
  from_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  from_gt?: InputMaybe<Scalars["String"]>;
  from_gte?: InputMaybe<Scalars["String"]>;
  from_in?: InputMaybe<Array<Scalars["String"]>>;
  from_lt?: InputMaybe<Scalars["String"]>;
  from_lte?: InputMaybe<Scalars["String"]>;
  from_not?: InputMaybe<Scalars["String"]>;
  from_not_contains?: InputMaybe<Scalars["String"]>;
  from_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  from_not_ends_with?: InputMaybe<Scalars["String"]>;
  from_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  from_not_in?: InputMaybe<Array<Scalars["String"]>>;
  from_not_starts_with?: InputMaybe<Scalars["String"]>;
  from_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  from_starts_with?: InputMaybe<Scalars["String"]>;
  from_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  fromBalance?: InputMaybe<Scalars["String"]>;
  fromBalance_contains?: InputMaybe<Scalars["String"]>;
  fromBalance_contains_nocase?: InputMaybe<Scalars["String"]>;
  fromBalance_ends_with?: InputMaybe<Scalars["String"]>;
  fromBalance_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  fromBalance_gt?: InputMaybe<Scalars["String"]>;
  fromBalance_gte?: InputMaybe<Scalars["String"]>;
  fromBalance_in?: InputMaybe<Array<Scalars["String"]>>;
  fromBalance_lt?: InputMaybe<Scalars["String"]>;
  fromBalance_lte?: InputMaybe<Scalars["String"]>;
  fromBalance_not?: InputMaybe<Scalars["String"]>;
  fromBalance_not_contains?: InputMaybe<Scalars["String"]>;
  fromBalance_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  fromBalance_not_ends_with?: InputMaybe<Scalars["String"]>;
  fromBalance_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  fromBalance_not_in?: InputMaybe<Array<Scalars["String"]>>;
  fromBalance_not_starts_with?: InputMaybe<Scalars["String"]>;
  fromBalance_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  fromBalance_starts_with?: InputMaybe<Scalars["String"]>;
  fromBalance_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  operator?: InputMaybe<Scalars["String"]>;
  operator_contains?: InputMaybe<Scalars["String"]>;
  operator_contains_nocase?: InputMaybe<Scalars["String"]>;
  operator_ends_with?: InputMaybe<Scalars["String"]>;
  operator_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  operator_gt?: InputMaybe<Scalars["String"]>;
  operator_gte?: InputMaybe<Scalars["String"]>;
  operator_in?: InputMaybe<Array<Scalars["String"]>>;
  operator_lt?: InputMaybe<Scalars["String"]>;
  operator_lte?: InputMaybe<Scalars["String"]>;
  operator_not?: InputMaybe<Scalars["String"]>;
  operator_not_contains?: InputMaybe<Scalars["String"]>;
  operator_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  operator_not_ends_with?: InputMaybe<Scalars["String"]>;
  operator_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  operator_not_in?: InputMaybe<Array<Scalars["String"]>>;
  operator_not_starts_with?: InputMaybe<Scalars["String"]>;
  operator_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  operator_starts_with?: InputMaybe<Scalars["String"]>;
  operator_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["String"]>;
  to_contains?: InputMaybe<Scalars["String"]>;
  to_contains_nocase?: InputMaybe<Scalars["String"]>;
  to_ends_with?: InputMaybe<Scalars["String"]>;
  to_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  to_gt?: InputMaybe<Scalars["String"]>;
  to_gte?: InputMaybe<Scalars["String"]>;
  to_in?: InputMaybe<Array<Scalars["String"]>>;
  to_lt?: InputMaybe<Scalars["String"]>;
  to_lte?: InputMaybe<Scalars["String"]>;
  to_not?: InputMaybe<Scalars["String"]>;
  to_not_contains?: InputMaybe<Scalars["String"]>;
  to_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  to_not_ends_with?: InputMaybe<Scalars["String"]>;
  to_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  to_not_in?: InputMaybe<Array<Scalars["String"]>>;
  to_not_starts_with?: InputMaybe<Scalars["String"]>;
  to_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  to_starts_with?: InputMaybe<Scalars["String"]>;
  to_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  toBalance?: InputMaybe<Scalars["String"]>;
  toBalance_contains?: InputMaybe<Scalars["String"]>;
  toBalance_contains_nocase?: InputMaybe<Scalars["String"]>;
  toBalance_ends_with?: InputMaybe<Scalars["String"]>;
  toBalance_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  toBalance_gt?: InputMaybe<Scalars["String"]>;
  toBalance_gte?: InputMaybe<Scalars["String"]>;
  toBalance_in?: InputMaybe<Array<Scalars["String"]>>;
  toBalance_lt?: InputMaybe<Scalars["String"]>;
  toBalance_lte?: InputMaybe<Scalars["String"]>;
  toBalance_not?: InputMaybe<Scalars["String"]>;
  toBalance_not_contains?: InputMaybe<Scalars["String"]>;
  toBalance_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  toBalance_not_ends_with?: InputMaybe<Scalars["String"]>;
  toBalance_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  toBalance_not_in?: InputMaybe<Array<Scalars["String"]>>;
  toBalance_not_starts_with?: InputMaybe<Scalars["String"]>;
  toBalance_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  toBalance_starts_with?: InputMaybe<Scalars["String"]>;
  toBalance_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token?: InputMaybe<Scalars["String"]>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["BigDecimal"]>;
  value_gt?: InputMaybe<Scalars["BigDecimal"]>;
  value_gte?: InputMaybe<Scalars["BigDecimal"]>;
  value_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value_lt?: InputMaybe<Scalars["BigDecimal"]>;
  value_lte?: InputMaybe<Scalars["BigDecimal"]>;
  value_not?: InputMaybe<Scalars["BigDecimal"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  valueExact?: InputMaybe<Scalars["BigInt"]>;
  valueExact_gt?: InputMaybe<Scalars["BigInt"]>;
  valueExact_gte?: InputMaybe<Scalars["BigInt"]>;
  valueExact_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  valueExact_lt?: InputMaybe<Scalars["BigInt"]>;
  valueExact_lte?: InputMaybe<Scalars["BigInt"]>;
  valueExact_not?: InputMaybe<Scalars["BigInt"]>;
  valueExact_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Erc1155Transfer_OrderBy {
  Contract = "contract",
  Emitter = "emitter",
  From = "from",
  FromBalance = "fromBalance",
  Id = "id",
  Operator = "operator",
  Timestamp = "timestamp",
  To = "to",
  ToBalance = "toBalance",
  Token = "token",
  Transaction = "transaction",
  Value = "value",
  ValueExact = "valueExact",
}

export type Erc20Approval = {
  contract: Erc20Contract;
  id: Scalars["ID"];
  owner: Account;
  spender: Account;
  value: Scalars["BigDecimal"];
  valueExact: Scalars["BigInt"];
};

export type Erc20Approval_Filter = {
  contract?: InputMaybe<Scalars["String"]>;
  contract_contains?: InputMaybe<Scalars["String"]>;
  contract_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_ends_with?: InputMaybe<Scalars["String"]>;
  contract_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_gt?: InputMaybe<Scalars["String"]>;
  contract_gte?: InputMaybe<Scalars["String"]>;
  contract_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_lt?: InputMaybe<Scalars["String"]>;
  contract_lte?: InputMaybe<Scalars["String"]>;
  contract_not?: InputMaybe<Scalars["String"]>;
  contract_not_contains?: InputMaybe<Scalars["String"]>;
  contract_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_not_starts_with?: InputMaybe<Scalars["String"]>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_starts_with?: InputMaybe<Scalars["String"]>;
  contract_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  owner?: InputMaybe<Scalars["String"]>;
  owner_contains?: InputMaybe<Scalars["String"]>;
  owner_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_ends_with?: InputMaybe<Scalars["String"]>;
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_gt?: InputMaybe<Scalars["String"]>;
  owner_gte?: InputMaybe<Scalars["String"]>;
  owner_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_lt?: InputMaybe<Scalars["String"]>;
  owner_lte?: InputMaybe<Scalars["String"]>;
  owner_not?: InputMaybe<Scalars["String"]>;
  owner_not_contains?: InputMaybe<Scalars["String"]>;
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_not_starts_with?: InputMaybe<Scalars["String"]>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_starts_with?: InputMaybe<Scalars["String"]>;
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  spender?: InputMaybe<Scalars["String"]>;
  spender_contains?: InputMaybe<Scalars["String"]>;
  spender_contains_nocase?: InputMaybe<Scalars["String"]>;
  spender_ends_with?: InputMaybe<Scalars["String"]>;
  spender_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  spender_gt?: InputMaybe<Scalars["String"]>;
  spender_gte?: InputMaybe<Scalars["String"]>;
  spender_in?: InputMaybe<Array<Scalars["String"]>>;
  spender_lt?: InputMaybe<Scalars["String"]>;
  spender_lte?: InputMaybe<Scalars["String"]>;
  spender_not?: InputMaybe<Scalars["String"]>;
  spender_not_contains?: InputMaybe<Scalars["String"]>;
  spender_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  spender_not_ends_with?: InputMaybe<Scalars["String"]>;
  spender_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  spender_not_in?: InputMaybe<Array<Scalars["String"]>>;
  spender_not_starts_with?: InputMaybe<Scalars["String"]>;
  spender_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  spender_starts_with?: InputMaybe<Scalars["String"]>;
  spender_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["BigDecimal"]>;
  value_gt?: InputMaybe<Scalars["BigDecimal"]>;
  value_gte?: InputMaybe<Scalars["BigDecimal"]>;
  value_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value_lt?: InputMaybe<Scalars["BigDecimal"]>;
  value_lte?: InputMaybe<Scalars["BigDecimal"]>;
  value_not?: InputMaybe<Scalars["BigDecimal"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  valueExact?: InputMaybe<Scalars["BigInt"]>;
  valueExact_gt?: InputMaybe<Scalars["BigInt"]>;
  valueExact_gte?: InputMaybe<Scalars["BigInt"]>;
  valueExact_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  valueExact_lt?: InputMaybe<Scalars["BigInt"]>;
  valueExact_lte?: InputMaybe<Scalars["BigInt"]>;
  valueExact_not?: InputMaybe<Scalars["BigInt"]>;
  valueExact_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Erc20Approval_OrderBy {
  Contract = "contract",
  Id = "id",
  Owner = "owner",
  Spender = "spender",
  Value = "value",
  ValueExact = "valueExact",
}

export type Erc20Balance = {
  account?: Maybe<Account>;
  contract: Erc20Contract;
  id: Scalars["ID"];
  transferFromEvent: Array<Erc20Transfer>;
  transferToEvent: Array<Erc20Transfer>;
  value: Scalars["BigDecimal"];
  valueExact: Scalars["BigInt"];
};

export type Erc20BalanceTransferFromEventArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc20Transfer_Filter>;
};

export type Erc20BalanceTransferToEventArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc20Transfer_Filter>;
};

export type Erc20Balance_Filter = {
  account?: InputMaybe<Scalars["String"]>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contract?: InputMaybe<Scalars["String"]>;
  contract_contains?: InputMaybe<Scalars["String"]>;
  contract_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_ends_with?: InputMaybe<Scalars["String"]>;
  contract_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_gt?: InputMaybe<Scalars["String"]>;
  contract_gte?: InputMaybe<Scalars["String"]>;
  contract_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_lt?: InputMaybe<Scalars["String"]>;
  contract_lte?: InputMaybe<Scalars["String"]>;
  contract_not?: InputMaybe<Scalars["String"]>;
  contract_not_contains?: InputMaybe<Scalars["String"]>;
  contract_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_not_starts_with?: InputMaybe<Scalars["String"]>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_starts_with?: InputMaybe<Scalars["String"]>;
  contract_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  value?: InputMaybe<Scalars["BigDecimal"]>;
  value_gt?: InputMaybe<Scalars["BigDecimal"]>;
  value_gte?: InputMaybe<Scalars["BigDecimal"]>;
  value_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value_lt?: InputMaybe<Scalars["BigDecimal"]>;
  value_lte?: InputMaybe<Scalars["BigDecimal"]>;
  value_not?: InputMaybe<Scalars["BigDecimal"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  valueExact?: InputMaybe<Scalars["BigInt"]>;
  valueExact_gt?: InputMaybe<Scalars["BigInt"]>;
  valueExact_gte?: InputMaybe<Scalars["BigInt"]>;
  valueExact_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  valueExact_lt?: InputMaybe<Scalars["BigInt"]>;
  valueExact_lte?: InputMaybe<Scalars["BigInt"]>;
  valueExact_not?: InputMaybe<Scalars["BigInt"]>;
  valueExact_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Erc20Balance_OrderBy {
  Account = "account",
  Contract = "contract",
  Id = "id",
  TransferFromEvent = "transferFromEvent",
  TransferToEvent = "transferToEvent",
  Value = "value",
  ValueExact = "valueExact",
}

export type Erc20Contract = {
  approvals: Array<Erc20Approval>;
  asAccount: Account;
  balances: Array<Erc20Balance>;
  decimals: Scalars["Int"];
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  symbol?: Maybe<Scalars["String"]>;
  totalSupply: Erc20Balance;
  transfers: Array<Erc20Transfer>;
};

export type Erc20ContractApprovalsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc20Approval_Filter>;
};

export type Erc20ContractBalancesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc20Balance_Filter>;
};

export type Erc20ContractTransfersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc20Transfer_Filter>;
};

export type Erc20Contract_Filter = {
  asAccount?: InputMaybe<Scalars["String"]>;
  asAccount_contains?: InputMaybe<Scalars["String"]>;
  asAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_ends_with?: InputMaybe<Scalars["String"]>;
  asAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_gt?: InputMaybe<Scalars["String"]>;
  asAccount_gte?: InputMaybe<Scalars["String"]>;
  asAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  asAccount_lt?: InputMaybe<Scalars["String"]>;
  asAccount_lte?: InputMaybe<Scalars["String"]>;
  asAccount_not?: InputMaybe<Scalars["String"]>;
  asAccount_not_contains?: InputMaybe<Scalars["String"]>;
  asAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  asAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  asAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_starts_with?: InputMaybe<Scalars["String"]>;
  asAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  decimals?: InputMaybe<Scalars["Int"]>;
  decimals_gt?: InputMaybe<Scalars["Int"]>;
  decimals_gte?: InputMaybe<Scalars["Int"]>;
  decimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  decimals_lt?: InputMaybe<Scalars["Int"]>;
  decimals_lte?: InputMaybe<Scalars["Int"]>;
  decimals_not?: InputMaybe<Scalars["Int"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  symbol_contains?: InputMaybe<Scalars["String"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_gt?: InputMaybe<Scalars["String"]>;
  symbol_gte?: InputMaybe<Scalars["String"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]>;
  symbol_lte?: InputMaybe<Scalars["String"]>;
  symbol_not?: InputMaybe<Scalars["String"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  totalSupply?: InputMaybe<Scalars["String"]>;
  totalSupply_contains?: InputMaybe<Scalars["String"]>;
  totalSupply_contains_nocase?: InputMaybe<Scalars["String"]>;
  totalSupply_ends_with?: InputMaybe<Scalars["String"]>;
  totalSupply_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  totalSupply_gt?: InputMaybe<Scalars["String"]>;
  totalSupply_gte?: InputMaybe<Scalars["String"]>;
  totalSupply_in?: InputMaybe<Array<Scalars["String"]>>;
  totalSupply_lt?: InputMaybe<Scalars["String"]>;
  totalSupply_lte?: InputMaybe<Scalars["String"]>;
  totalSupply_not?: InputMaybe<Scalars["String"]>;
  totalSupply_not_contains?: InputMaybe<Scalars["String"]>;
  totalSupply_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  totalSupply_not_ends_with?: InputMaybe<Scalars["String"]>;
  totalSupply_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  totalSupply_not_in?: InputMaybe<Array<Scalars["String"]>>;
  totalSupply_not_starts_with?: InputMaybe<Scalars["String"]>;
  totalSupply_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  totalSupply_starts_with?: InputMaybe<Scalars["String"]>;
  totalSupply_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Erc20Contract_OrderBy {
  Approvals = "approvals",
  AsAccount = "asAccount",
  Balances = "balances",
  Decimals = "decimals",
  Id = "id",
  Name = "name",
  Symbol = "symbol",
  TotalSupply = "totalSupply",
  Transfers = "transfers",
}

export type Erc20Transfer = Event & {
  contract: Erc20Contract;
  emitter: Account;
  from?: Maybe<Account>;
  fromBalance?: Maybe<Erc20Balance>;
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  to?: Maybe<Account>;
  toBalance?: Maybe<Erc20Balance>;
  transaction: Transaction;
  value: Scalars["BigDecimal"];
  valueExact: Scalars["BigInt"];
};

export type Erc20Transfer_Filter = {
  contract?: InputMaybe<Scalars["String"]>;
  contract_contains?: InputMaybe<Scalars["String"]>;
  contract_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_ends_with?: InputMaybe<Scalars["String"]>;
  contract_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_gt?: InputMaybe<Scalars["String"]>;
  contract_gte?: InputMaybe<Scalars["String"]>;
  contract_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_lt?: InputMaybe<Scalars["String"]>;
  contract_lte?: InputMaybe<Scalars["String"]>;
  contract_not?: InputMaybe<Scalars["String"]>;
  contract_not_contains?: InputMaybe<Scalars["String"]>;
  contract_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_not_starts_with?: InputMaybe<Scalars["String"]>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_starts_with?: InputMaybe<Scalars["String"]>;
  contract_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter?: InputMaybe<Scalars["String"]>;
  emitter_contains?: InputMaybe<Scalars["String"]>;
  emitter_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_gt?: InputMaybe<Scalars["String"]>;
  emitter_gte?: InputMaybe<Scalars["String"]>;
  emitter_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_lt?: InputMaybe<Scalars["String"]>;
  emitter_lte?: InputMaybe<Scalars["String"]>;
  emitter_not?: InputMaybe<Scalars["String"]>;
  emitter_not_contains?: InputMaybe<Scalars["String"]>;
  emitter_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_not_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  from?: InputMaybe<Scalars["String"]>;
  from_contains?: InputMaybe<Scalars["String"]>;
  from_contains_nocase?: InputMaybe<Scalars["String"]>;
  from_ends_with?: InputMaybe<Scalars["String"]>;
  from_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  from_gt?: InputMaybe<Scalars["String"]>;
  from_gte?: InputMaybe<Scalars["String"]>;
  from_in?: InputMaybe<Array<Scalars["String"]>>;
  from_lt?: InputMaybe<Scalars["String"]>;
  from_lte?: InputMaybe<Scalars["String"]>;
  from_not?: InputMaybe<Scalars["String"]>;
  from_not_contains?: InputMaybe<Scalars["String"]>;
  from_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  from_not_ends_with?: InputMaybe<Scalars["String"]>;
  from_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  from_not_in?: InputMaybe<Array<Scalars["String"]>>;
  from_not_starts_with?: InputMaybe<Scalars["String"]>;
  from_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  from_starts_with?: InputMaybe<Scalars["String"]>;
  from_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  fromBalance?: InputMaybe<Scalars["String"]>;
  fromBalance_contains?: InputMaybe<Scalars["String"]>;
  fromBalance_contains_nocase?: InputMaybe<Scalars["String"]>;
  fromBalance_ends_with?: InputMaybe<Scalars["String"]>;
  fromBalance_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  fromBalance_gt?: InputMaybe<Scalars["String"]>;
  fromBalance_gte?: InputMaybe<Scalars["String"]>;
  fromBalance_in?: InputMaybe<Array<Scalars["String"]>>;
  fromBalance_lt?: InputMaybe<Scalars["String"]>;
  fromBalance_lte?: InputMaybe<Scalars["String"]>;
  fromBalance_not?: InputMaybe<Scalars["String"]>;
  fromBalance_not_contains?: InputMaybe<Scalars["String"]>;
  fromBalance_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  fromBalance_not_ends_with?: InputMaybe<Scalars["String"]>;
  fromBalance_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  fromBalance_not_in?: InputMaybe<Array<Scalars["String"]>>;
  fromBalance_not_starts_with?: InputMaybe<Scalars["String"]>;
  fromBalance_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  fromBalance_starts_with?: InputMaybe<Scalars["String"]>;
  fromBalance_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["String"]>;
  to_contains?: InputMaybe<Scalars["String"]>;
  to_contains_nocase?: InputMaybe<Scalars["String"]>;
  to_ends_with?: InputMaybe<Scalars["String"]>;
  to_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  to_gt?: InputMaybe<Scalars["String"]>;
  to_gte?: InputMaybe<Scalars["String"]>;
  to_in?: InputMaybe<Array<Scalars["String"]>>;
  to_lt?: InputMaybe<Scalars["String"]>;
  to_lte?: InputMaybe<Scalars["String"]>;
  to_not?: InputMaybe<Scalars["String"]>;
  to_not_contains?: InputMaybe<Scalars["String"]>;
  to_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  to_not_ends_with?: InputMaybe<Scalars["String"]>;
  to_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  to_not_in?: InputMaybe<Array<Scalars["String"]>>;
  to_not_starts_with?: InputMaybe<Scalars["String"]>;
  to_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  to_starts_with?: InputMaybe<Scalars["String"]>;
  to_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  toBalance?: InputMaybe<Scalars["String"]>;
  toBalance_contains?: InputMaybe<Scalars["String"]>;
  toBalance_contains_nocase?: InputMaybe<Scalars["String"]>;
  toBalance_ends_with?: InputMaybe<Scalars["String"]>;
  toBalance_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  toBalance_gt?: InputMaybe<Scalars["String"]>;
  toBalance_gte?: InputMaybe<Scalars["String"]>;
  toBalance_in?: InputMaybe<Array<Scalars["String"]>>;
  toBalance_lt?: InputMaybe<Scalars["String"]>;
  toBalance_lte?: InputMaybe<Scalars["String"]>;
  toBalance_not?: InputMaybe<Scalars["String"]>;
  toBalance_not_contains?: InputMaybe<Scalars["String"]>;
  toBalance_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  toBalance_not_ends_with?: InputMaybe<Scalars["String"]>;
  toBalance_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  toBalance_not_in?: InputMaybe<Array<Scalars["String"]>>;
  toBalance_not_starts_with?: InputMaybe<Scalars["String"]>;
  toBalance_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  toBalance_starts_with?: InputMaybe<Scalars["String"]>;
  toBalance_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["BigDecimal"]>;
  value_gt?: InputMaybe<Scalars["BigDecimal"]>;
  value_gte?: InputMaybe<Scalars["BigDecimal"]>;
  value_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value_lt?: InputMaybe<Scalars["BigDecimal"]>;
  value_lte?: InputMaybe<Scalars["BigDecimal"]>;
  value_not?: InputMaybe<Scalars["BigDecimal"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  valueExact?: InputMaybe<Scalars["BigInt"]>;
  valueExact_gt?: InputMaybe<Scalars["BigInt"]>;
  valueExact_gte?: InputMaybe<Scalars["BigInt"]>;
  valueExact_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  valueExact_lt?: InputMaybe<Scalars["BigInt"]>;
  valueExact_lte?: InputMaybe<Scalars["BigInt"]>;
  valueExact_not?: InputMaybe<Scalars["BigInt"]>;
  valueExact_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Erc20Transfer_OrderBy {
  Contract = "contract",
  Emitter = "emitter",
  From = "from",
  FromBalance = "fromBalance",
  Id = "id",
  Timestamp = "timestamp",
  To = "to",
  ToBalance = "toBalance",
  Transaction = "transaction",
  Value = "value",
  ValueExact = "valueExact",
}

export type Event = {
  emitter: Account;
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
};

export type Event_Filter = {
  emitter?: InputMaybe<Scalars["String"]>;
  emitter_contains?: InputMaybe<Scalars["String"]>;
  emitter_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_gt?: InputMaybe<Scalars["String"]>;
  emitter_gte?: InputMaybe<Scalars["String"]>;
  emitter_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_lt?: InputMaybe<Scalars["String"]>;
  emitter_lte?: InputMaybe<Scalars["String"]>;
  emitter_not?: InputMaybe<Scalars["String"]>;
  emitter_not_contains?: InputMaybe<Scalars["String"]>;
  emitter_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_not_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Event_OrderBy {
  Emitter = "emitter",
  Id = "id",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type Governor = {
  asAccount: Account;
  id: Scalars["ID"];
  proposalCanceled: Array<ProposalCanceled>;
  proposalCreated: Array<ProposalCreated>;
  proposalExecuted: Array<ProposalExecuted>;
  proposalQueued: Array<ProposalQueued>;
  proposals: Array<Proposal>;
  votecast: Array<VoteCast>;
};

export type GovernorProposalCanceledArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalCanceled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProposalCanceled_Filter>;
};

export type GovernorProposalCreatedArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProposalCreated_Filter>;
};

export type GovernorProposalExecutedArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProposalExecuted_Filter>;
};

export type GovernorProposalQueuedArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalQueued_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProposalQueued_Filter>;
};

export type GovernorProposalsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Proposal_Filter>;
};

export type GovernorVotecastArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VoteCast_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VoteCast_Filter>;
};

export type Governor_Filter = {
  asAccount?: InputMaybe<Scalars["String"]>;
  asAccount_contains?: InputMaybe<Scalars["String"]>;
  asAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_ends_with?: InputMaybe<Scalars["String"]>;
  asAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_gt?: InputMaybe<Scalars["String"]>;
  asAccount_gte?: InputMaybe<Scalars["String"]>;
  asAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  asAccount_lt?: InputMaybe<Scalars["String"]>;
  asAccount_lte?: InputMaybe<Scalars["String"]>;
  asAccount_not?: InputMaybe<Scalars["String"]>;
  asAccount_not_contains?: InputMaybe<Scalars["String"]>;
  asAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  asAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  asAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_starts_with?: InputMaybe<Scalars["String"]>;
  asAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
};

export enum Governor_OrderBy {
  AsAccount = "asAccount",
  Id = "id",
  ProposalCanceled = "proposalCanceled",
  ProposalCreated = "proposalCreated",
  ProposalExecuted = "proposalExecuted",
  ProposalQueued = "proposalQueued",
  Proposals = "proposals",
  Votecast = "votecast",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type Proposal = {
  calls: Array<ProposalCall>;
  canceled: Scalars["Boolean"];
  description: Scalars["String"];
  endBlock: Scalars["BigInt"];
  eta?: Maybe<Scalars["BigInt"]>;
  executed: Scalars["Boolean"];
  governor: Governor;
  id: Scalars["ID"];
  proposalCanceled: Array<ProposalCanceled>;
  proposalCreated: Array<ProposalCreated>;
  proposalExecuted: Array<ProposalExecuted>;
  proposalId: Scalars["BigInt"];
  proposalQueued: Array<ProposalQueued>;
  proposer: Account;
  queued: Scalars["Boolean"];
  receipts: Array<VoteReceipt>;
  startBlock: Scalars["BigInt"];
  supports: Array<ProposalSupport>;
  votecast: Array<VoteCast>;
};

export type ProposalCallsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalCall_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProposalCall_Filter>;
};

export type ProposalProposalCanceledArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalCanceled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProposalCanceled_Filter>;
};

export type ProposalProposalCreatedArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProposalCreated_Filter>;
};

export type ProposalProposalExecutedArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProposalExecuted_Filter>;
};

export type ProposalProposalQueuedArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalQueued_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProposalQueued_Filter>;
};

export type ProposalReceiptsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VoteReceipt_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VoteReceipt_Filter>;
};

export type ProposalSupportsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalSupport_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProposalSupport_Filter>;
};

export type ProposalVotecastArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VoteCast_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VoteCast_Filter>;
};

export type Proposal_Filter = {
  canceled?: InputMaybe<Scalars["Boolean"]>;
  canceled_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  canceled_not?: InputMaybe<Scalars["Boolean"]>;
  canceled_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_contains_nocase?: InputMaybe<Scalars["String"]>;
  description_ends_with?: InputMaybe<Scalars["String"]>;
  description_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  description_gt?: InputMaybe<Scalars["String"]>;
  description_gte?: InputMaybe<Scalars["String"]>;
  description_in?: InputMaybe<Array<Scalars["String"]>>;
  description_lt?: InputMaybe<Scalars["String"]>;
  description_lte?: InputMaybe<Scalars["String"]>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  description_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<Scalars["String"]>>;
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  description_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  description_starts_with?: InputMaybe<Scalars["String"]>;
  description_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  endBlock?: InputMaybe<Scalars["BigInt"]>;
  endBlock_gt?: InputMaybe<Scalars["BigInt"]>;
  endBlock_gte?: InputMaybe<Scalars["BigInt"]>;
  endBlock_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  endBlock_lt?: InputMaybe<Scalars["BigInt"]>;
  endBlock_lte?: InputMaybe<Scalars["BigInt"]>;
  endBlock_not?: InputMaybe<Scalars["BigInt"]>;
  endBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  eta?: InputMaybe<Scalars["BigInt"]>;
  eta_gt?: InputMaybe<Scalars["BigInt"]>;
  eta_gte?: InputMaybe<Scalars["BigInt"]>;
  eta_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  eta_lt?: InputMaybe<Scalars["BigInt"]>;
  eta_lte?: InputMaybe<Scalars["BigInt"]>;
  eta_not?: InputMaybe<Scalars["BigInt"]>;
  eta_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executed?: InputMaybe<Scalars["Boolean"]>;
  executed_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  executed_not?: InputMaybe<Scalars["Boolean"]>;
  executed_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  governor?: InputMaybe<Scalars["String"]>;
  governor_contains?: InputMaybe<Scalars["String"]>;
  governor_contains_nocase?: InputMaybe<Scalars["String"]>;
  governor_ends_with?: InputMaybe<Scalars["String"]>;
  governor_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  governor_gt?: InputMaybe<Scalars["String"]>;
  governor_gte?: InputMaybe<Scalars["String"]>;
  governor_in?: InputMaybe<Array<Scalars["String"]>>;
  governor_lt?: InputMaybe<Scalars["String"]>;
  governor_lte?: InputMaybe<Scalars["String"]>;
  governor_not?: InputMaybe<Scalars["String"]>;
  governor_not_contains?: InputMaybe<Scalars["String"]>;
  governor_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  governor_not_ends_with?: InputMaybe<Scalars["String"]>;
  governor_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  governor_not_in?: InputMaybe<Array<Scalars["String"]>>;
  governor_not_starts_with?: InputMaybe<Scalars["String"]>;
  governor_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  governor_starts_with?: InputMaybe<Scalars["String"]>;
  governor_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  proposalId?: InputMaybe<Scalars["BigInt"]>;
  proposalId_gt?: InputMaybe<Scalars["BigInt"]>;
  proposalId_gte?: InputMaybe<Scalars["BigInt"]>;
  proposalId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  proposalId_lt?: InputMaybe<Scalars["BigInt"]>;
  proposalId_lte?: InputMaybe<Scalars["BigInt"]>;
  proposalId_not?: InputMaybe<Scalars["BigInt"]>;
  proposalId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  proposer?: InputMaybe<Scalars["String"]>;
  proposer_contains?: InputMaybe<Scalars["String"]>;
  proposer_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposer_ends_with?: InputMaybe<Scalars["String"]>;
  proposer_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposer_gt?: InputMaybe<Scalars["String"]>;
  proposer_gte?: InputMaybe<Scalars["String"]>;
  proposer_in?: InputMaybe<Array<Scalars["String"]>>;
  proposer_lt?: InputMaybe<Scalars["String"]>;
  proposer_lte?: InputMaybe<Scalars["String"]>;
  proposer_not?: InputMaybe<Scalars["String"]>;
  proposer_not_contains?: InputMaybe<Scalars["String"]>;
  proposer_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposer_not_ends_with?: InputMaybe<Scalars["String"]>;
  proposer_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposer_not_in?: InputMaybe<Array<Scalars["String"]>>;
  proposer_not_starts_with?: InputMaybe<Scalars["String"]>;
  proposer_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  proposer_starts_with?: InputMaybe<Scalars["String"]>;
  proposer_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  queued?: InputMaybe<Scalars["Boolean"]>;
  queued_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  queued_not?: InputMaybe<Scalars["Boolean"]>;
  queued_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  startBlock?: InputMaybe<Scalars["BigInt"]>;
  startBlock_gt?: InputMaybe<Scalars["BigInt"]>;
  startBlock_gte?: InputMaybe<Scalars["BigInt"]>;
  startBlock_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  startBlock_lt?: InputMaybe<Scalars["BigInt"]>;
  startBlock_lte?: InputMaybe<Scalars["BigInt"]>;
  startBlock_not?: InputMaybe<Scalars["BigInt"]>;
  startBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Proposal_OrderBy {
  Calls = "calls",
  Canceled = "canceled",
  Description = "description",
  EndBlock = "endBlock",
  Eta = "eta",
  Executed = "executed",
  Governor = "governor",
  Id = "id",
  ProposalCanceled = "proposalCanceled",
  ProposalCreated = "proposalCreated",
  ProposalExecuted = "proposalExecuted",
  ProposalId = "proposalId",
  ProposalQueued = "proposalQueued",
  Proposer = "proposer",
  Queued = "queued",
  Receipts = "receipts",
  StartBlock = "startBlock",
  Supports = "supports",
  Votecast = "votecast",
}

export type ProposalCall = {
  calldata: Scalars["Bytes"];
  id: Scalars["ID"];
  index: Scalars["Int"];
  proposal: Proposal;
  signature: Scalars["String"];
  target: Account;
  value: Scalars["BigDecimal"];
};

export type ProposalCall_Filter = {
  calldata?: InputMaybe<Scalars["Bytes"]>;
  calldata_contains?: InputMaybe<Scalars["Bytes"]>;
  calldata_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  calldata_not?: InputMaybe<Scalars["Bytes"]>;
  calldata_not_contains?: InputMaybe<Scalars["Bytes"]>;
  calldata_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  index?: InputMaybe<Scalars["Int"]>;
  index_gt?: InputMaybe<Scalars["Int"]>;
  index_gte?: InputMaybe<Scalars["Int"]>;
  index_in?: InputMaybe<Array<Scalars["Int"]>>;
  index_lt?: InputMaybe<Scalars["Int"]>;
  index_lte?: InputMaybe<Scalars["Int"]>;
  index_not?: InputMaybe<Scalars["Int"]>;
  index_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  proposal?: InputMaybe<Scalars["String"]>;
  proposal_contains?: InputMaybe<Scalars["String"]>;
  proposal_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposal_ends_with?: InputMaybe<Scalars["String"]>;
  proposal_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_gt?: InputMaybe<Scalars["String"]>;
  proposal_gte?: InputMaybe<Scalars["String"]>;
  proposal_in?: InputMaybe<Array<Scalars["String"]>>;
  proposal_lt?: InputMaybe<Scalars["String"]>;
  proposal_lte?: InputMaybe<Scalars["String"]>;
  proposal_not?: InputMaybe<Scalars["String"]>;
  proposal_not_contains?: InputMaybe<Scalars["String"]>;
  proposal_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposal_not_ends_with?: InputMaybe<Scalars["String"]>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_not_in?: InputMaybe<Array<Scalars["String"]>>;
  proposal_not_starts_with?: InputMaybe<Scalars["String"]>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_starts_with?: InputMaybe<Scalars["String"]>;
  proposal_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  signature?: InputMaybe<Scalars["String"]>;
  signature_contains?: InputMaybe<Scalars["String"]>;
  signature_contains_nocase?: InputMaybe<Scalars["String"]>;
  signature_ends_with?: InputMaybe<Scalars["String"]>;
  signature_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  signature_gt?: InputMaybe<Scalars["String"]>;
  signature_gte?: InputMaybe<Scalars["String"]>;
  signature_in?: InputMaybe<Array<Scalars["String"]>>;
  signature_lt?: InputMaybe<Scalars["String"]>;
  signature_lte?: InputMaybe<Scalars["String"]>;
  signature_not?: InputMaybe<Scalars["String"]>;
  signature_not_contains?: InputMaybe<Scalars["String"]>;
  signature_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  signature_not_ends_with?: InputMaybe<Scalars["String"]>;
  signature_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  signature_not_in?: InputMaybe<Array<Scalars["String"]>>;
  signature_not_starts_with?: InputMaybe<Scalars["String"]>;
  signature_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  signature_starts_with?: InputMaybe<Scalars["String"]>;
  signature_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  target?: InputMaybe<Scalars["String"]>;
  target_contains?: InputMaybe<Scalars["String"]>;
  target_contains_nocase?: InputMaybe<Scalars["String"]>;
  target_ends_with?: InputMaybe<Scalars["String"]>;
  target_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  target_gt?: InputMaybe<Scalars["String"]>;
  target_gte?: InputMaybe<Scalars["String"]>;
  target_in?: InputMaybe<Array<Scalars["String"]>>;
  target_lt?: InputMaybe<Scalars["String"]>;
  target_lte?: InputMaybe<Scalars["String"]>;
  target_not?: InputMaybe<Scalars["String"]>;
  target_not_contains?: InputMaybe<Scalars["String"]>;
  target_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  target_not_ends_with?: InputMaybe<Scalars["String"]>;
  target_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  target_not_in?: InputMaybe<Array<Scalars["String"]>>;
  target_not_starts_with?: InputMaybe<Scalars["String"]>;
  target_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  target_starts_with?: InputMaybe<Scalars["String"]>;
  target_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["BigDecimal"]>;
  value_gt?: InputMaybe<Scalars["BigDecimal"]>;
  value_gte?: InputMaybe<Scalars["BigDecimal"]>;
  value_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value_lt?: InputMaybe<Scalars["BigDecimal"]>;
  value_lte?: InputMaybe<Scalars["BigDecimal"]>;
  value_not?: InputMaybe<Scalars["BigDecimal"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum ProposalCall_OrderBy {
  Calldata = "calldata",
  Id = "id",
  Index = "index",
  Proposal = "proposal",
  Signature = "signature",
  Target = "target",
  Value = "value",
}

export type ProposalCanceled = Event & {
  emitter: Account;
  governor: Governor;
  id: Scalars["ID"];
  proposal: Proposal;
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
};

export type ProposalCanceled_Filter = {
  emitter?: InputMaybe<Scalars["String"]>;
  emitter_contains?: InputMaybe<Scalars["String"]>;
  emitter_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_gt?: InputMaybe<Scalars["String"]>;
  emitter_gte?: InputMaybe<Scalars["String"]>;
  emitter_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_lt?: InputMaybe<Scalars["String"]>;
  emitter_lte?: InputMaybe<Scalars["String"]>;
  emitter_not?: InputMaybe<Scalars["String"]>;
  emitter_not_contains?: InputMaybe<Scalars["String"]>;
  emitter_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_not_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  governor?: InputMaybe<Scalars["String"]>;
  governor_contains?: InputMaybe<Scalars["String"]>;
  governor_contains_nocase?: InputMaybe<Scalars["String"]>;
  governor_ends_with?: InputMaybe<Scalars["String"]>;
  governor_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  governor_gt?: InputMaybe<Scalars["String"]>;
  governor_gte?: InputMaybe<Scalars["String"]>;
  governor_in?: InputMaybe<Array<Scalars["String"]>>;
  governor_lt?: InputMaybe<Scalars["String"]>;
  governor_lte?: InputMaybe<Scalars["String"]>;
  governor_not?: InputMaybe<Scalars["String"]>;
  governor_not_contains?: InputMaybe<Scalars["String"]>;
  governor_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  governor_not_ends_with?: InputMaybe<Scalars["String"]>;
  governor_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  governor_not_in?: InputMaybe<Array<Scalars["String"]>>;
  governor_not_starts_with?: InputMaybe<Scalars["String"]>;
  governor_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  governor_starts_with?: InputMaybe<Scalars["String"]>;
  governor_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  proposal?: InputMaybe<Scalars["String"]>;
  proposal_contains?: InputMaybe<Scalars["String"]>;
  proposal_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposal_ends_with?: InputMaybe<Scalars["String"]>;
  proposal_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_gt?: InputMaybe<Scalars["String"]>;
  proposal_gte?: InputMaybe<Scalars["String"]>;
  proposal_in?: InputMaybe<Array<Scalars["String"]>>;
  proposal_lt?: InputMaybe<Scalars["String"]>;
  proposal_lte?: InputMaybe<Scalars["String"]>;
  proposal_not?: InputMaybe<Scalars["String"]>;
  proposal_not_contains?: InputMaybe<Scalars["String"]>;
  proposal_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposal_not_ends_with?: InputMaybe<Scalars["String"]>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_not_in?: InputMaybe<Array<Scalars["String"]>>;
  proposal_not_starts_with?: InputMaybe<Scalars["String"]>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_starts_with?: InputMaybe<Scalars["String"]>;
  proposal_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum ProposalCanceled_OrderBy {
  Emitter = "emitter",
  Governor = "governor",
  Id = "id",
  Proposal = "proposal",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type ProposalCreated = Event & {
  emitter: Account;
  governor: Governor;
  id: Scalars["ID"];
  proposal: Proposal;
  proposer: Account;
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
};

export type ProposalCreated_Filter = {
  emitter?: InputMaybe<Scalars["String"]>;
  emitter_contains?: InputMaybe<Scalars["String"]>;
  emitter_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_gt?: InputMaybe<Scalars["String"]>;
  emitter_gte?: InputMaybe<Scalars["String"]>;
  emitter_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_lt?: InputMaybe<Scalars["String"]>;
  emitter_lte?: InputMaybe<Scalars["String"]>;
  emitter_not?: InputMaybe<Scalars["String"]>;
  emitter_not_contains?: InputMaybe<Scalars["String"]>;
  emitter_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_not_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  governor?: InputMaybe<Scalars["String"]>;
  governor_contains?: InputMaybe<Scalars["String"]>;
  governor_contains_nocase?: InputMaybe<Scalars["String"]>;
  governor_ends_with?: InputMaybe<Scalars["String"]>;
  governor_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  governor_gt?: InputMaybe<Scalars["String"]>;
  governor_gte?: InputMaybe<Scalars["String"]>;
  governor_in?: InputMaybe<Array<Scalars["String"]>>;
  governor_lt?: InputMaybe<Scalars["String"]>;
  governor_lte?: InputMaybe<Scalars["String"]>;
  governor_not?: InputMaybe<Scalars["String"]>;
  governor_not_contains?: InputMaybe<Scalars["String"]>;
  governor_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  governor_not_ends_with?: InputMaybe<Scalars["String"]>;
  governor_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  governor_not_in?: InputMaybe<Array<Scalars["String"]>>;
  governor_not_starts_with?: InputMaybe<Scalars["String"]>;
  governor_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  governor_starts_with?: InputMaybe<Scalars["String"]>;
  governor_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  proposal?: InputMaybe<Scalars["String"]>;
  proposal_contains?: InputMaybe<Scalars["String"]>;
  proposal_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposal_ends_with?: InputMaybe<Scalars["String"]>;
  proposal_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_gt?: InputMaybe<Scalars["String"]>;
  proposal_gte?: InputMaybe<Scalars["String"]>;
  proposal_in?: InputMaybe<Array<Scalars["String"]>>;
  proposal_lt?: InputMaybe<Scalars["String"]>;
  proposal_lte?: InputMaybe<Scalars["String"]>;
  proposal_not?: InputMaybe<Scalars["String"]>;
  proposal_not_contains?: InputMaybe<Scalars["String"]>;
  proposal_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposal_not_ends_with?: InputMaybe<Scalars["String"]>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_not_in?: InputMaybe<Array<Scalars["String"]>>;
  proposal_not_starts_with?: InputMaybe<Scalars["String"]>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_starts_with?: InputMaybe<Scalars["String"]>;
  proposal_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  proposer?: InputMaybe<Scalars["String"]>;
  proposer_contains?: InputMaybe<Scalars["String"]>;
  proposer_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposer_ends_with?: InputMaybe<Scalars["String"]>;
  proposer_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposer_gt?: InputMaybe<Scalars["String"]>;
  proposer_gte?: InputMaybe<Scalars["String"]>;
  proposer_in?: InputMaybe<Array<Scalars["String"]>>;
  proposer_lt?: InputMaybe<Scalars["String"]>;
  proposer_lte?: InputMaybe<Scalars["String"]>;
  proposer_not?: InputMaybe<Scalars["String"]>;
  proposer_not_contains?: InputMaybe<Scalars["String"]>;
  proposer_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposer_not_ends_with?: InputMaybe<Scalars["String"]>;
  proposer_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposer_not_in?: InputMaybe<Array<Scalars["String"]>>;
  proposer_not_starts_with?: InputMaybe<Scalars["String"]>;
  proposer_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  proposer_starts_with?: InputMaybe<Scalars["String"]>;
  proposer_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum ProposalCreated_OrderBy {
  Emitter = "emitter",
  Governor = "governor",
  Id = "id",
  Proposal = "proposal",
  Proposer = "proposer",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type ProposalExecuted = Event & {
  emitter: Account;
  governor: Governor;
  id: Scalars["ID"];
  proposal: Proposal;
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
};

export type ProposalExecuted_Filter = {
  emitter?: InputMaybe<Scalars["String"]>;
  emitter_contains?: InputMaybe<Scalars["String"]>;
  emitter_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_gt?: InputMaybe<Scalars["String"]>;
  emitter_gte?: InputMaybe<Scalars["String"]>;
  emitter_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_lt?: InputMaybe<Scalars["String"]>;
  emitter_lte?: InputMaybe<Scalars["String"]>;
  emitter_not?: InputMaybe<Scalars["String"]>;
  emitter_not_contains?: InputMaybe<Scalars["String"]>;
  emitter_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_not_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  governor?: InputMaybe<Scalars["String"]>;
  governor_contains?: InputMaybe<Scalars["String"]>;
  governor_contains_nocase?: InputMaybe<Scalars["String"]>;
  governor_ends_with?: InputMaybe<Scalars["String"]>;
  governor_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  governor_gt?: InputMaybe<Scalars["String"]>;
  governor_gte?: InputMaybe<Scalars["String"]>;
  governor_in?: InputMaybe<Array<Scalars["String"]>>;
  governor_lt?: InputMaybe<Scalars["String"]>;
  governor_lte?: InputMaybe<Scalars["String"]>;
  governor_not?: InputMaybe<Scalars["String"]>;
  governor_not_contains?: InputMaybe<Scalars["String"]>;
  governor_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  governor_not_ends_with?: InputMaybe<Scalars["String"]>;
  governor_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  governor_not_in?: InputMaybe<Array<Scalars["String"]>>;
  governor_not_starts_with?: InputMaybe<Scalars["String"]>;
  governor_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  governor_starts_with?: InputMaybe<Scalars["String"]>;
  governor_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  proposal?: InputMaybe<Scalars["String"]>;
  proposal_contains?: InputMaybe<Scalars["String"]>;
  proposal_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposal_ends_with?: InputMaybe<Scalars["String"]>;
  proposal_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_gt?: InputMaybe<Scalars["String"]>;
  proposal_gte?: InputMaybe<Scalars["String"]>;
  proposal_in?: InputMaybe<Array<Scalars["String"]>>;
  proposal_lt?: InputMaybe<Scalars["String"]>;
  proposal_lte?: InputMaybe<Scalars["String"]>;
  proposal_not?: InputMaybe<Scalars["String"]>;
  proposal_not_contains?: InputMaybe<Scalars["String"]>;
  proposal_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposal_not_ends_with?: InputMaybe<Scalars["String"]>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_not_in?: InputMaybe<Array<Scalars["String"]>>;
  proposal_not_starts_with?: InputMaybe<Scalars["String"]>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_starts_with?: InputMaybe<Scalars["String"]>;
  proposal_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum ProposalExecuted_OrderBy {
  Emitter = "emitter",
  Governor = "governor",
  Id = "id",
  Proposal = "proposal",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type ProposalQueued = Event & {
  emitter: Account;
  eta: Scalars["BigInt"];
  governor: Governor;
  id: Scalars["ID"];
  proposal: Proposal;
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
};

export type ProposalQueued_Filter = {
  emitter?: InputMaybe<Scalars["String"]>;
  emitter_contains?: InputMaybe<Scalars["String"]>;
  emitter_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_gt?: InputMaybe<Scalars["String"]>;
  emitter_gte?: InputMaybe<Scalars["String"]>;
  emitter_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_lt?: InputMaybe<Scalars["String"]>;
  emitter_lte?: InputMaybe<Scalars["String"]>;
  emitter_not?: InputMaybe<Scalars["String"]>;
  emitter_not_contains?: InputMaybe<Scalars["String"]>;
  emitter_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_not_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  eta?: InputMaybe<Scalars["BigInt"]>;
  eta_gt?: InputMaybe<Scalars["BigInt"]>;
  eta_gte?: InputMaybe<Scalars["BigInt"]>;
  eta_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  eta_lt?: InputMaybe<Scalars["BigInt"]>;
  eta_lte?: InputMaybe<Scalars["BigInt"]>;
  eta_not?: InputMaybe<Scalars["BigInt"]>;
  eta_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  governor?: InputMaybe<Scalars["String"]>;
  governor_contains?: InputMaybe<Scalars["String"]>;
  governor_contains_nocase?: InputMaybe<Scalars["String"]>;
  governor_ends_with?: InputMaybe<Scalars["String"]>;
  governor_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  governor_gt?: InputMaybe<Scalars["String"]>;
  governor_gte?: InputMaybe<Scalars["String"]>;
  governor_in?: InputMaybe<Array<Scalars["String"]>>;
  governor_lt?: InputMaybe<Scalars["String"]>;
  governor_lte?: InputMaybe<Scalars["String"]>;
  governor_not?: InputMaybe<Scalars["String"]>;
  governor_not_contains?: InputMaybe<Scalars["String"]>;
  governor_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  governor_not_ends_with?: InputMaybe<Scalars["String"]>;
  governor_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  governor_not_in?: InputMaybe<Array<Scalars["String"]>>;
  governor_not_starts_with?: InputMaybe<Scalars["String"]>;
  governor_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  governor_starts_with?: InputMaybe<Scalars["String"]>;
  governor_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  proposal?: InputMaybe<Scalars["String"]>;
  proposal_contains?: InputMaybe<Scalars["String"]>;
  proposal_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposal_ends_with?: InputMaybe<Scalars["String"]>;
  proposal_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_gt?: InputMaybe<Scalars["String"]>;
  proposal_gte?: InputMaybe<Scalars["String"]>;
  proposal_in?: InputMaybe<Array<Scalars["String"]>>;
  proposal_lt?: InputMaybe<Scalars["String"]>;
  proposal_lte?: InputMaybe<Scalars["String"]>;
  proposal_not?: InputMaybe<Scalars["String"]>;
  proposal_not_contains?: InputMaybe<Scalars["String"]>;
  proposal_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposal_not_ends_with?: InputMaybe<Scalars["String"]>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_not_in?: InputMaybe<Array<Scalars["String"]>>;
  proposal_not_starts_with?: InputMaybe<Scalars["String"]>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_starts_with?: InputMaybe<Scalars["String"]>;
  proposal_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum ProposalQueued_OrderBy {
  Emitter = "emitter",
  Eta = "eta",
  Governor = "governor",
  Id = "id",
  Proposal = "proposal",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type ProposalSupport = {
  id: Scalars["ID"];
  proposal: Proposal;
  support: Scalars["Int"];
  votes: Array<VoteReceipt>;
};

export type ProposalSupportVotesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VoteReceipt_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VoteReceipt_Filter>;
};

export type ProposalSupport_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  proposal?: InputMaybe<Scalars["String"]>;
  proposal_contains?: InputMaybe<Scalars["String"]>;
  proposal_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposal_ends_with?: InputMaybe<Scalars["String"]>;
  proposal_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_gt?: InputMaybe<Scalars["String"]>;
  proposal_gte?: InputMaybe<Scalars["String"]>;
  proposal_in?: InputMaybe<Array<Scalars["String"]>>;
  proposal_lt?: InputMaybe<Scalars["String"]>;
  proposal_lte?: InputMaybe<Scalars["String"]>;
  proposal_not?: InputMaybe<Scalars["String"]>;
  proposal_not_contains?: InputMaybe<Scalars["String"]>;
  proposal_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposal_not_ends_with?: InputMaybe<Scalars["String"]>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_not_in?: InputMaybe<Array<Scalars["String"]>>;
  proposal_not_starts_with?: InputMaybe<Scalars["String"]>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_starts_with?: InputMaybe<Scalars["String"]>;
  proposal_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  support?: InputMaybe<Scalars["Int"]>;
  support_gt?: InputMaybe<Scalars["Int"]>;
  support_gte?: InputMaybe<Scalars["Int"]>;
  support_in?: InputMaybe<Array<Scalars["Int"]>>;
  support_lt?: InputMaybe<Scalars["Int"]>;
  support_lte?: InputMaybe<Scalars["Int"]>;
  support_not?: InputMaybe<Scalars["Int"]>;
  support_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum ProposalSupport_OrderBy {
  Id = "id",
  Proposal = "proposal",
  Support = "support",
  Votes = "votes",
}

export type Query = {
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  delegateChanged?: Maybe<DelegateChanged>;
  delegateChangeds: Array<DelegateChanged>;
  delegateVotesChanged?: Maybe<DelegateVotesChanged>;
  delegateVotesChangeds: Array<DelegateVotesChanged>;
  erc1155Balance?: Maybe<Erc1155Balance>;
  erc1155Balances: Array<Erc1155Balance>;
  erc1155Contract?: Maybe<Erc1155Contract>;
  erc1155Contracts: Array<Erc1155Contract>;
  erc1155Operator?: Maybe<Erc1155Operator>;
  erc1155Operators: Array<Erc1155Operator>;
  erc1155Token?: Maybe<Erc1155Token>;
  erc1155Tokens: Array<Erc1155Token>;
  erc1155Transfer?: Maybe<Erc1155Transfer>;
  erc1155Transfers: Array<Erc1155Transfer>;
  erc20Approval?: Maybe<Erc20Approval>;
  erc20Approvals: Array<Erc20Approval>;
  erc20Balance?: Maybe<Erc20Balance>;
  erc20Balances: Array<Erc20Balance>;
  erc20Contract?: Maybe<Erc20Contract>;
  erc20Contracts: Array<Erc20Contract>;
  erc20Transfer?: Maybe<Erc20Transfer>;
  erc20Transfers: Array<Erc20Transfer>;
  event?: Maybe<Event>;
  events: Array<Event>;
  governor?: Maybe<Governor>;
  governors: Array<Governor>;
  proposal?: Maybe<Proposal>;
  proposalCall?: Maybe<ProposalCall>;
  proposalCalls: Array<ProposalCall>;
  proposalCanceled?: Maybe<ProposalCanceled>;
  proposalCanceleds: Array<ProposalCanceled>;
  proposalCreated?: Maybe<ProposalCreated>;
  proposalCreateds: Array<ProposalCreated>;
  proposalExecuted?: Maybe<ProposalExecuted>;
  proposalExecuteds: Array<ProposalExecuted>;
  proposalQueued?: Maybe<ProposalQueued>;
  proposalQueueds: Array<ProposalQueued>;
  proposals: Array<Proposal>;
  proposalSupport?: Maybe<ProposalSupport>;
  proposalSupports: Array<ProposalSupport>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  voteCast?: Maybe<VoteCast>;
  voteCasts: Array<VoteCast>;
  voteDelegation?: Maybe<VoteDelegation>;
  voteDelegations: Array<VoteDelegation>;
  voteReceipt?: Maybe<VoteReceipt>;
  voteReceipts: Array<VoteReceipt>;
  voteWeight?: Maybe<VoteWeight>;
  voteWeights: Array<VoteWeight>;
  votingContract?: Maybe<VotingContract>;
  votingContracts: Array<VotingContract>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};

export type QueryDelegateChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDelegateChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DelegateChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegateChanged_Filter>;
};

export type QueryDelegateVotesChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDelegateVotesChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DelegateVotesChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegateVotesChanged_Filter>;
};

export type QueryErc1155BalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc1155BalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Balance_Filter>;
};

export type QueryErc1155ContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc1155ContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Contract_Filter>;
};

export type QueryErc1155OperatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc1155OperatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Operator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Operator_Filter>;
};

export type QueryErc1155TokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc1155TokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Token_Filter>;
};

export type QueryErc1155TransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc1155TransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Transfer_Filter>;
};

export type QueryErc20ApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc20ApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc20Approval_Filter>;
};

export type QueryErc20BalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc20BalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc20Balance_Filter>;
};

export type QueryErc20ContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc20ContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc20Contract_Filter>;
};

export type QueryErc20TransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc20TransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc20Transfer_Filter>;
};

export type QueryEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};

export type QueryGovernorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryGovernorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Governor_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Governor_Filter>;
};

export type QueryProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryProposalCallArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryProposalCallsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalCall_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalCall_Filter>;
};

export type QueryProposalCanceledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryProposalCanceledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalCanceled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalCanceled_Filter>;
};

export type QueryProposalCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryProposalCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalCreated_Filter>;
};

export type QueryProposalExecutedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryProposalExecutedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalExecuted_Filter>;
};

export type QueryProposalQueuedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryProposalQueuedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalQueued_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalQueued_Filter>;
};

export type QueryProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Proposal_Filter>;
};

export type QueryProposalSupportArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryProposalSupportsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalSupport_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalSupport_Filter>;
};

export type QueryTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

export type QueryVoteCastArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVoteCastsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VoteCast_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VoteCast_Filter>;
};

export type QueryVoteDelegationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVoteDelegationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VoteDelegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VoteDelegation_Filter>;
};

export type QueryVoteReceiptArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVoteReceiptsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VoteReceipt_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VoteReceipt_Filter>;
};

export type QueryVoteWeightArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVoteWeightsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VoteWeight_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VoteWeight_Filter>;
};

export type QueryVotingContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVotingContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VotingContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VotingContract_Filter>;
};

export type Subscription = {
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  delegateChanged?: Maybe<DelegateChanged>;
  delegateChangeds: Array<DelegateChanged>;
  delegateVotesChanged?: Maybe<DelegateVotesChanged>;
  delegateVotesChangeds: Array<DelegateVotesChanged>;
  erc1155Balance?: Maybe<Erc1155Balance>;
  erc1155Balances: Array<Erc1155Balance>;
  erc1155Contract?: Maybe<Erc1155Contract>;
  erc1155Contracts: Array<Erc1155Contract>;
  erc1155Operator?: Maybe<Erc1155Operator>;
  erc1155Operators: Array<Erc1155Operator>;
  erc1155Token?: Maybe<Erc1155Token>;
  erc1155Tokens: Array<Erc1155Token>;
  erc1155Transfer?: Maybe<Erc1155Transfer>;
  erc1155Transfers: Array<Erc1155Transfer>;
  erc20Approval?: Maybe<Erc20Approval>;
  erc20Approvals: Array<Erc20Approval>;
  erc20Balance?: Maybe<Erc20Balance>;
  erc20Balances: Array<Erc20Balance>;
  erc20Contract?: Maybe<Erc20Contract>;
  erc20Contracts: Array<Erc20Contract>;
  erc20Transfer?: Maybe<Erc20Transfer>;
  erc20Transfers: Array<Erc20Transfer>;
  event?: Maybe<Event>;
  events: Array<Event>;
  governor?: Maybe<Governor>;
  governors: Array<Governor>;
  proposal?: Maybe<Proposal>;
  proposalCall?: Maybe<ProposalCall>;
  proposalCalls: Array<ProposalCall>;
  proposalCanceled?: Maybe<ProposalCanceled>;
  proposalCanceleds: Array<ProposalCanceled>;
  proposalCreated?: Maybe<ProposalCreated>;
  proposalCreateds: Array<ProposalCreated>;
  proposalExecuted?: Maybe<ProposalExecuted>;
  proposalExecuteds: Array<ProposalExecuted>;
  proposalQueued?: Maybe<ProposalQueued>;
  proposalQueueds: Array<ProposalQueued>;
  proposals: Array<Proposal>;
  proposalSupport?: Maybe<ProposalSupport>;
  proposalSupports: Array<ProposalSupport>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  voteCast?: Maybe<VoteCast>;
  voteCasts: Array<VoteCast>;
  voteDelegation?: Maybe<VoteDelegation>;
  voteDelegations: Array<VoteDelegation>;
  voteReceipt?: Maybe<VoteReceipt>;
  voteReceipts: Array<VoteReceipt>;
  voteWeight?: Maybe<VoteWeight>;
  voteWeights: Array<VoteWeight>;
  votingContract?: Maybe<VotingContract>;
  votingContracts: Array<VotingContract>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};

export type SubscriptionDelegateChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDelegateChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DelegateChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegateChanged_Filter>;
};

export type SubscriptionDelegateVotesChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDelegateVotesChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DelegateVotesChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegateVotesChanged_Filter>;
};

export type SubscriptionErc1155BalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc1155BalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Balance_Filter>;
};

export type SubscriptionErc1155ContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc1155ContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Contract_Filter>;
};

export type SubscriptionErc1155OperatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc1155OperatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Operator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Operator_Filter>;
};

export type SubscriptionErc1155TokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc1155TokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Token_Filter>;
};

export type SubscriptionErc1155TransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc1155TransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Transfer_Filter>;
};

export type SubscriptionErc20ApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc20ApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc20Approval_Filter>;
};

export type SubscriptionErc20BalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc20BalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc20Balance_Filter>;
};

export type SubscriptionErc20ContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc20ContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc20Contract_Filter>;
};

export type SubscriptionErc20TransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc20TransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc20Transfer_Filter>;
};

export type SubscriptionEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};

export type SubscriptionGovernorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionGovernorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Governor_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Governor_Filter>;
};

export type SubscriptionProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionProposalCallArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionProposalCallsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalCall_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalCall_Filter>;
};

export type SubscriptionProposalCanceledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionProposalCanceledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalCanceled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalCanceled_Filter>;
};

export type SubscriptionProposalCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionProposalCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalCreated_Filter>;
};

export type SubscriptionProposalExecutedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionProposalExecutedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalExecuted_Filter>;
};

export type SubscriptionProposalQueuedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionProposalQueuedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalQueued_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalQueued_Filter>;
};

export type SubscriptionProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Proposal_Filter>;
};

export type SubscriptionProposalSupportArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionProposalSupportsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProposalSupport_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalSupport_Filter>;
};

export type SubscriptionTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

export type SubscriptionVoteCastArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVoteCastsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VoteCast_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VoteCast_Filter>;
};

export type SubscriptionVoteDelegationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVoteDelegationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VoteDelegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VoteDelegation_Filter>;
};

export type SubscriptionVoteReceiptArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVoteReceiptsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VoteReceipt_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VoteReceipt_Filter>;
};

export type SubscriptionVoteWeightArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVoteWeightsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VoteWeight_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VoteWeight_Filter>;
};

export type SubscriptionVotingContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVotingContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VotingContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VotingContract_Filter>;
};

export type Transaction = {
  blockNumber: Scalars["BigInt"];
  events: Array<Event>;
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
};

export type TransactionEventsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Event_Filter>;
};

export type Transaction_Filter = {
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Transaction_OrderBy {
  BlockNumber = "blockNumber",
  Events = "events",
  Id = "id",
  Timestamp = "timestamp",
}

export type VoteCast = Event & {
  emitter: Account;
  governor: Governor;
  id: Scalars["ID"];
  proposal: Proposal;
  receipt: VoteReceipt;
  support: ProposalSupport;
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
  voter: Account;
};

export type VoteCast_Filter = {
  emitter?: InputMaybe<Scalars["String"]>;
  emitter_contains?: InputMaybe<Scalars["String"]>;
  emitter_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_gt?: InputMaybe<Scalars["String"]>;
  emitter_gte?: InputMaybe<Scalars["String"]>;
  emitter_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_lt?: InputMaybe<Scalars["String"]>;
  emitter_lte?: InputMaybe<Scalars["String"]>;
  emitter_not?: InputMaybe<Scalars["String"]>;
  emitter_not_contains?: InputMaybe<Scalars["String"]>;
  emitter_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with?: InputMaybe<Scalars["String"]>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_not_in?: InputMaybe<Array<Scalars["String"]>>;
  emitter_not_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  emitter_starts_with?: InputMaybe<Scalars["String"]>;
  emitter_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  governor?: InputMaybe<Scalars["String"]>;
  governor_contains?: InputMaybe<Scalars["String"]>;
  governor_contains_nocase?: InputMaybe<Scalars["String"]>;
  governor_ends_with?: InputMaybe<Scalars["String"]>;
  governor_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  governor_gt?: InputMaybe<Scalars["String"]>;
  governor_gte?: InputMaybe<Scalars["String"]>;
  governor_in?: InputMaybe<Array<Scalars["String"]>>;
  governor_lt?: InputMaybe<Scalars["String"]>;
  governor_lte?: InputMaybe<Scalars["String"]>;
  governor_not?: InputMaybe<Scalars["String"]>;
  governor_not_contains?: InputMaybe<Scalars["String"]>;
  governor_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  governor_not_ends_with?: InputMaybe<Scalars["String"]>;
  governor_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  governor_not_in?: InputMaybe<Array<Scalars["String"]>>;
  governor_not_starts_with?: InputMaybe<Scalars["String"]>;
  governor_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  governor_starts_with?: InputMaybe<Scalars["String"]>;
  governor_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  proposal?: InputMaybe<Scalars["String"]>;
  proposal_contains?: InputMaybe<Scalars["String"]>;
  proposal_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposal_ends_with?: InputMaybe<Scalars["String"]>;
  proposal_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_gt?: InputMaybe<Scalars["String"]>;
  proposal_gte?: InputMaybe<Scalars["String"]>;
  proposal_in?: InputMaybe<Array<Scalars["String"]>>;
  proposal_lt?: InputMaybe<Scalars["String"]>;
  proposal_lte?: InputMaybe<Scalars["String"]>;
  proposal_not?: InputMaybe<Scalars["String"]>;
  proposal_not_contains?: InputMaybe<Scalars["String"]>;
  proposal_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposal_not_ends_with?: InputMaybe<Scalars["String"]>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_not_in?: InputMaybe<Array<Scalars["String"]>>;
  proposal_not_starts_with?: InputMaybe<Scalars["String"]>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_starts_with?: InputMaybe<Scalars["String"]>;
  proposal_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  receipt?: InputMaybe<Scalars["String"]>;
  receipt_contains?: InputMaybe<Scalars["String"]>;
  receipt_contains_nocase?: InputMaybe<Scalars["String"]>;
  receipt_ends_with?: InputMaybe<Scalars["String"]>;
  receipt_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  receipt_gt?: InputMaybe<Scalars["String"]>;
  receipt_gte?: InputMaybe<Scalars["String"]>;
  receipt_in?: InputMaybe<Array<Scalars["String"]>>;
  receipt_lt?: InputMaybe<Scalars["String"]>;
  receipt_lte?: InputMaybe<Scalars["String"]>;
  receipt_not?: InputMaybe<Scalars["String"]>;
  receipt_not_contains?: InputMaybe<Scalars["String"]>;
  receipt_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  receipt_not_ends_with?: InputMaybe<Scalars["String"]>;
  receipt_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  receipt_not_in?: InputMaybe<Array<Scalars["String"]>>;
  receipt_not_starts_with?: InputMaybe<Scalars["String"]>;
  receipt_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  receipt_starts_with?: InputMaybe<Scalars["String"]>;
  receipt_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  support?: InputMaybe<Scalars["String"]>;
  support_contains?: InputMaybe<Scalars["String"]>;
  support_contains_nocase?: InputMaybe<Scalars["String"]>;
  support_ends_with?: InputMaybe<Scalars["String"]>;
  support_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  support_gt?: InputMaybe<Scalars["String"]>;
  support_gte?: InputMaybe<Scalars["String"]>;
  support_in?: InputMaybe<Array<Scalars["String"]>>;
  support_lt?: InputMaybe<Scalars["String"]>;
  support_lte?: InputMaybe<Scalars["String"]>;
  support_not?: InputMaybe<Scalars["String"]>;
  support_not_contains?: InputMaybe<Scalars["String"]>;
  support_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  support_not_ends_with?: InputMaybe<Scalars["String"]>;
  support_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  support_not_in?: InputMaybe<Array<Scalars["String"]>>;
  support_not_starts_with?: InputMaybe<Scalars["String"]>;
  support_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  support_starts_with?: InputMaybe<Scalars["String"]>;
  support_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  voter?: InputMaybe<Scalars["String"]>;
  voter_contains?: InputMaybe<Scalars["String"]>;
  voter_contains_nocase?: InputMaybe<Scalars["String"]>;
  voter_ends_with?: InputMaybe<Scalars["String"]>;
  voter_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  voter_gt?: InputMaybe<Scalars["String"]>;
  voter_gte?: InputMaybe<Scalars["String"]>;
  voter_in?: InputMaybe<Array<Scalars["String"]>>;
  voter_lt?: InputMaybe<Scalars["String"]>;
  voter_lte?: InputMaybe<Scalars["String"]>;
  voter_not?: InputMaybe<Scalars["String"]>;
  voter_not_contains?: InputMaybe<Scalars["String"]>;
  voter_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  voter_not_ends_with?: InputMaybe<Scalars["String"]>;
  voter_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  voter_not_in?: InputMaybe<Array<Scalars["String"]>>;
  voter_not_starts_with?: InputMaybe<Scalars["String"]>;
  voter_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  voter_starts_with?: InputMaybe<Scalars["String"]>;
  voter_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum VoteCast_OrderBy {
  Emitter = "emitter",
  Governor = "governor",
  Id = "id",
  Proposal = "proposal",
  Receipt = "receipt",
  Support = "support",
  Timestamp = "timestamp",
  Transaction = "transaction",
  Voter = "voter",
}

export type VoteDelegation = {
  contract: VotingContract;
  delegateChangedEvent: Array<DelegateChanged>;
  delegatee: Account;
  delegator: Account;
  id: Scalars["ID"];
};

export type VoteDelegationDelegateChangedEventArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DelegateChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<DelegateChanged_Filter>;
};

export type VoteDelegation_Filter = {
  contract?: InputMaybe<Scalars["String"]>;
  contract_contains?: InputMaybe<Scalars["String"]>;
  contract_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_ends_with?: InputMaybe<Scalars["String"]>;
  contract_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_gt?: InputMaybe<Scalars["String"]>;
  contract_gte?: InputMaybe<Scalars["String"]>;
  contract_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_lt?: InputMaybe<Scalars["String"]>;
  contract_lte?: InputMaybe<Scalars["String"]>;
  contract_not?: InputMaybe<Scalars["String"]>;
  contract_not_contains?: InputMaybe<Scalars["String"]>;
  contract_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_not_starts_with?: InputMaybe<Scalars["String"]>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_starts_with?: InputMaybe<Scalars["String"]>;
  contract_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  delegatee?: InputMaybe<Scalars["String"]>;
  delegatee_contains?: InputMaybe<Scalars["String"]>;
  delegatee_contains_nocase?: InputMaybe<Scalars["String"]>;
  delegatee_ends_with?: InputMaybe<Scalars["String"]>;
  delegatee_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  delegatee_gt?: InputMaybe<Scalars["String"]>;
  delegatee_gte?: InputMaybe<Scalars["String"]>;
  delegatee_in?: InputMaybe<Array<Scalars["String"]>>;
  delegatee_lt?: InputMaybe<Scalars["String"]>;
  delegatee_lte?: InputMaybe<Scalars["String"]>;
  delegatee_not?: InputMaybe<Scalars["String"]>;
  delegatee_not_contains?: InputMaybe<Scalars["String"]>;
  delegatee_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  delegatee_not_ends_with?: InputMaybe<Scalars["String"]>;
  delegatee_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  delegatee_not_in?: InputMaybe<Array<Scalars["String"]>>;
  delegatee_not_starts_with?: InputMaybe<Scalars["String"]>;
  delegatee_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  delegatee_starts_with?: InputMaybe<Scalars["String"]>;
  delegatee_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  delegator?: InputMaybe<Scalars["String"]>;
  delegator_contains?: InputMaybe<Scalars["String"]>;
  delegator_contains_nocase?: InputMaybe<Scalars["String"]>;
  delegator_ends_with?: InputMaybe<Scalars["String"]>;
  delegator_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  delegator_gt?: InputMaybe<Scalars["String"]>;
  delegator_gte?: InputMaybe<Scalars["String"]>;
  delegator_in?: InputMaybe<Array<Scalars["String"]>>;
  delegator_lt?: InputMaybe<Scalars["String"]>;
  delegator_lte?: InputMaybe<Scalars["String"]>;
  delegator_not?: InputMaybe<Scalars["String"]>;
  delegator_not_contains?: InputMaybe<Scalars["String"]>;
  delegator_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  delegator_not_ends_with?: InputMaybe<Scalars["String"]>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  delegator_not_in?: InputMaybe<Array<Scalars["String"]>>;
  delegator_not_starts_with?: InputMaybe<Scalars["String"]>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  delegator_starts_with?: InputMaybe<Scalars["String"]>;
  delegator_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
};

export enum VoteDelegation_OrderBy {
  Contract = "contract",
  DelegateChangedEvent = "delegateChangedEvent",
  Delegatee = "delegatee",
  Delegator = "delegator",
  Id = "id",
}

export type VoteReceipt = {
  id: Scalars["ID"];
  proposal: Proposal;
  reason: Scalars["String"];
  support: ProposalSupport;
  voter: Account;
  weight: Scalars["BigInt"];
};

export type VoteReceipt_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  proposal?: InputMaybe<Scalars["String"]>;
  proposal_contains?: InputMaybe<Scalars["String"]>;
  proposal_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposal_ends_with?: InputMaybe<Scalars["String"]>;
  proposal_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_gt?: InputMaybe<Scalars["String"]>;
  proposal_gte?: InputMaybe<Scalars["String"]>;
  proposal_in?: InputMaybe<Array<Scalars["String"]>>;
  proposal_lt?: InputMaybe<Scalars["String"]>;
  proposal_lte?: InputMaybe<Scalars["String"]>;
  proposal_not?: InputMaybe<Scalars["String"]>;
  proposal_not_contains?: InputMaybe<Scalars["String"]>;
  proposal_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  proposal_not_ends_with?: InputMaybe<Scalars["String"]>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_not_in?: InputMaybe<Array<Scalars["String"]>>;
  proposal_not_starts_with?: InputMaybe<Scalars["String"]>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  proposal_starts_with?: InputMaybe<Scalars["String"]>;
  proposal_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reason?: InputMaybe<Scalars["String"]>;
  reason_contains?: InputMaybe<Scalars["String"]>;
  reason_contains_nocase?: InputMaybe<Scalars["String"]>;
  reason_ends_with?: InputMaybe<Scalars["String"]>;
  reason_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reason_gt?: InputMaybe<Scalars["String"]>;
  reason_gte?: InputMaybe<Scalars["String"]>;
  reason_in?: InputMaybe<Array<Scalars["String"]>>;
  reason_lt?: InputMaybe<Scalars["String"]>;
  reason_lte?: InputMaybe<Scalars["String"]>;
  reason_not?: InputMaybe<Scalars["String"]>;
  reason_not_contains?: InputMaybe<Scalars["String"]>;
  reason_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  reason_not_ends_with?: InputMaybe<Scalars["String"]>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reason_not_in?: InputMaybe<Array<Scalars["String"]>>;
  reason_not_starts_with?: InputMaybe<Scalars["String"]>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reason_starts_with?: InputMaybe<Scalars["String"]>;
  reason_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  support?: InputMaybe<Scalars["String"]>;
  support_contains?: InputMaybe<Scalars["String"]>;
  support_contains_nocase?: InputMaybe<Scalars["String"]>;
  support_ends_with?: InputMaybe<Scalars["String"]>;
  support_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  support_gt?: InputMaybe<Scalars["String"]>;
  support_gte?: InputMaybe<Scalars["String"]>;
  support_in?: InputMaybe<Array<Scalars["String"]>>;
  support_lt?: InputMaybe<Scalars["String"]>;
  support_lte?: InputMaybe<Scalars["String"]>;
  support_not?: InputMaybe<Scalars["String"]>;
  support_not_contains?: InputMaybe<Scalars["String"]>;
  support_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  support_not_ends_with?: InputMaybe<Scalars["String"]>;
  support_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  support_not_in?: InputMaybe<Array<Scalars["String"]>>;
  support_not_starts_with?: InputMaybe<Scalars["String"]>;
  support_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  support_starts_with?: InputMaybe<Scalars["String"]>;
  support_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  voter?: InputMaybe<Scalars["String"]>;
  voter_contains?: InputMaybe<Scalars["String"]>;
  voter_contains_nocase?: InputMaybe<Scalars["String"]>;
  voter_ends_with?: InputMaybe<Scalars["String"]>;
  voter_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  voter_gt?: InputMaybe<Scalars["String"]>;
  voter_gte?: InputMaybe<Scalars["String"]>;
  voter_in?: InputMaybe<Array<Scalars["String"]>>;
  voter_lt?: InputMaybe<Scalars["String"]>;
  voter_lte?: InputMaybe<Scalars["String"]>;
  voter_not?: InputMaybe<Scalars["String"]>;
  voter_not_contains?: InputMaybe<Scalars["String"]>;
  voter_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  voter_not_ends_with?: InputMaybe<Scalars["String"]>;
  voter_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  voter_not_in?: InputMaybe<Array<Scalars["String"]>>;
  voter_not_starts_with?: InputMaybe<Scalars["String"]>;
  voter_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  voter_starts_with?: InputMaybe<Scalars["String"]>;
  voter_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  weight?: InputMaybe<Scalars["BigInt"]>;
  weight_gt?: InputMaybe<Scalars["BigInt"]>;
  weight_gte?: InputMaybe<Scalars["BigInt"]>;
  weight_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  weight_lt?: InputMaybe<Scalars["BigInt"]>;
  weight_lte?: InputMaybe<Scalars["BigInt"]>;
  weight_not?: InputMaybe<Scalars["BigInt"]>;
  weight_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum VoteReceipt_OrderBy {
  Id = "id",
  Proposal = "proposal",
  Reason = "reason",
  Support = "support",
  Voter = "voter",
  Weight = "weight",
}

export type VoteWeight = {
  account?: Maybe<Account>;
  contract: VotingContract;
  delegateVotesChangedEvent: Array<DelegateVotesChanged>;
  id: Scalars["ID"];
  value: Scalars["BigInt"];
};

export type VoteWeightDelegateVotesChangedEventArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DelegateVotesChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<DelegateVotesChanged_Filter>;
};

export type VoteWeight_Filter = {
  account?: InputMaybe<Scalars["String"]>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contract?: InputMaybe<Scalars["String"]>;
  contract_contains?: InputMaybe<Scalars["String"]>;
  contract_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_ends_with?: InputMaybe<Scalars["String"]>;
  contract_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_gt?: InputMaybe<Scalars["String"]>;
  contract_gte?: InputMaybe<Scalars["String"]>;
  contract_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_lt?: InputMaybe<Scalars["String"]>;
  contract_lte?: InputMaybe<Scalars["String"]>;
  contract_not?: InputMaybe<Scalars["String"]>;
  contract_not_contains?: InputMaybe<Scalars["String"]>;
  contract_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_not_starts_with?: InputMaybe<Scalars["String"]>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_starts_with?: InputMaybe<Scalars["String"]>;
  contract_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  value?: InputMaybe<Scalars["BigInt"]>;
  value_gt?: InputMaybe<Scalars["BigInt"]>;
  value_gte?: InputMaybe<Scalars["BigInt"]>;
  value_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  value_lt?: InputMaybe<Scalars["BigInt"]>;
  value_lte?: InputMaybe<Scalars["BigInt"]>;
  value_not?: InputMaybe<Scalars["BigInt"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum VoteWeight_OrderBy {
  Account = "account",
  Contract = "contract",
  DelegateVotesChangedEvent = "delegateVotesChangedEvent",
  Id = "id",
  Value = "value",
}

export type VotingContract = {
  asAccount: Account;
  delegateChangedEvent: Array<DelegateChanged>;
  delegateVotesChangedEvent: Array<DelegateVotesChanged>;
  delegation: Array<VoteDelegation>;
  id: Scalars["ID"];
  totalWeight: VoteWeight;
  weight: Array<VoteWeight>;
};

export type VotingContractDelegateChangedEventArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DelegateChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<DelegateChanged_Filter>;
};

export type VotingContractDelegateVotesChangedEventArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DelegateVotesChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<DelegateVotesChanged_Filter>;
};

export type VotingContractDelegationArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VoteDelegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VoteDelegation_Filter>;
};

export type VotingContractWeightArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VoteWeight_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VoteWeight_Filter>;
};

export type VotingContract_Filter = {
  asAccount?: InputMaybe<Scalars["String"]>;
  asAccount_contains?: InputMaybe<Scalars["String"]>;
  asAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_ends_with?: InputMaybe<Scalars["String"]>;
  asAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_gt?: InputMaybe<Scalars["String"]>;
  asAccount_gte?: InputMaybe<Scalars["String"]>;
  asAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  asAccount_lt?: InputMaybe<Scalars["String"]>;
  asAccount_lte?: InputMaybe<Scalars["String"]>;
  asAccount_not?: InputMaybe<Scalars["String"]>;
  asAccount_not_contains?: InputMaybe<Scalars["String"]>;
  asAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  asAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  asAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asAccount_starts_with?: InputMaybe<Scalars["String"]>;
  asAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  totalWeight?: InputMaybe<Scalars["String"]>;
  totalWeight_contains?: InputMaybe<Scalars["String"]>;
  totalWeight_contains_nocase?: InputMaybe<Scalars["String"]>;
  totalWeight_ends_with?: InputMaybe<Scalars["String"]>;
  totalWeight_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  totalWeight_gt?: InputMaybe<Scalars["String"]>;
  totalWeight_gte?: InputMaybe<Scalars["String"]>;
  totalWeight_in?: InputMaybe<Array<Scalars["String"]>>;
  totalWeight_lt?: InputMaybe<Scalars["String"]>;
  totalWeight_lte?: InputMaybe<Scalars["String"]>;
  totalWeight_not?: InputMaybe<Scalars["String"]>;
  totalWeight_not_contains?: InputMaybe<Scalars["String"]>;
  totalWeight_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  totalWeight_not_ends_with?: InputMaybe<Scalars["String"]>;
  totalWeight_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  totalWeight_not_in?: InputMaybe<Array<Scalars["String"]>>;
  totalWeight_not_starts_with?: InputMaybe<Scalars["String"]>;
  totalWeight_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  totalWeight_starts_with?: InputMaybe<Scalars["String"]>;
  totalWeight_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum VotingContract_OrderBy {
  AsAccount = "asAccount",
  DelegateChangedEvent = "delegateChangedEvent",
  DelegateVotesChangedEvent = "delegateVotesChangedEvent",
  Delegation = "delegation",
  Id = "id",
  TotalWeight = "totalWeight",
  Weight = "weight",
}

export type MainQueryVariables = Exact<{
  account: Scalars["String"];
  erc20: Scalars["ID"];
  governor: Scalars["ID"];
}>;

export type MainQuery = {
  voting?: {
    totalWeight: { value: any };
    delegation: Array<{
      id: string;
      delegator: { id: string };
      delegatee: { id: string };
    }>;
    weight: Array<{
      id: string;
      value: any;
      contract: { id: string };
      account?: {
        id: string;
        voted: Array<{
          id: string;
          reason: string;
          proposal: { proposalId: any };
          support: { support: number };
        }>;
      } | null;
    }>;
  } | null;
  erc20?: {
    id: string;
    decimals: number;
    symbol?: string | null;
    name?: string | null;
    totalSupply: { value: any };
    balances: Array<{
      value: any;
      id: string;
      transferFromEvent: Array<{
        value: any;
        from?: { id: string } | null;
        to?: { id: string } | null;
        contract: { decimals: number };
      }>;
      transferToEvent: Array<{
        value: any;
        from?: { id: string } | null;
        to?: { id: string } | null;
        contract: { decimals: number };
      }>;
    }>;
  } | null;
  governor?: {
    id: string;
    proposals: Array<{
      id: string;
      proposalId: any;
      description: string;
      canceled: boolean;
      executed: boolean;
      queued: boolean;
      startBlock: any;
      endBlock: any;
      calls: Array<{ calldata: any; value: any; target: { id: string } }>;
      proposer: { id: string };
      votecast: Array<{
        id: string;
        timestamp: any;
        transaction: { blockNumber: any; id: string };
        receipt: {
          reason: string;
          weight: any;
          id: string;
          support: { support: number };
        };
        voter: { id: string };
      }>;
    }>;
  } | null;
};
