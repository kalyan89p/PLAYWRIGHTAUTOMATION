import {test} from "@playwright/test";
//Scenario: Print 48 console 'soap' results
//step1" Lunch the browser with amazon URL
//step2: Enter the soap text in the search box and click on search button
//Step: observe the search results as "1-48 of over 40,000 results"
//Step4:  Print only 48 from above results in console

const url = ("https://www.amazon.in/");
let seachbox = ("//input[@id='twotabsearchtextbox']");
let textvalue = ("soap")
let seachbutton = ("//input[@id='nav-search-submit-button']");
let searchtext = ("//h2[@class='a-size-base a-spacing-small a-spacing-top-small a-text-normal']/span[1]");
let value =String;

let fulltext = String;
test('testcase', async({page}) => {
 await page.goto(url);
await page.locator(seachbox).fill(textvalue);
await page.locator(seachbutton).click({timeout:5000});
await page.locator(searchtext).last().waitFor({timeout:6000});
const fulltext = await page.locator(searchtext).innerText();
//console.log(fulltext);
const value = fulltext.split('-')[1].split(' ')[0];
console.log(value);




 





}
)


