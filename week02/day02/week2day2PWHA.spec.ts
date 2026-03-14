//week02day02 PlayWright Home Assignment 1
//Red Bus and Flipkart in Edge and Firefox Browser Instances (Week2.Day2)

import{firefox,chromium, test} from "@playwright/test"
import { channel } from "node:diagnostics_channel";

test(`RedBus in Edge`,async()=>{
    const browser = await chromium.launch({
channel: 'msedge',
headless: false
})
const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://www.redbus.in/");
console.log(await page.title());
console.log(page.url());
await page.waitForTimeout(2000);
await browser.close();
})

test(`FlipKart in FirFox`,async()=>{
    const browser = await firefox.launch({headless: false
})
const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://www.flipkart.com/");
console.log(await page.title());
console.log(page.url());
await page.waitForTimeout(2000);
await browser.close();
})