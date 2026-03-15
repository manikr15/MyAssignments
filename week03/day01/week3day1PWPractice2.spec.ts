import{test} from "@playwright/test"

test("CRM test",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator(`#username`).fill("Demosalesmanager");
    await page.locator(`#password`).fill("crmsfa");
    await page.locator(`.decorativeSubmit`).click();
    await page.locator(`.crmsfa`).click();
    await page.locator(`[class="x-panel-header"]`).nth(1).click();
    await page.locator(`a[href="/crmsfa/control/createLeadForm"]`).click();
    await page.waitForTimeout(5000);
    const alldropdownValues = page.locator(`(//select[@id="createLeadForm_industryEnumId"]/option)`);
    const dropDownCount = await alldropdownValues.count();
    console.log(dropDownCount);
    console.log(await page.title());
    await page.waitForTimeout(3000);
    for (let i = 0; i <dropDownCount; i++) {
       console.log( await alldropdownValues.nth(i).textContent());
    }
    await page.waitForTimeout(5000);

})