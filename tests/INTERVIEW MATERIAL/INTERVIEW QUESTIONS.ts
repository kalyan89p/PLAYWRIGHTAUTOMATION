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


Git

Explain Git working areas/stages
localWorking Directory  (git add .  / git add -A Will take you to Staging )
Staging “Index”)  (git commit -m message with take you to local)
Local Git Repository ( git push will take you to Remote)
Remote Git repository (Cloud)
How Pull, Fetch, Merge, Clone Worlds
Git fetch =>. Remote Repo to Local Repo
Git Merge => Local Repo to Working directory
Git Pull = > fetch+ Merge ( Remote to WD)
Git clone => Remote Repo to Local Repo
Git Checkout => Local Repo to Working directory  
GIT pull vs GIT Fetch
Git fetches :: download the changes without merging
Test engineers often use fetch to review changes before integrating them.
Git pull = fetch+merge automatically

When should you use git fetch instead of git pull?
When you want to review changes first before merging.
Safer in team environments.
git fetch
git status

What does git push do?
Uploads your local commits to a remote repository.
>> git push origin main
What happens if you run git push without pulling first?
If the remote branch has new commits, Git will reject the push.
You must first git pull (or git fetch + merge/rebase).
What is a merge in Git?
Combines changes from one branch into another.
Difference between git merge and git rebase?
Git merge keeps full history of commits , git rebase rewrites History
Git merge creates  new commit , git rebase “no merge common”



Which is safer — merge or rebase? Merge is safer for shared branches, rebase is cleaner for local work.
API testing with Private apis (bear token, oauth )
Session Storage more example ... with API generating new Password if expires 

//INTERVIEW FORMAT
Intro... 
folder structure 
PW questions 
TS/JS questions 
TS/JS Progrsm
Git  
CI/CD


diff between locator and page.locator
 
How to locate xpath in orange domain
 
framework structure
 
frames
 
how to switch to windows
 
diff between sanity and smoke
 
How to handle alerts
 
JD 
API testing .... {50% PW, 50% API }
pw (90% PW, 10%) 
 
Write Test cases in PlayWright 
push the code in to GIT 
take GIT branch create Pipeline 
 
...installl the dependences 
 
npm install 
npm playwirtte Everyone
 
npm playwrite test ...
Sharding is used to split a large test suite into smaller chunks and run them on multiple machines/agents in parallel.



Explain Git working areas/stages
localWorking Directory  (git add .  / git add -A Will take you to Staging )
Staging “Index”)  (git commit -m message with take you to local)
Local Git Repository ( git push will take you to Remote)
Remote Git repository (Cloud)
How Pull, Fetch, Merge, Clone Worlds
Git fetch =>. Remote Repo to Local Repo
Git Merge => Local Repo to Working directory
Git Pull = > fetch+ Merge ( Remote to WD)
Git clone => Remote Repo to Local Repo
Git Checkout => Local Repo to Working directory  
GIT pull vs GIT Fetch
Git fetches :: download the changes without merging
Test engineers often use fetch to review changes before integrating them.
Git pull = fetch+merge automatically

When should you use git fetch instead of git pull?
When you want to review changes first before merging.
Safer in team environments.
git fetch
git status

What does git push do?
Uploads your local commits to a remote repository.
>> git push origin main
What happens if you run git push without pulling first?
If the remote branch has new commits, Git will reject the push.
You must first git pull (or git fetch + merge/rebase).
What is a merge in Git?
Combines changes from one branch into another.
Difference between git merge and git rebase?
Git merge keeps full history of commits , git rebase rewrites History
Git merge creates  new commit , git rebase “no merge common”
Which is safer — merge or rebase? Merge is safer for shared branches, rebase is cleaner for local work.

i have attened an interview today below are the questions 
1.tls /certifactes in api testing using playwright?
2.API validations
2.file upload and download and how you will validate different type of files like excel, pdf, word,jepg, password protected file
3.differences b/t selenium and playwright
4.what is test runner examples
5.have you used any agents with git hub copoilt?
6.how do you work with secure aPIs
7.how do you do session storage what are the next steps
8.what is the difference between package.json and package -lock.son?
9.how do you run the test at a time with different enviroments like qa,uat,stg
10.how do you the tests using pipeline
11. have you ever used --shard?
12. what are the fixtures and what is the usage
Hooks and arrow functions??

//Maximize window
import { test } from '@playwright/test';
 
test('Launch Amazon in maximized window', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: null
  });
  const page = await context.newPage();
  await page.goto('https://www.amazon.in');
  await page.waitForTimeout(5000);
});
 
launchOptions: {
      args: ['--start-maximized']
    }

    pipeline {

    agent any
 
    stages {
 
        stage('Install Dependencies') {

            steps {

                bat 'npm install'

            }

        }
 
        stage('Install Playwright Browsers') {

            steps {

                bat 'npx playwright install'

            }

        }
 
        stage('Run Playwright Tests') {

            steps {

                bat 'npx playwright test'

            }

        }

    }

}
 
 
getByRole()
getByLabel()
getByPlaceholder()
getByText()
getByTestId()

