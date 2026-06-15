import {test,expect,request} from '@playwright/test';
import { execFile } from 'node:child_process';
import { json } from 'node:stream/consumers';

test('apitestcase', async({page,request}) =>{


const resp = await request.get("http://localhost:3000/users/");
const respBody = await resp.json();

const name : string = respBody[0].name
console.log(name);

await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator("//*[@id='name']").fill(name);
await page.waitForTimeout(5000)

});