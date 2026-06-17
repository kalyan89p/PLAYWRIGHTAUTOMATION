const { chromium } = require('playwright'); // Or 'firefox' / 'webkit'

(async () => {
  // Launch the browser. Set headless: false to see the UI.
  const browser = await chromium.launch({ headless: false, slowMo: 100 }); 
  
  const context = await browser.newContext(); // Create isolated browser context
  const page = await context.newPage();       // Create a new tab
  
  await page.goto('https://playwright.dev');  // Navigate to a URL
  console.log(await page.title());
  
  await browser.close();                      // Close the browser session
})();
//shanmukha 