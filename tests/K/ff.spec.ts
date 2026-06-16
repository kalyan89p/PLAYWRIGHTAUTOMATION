import {test,expect,request} from '@playwright/test';
import { execFile } from 'node:child_process';
import { json } from 'node:stream/consumers';
import * as fs from 'fs';
import * as path from 'path';
import * as ExcelJS from 'exceljs';



let url = 'https://testautomationpractice.blogspot.com/'
let nameL = "//*[@id='name']"
const jsonData = fs.readFileSync('./tests/k/sample.json','utf-8');
const jfile = JSON.parse(jsonData)
const name = jfile.user[1].name
const id = jfile.user[1].id


test('Json Test Case', async({page,request}) =>{
await page.goto(url)
  await page.locator(nameL).fill(name);
  await page.waitForTimeout(5000)
});



test.only('Excel Testcase', async({page,request}) =>{
 const workbook = new ExcelJS.Workbook();
  const filePath = path.resolve(__dirname, '../try.xlsx');
  await workbook.xlsx.readFile(filePath);
  const sheet = workbook.getWorksheet(1);
  const row2 = sheet.getRow(2);
  const username = row2.getCell(2).text;

  if (!sheet) {
  throw new Error('Sheet $ $ $ $. not found');
  }


  console.log(username);
  //await page.goto(url)
  

});