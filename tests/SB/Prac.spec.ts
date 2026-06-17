import{test} from '@playwright/test';
test('testcase',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator("//input[@placeholder='Enter Name']").fill("shanmukha");
await page.locator("//input[@placeholder='Enter EMail']").fill("barikishanmukha@gmail.com");
await page.locator("//input[@placeholder='Enter Phone']").fill("7894561236");
await page.locator("//textarea[@id='textarea']").fill("roadno 5 street corner hyderbad");
await page.locator("//input[@id='male']").click();
await page.locator("//input[@id='female']").click();
await page.locator("//input[@id='sunday']").click();
await page.locator("//select[@id='country']").selectOption({ label: 'India' });
await page.locator("//option[contains(@value,'red')][1]").click();
await page.locator("//option[contains(@value,'cat')][1]").click();
//await page.locator("//input[contains(@class,'hasDatepicker')][1]").click();
await page.waitForTimeout(10000);


}

);