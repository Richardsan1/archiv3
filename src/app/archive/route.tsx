import { GetPage } from '@/lib/archive'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
    const link = req.nextUrl.searchParams.get('link') as string
    await GetPage(link)
    redirect('/')
}
