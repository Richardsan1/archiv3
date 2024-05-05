import { BinaryToTextEncoding } from 'crypto'
import fs from 'fs'
import puppeteer from 'puppeteer'

export const GetPage = async (link: string) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(link)
    const html = await page.content()
    //create a save folder
    if (!fs.existsSync(process.cwd() + '/archive')) {
        fs.mkdirSync(process.cwd() + '/archive')
    }
    const fileName =
        link.split('//')[1].split('/')[0] +
        '-' +
        new Date().toISOString().replace(/:/g, '-') +
        '.html'
    const filePath = process.cwd() + '/archive/' + fileName
    fs.writeFileSync(filePath, html)

    await browser.close()
    return filePath
}

export const mint = async () => {
    const options = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + process.env.API_KEY as string,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                "contractId": process.env.CONTRACT_ID as string,
                "walletId": process.env.PUBLIC_CLIENT_ID as string,
                "quantity": 1,
                "uriNumber": 0,
            })
    };
    return await fetch('https://protocol-sandbox.lumx.io/v2/transactions/mints', options)
}