// Import Playwright test methods
import { test, expect } from '@playwright/test';
// Import Excel reader utility
import { readExcel } from '../utils/excelReader';
// Read all records from Excel file
const loginData: any[] = readExcel('./test-data/login-data.xls');
// Loop through each row from Excel
for (const data of loginData) {
    // Create separate test for every Excel row
    test(`Login Test for ${data.username}`, async ({ page }) => {
        // Navigate to SauceDemo website
        await page.goto('https://www.saucedemo.com/');
        // Verify login page is displayed
        await expect(page).toHaveTitle('Swag Labs');
        // Enter username from Excel sheet
        await page.locator('#user-name').fill(data.username);
        // Enter password from Excel sheet
        await page.locator('#password').fill(data.password);
        // Click Login button
        await page.locator('#login-button').click();
        // Verify user navigated to inventory page
        await expect(page).toHaveURL(/inventory/);
        // Verify Products title is visible
        await expect(
            page.locator('.title')
        ).toHaveText('Products');
        // Print success message in console
        console.log(`Login successful for: ${data.username}`);
    });
}
 