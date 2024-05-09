'use client'

import { useAtomValue } from "jotai"
import {signerAtom} from "./SignerContext"
import { JsonRpcSigner } from "ethers"
import { mint } from "@/lib/utils"
export default function UploadForm() {
    const wallet = useAtomValue(signerAtom)

    return (
        <form action="/api/archive" method="POST" className="flex flex-col gap-1" onSubmit={async (e) =>{
            e.preventDefault()
            const formData = new FormData(e.target as HTMLFormElement)
            const link = formData.get('link')
            if (wallet && link) {
                const hash = (await (await fetch('/api/archive', {
                    method: 'POST',
                    body: JSON.stringify({ link }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })).json()).hash as string
                const hx = await mint(hash, wallet as JsonRpcSigner)
                alert(`Arquivado com sucesso! Hash: ${hx}`)
            } else {
                alert('Conecte sua carteira ou digite um link')
            }
        }}>
            <input
                type="text"
                name="link"
                className="border border-black p-1"
                placeholder="Insira o link aqui"
            />

            <button
                className="rounded-lg border border-black bg-black p-1 text-white"
                type="submit"
            >
                Arquivar
            </button>
        </form>
    )
}
