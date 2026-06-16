import {test,expect,Locator} from "@playwright/test"

test.only ('Working on text element',async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    const productlist:Locator = await page.locator('.product-title')
    // console.log(await productlist.nth(2).innerText());
    // console.log(await productlist.nth(2).textContent());

    // const countTxt:number = await productlist.count();
    // for(let i=0;i<countTxt;i++)
    // {
    //     const productName:String = await productlist.nth(i).innerText()
    //     console.log(productName);
    //     const productName2:String|null = await productlist.nth(i).textContent()
    //     console.log(productName2?.trim());

    //     }
    // //2 allinnerTxt() allTextContent() method

    // const products:string[] = await productlist.allInnerTexts();
    // console.log("Prodcut name captured by allInnerText", products);

    // const productsatc:string[] = await productlist.allTextContents();
    // console.log("Prodcut name captured by allInnerText", productsatc);

    // const productstrim:string[] = productsatc.map(text => text.trim());
    // console.log("Product name after trim", productstrim)

    const productlocators:Locator[]= await productlist.all();
    console.log(productlocators);
    for(let productlocator of productlocators)
    {
        console.log(await productlocator.innerText());
    }





});