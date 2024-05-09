import { JsonRpcSigner, ethers } from "ethers"
import abi from './abi.json'

export type TFile = {
    id: string
    cid: string
    fileName: string
    timestamp: number
}

export const mint = async (data: string, wallet: JsonRpcSigner) => {
    const contract = new ethers.Contract( "0xc90F06B849Fd7F8a4931C03a0AfA218C54eB25A5", abi, wallet)
    const add = await wallet.getAddress()
    const tx = await contract.mint(add, data)
    await tx.wait()
    return tx.hash
}