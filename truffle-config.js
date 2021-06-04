require("ts-node/register");
const { exec } = require("child_process");
let fs = require("fs");

var development = this;

let versionManager = (branch) => {
    if( branch==="main_net")
      return {
        host: "localhost",
        port: 8545,
        network_id: "*",
        gas: 5000000,
        branch_name: "main_net",
      };
    if(branch==="test_net")
      return  {
        host: "https://data-seed-prebsc-1-s1.binance.org",
        port: 8545,
        network_id: "*",
        gas: 5000000,
        branch_name: "test_net",
      };
    if(branch==="local_net")
      return {
        host: "localhost",
        port: 8545,
        network_id: "*", // Match any network id
        gas: 5000000,
        branch_name: "local_net",
      };
    else
      console.error("No specified branch configuration may not work");
  
};
const writeToFile = (dev) => {
  fs.writeFile("scripts/configuration.json", JSON.stringify(dev) + "", function(
    err
  ) {
    if (err) {
      console.error(err);
    }
  });
  return dev
};

temp = () => {
  const branchName = require("current-git-branch");

console.log(writeToFile(versionManager(branchName())));

return writeToFile(versionManager(branchName()));
  // return {
  //   host: "localhost",
  //   port: 8545,
  //   network_id: "*", // Match any network id
  //   gas: 5000000,
  // };
};
module.exports = {
  networks: {
    development: temp(),
    // development: {
    //   host: "localhost",
    //   port: 8545,
    //   network_id: "*", // Match any network id
    //   gas: 5000000,
    // },
  },
  compilers: {
    solc: {
      version: "^0.8.4",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
};
