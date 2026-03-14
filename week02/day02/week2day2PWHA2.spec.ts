//week02day02 PlayWright Home Assignment 2
/*Create a test script that navigates to a CRM application, logs in, finds a specific lead by name or
ID, edits details of the lead (such as name, email, or status), and verifies that the changes have
been successfully saved. */

import{test} from "@playwright/test"

test("CRM test",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator(`#username`).fill("Demosalesmanager");
    await page.locator(`#password`).fill("crmsfa");
    await page.locator(`.decorativeSubmit`).click();
    await page.locator(`.crmsfa`).click();
    await page.locator(`[class="x-panel-header"]`).nth(1).click();
    await page.locator(`a[href="/crmsfa/control/createLeadForm"]`).click();
    await page.locator(`.inputBox`).nth(0).fill("AMAZON");
    await page.locator(`.inputBox`).nth(2).fill("Mani");
    await page.locator(`.inputBox`).nth(3).fill("Kandan");
    await page.locator(`.inputBox`).nth(8).fill("Mr.");
    await page.locator(`.inputBox`).nth(10).fill("Dr.");
    await page.locator(`.inputBox`).nth(12).fill("800000");
    await page.locator(`.inputBox`).nth(11).fill("Testing");
    await page.locator(`.inputBox`).nth(23).fill("7401012945");
    await page.locator(`.smallSubmit`).click();
    await page.waitForTimeout(10000);
    console.log(await page.title());
}
)