pragma solidity >=0.4.24 <=0.8.4;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract BridgeEvent{
using SafeERC20 for IERC20;

address binance_Peg_USD_Coin=0xD28645F910f031F84Edfa3B149C3bF2514fd8825;//https://testnet.bscscan.com/token/0xd28645f910f031f84edfa3b149c3bf2514fd8825?a=0x84f60cd9d70f69a49cb1d063cb558bfc58eb88ad
      event Bridge (
          address sender,
          uint _amount
     );

// address binance_Peg_USD_Coin=0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d;
function bridgeUSDC(uint256 _amount) external payable{
     IERC20(address(binance_Peg_USD_Coin)).transferFrom(msg.sender, address(this),_amount);
    emit Bridge(msg.sender, _amount);
     }
}