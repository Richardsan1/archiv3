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
    fs.writeFileSync(process.cwd() + '/archive/' + fileName, html)

    await browser.close()
}
