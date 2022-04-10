import chai from "chai";
import hre from "hardhat";
import { solidity } from "ethereum-waffle";
import { BigNumber as bn, utils } from "ethers";
import { AgioSMARTDAO } from "../src/contracts/typechain-types/AgioSMARTDAO";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Deploy } from "../src/contracts/typechain-types/Deploy";
import { AgioGovernance } from "../src/contracts/typechain-types/AgioGovernance";
import { AgioERC1155 } from "../src/contracts/typechain-types/AgioERC1155";

const { expect } = chai.use(solidity);

let signers: SignerWithAddress[];
let dao: AgioSMARTDAO;
let token: AgioGovernance;
let nft: AgioERC1155;
let deployContract: Deploy;

beforeEach(async () => {
  signers = await hre.ethers.getSigners();
});

describe("Deploy", () => {
  it("Should deploy", async function () {
    const factory = await hre.ethers.getContractFactory("Deploy");
    deployContract = (await factory.deploy()) as Deploy;

    await deployContract.deployed();

    token = (await hre.ethers.getContractFactory("AgioGovernance")).attach(
      await deployContract.token()
    ) as AgioGovernance;
    dao = (await hre.ethers.getContractFactory("AgioSMARTDAO")).attach(
      await deployContract.dao()
    ) as AgioSMARTDAO;
    nft = (await hre.ethers.getContractFactory("AgioERC1155")).attach(
      await deployContract.nft()
    ) as AgioERC1155;
  });

  it("Should be able to buy AGIO", async function () {
    const buyer = signers[2];
    const buyer2 = signers[3];

    await token.connect(buyer).mint({
      value: utils.parseEther("1000"),
    });

    await token.connect(buyer).mintTo(buyer2.address, {
      value: utils.parseEther("250"),
    });

    const balance = await token.balanceOf(buyer.address);
    const balance2 = await token.balanceOf(buyer2.address);

    expect(balance).to.equal(utils.parseEther("4000"));
    expect(balance2).to.equal(utils.parseEther("1000"));

    const totalSupply = await token.totalSupply();

    expect(totalSupply).to.equal(utils.parseEther("5000"));
  });
});
