import {test} from '@playwright/test';
let url = "https://testautomationpractice.blogspot.com/";
let name = "//input[@id='name']";
let email = "//input[@id='email']";
let phone = "//input[@id='phone']";
let address = "//textarea[@id='textarea']";
let gender = "//input[@id='male']";
let week = "//input[@id='monday']";
let country = "//select[@id='country']";

//Test Data
let Nametext = "Shanmukha";
let emailtext = "shanmukha@gmail.com";
let phonenumber= "9573310017";
let addressText = "Hyderabad";


test('test', async ({page}) => {
await page.goto(url);
await page.locator(name).fill(Nametext);
await page.locator(email).fill(emailtext);
await page.locator(phone).fill(phonenumber);
await page.locator(address).fill(addressText);
await page.locator(gender).click();
await page.locator(week).click();
await page.waitForTimeout(8000);

const dropdown = page.locator(country);
await dropdown.selectOption({index: 2});
await page.waitForTimeout(5000);

}
);