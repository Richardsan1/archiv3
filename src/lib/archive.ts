
const puppeteer = require('puppeteer');
const fs = require('fs');

export const GetPage = async (link: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto(link);  
  const html = await page.content();

  fs.writeFileSync(fs.pwd()+ "/" + page.title, html);

  await browser.close();
};

