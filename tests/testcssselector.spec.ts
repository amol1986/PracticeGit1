import { test, expect } from "@playwright/test";

test("Playwright CSS Selector", async ({ page }) => {

    // Step 1: Open website
    await page.goto("https://demowebshop.tricentis.com/");

    // Step 2: Verify page title
    await expect(page).toHaveTitle("Demo Web Shop");

    // Step 3: Verify search box is visible
    await expect(page.locator("#small-searchterms")).toBeVisible();

    // Step 4: Enter product name
    await page.locator("#small-searchterms").fill("Computer");
    await page.locator("input.search-box-text.ui-autocomplete-input").fill("Laptop");
    await page.locator("input.search-box-text[value='Search store']").fill("Laptop");
    await page.waitForTimeout(2000);
   

});

