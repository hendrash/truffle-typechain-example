import { config } from "dotenv"

export const TestNet: NetConnection = {
    BridgeEventContractAddress: "0x14b1F96ec33B08f9c13f855A97Ce2F1e8337a525",
    RPC_URL: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    stableCoinAddress: '0x9780881Bf45B83Ee028c4c1De7e0C168dF8e9eEF',//https://testnet.bscscan.com/address/0xE80F6a8221B94D42D2A373CD3A054ae7d189C6F9#code 
    walletConfig: {
        address: "0x276e4B2EdE2a6d6A30A9E4453f9Ef6d69FFf3CD8"
    }
}
export const MainNet: NetConnection = {
    BridgeEventContractAddress: "",
    RPC_URL: "https://bsc-dataseed.binance.org/",
    stableCoinAddress: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    walletConfig: {
        address: "0x276e4B2EdE2a6d6A30A9E4453f9Ef6d69FFf3CD8"
    }
}
export const LocalNet: NetConnection = {
    BridgeEventContractAddress: "0x3EA4CD4c8E5603F967258D3C829d5a75c355dF1C",
    RPC_URL: "",
    stableCoinAddress: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
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