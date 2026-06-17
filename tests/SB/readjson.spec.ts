import {test,expect,request} from '@playwright/test';
import { execFile } from 'node:child_process';
import { json } from 'node:stream/consumers';
import * as fs from 'fs';
import * as path from 'path';

let url = 'https://testautomationpractice.blogspot.com/'
let namefield = "//input[@id='name']";
let emailbox = "//input[@id='email']";
let phone = "//input[@id='phone']";
let address1 = "//textarea[@id='textarea']";
let fied1 = "//input[@id='field1']";
let fied2 = "//input[@id='field2']";

const jsonData = fs.readFileSync('./tests/SB/testdata.json','utf-8');
const jfile = JSON.parse(jsonData);
const name = jfile.user[1].name;
const emailj = jfile.user[1].Email;
const phonenumber= jfile.user[1].Phone;
const addressline =jfile.user[1].Address;
const fieldbox1 = jfile.user[1].Field1;
const fieldbox2 = jfile.user[1].Field2;

//const id = jfile.user[0].id

test('Json', async({page,request}) =>{
await page.goto(url)
  await page.locator(namefield).fill(name);
  console.log(name)
  await page.locator(emailbox).fill(emailj);
  console.log(emailj)
  await page.locator(phone).fill(phonenumber)
  console.log(phonenumber);
  await page.locator(address1).fill(addressline);
  console.log(addressline);
  await page.locator(fied1).fill(fieldbox1);
  await page.waitForTimeout(50000);
  console.log(fieldbox1);
  await page.locator(fied2).fill(fieldbox2)
  console.log(fieldbox2);
  await page.waitForTimeout(10000);

});