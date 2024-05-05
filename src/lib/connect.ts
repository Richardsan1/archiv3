import { JsonRpcSigner, ethers } from "ethers";

export default async function connect() {
    let signer: JsonRpcSigner | null = null;
    let provider;
    if (!window.ethereum) {
        console.log("MetaMask not installed; using read-only defaults")
        provider = ethers.getDefaultProvider()
    } else {
        provider = new ethers.BrowserProvider(window.ethereum)
        signer = await provider.getSigner();
    }

    return signer;
}