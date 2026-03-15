import{test} from "@playwright/test"

test("Test Locator",async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator(`//input[@id="username"]`).fill("dilipkumar.rajendran@testleaf.com") //attribute based xpath for id attribute
    await page.locator(`//input[contains(@class,"password")]`).fill("TestLeaf@2025") //partial attribute based xpath for class attribute
    await page.locator(`//input[@id="Login"]`).click()
    await page.waitForTimeout(5000)
})