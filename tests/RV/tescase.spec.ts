import {test} from '@playwright/test';
test('testcase', async ({page}) => {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.locator("//input[@type='username").fill("Admin");
await page.locator("//input[@type='password']").fill("admin123");
await page.locator("//button[@type='submit']").click();





})

