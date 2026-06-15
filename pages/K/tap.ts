import { Page, Locator } from '@playwright/test';
export class tap{
   url: string = "https://testautomationpractice.blogspot.com/"
   name: string ="//*[@id='name']"
   email: string ="//*[@id='email']"
   phone: string = "//*[@id='phone']"
   address: string = "//*[@id='textarea']"
   male: string = "//*[@id='male']"
   sunday: string = "//input[@value='sunday']"
   monday: string = "//input[@value='monday']"
   tuesday: string = "//input[@value='tuesday']"
   wednesday: string = "//input[@value='wednesday']"
   thursday: string = "//input[@value='thursday']"
   friday: string = "//input[@value='friday']"
   saturday: string = "//input[@value='saturday']"
//   await page.locator('//select[@name="fruits"]').selectOption('banana');
   countrydd: string = "//select[@id='country']"
   colorsdd: string = "//select[@id='colors']"
   animalsdd: string = "//select[@id='animals']"

    page: Page | undefined;
    namebox: Locator | undefined;


    constructor(page: Page) {
    this.page = page; 
    this.namebox = page.locator(this.name)
    }


    async goto(url:string){
        await this.page?.goto(url);
    }
    async fill(name: string){
        await this.namebox?.fill(name);
    }

    
}
