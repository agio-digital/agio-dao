import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import { HardhatUserConfig, task } from "hardhat/config";
import dotenv from "dotenv";

dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

const getKey = () => {
  const _ethers = require("ethers");
  const decrypted = _ethers.Wallet.fromEncryptedJsonSync(
    process.env.DEPLOYER_KEY || "",
    process.env.HARDHATPW || ""
  );
  const decryptedStr = decrypted._signingKey().privateKey;
  console.log(decryptedStr.slice(0, 5) + "...", decrypted.address);
  return decryptedStr;
};

const key = getKey();

export default <HardhatUserConfig>{
  solidity: {
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.1",
      },
      {
        version: "0.8.4",
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    artifacts: "./src/artifacts",
  },
  typechain: {
    outDir: "src/contracts/typechain-types",
  },
  networks: {
    local: {
      url: " http://127.0.0.1:8545/",
      accounts: [
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      ],
      chainId: 31337,
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/HiO4ayvq-b_XhY59CPqdUDtaZKWTgcjY",
      accounts: [key],
      chainId: 80001,
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/" + process.env.INFURA_ID,
      accounts: [key],
      chainId: 4,
    },
  },
};
