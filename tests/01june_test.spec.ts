import {test,expect,Locator} from "@playwright/test"

test('Dropdown',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com");
    await page.locator("#country").selectOption("India");
    // await page.locator("#country").selectOption({ value: "uk" }); // approach 2 by using value attribute from HTML DOM OR

    // await page.locator("#country").selectOption({ label: "India" }); // approach 3 by using label from drop down OR

    // await page.locator("#country").selectOption({ index: 3 }); // approach 4 by using index and index start with zero

  // 2. count number of option in the drop down

   const dropdowns: Locator = page.locator("#country>option");

  // expect(dropdowns.count()).toBe(10); OR
  await expect(dropdowns).toHaveCount(10);

  // 3 check option text from the drop down
  const dropdownOptionsTxt: string[] =
    (await dropdowns.allTextContents()).map(text => text.trim());

  console.log(dropdownOptionsTxt);

  // verify the text 'Japan'
  expect(dropdownOptionsTxt).toContain('Japan');

  // 4 print options from the drop down
  for (const option of dropdownOptionsTxt) {
      console.log(option);
  }

  await page.waitForTimeout(2000);

     

});

test.only ('Multiple option select dropdown',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com");
    await page.locator('#colors').selectOption(['Red','Blue','Green']); // approach 1 use visible text OR
  //await page.locator('#colors').selectOption(['red','blue','green']); // approach 2 use value from HTML DOM OR
  //await page.locator('#colors').selectOption([{label:'Red'},{label:'Blue'},{label:'Green'}]); // Approach 3 by labels
  //await page.locator('#colors').selectOption({0},{index:1},{index:2}); // Approach 4 using index option

  // 2 verify number of options in the drop down
  const dropDownOptions = page.locator('#colors option');
  await expect(dropDownOptions).toHaveCount(7);

  // 3 verify an option present in the drop down
  const optionsTxt: string[] =
    (await dropDownOptions.allTextContents()).map(text => text.trim());

  console.log(optionsTxt);

  expect(optionsTxt).toContain('White'); // verify if the array contains

  for (const option of optionsTxt)
  {
    console.log(option);
  }
    
  });
