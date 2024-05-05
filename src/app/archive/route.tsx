import { GetPage, mint } from '@/lib/archive'
import lighthouse from '@lighthouse-web3/sdk'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
    const link = req.nextUrl.searchParams.get('link') as string
    GetPage(link).then(async (file) => {
        const response = await lighthouse.upload(
            file,
            process.env.API_KEY_LIGHTHOUSE as string
        )
        console.log(response.data.Hash)
    })

    mint({});
    redirect('/')
}
