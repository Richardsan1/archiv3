import { GetPage } from '@/lib/archive'
import lighthouse from '@lighthouse-web3/sdk'
import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
    const body = await req.json()
    const link = body.link as string
    const hash = await GetPage(link).then(async (file) => {
        const response = await lighthouse.upload(
            file,
            process.env.API_KEY_LIGHTHOUSE as string
        )
        return response.data.Hash
    })

    revalidatePath(`${process.env.SERVER_URL}/api/library`)
    return new Response(JSON.stringify({ hash }), {status: 200})
}
