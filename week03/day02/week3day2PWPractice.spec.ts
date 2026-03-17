import {test,expect} from "@playwright/test"
import { add } from "./week3day2typeScript";

test("Learn Assertions", async ({ page }) => {
    await page.goto('https://leafground.com/input.xhtml');
    await expect(page.locator(`[placeholder="Disabled"]`)).toBeDisabled();
    await expect(page.locator(`[placeholder="Babu Manickam"]`)).toBeEditable();
    page.locator(`[placeholder="Babu Manickam"]`).fill("MANIKANDAN");
    await expect.soft(page.locator(`[placeholder="About yourself"]`)).toBeDisabled();
    page.locator(`[placeholder="About yourself"]`).fill("Playwright Learning");
    console.log(add(10,20));
    await page.waitForTimeout(5000);
})