import hre from "hardhat";
import { Network } from "hardhat/types";
import fs from "fs";
import path from "path";
import { ContractMetadata } from "../src/types/contract-metadata";
import { pinJSON } from "../src/hooks/useIpfs";
import { NftMetadata } from "../src/types/nft-metadata";
import { assert } from "chai";
import { Contract } from "ethers";
import { AgioGovernance } from "../src/contracts/typechain-types/AgioGovernance";
import { AgioSMARTDAO } from "../src/contracts/typechain-types/AgioSMARTDAO";
import { AgioERC1155 } from "../src/contracts/typechain-types/AgioERC1155";

export const hash = (value: string) =>
  hre.ethers.utils.solidityKeccak256(["string"], [value]);

interface DeployedContract {
  deployedAt: number;
  block: number;
  address: string;
  deployerAddress: string;
  chainId: number;
  name: string;
  dataHash: string;
}

const writeDeployedContractArtifact = (deployedContract: DeployedContract) => {
  const _filePath = "../src/contracts/deploy-info/deploys.json";
  const filePath = path.resolve(__dirname, _filePath);

  let json = "[]";
  try {
    json = fs.readFileSync(filePath).toString();
  } catch {
    console.log("deploys.json doesn't exist. creating new file");
  }
  const newFile: DeployedContract[] = [deployedContract, ...JSON.parse(json)];
  fs.writeFileSync(filePath, JSON.stringify(newFile, null, 2));
};

async function deployContractURI(feeRecipient: string): Promise<string> {
  const file = fs.readFileSync(
    path.resolve(__dirname, "assets/contractMetadata.json")
  );
  const json: ContractMetadata = JSON.parse(file.toString());
  json.fee_recipient = feeRecipient;
  const res = await pinJSON(json);
  return res.data?.IpfsHash || "";
}

async function mintNFTMetadata() {
  const file = fs.readFileSync(
    path.resolve(__dirname, "assets/nftMetadata.json")
  );
  const json: NftMetadata = JSON.parse(file.toString());
  json.attributes = [
    {
      display_type: "date",
      trait_type: "birthday",
      value: new Date().getTime(),
    },
    ...(json.attributes || []),
  ];
  const res = await pinJSON(json);
  return {
    hash: res.data?.IpfsHash || "",
    metadata: json,
  };
}

async function main() {
  const config: Network["config"] = hre.network.config;
  const [deployer] = await hre.ethers.getSigners(); //get the account to deploy the contract
  const contractURIHash = await deployContractURI(deployer.address);
  // const tokenMetadataRes = await mintNFTMetadata();
  assert(contractURIHash.length > 0);
  // assert(tokenMetadataRes.hash.length > 0);
  // assert((tokenMetadataRes.metadata.name || "").length > 0);

  console.log(
    "Account balance:",
    hre.ethers.utils.formatEther(await deployer.getBalance())
  );

  console.log("Deploying contracts with the account:", deployer.address);

  const deployFactory = await hre.ethers.getContractFactory("Deploy"); // Getting the Contract

  // const signerAddress = await Token.signer.getAddress();
  const block = await deployFactory.signer.provider?.getBlockNumber();
  const deployContract = await deployFactory.deploy();

  await deployContract.deployed();

  const token = (await hre.ethers.getContractFactory("AgioGovernance")).attach(
    await deployContract.token()
  ) as AgioGovernance;
  const dao = (await hre.ethers.getContractFactory("AgioSMARTDAO")).attach(
    await deployContract.dao()
  ) as AgioSMARTDAO;
  const nft = (await hre.ethers.getContractFactory("AgioERC1155")).attach(
    await deployContract.nft()
  ) as AgioERC1155;

  Object.entries({
    AgioGovernance: token,
    AgioSMARTDAO: dao,
    AgioERC1155: nft,
  }).forEach(([name, contract]) => {
    console.log(contract.deployTransaction);
    const deployedContract: DeployedContract = {
      deployedAt: Date.now(),
      chainId: config.chainId ?? -1,
      address: contract.address,
      deployerAddress: deployer.address ?? "",
      name,
      dataHash: hash(contract.deployTransaction?.data || "0x"),
      block: block || 0,
    };

    writeDeployedContractArtifact(deployedContract);
    console.log(`${name} deployed to:`, contract.address);
  });

  // const mintFee = hre.ethers.utils.parseEther("1");
  // await token.setMintFee(mintFee);
  // console.log("Mint fee set to:", "1");

  // await token.setPaused(false);
  // const baseURI = await token.baseTokenURI();

  // await token.setContractURI(baseURI + contractURIHash);
  // console.log("Base URI set to:", baseURI + contractURIHash);

  // await token.mintToken(
  //   1,
  //   signerAddress,
  //   tokenMetadataRes.hash,
  //   tokenMetadataRes.metadata.name!,
  //   {
  //     value: mintFee,
  //   }
  // );
  // console.log("First NFT minted:", baseURI + tokenMetadataRes.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); // Calling the function to deploy the contract
