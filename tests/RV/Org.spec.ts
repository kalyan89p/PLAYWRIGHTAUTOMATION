import {test} from '@playwright/test';
//Scenario: Verify newly added is displayed on System user section.
//Step1: When user launch the "OrageHRM"
//Step2: Enter the valid and naviages to the dashboard page
//Step3: user click on the Admin and select add button
//Step4: user enter the details and click on the save
//Ste5: user verify the created user is displayed on System user section

 const url= ("https://opensource-demo.orangehrmlive.com/");
 let username = ("//input[@name='username']");
 let password = ("//input[@type='password']");
 let signbutton = ("//button[@type='submit']");
 let dashborad = ("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']");
 let admin = ("//a[@class='oxd-main-menu-item active']//span[1]");
 let add = ("//button[@class='oxd-button oxd-button--medium oxd-button--secondary']");
 let addusertext = ("//h6[@class='oxd-text oxd-text--h6 orangehrm-main-title']");
 let userrole = ('');
 // TestData
 let usernamevalue = "Admin";
 let passwordvalue = "admin123";

test('test', async ({page}) => {
await page.goto(url);
await page.locator(username).fill(usernamevalue);
await page.locator(password).fill(passwordvalue);
await page.locator(signbutton).click({timeout: 25000});
const dashboradText =await page.locator(dashborad).innerText();
console.log(dashboradText);
await page.waitForTimeout(8000);
await page.locator("//a[@class='oxd-main-menu-item active']//span[1]").click();
await page.waitForTimeout(8000);
await page.locator(add).click();
const addutext = await page.locator(addusertext).allInnerTexts();
console.log(addutext);






})
