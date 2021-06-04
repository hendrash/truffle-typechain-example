import Web3 from "web3";
import { HttpProviderOptions } from "web3-core-helpers";
import { network } from "./globals";

export const config=()=>{require('dotenv').config()}
const httpProvider = new Web3.providers.HttpProvider(network().RPC_URL, {timeout:1000} as HttpProviderOptions)
export const web3Provider=new Web3(httpProvider);
