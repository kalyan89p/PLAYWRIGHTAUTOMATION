import test from "@playwright/test";
const url="https://www.flipkart.com/";
let search = ("//form[@class='lilxh_ header-form-search']//input[@placeholder='Search for Products, Brands and More']");
let searchbutton = ("//button[@type='submit']");
let rate = ("//div[@class='hZ3P6w']");

//Testdata
let soap = "soap";

test('test001', async({page})=>{
await page.goto(url);
await page.locator(search).fill(soap);
await page.locator(searchbutton).click();
await page.locator(rate).last().waitFor({timeout:5000});







})


