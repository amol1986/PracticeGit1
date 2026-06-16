import {test,expect,Locator} from "@playwright/test"

test("Playwright xpath option ", async({page})=>{

// Step1  goto website url
await page.goto("https://demowebshop.tricentis.com/");

// Step 2 Absolute xpath
// const logopage= page.locator("/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");

// Step 3 verify logo is present
// await expect(logopage).toBeVisible();


// Step 2 relative xpath

const logo = page.locator("//img[@alt='Tricentis Demo Web Shop']");

// Step 3 verify logo is present
await expect(logo).toBeVisible();
//3 use contains method
const products:Locator = page.locator("//h2//a[contains(@href,'computer')]");

console.log("Total values are --->",await products.count());

const productCount:number=await products.count();

expect(productCount).toBeGreaterThan(0);
console.log("Last computer related products --->", await products.last().textContent());
console.log("First computer related products --->", await products.first().textContent());
console.log("Second computer related products --->", await products.nth(2).textContent());

let productTitle:string[] = await products.allTextContents();
for(let pt of productTitle)
{
    console.log(pt);
}

//4. Startwith
const buildingProducts:Locator = page.locator("//h2[a[starts-with(@href,'/build')]]");
const countProducts = await buildingProducts.count();
console.log(" Total product count start with build --->",
countProducts);
expect(countProducts).toBeGreaterThan(0);

//5. text OR .[dot] OR normalize-space() method

const regLink:Locator= page.locator("//a[text()='Register']");
await expect(regLink).toBeVisible();

// 6 use last()
// page.locator("//div[@class='column follow-us']/ul/li[position()=4]")
const lastItem:Locator=page.locator("//div[@class='column follow-us']/ul/li[last()]");
await expect(lastItem).toBeVisible();
const position:Locator = page.locator("//div[@class='column follow-us']/ul/li[last()]")



})


test('Dynamic value xpath', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/')

    for (let i=0; i<=5; i++)
    {
        let button:Locator = page.locator("//button[starts-with(@name,'st')]")
        await button.click()
        await page.waitForTimeout(2000);
    }

});