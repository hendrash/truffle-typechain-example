pragma solidity >=0.4.24 <=0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";


contract BridgeEvent{

using SafeERC20 for IERC20;

      event bridge (
          address sender,
          uint256 status
     );

     event Logger (uint256,address,address,address );
     event error(string,address);

function bridgeUSDC(uint256 _amount,address payable _stableCoin) external payable{
    (bool transferedSuccess,) = _stableCoin.call{value: msg.value} (
     abi.encodeWithSignature(("safeTransferFrom(IERC20,address, address, unit256)"), _stableCoin,msg.sender, address(this), _amount)
    );
    require(transferedSuccess,"Contract transfer failed !");

    (bool getBalanceSuccess,bytes memory data) = _stableCoin.call{value: msg.value} (
     abi.encodeWithSignature(("balanceOf(address)"), _stableCoin)
    );
    require(getBalanceSuccess,"Contract transfer failed !");

    uint256 value;
    assembly{
        value :=mload(add(data, 0x20))
    }
     emit bridge(msg.sender,value);
    }

    fallback() external{
     revert();
    }
}


