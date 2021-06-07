import { config } from "dotenv"

export const TestNet: NetConnection = {
    BridgeEventContract: "0x37e9291645bD306B8B2955d2aeb4693F00ad30cc",
    RPC_URL: "https://data-seed-prebsc-1-s1.binance.org:8545/"
}
export const MainNet: NetConnection = {
    BridgeEventContract: "https://bsc-dataseed.binance.org/",
    RPC_URL: "56"
}
export const LocalNet: NetConnection = {
    BridgeEventContract: "0x935bD84265ce0d6Ade43189F6084880C64834EAe",
    RPC_URL: ""
}
export type NetConnection = {
    BridgeEventContract: string,
    RPC_URL: string
}
export const network = () => {
    config();
    if (process.env.NETWORK + "" === "MAIN") {
        return MainNet;
    }
    if (process.env.NETWORK + "" === "TEST") {
        return TestNet;
    }
    else {
        return LocalNet
    }


}