import Web3 from "web3";
import { HttpProviderOptions } from "web3-core-helpers";
import { networkConfig } from "./globals";

export const config=()=>{require('dotenv').config()}
const httpProvider = new Web3.providers.HttpProvider(networkConfig().RPC_URL, {timeout:10000} as HttpProviderOptions)
export const web3Provider=new Web3(httpProvider);
