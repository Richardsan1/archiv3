'use client'
// import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";
import connect from '@/lib/connect'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import { JsonRpcSigner } from 'ethers'
import { useState } from 'react'
declare global {
    interface Window {
        ethereum?: any
    }
}

export default function WalletButton() {
    const [signer, setSigner] = useState<JsonRpcSigner | null>(null)
    return (
        <>
            <button
                onClick={() =>
                    connect().then((res) => {
                        setSigner(res)
                    })
                }
                className="flex items-center gap-2 rounded-lg border-2 border-black p-2"
            >
                <AccountBalanceWalletIcon />
                {signer == null ? 'Conectar Carteira' : 'Conectado'}
            </button>
        </>
    )
}
