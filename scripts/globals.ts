import { config } from "dotenv"

export const TestNet: NetConnection = {
    BridgeEventContractAddress: "0xfA2D9Df5F5d8A26B821c3F2f564F7BdB2D9342F2",
    RPC_URL: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    stableCoinAddress: '0xd37eAa8738F8AC6B48217b46a918Cf39929cEAB5',
    // https://testnet.bscscan.com/address/0xd37eaa8738f8ac6b48217b46a918cf39929ceab5
    walletConfig: {
        address: "0x276e4B2EdE2a6d6A30A9E4453f9Ef6d69FFf3CD8"
    }
}
// https://bscscan.com/address/0xe9e7cea3dedca5984780bafc599bd69add087d56
export const MainNet: NetConnection = {
    BridgeEventContractAddress: "0xd37eAa8738F8AC6B48217b46a918Cf39929cEAB5",
    RPC_URL: "https://bsc-dataseed.binance.org/",
    stableCoinAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    walletConfig: {
        address: "0x276e4B2EdE2a6d6A30A9E4453f9Ef6d69FFf3CD8"
    }
}
export const LocalNet: NetConnection = {
    BridgeEventContractAddress: "0x2dcb487C74F3bFBE119d6128067A72F215e1B766",
    RPC_URL: "",
    stableCoinAddress: '0xD9D4d7dd5926db78754F5d4dbC28C389C4601982',
    walletConfig: {
        address: "0xa84019C3A670826555D3442EfB68ED49fd1660F4"
    }
}
export type NetConnection = {
    BridgeEventContractAddress: string,
    RPC_URL: string
    stableCoinAddress: string
    walletConfig: WalletConnection

}
export type WalletConnection = {
    address: string
}
export const networkConfig = () => {
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