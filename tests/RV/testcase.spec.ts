import {test} from '@playwright/test';
test('test', async ({page}) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator("//input[@id='name']").fill("Rajesh");
await page.locator("//input[@id='email']").fill("veldanda@gmail.com");
await page.locator("//input[@id='phone']").fill("85238617302");
await page.locator("//textarea[@id='textarea']").fill("veldanda");
await page.locator("//input[@id='male']").click();
await page.locator("//input[@id='monday']").click();
await page.waitForTimeout(8000);







})

