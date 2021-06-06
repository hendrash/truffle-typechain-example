require("ts-node/register");
const HDWalletProvider = require("@truffle/hdwallet-provider");
let fs = require("fs");
const mnemonic = fs
  .readFileSync(".secret")
  .toString()
  .trim();
let versionManager = (branch) => {
  if (branch === "main_net")
    return {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 5000000,
      branch_name: "main_net",
    };
  if (branch === "test_net")
    return {
      host: "https://data-seed-prebsc-1-s1.binance.org",
      port: 8545,
      network_id: "*",
      gas: 5000000,
      branch_name: "test_net",
    };
  if (branch === "local_net")
    return {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 5000000,
      branch_name: "local_net",
    };
  else console.error("No specified branch configuration may not work");
};
const writeToFile = (dev) => {
  fs.writeFile("scripts/configuration.json", JSON.stringify(dev) + "", function(
    err
  ) {
    if (err) {
      console.error(err);
    }
  });
  return dev;
};

dev = () => {
  const branchName = require("current-git-branch");
  return writeToFile(versionManager(branchName()));
};
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 5000000,
      branch_name: "local_net",
    },
    dev: dev(),
    testnet: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://data-seed-prebsc-1-s1.binance.org:8545`
        ),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    mainnet: {
      provider: () => {
        new HDWalletProvider(mnemonic, "https://bsc-dataseed1.binance.org");
      },
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
};
