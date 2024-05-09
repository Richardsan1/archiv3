import { JsonRpcSigner } from 'ethers'
import {atom} from 'jotai'
export const signerAtom = atom<JsonRpcSigner | null>(null)


