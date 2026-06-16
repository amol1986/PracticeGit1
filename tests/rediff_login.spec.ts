import{test,expect,Locator} from "@playwright/test"
test("Rediff signin in Playwright stadared locator",async({page})=>
{
    //Step1: open the rediff URL
    page.goto("https://www.rediff.com/");
    //Step2: Verify the page title
    expect(page).toHaveURL("https://www.rediff.com/");
    //Step3: Click on the sign in link
    //await page.getByRole('link', {name:/Sign in/i}).click();
    await page.click("//a[normalize-space()='Sign in']")
    // Step 3 enter username
    //await page.locator('input.email-input').fill("vivek.joglekar");
    await page.fill("//input[@id='login1']","Vivek");

    // Step 4 enter password
    //await page.locator('input.form-control').fill("vivek123");
    await page.fill("//input[@id='password']","vivek123")
    // Step 5 click on Sign in button
    //await page.getByRole('button', { name: /Log In/i }).click();
    await page.click("//button[normalize-space()='Log In']");

    await page.waitForTimeout(3000);

    // Step 6 verify the page title
    await expect(page).toHaveTitle("Rediffmail - Free Email for Login with Secure Access");


})