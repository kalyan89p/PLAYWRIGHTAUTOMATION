** What is Playwright architecture? why its fast then Selenium 
#> Architecture
Playwright communicates all requests between client and server through a Single WebSocket connection
Once you trigger your test, your code will convert to jSON format. And that will be sent to server using WEB-SOCKET protocol. 
until the either server or client terminates web Socket connection will be alive. 
Where is Selenium for each browser actions there will be an http request is sent . for every request connection is established. 
client (java/js) - > playWright Server -> Chrome Dev Tool Protocol- CDP ( for chrome) 
 
Playwright is faster than Selenium mainly because of its modern architecture and direct browser control.
 
SELEMIUM :Test → WebDriver → ChromeDriver → Browser
PlayWright : Test → Playwright → Browser (✔ Direct connection)  & Auto wait mechanism 
 
#>> "Protocol : 
 Playwright uses:
WebSocket
Chrome DevTools Protocol (CDP)
Selenium uses:
JSON Wire / W3C protocol
HTTP calls (slow)
👉 Playwright talks directly to browser engine
 
#>>Browser Context (Lightweight)
Playwright:
Uses browser contexts (incognito style)
No need to open new browser each time
Selenium:
Opens full browser per test
Heavy & slow

what is the Role of playwright.config.ts
        it Defines:
baseURL
retries
timeouts
browser settings
reporters
>> Use of Auto-waiting (await) ?
Playwright automatically waits for:
element visibility
stability
enabled state
No need for explicit waits in most cases.
>>Why TypeScript preferred?

Type safety

Better IntelliSense

Easier debugging

Improves maintainability

Strict typing benefits
Catch errors at compile time
Improves code quality
>>Interfaces usage Used for:
    Test data structure, API responses, Strong typing
>>Locator strategies ued mostly 
getByRole() (recommended)
getByText()
getByTestId()
CSS/XPath (less preferred)

1. How do you set up a Playwright project from scratch?
Answer:
To set up Playwright:
npm init playwright@latest
This command:
Creates a new project
Installs Playwright
Adds sample tests
Configures TypeScript (optional)
Downloads browser binaries
To run tests:
npx playwright test
2. What are Browser, BrowserContext, and Page in Playwright?
Answer:
Browser: The actual browser instance (Chrome, Firefox, WebKit)
BrowserContext: An isolated session (like incognito window)
Page: A single tab inside a context
Hierarchy:
Browser → Context → Page
3. How does auto-wait work in Playwright?
Answer:
Playwright automatically waits for:
Element to be visible
Element to be attached
Element to be stable
Actionability (clickable, enabled)
No need for explicit waits in most cases.
4. How do you handle dynamic elements and flaky UI?
Answer:
Use stable locators (getByRole, getByTestId)
Avoid XPath when possible
Use auto-waiting assertions
Use retries in CI
Use waitForSelector() only when necessary
5. Difference between getByRole(), getByText(), and CSS/XPath locators?
Answer:
getByRole(): Best practice, uses accessibility roles
getByText(): Finds element by visible text
CSS/XPath: Less stable, depends on structure
Preferred order:
getByRole > getByTestId > getByText > CSS/XPath
6. How do you handle dropdowns, checkboxes, alerts, and frames?
Answer:
Dropdown:
await page.selectOption('select', 'value');
Checkbox:
await page.check('input[type=checkbox]');
Alert:
page.on('dialog', dialog => dialog.accept());
Frame:
const frame = page.frameLocator('iframe');
7. How do you upload and download files?
Answer:
Upload:
await page.setInputFiles('input[type=file]', 'file.pdf');
Download:
const [download] = await Promise.all([
  page.waitForEvent('download'),
  page.click('downloadBtn')
]);
await download.saveAs('path/file.pdf');
8. How do you capture screenshots and videos?
Answer:
Screenshot:
await page.screenshot({ path: 'screen.png' });
Enable video in config:
use: { video: 'on' }
9. How do you perform API testing in Playwright?
Answer:
const response = await request.get('https://api.com/users');
expect(response.status()).toBe(200);
10. How do you handle authentication and session reuse?
Answer:
Login once and save storage state:
await context.storageState({ path: 'state.json' });
Reuse in tests:
use: { storageState: 'state.json' }
11. What is storage state?
Answer:
It stores cookies, localStorage, and session data to reuse login sessions.
12. How do you run tests in parallel?
Answer:
Playwright runs tests in parallel by default
Control workers:
npx playwright test --workers=4
13. How do you handle retries and flaky tests?
Answer:
In config:
retries: 2
Also:
Use stable locators
Avoid fixed waits
14. What are hooks in Playwright?
Answer:
Hooks run before/after tests:
beforeAll
beforeEach
afterEach
afterAll
15. How do you use hooks effectively?
Answer:
beforeEach → login/setup
afterEach → cleanup
beforeAll → test data setup
16. What is test.describe()?
Answer:
Used to group related tests.
test.describe('Login tests', () => {
  test('valid login', async () => {});
});
17. How do you structure a real framework?
Answer:
Typical structure:
POM (Page Object Model)
fixtures for setup
utils for helpers
test folder for specs
18. How do you generate HTML reports?
Answer:
npx playwright test --reporter=html
npx playwright show-report
19. How do you integrate Playwright with CI/CD?
Answer:
Install dependencies in pipeline
Run:
npx playwright test
Supports:
Jenkins
GitHub Actions
20. How do you do cross-browser testing?
Answer:
Playwright supports:
Chromium
Firefox
WebKit
Run:
npx playwright test --project=chromium
21. How do you mock APIs?
Answer:
await page.route('**/api', route =>
  route.fulfill({ json: { data: 'mock' } })
);
22. How do you debug Playwright tests?
Answer:
Headed mode:
npx playwright test --headed
Debug mode:
npx playwright test --debug
Trace viewer:
npx playwright show-trace trace.zip
23. How do you manage test data and configs?
Answer:
Use .env files
Use config.ts
Use fixtures
24. Real-time challenge example in Playwright
Answer:
A common challenge is handling flaky UI due to slow loading elements.
Solution:
Used auto-waiting locators
Added retry logic
Replaced XPath with role-based selectors

how do we maximise the window in playwright? 
To maximize the window in Playwright, you can set the viewport size to the maximum available screen size. Here's how you can do it:
```typescript
import { chromium } from 'playwright';  
(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: null // This will maximize the window
  }); 
  const page = await context.newPage();
  await page.goto('https://example.com');     
  // Your test code here  
  await browser.close();
})(); 
```In this code, setting `viewport: null` in the `newContext` method will allow the browser window to open in its maximum size. Make sure to run the browser in headed mode (not headless) to see the effect.
