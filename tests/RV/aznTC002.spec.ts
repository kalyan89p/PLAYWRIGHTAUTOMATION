import test from "@playwright/test";
//Scenario: Print we have 48 results in console


const url = "https://www.amazon.in/";
let seachbox = ("//input[@id='twotabsearchtextbox']");
let textvalue = ("soap")
let button = ("//input[@id='nav-search-submit-button']");
let brands = ("//div[@id='brandsRefinements']");
let brandscount;
let Brandtext;
let seemore = "//a[@aria-label='See more, Brands']//span[@class='a-expander-prompt']";

test('test', async ({page})=> {
await page.goto(url);
await page.locator(seachbox).fill(textvalue);
await page.locator(button).click();
await page.waitForSelector(seemore, {state: 'visible', timeout: 5000 });
await page.locator(seemore).last().waitFor({timeout:8000})
await page.locator(seemore).click();
await page.locator(seemore).last().waitFor({timeout:8000});
brandscount = await page.locator(brands).count();
Brandtext = await page.locator(brands).allInnerTexts();
console.log(Brandtext);
console.log(brandscount)




})
