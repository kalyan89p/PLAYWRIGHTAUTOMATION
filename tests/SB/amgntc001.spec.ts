//Scenario: Print all brand names about 'soap' search results
//step1" Launch the browser with amazon URL
//step2: Enter the soap text in the search box and click on search button
//Step3: observe the search results as "1-48 of over 40,000 results"
//Step4: Print all brand names about 'soap' search results
import {test} from '@playwright/test';
const url = ("https://www.amazon.in/");
let searchbox = ("//input[@id='twotabsearchtextbox']");
let searchbutton = ("//span[@id='nav-search-submit-text']");
const print = ("//div[@id='brandsRefinements']/ul/span/span");
const seemore = ("//a[@aria-label='See more, Brands']//span[@class='a-expander-prompt'][normalize-space()='See more']");
const alltexts = ("///ul[@id='filter-p_123']");
test('testcase',async({page})=>{
    await page.goto(url);
    await page.locator(searchbox).fill('soap');
    await page.locator(searchbutton).click({timeout:10000});
    await page.locator(seemore).click({timeout:10000});
    const allbrands = await page.locator(print).allInnerTexts();
    console.log(allbrands);
    await page.locator(seemore).click({timeout:10000});
    //console.log(allbrands);
    //
   // const all = await page.locator(alltexts).innerText();
    //console.log(all);


    

    


    




})
