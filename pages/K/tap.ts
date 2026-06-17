import { Page, Locator } from '@playwright/test';
import {allxpaths} from '../K/allxpaths'
export class tap extends allxpaths {
    page: Page;
    namebox: Locator;
    emailbox: Locator;
    phonebox: Locator;
    field1Box: Locator;
    field2Box: Locator;
    sundayCheckBox : Locator;
    addressBox: Locator;
   
    constructor(page: Page) {
        super();
        this.page = page; 
        this.namebox = page.locator(this.namef);
        this.emailbox = page.locator(this.email);
        this.phonebox = page.locator(this.phone);
        this.field1Box = page.locator(this.field1);
        this.field2Box = page.locator(this.field2);
        this.sundayCheckBox = page.locator(this.sunday);
        this.addressBox = page.locator(this.address);
    }


    async goto(url:string){
        await this.page?.goto(url);
    }
    async fill(text: string,element: Locator ){
        await element.fill(text);
    }
    async click(element: Locator){
        
        await element.click();
    }
    
}
