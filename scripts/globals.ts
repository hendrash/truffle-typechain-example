import { config } from "dotenv"

export const TestNet: NetConnection = {
    BridgeEventContract: "0x37e9291645bD306B8B2955d2aeb4693F00ad30cc",
    RPC_URL: "https://data-seed-prebsc-1-s1.binance.org:8545/"
}
export const MainNet: NetConnection = {
    BridgeEventContract: "",
    RPC_URL: ""
}
export const LocalNet: NetConnection = {
    BridgeEventContract: "",
    RPC_URL: ""
}
export type NetConnection = {
    BridgeEventContract: string,
    RPC_URL: string
}
export const network = () => {
    config();
    if (process.env.NETWORK + "" === "Main_Net") {
        return MainNet;
    }
    if (process.env.NETWORK + "" === "Test_Net") {
        return TestNet;
    }
    else {
        return LocalNet
    }


}