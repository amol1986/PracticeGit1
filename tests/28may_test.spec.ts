import {test, expect, Locator } from '@playwright/test'

test("",async({page})=>
{

});

test.only ('Checkbox Object element ', async ({page})=>{

// Step 1 goto website url
await page.goto("https://testautomationpractice.blogspot.com/");

// Step 2 check Thursday checkbox
const ThursdayCheckbox:Locator= page.getByLabel('Thursday');
ThursdayCheckbox.check(); // check thursday checkbox
await expect(ThursdayCheckbox).toBeChecked();// verify Thursday checkbox is checked or not

// step 3 select all the checkboxes from the page
const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']; // array of String
const checkboxes:Locator[]=days.map(index => page.getByLabel(index));
expect(checkboxes.length).toBe(7);

// select all the checkboxes and assert each is checked
for(const checkbox of checkboxes) //checkbox is temp variable
{
    await checkbox.check(); // check all the checkboxes
    await expect(checkbox).toBeChecked();
}

await page.waitForTimeout(3000);

});