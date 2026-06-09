import { test } from '@playwright/test';

const url = 'https://www.amazon.in/';
let astb = "//input[@id='twotabsearchtextbox']";
let btdm = "//div[@id='nav-search']/form/div/div/span/input[@type='submit']";
let soapRates ="//a[@target='_blank']/parent::div/parent::div/div[@data-cy='price-recipe']/div/div/a/span/span[@class='a-offscreen']";

test('Amazon TC001', async ({ page }) => {
  await page.goto(url);
  await page.locator(astb).fill('Soap');//hard coded, need to avoid. 
  await page.locator(btdm).click();
  await page.locator(soapRates).first().waitFor({ timeout: 5000 });
  let prices: number = await page.locator(soapRates).count();
  console.log(prices);
  // Add your test steps here
  let priceList: number[] = [];
  for (let i = 0; i < prices; i++) {
      const currentPriceText = await page.locator(soapRates).nth(i).textContent();
      const currentPrice = currentPriceText
        ? parseFloat(currentPriceText.replace(/[^0-9.]/g, ''))
        : 0;  
      priceList.push(currentPrice);
  }
  console.log(priceList);
});