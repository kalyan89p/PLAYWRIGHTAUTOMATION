import {test, Page, Locator } from '@playwright/test';
import { tap } from '../../pages/K/tap';
import * as fs from 'fs';

const jsonData = fs.readFileSync('./testdata/testdata.json', 'utf-8');
const jfile = JSON.parse(jsonData);

const name = jfile.user[2].name1;
const email = jfile.user[2].Email;
const phone = jfile.user[2].Phone;
const address = jfile.user[2].Address;
const Field1 = jfile.user[2].Field1;
const Field2 = jfile.user[2].Field2;

 
test('TAP', async ({ page }) => {
    const tapPage = new tap(page);
    // await page.locator("xpath").fill();
    // await page.locator(xpath).click();

    await tapPage.goto(tapPage.url);
    await tapPage.fill(name,tapPage.namebox);
    await tapPage.click(tapPage.sundayCheckBox);
    await tapPage.fill(email,tapPage.emailbox);
    await tapPage.fill(phone,tapPage.phonebox);
    await tapPage.fill(address,tapPage.addressBox);
    await tapPage.fill(Field1,tapPage.field1Box);
    await tapPage.fill(Field2,tapPage.field2Box);
    await page.waitForTimeout(5000);
    await page.screenshot({path:'screenshots/tap.png', fullPage:true});
    await tapPage.field1Box.screenshot({path:'screenshots/field.jpg'});

});
