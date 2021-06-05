import { config } from "dotenv"
import BridgeEvent from "../build/contracts/BridgeEvent.json"
import { web3Provider } from "./config"
import { network, TestNet } from "./globals"

async function server() {
    const bridgeEvent = new web3Provider.eth.Contract((BridgeEvent as any), network().BridgeEventContract)
    // console.log(bridgeEvent)
    console.log(await bridgeEvent.methods.bridgeUSDC('1').send({
        from: '0x276e4B2EdE2a6d6A30A9E4453f9Ef6d69FFf3CD8'
    }))
}

server();