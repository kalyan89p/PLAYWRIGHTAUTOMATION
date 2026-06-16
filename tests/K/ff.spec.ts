import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import * as ExcelJS from 'exceljs';

const url = 'https://testautomationpractice.blogspot.com/';
const nameL = "//*[@id='name']";

const jsonData = fs.readFileSync('./tests/k/sample.json', 'utf-8');
const jfile = JSON.parse(jsonData);

const name = jfile.user[1].name;
const id = jfile.user[1].id;

test.only('Excel Testcase', async ({ page }) => {
    const workbook = new ExcelJS.Workbook();

    const filePath = path.resolve(__dirname, '../k/try.xlsx');

    await workbook.xlsx.readFile(filePath);

    const sheet = workbook.getWorksheet(1);

    if (!sheet) {
        throw new Error('Worksheet not found');
    }

    // Row numbers start from 1
    const row2 = sheet.getRow(2);

    // Column B = 2
    const username = row2.getCell(2).text;

    console.log('Username:', username);

    // Example usage
   await page.goto(url);
    await page.locator(nameL).fill(username);

    await expect(page.locator(nameL)).toHaveValue(username);
});

test('Json Test Case', async({page,request}) =>{
await page.goto(url)
  await page.locator(nameL).fill(name);
  await page.waitForTimeout(5000)
});
