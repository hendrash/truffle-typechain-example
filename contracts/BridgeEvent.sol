pragma solidity >=0.4.24 <=0.8.4;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";


contract BridgeEvent{
using SafeERC20 for IERC20;
      event Bridge (
          address sender,
          uint _amount
     );
      IERC20 public token;
     event Logger (uint256 _amount,address stableCoin,address addressThis,address msgSender,uint256 stable);
function bridgeUSDC(uint256 _amount,address stableCoin) external payable{
    token= IERC20(stableCoin);
     token.transferFrom(msg.sender, address(this),_amount);
     emit Bridge(msg.sender, _amount);
}
     
function getVarLog(uint256 _amount,address stableCoin) external payable{
     token=IERC20(stableCoin);
     emit Logger(_amount, stableCoin,address(this),msg.sender, token.totalSupply());
}
}