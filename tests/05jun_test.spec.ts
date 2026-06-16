import {test, expect, Locator} from "@playwright/test"

test("Autowating", async({page})=>{
    test.slow()
    test.setTimeout(5000);
    await page.goto("https://demowebshop.tricentis.com/");
//     await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
//      // Step 3: Verify welcome text is visible
//     // Auto retry: waits for the element to be visible
//     await expect(
//     page.locator("//h2[normalize-space()='Welcome to our store']")
//   ).toBeVisible({timeout:1000});
    
//   // Non-retrying assertion
//     const title = await page.title();
//     console.log("Page title is --->", title);
//   expect(title.includes("Demo Web Shop")).toBeTruthy();

//     const welcomeTxt = await page
//         .locator(".topic-html-content-header")
//         .textContent();

//     expect(welcomeTxt).toContain("Welcome");

//     // Negating matcher examples
//     await expect(
//     page.locator(".topic-html-content-header")
// ).toBeVisible();

//     await expect(
//         page.locator(".topic-html-content-header")
//     ).not.toBeVisible();

//     expect(welcomeTxt).not.toContain("Welcome");

//   await page.locator("#small-searchterms").fill("laptop", { force: true });

//   await page.locator("input[value='Search']").click({ force: true });
  //Hard Assertion
  // await expect(page).toHaveTitle('Demo web shop')
  // await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
  // const logo = page.locator("img[alt='Tricentis Demo Web Shop']");
  // await expect(logo).toBeVisible();

  //Soft Assertion 

   await expect.soft(page).toHaveTitle('Demo web shop')
  await expect.soft(page).toHaveURL('https://demowebshop.tricentis.com/');
  const logo = page.locator("img[alt='Tricentis Demo Web Shop']");
  await expect.soft(logo).toBeVisible();



})