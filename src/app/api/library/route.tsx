import lighthouse from '@lighthouse-web3/sdk'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
    const CIDs = await lighthouse.getUploads(
        process.env.API_KEY_LIGHTHOUSE as string
    )
    const files = CIDs.data.fileList
    const filesWithInfo = await files.map(async (file) => {
        const info = await lighthouse.getFileInfo(file.cid)

        return {
            id: file.id,
            cid: file.cid,
            fileName: info.data.fileName
        }
    })
    console.log(CIDs.data.fileList, filesWithInfo)
    return new Response(JSON.stringify(filesWithInfo), {
        headers: { 'content-type': 'application/json' }
    })
}
