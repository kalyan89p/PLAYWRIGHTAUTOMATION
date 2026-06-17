import test from "@playwright/test";

test('testcase',async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.locator("//input[@name='username']").fill("Admin");
await page.locator("//input[@type='password']").fill("admin123");
await page.locator("//button[@type='submit']").click();
const dashboard = await page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").innerText();
console.log(dashboard);
await page.waitForTimeout(10000);


})