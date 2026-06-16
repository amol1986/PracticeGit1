import {test,expect} from "@playwright/test";
/*
What is async & await
-- async is a function & await is valid async function .
- zero or more await expression can be wrotten inside async function
- when each time async function is called, which will return resolved promised value or rejected with an exception details.
what is test
test function is used to define an individual tests. it provides a way to structure and organize your tests bu giving them name and it
it takes 2 arguments
first argument provide test title
second arguments provide is async() function
What is page?
It browser page object. It allows interact with web browser
you can perform click, type/fill etc
Also it contains various method
What is expect
Playwright expect is powerful and provide rich set of matchers for various type of check
such as checking elements visibility, text content existence etc.
expect is used for verification or assertion purpose.
Headless mode means it wont open any browser physically .all steps runs in back ground
All test cases RUN headed mode use command npx playwright test
run SPECIFIC TEST CASES & headless mode - npx playwright test May6_Amol.spec.ts
run specific test and with headed mode --> npx playwright test <filename.spec.ts> --headed
run specific browser test and with headed mode --> npx playwright test <filename.spec.ts> --headed --project="chromium"
*/
test("TC 01 ",async ({page})=>{

// step 1 goto website url
await page.goto("https://www.google.com/");

// step 2 verify page title
await expect(page).toHaveTitle("Google");
//await expect(page).toHaveURL("/Google/")); // verift page RUL

// step 3
await page.waitForTimeout(2000);
await page.click("text=About");
await page.waitForTimeout(2000);
await page.reload();
await page.waitForTimeout(2000);
await page.goBack();
await page.waitForTimeout(2000);
await page.goForward();
await page.waitForTimeout(2000);



await page.close();

})

test('Built-in locators in Playwright using getByAltText and getByText', async ({ page }) => {
    await expect(headingText).toBeVisible();

    // Notes:
    // 1. For interactive elements like buttons, links, inputs, prefer using role locators:
    //    page.getByRole('button', { name: 'Add to cart' });
    // 2. Avoid page.waitForTimeout() for waiting for elements. Use expect().toBeVisible() or page.waitForSelector() instead.
    // 3. getByRole() - locate by Role()
    // Role locators includes button, checkboxes, headings, links, lists, tables
    // and many more and follow W3C specifications for ARIA roles

    // prefer fro interactive elements such as button, checkboxes, links, heading, tables etc.

    await page.getByRole("link",{"name":"Register"}).click();
    // verify Register heading
    await expect(page.getByRole('heading', { name: /Register/i })).toBeVisible();

    // 4 getByLabel()- Locate form control ny label's text
    // when to use :- est for form which have feilds
    await page.getByLabel("First name").fill("Vivek");
    await page.getByLabel("Last Name").fill("Joglekar"); // type method is deprecated means old
    await page.getByLabel("Email").fill("vivek@gmail.com"); // type is old method still can use it

    // 5. getByPlaceholder() find element with a given placeholder text
    // Nest for inputs without a lbel but have a palceholder
    await page.getByPlaceholder('Search store', { exact: true }).fill("laptop");

    // 6. getByTitle() to locate an element by its title attribute
    // When to ue:- When your element has a meangful title attribute
    await expect(page.getByTitle('Issues count')).toHaveText('25 issues');

});




















