import {test, expect} from '@playwright/test'

test('Login in to the application', async({page})=>
    {
        page.goto("https://www.saucedemo.com/");
        await page.getByRole('textbox', { name: 'Username' }).fill("standard_user");
        await page.getByRole('textbox', { name: 'Password' }).fill("secret_sauce");
        await page.getByRole('button').click();

        await expect (page).toHaveURL("https://www.saucedemo.com/inventory.html");


    }
)