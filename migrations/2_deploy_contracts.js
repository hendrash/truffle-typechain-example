const { createNoSubstitutionTemplateLiteral } = require("typescript");

const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const BridgeEvent = artifacts.require("BridgeEvent");
module.exports = function(deployer, test) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
  console.log(deployer,"\n\n\n==", test)
  // deployer.autolink();
  deployer.deploy(BridgeEvent);
};
// tcp.port == 8545 && ip.addr==54.199.148.5
// useful for debugging