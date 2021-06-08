import BridgeEvent from "../build/abi/BridgeEvent.json"
import { web3Provider } from "./config"
import { networkConfig } from "./globals"

async function server() {
    const bridgeEvent = new web3Provider.eth.Contract((BridgeEvent as any), networkConfig().BridgeEventContractAddress)
    try {
    console.log((await bridgeEvent.methods.getVarLog('1000',networkConfig().stableCoinAddress).send({
            from: networkConfig().walletConfig.address
        },function(err:any, res:any,a:any){
                if (err) {
                    console.error("Error from within the contract:\n", err,res)
                    return;
                } else {
                    console.log("Transaction Hash: \t" + res)
                }
 
        })))
        // console.log(await bridgeEvent.methods.bridgeUSDC('10000',networkConfig().stableCoinAddress).send({
        //     from: networkConfig().walletConfig.address
        // },
        //     function (err: any, res: any) {
        //         if (err) {
        //             console.error("Error from within the contract:\n", err,res)
        //             return;
        //         } else {
        //             console.log("Transaction Hash: \t" + res)
        //         }
        //     }))
    }
    catch (e) {
        console.log(e)
    }
}

server();