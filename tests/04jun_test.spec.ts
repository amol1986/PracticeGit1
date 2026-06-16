import {test, expect, Locator} from '@playwright/test'
 test("Verify the Dynamic table",async({page})=>
{   //Step1 = Go to Page URL
    await page.goto("https://practice.expandtesting.com/dynamic-table");
    //Step2= store table visible or not
    const table:Locator = page.locator("table.table>tbody");
    await expect(table).toBeVisible();
    const rows = await table.locator("tr").all();
    console.log("Numbers of rows in Table ",rows.length);
    expect(rows).toHaveLength(4);
    let cpuload='';
    for (const row of rows)
        {
            const processname = await row.locator("td").nth(0).innerText();
            if (processname ==="Chrome")
            {
                cpuload = await row.locator("td", {hasText:'%'}).innerText();
                console.log(cpuload);
                break;
            }
        } 

    const chromecpuload:string = await page.locator("#chrome-cpu").innerText();
    
    console.log(chromecpuload);
    if (chromecpuload.includes(cpuload))
    {
        console.log("Yelllow box text is matched")
    }



});