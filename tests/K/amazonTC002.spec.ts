import { test } from '@playwright/test';

// scenario: print the soap rates on page1 of amazon
// steps1: launch amazon.in - done
// step2: enter soaps in search box
// step3: click bhootaddam
// steps4: print the rates
// {print logic find the number of rates }
//{write for loop to print the rates for the number of rates}
//  
const url = "https://www.amazon.in/";
let searchbox = "//input[@id='twotabsearchtextbox']";
let searchText = "Soap"; 
let bhotaddam = "//input[@type='submit']";
let rateXpath = "//div[@data-cy='price-recipe']/div/div/a/span/span/span[@class='a-price-whole']";
let rateCount = 0;
let rate; 
test('Amazon TC002',async ({ page }) => {
    await page.goto(url);
    await page.locator(searchbox).fill(searchText);
    await page.locator(bhotaddam).click();
    await page.locator(rateXpath).last().waitFor({timeout:5000});
    rateCount = await page.locator(rateXpath).count(); //67    
    rate = await page.locator(rateXpath).allInnerTexts();
    //console.log(rate);
    let rateLength: number = rate.length;
    console.log(rateLength);
    for(let i=0;i<rateLength;i++){
        console.log(i+1+"soap rate"+rate[i]);
    }
});

//TEST CASE 2 = print "WE HAVE 48 PAGES" in console output.
//test case 3 = print top brand names in console output.