import { config } from "dotenv"
import BridgeEvent from "../build/contracts/BridgeEvent.json"
import { web3Provider } from "./config"
import { network, TestNet } from "./globals"

async function server() {
    const bridgeEvent = new web3Provider.eth.Contract((BridgeEvent as any), network().BridgeEventContract)
    let i = await bridgeEvent.methods
    console.log(await bridgeEvent.methods)
}

server();