import{test,expect} from '@playwright/test'

test('',async({page})=>{
    //Step 1: Go to the website url
await page.goto("https://www.rediff.com/");
    //Step 2: Click on the login button
   await page.click("//a[normalize-space()='Sign in']");
    //Step 3: Enter the username and password
  await page.fill("#login1","Amol");
    await page.fill("#password","Account@123");
    //Step 4: Click on the sign in link
   await page.click("button[name='proceed']");

});

test ('Rediff popup alert handling', async ({ page }) => {

  // Open website
  await page.goto('https://www.rediff.com/', {
    waitUntil: 'domcontentloaded'
  });

  // Click Sign in
   await page.getByRole('link', { name: 'Sign in' }).click();

  // Handle alert BEFORE clicking proceed
  page.on('dialog', async dialog => {
    console.log(dialog.message());

    await expect(dialog.message())
      .toContain('Please enter a valid user name');

    await dialog.accept();
  });

  // Keep username/password blank
  await page.fill('#login1', '');
  await page.fill('#password', '');

  // Trigger alert popup
  await page.locator("input[name='proceed']").click();
});

test.only ('JQuerry', async ({ page }) => {

  // Open website
  await page.goto('https://jqueryui.com/autocomplete/', {
    waitUntil: 'domcontentloaded'
  });

  const frameobj =page.frameLocator(".demo-frame");
  
  await page.fill("#tags","Amol");
  console.log("Alerpopup handdle successfully")

});