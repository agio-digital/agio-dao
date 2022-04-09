export interface DeployedContract {
  deployedAt: number;
  address: string;
  deployerAddress: string;
  chainId: number;
  name: string;
  dataHash: string;
  block: number;
}
