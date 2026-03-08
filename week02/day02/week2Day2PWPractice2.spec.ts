// day04 Breakout session 2
// open Sales force website and Login successfully 
// Use different CSS selector strategies (ID, Class, Attribute) to locate the username and password fields.

import{test} from "@playwright/test"

test("Test Locator",async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com") //id locator used
    await page.locator(`[class="input r4 wide mb16 mt8 password"]`).fill("TestLeaf@2025") // class locator used
    await page.locator(`input`).nth(21).click() // nth method used
    await page.waitForTimeout(10000)


})

