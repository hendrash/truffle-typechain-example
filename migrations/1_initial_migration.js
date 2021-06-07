const Migrations = artifacts.require("Migrations");
const BridgeEvent = artifacts.require("BridgeEvent");
module.exports = function(deployer) {
  // deployer.deploy(Migrations);
  deployer.deploy(BridgeEvent);
};
