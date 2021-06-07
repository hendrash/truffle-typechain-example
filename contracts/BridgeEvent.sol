pragma solidity >=0.4.24 <=0.8.4;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract BridgeEvent{
using SafeERC20 for IERC20;
      event Bridge (
          address sender,
          uint _amount
     );
function bridgeUSDC(uint256 _amount,address stableCoin) external payable{

     IERC20(stableCoin).transferFrom(msg.sender, address(this),_amount);
    emit Bridge(msg.sender, _amount);
     }
}