//Launch OrangeHRM wesite with valid URL
//Enter Username as admin
//Enter Password as admin123
//Click o Login button
//Click on Admin at left side
//Verify user is on System Users screen
//Click on +Add button
// verify user is on Add user screen
//Select ESS value from User Role
//select Status as enabled
//type as Admin  User1781259876007 in "Employee Name"   
//Enter username as adminone 
//nter password admin123 on Confirm Password field
//Click on Save button

import test from "@playwright/test";
test('testcase',async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.locator("//input[@name='username']").fill("Admin");
await page.locator("//input[@type='password']").fill("admin123");
await page.locator("//button[@type='submit']").click();
let dashboard = await page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").innerText();
console.log(dashboard);
let adm = await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][1]");
await page.locator(adm).click({timeout:5000});
let sysuserstxt = await page.locator("//h5[@class='oxd-text oxd-text--h5 oxd-table-filter-title']");
await page.locator(sysuserstxt).innerText();
console.log(sysuserstxt);
let adde = await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--secondary']");
await page.locator(adde).click({timeout:5000});
let adduserscreen = await page.locator("//h6[@class='oxd-text oxd-text--h6 orangehrm-main-title']");
console.log(adduserscreen);
let sel = await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow']");
await page.locator(sel).click();
});
