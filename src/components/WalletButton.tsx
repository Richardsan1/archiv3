'use client'
import connect from '@/lib/connect'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import { useEffect, useState } from 'react'
import {signerAtom} from './SignerContext'
import { useAtom } from 'jotai'
declare global {
    interface Window {
        ethereum?: any
    }
}

export default function WalletButton() {
    const [isSigned, setIsSigned] = useState(false)
    const [signer, setSigner] = useAtom(signerAtom)
    console.log({signer})
    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', () => {
                connect().then((res) => {
                    setIsSigned(true)
                    setSigner(() => res)
                })
            })
        }
    })
    return (
        <>
            <button
                onClick={() =>
                    connect().then((res) => {
                        setSigner(() => res)
                        setIsSigned(true)
                    })
                }
                className="flex items-center gap-2 rounded-lg border-2 border-black p-2"
            >
                <AccountBalanceWalletIcon />
                {isSigned ? 'Conectado': 'Conectar Carteira'}
            </button>
        </>
    )
}
