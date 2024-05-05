"use client"
// import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import  connect  from '@/lib/connect'
import { useState } from 'react'
import {JsonRpcSigner} from "ethers";
declare global {   interface Window{     ethereum?:any   } }

export default function WalletButton() {
    const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
    return (
        <>
            <button onClick={() => connect().then((res) => {setSigner(res)})} className="flex items-center gap-2 border-2 border-black p-2 rounded-lg">
                <AccountBalanceWalletIcon />
                {signer == null? "Conectar Carteira": "Conectado"}
            </button>
        </>
    );
}