// day04 Breakout session
// open website in difference browsers

import {chromium, test} from "@playwright/test"
// import {firefox, test} from "@playwright/test"
// import {test, webkit} from "@playwright/test"

test(`Launch Browser`, async()=>{
    const browser = await chromium.launch({
channel: 'msedge',
headless: false
})
    // const browser = await firefox.launch()
    // const browser = await webkit.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://amazon.com/')
    page.url();
    await page.title()
    await page.waitForTimeout(3000)
})