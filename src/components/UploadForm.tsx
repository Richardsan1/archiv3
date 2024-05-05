"use client"

import { WalletContextProvider } from "@lumx-protocol/embedded-wallet"

export default function UploadForm() {
    return (
            // <WalletContextProvider>
        <form action="/archive" className="flex flex-col gap-1">
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