# playwright
 Playwright-Banyan-Test-Repo

 Steps to Run the Playwright code for Banyan Infrastructure Tests:
1. Get starting by Installing Playwright using npm.
    - Download node.js to gain access to npm here https://nodejs.org/en/download
2. Navigate to the folder 'playwright' in your terminal after cloning the repo.
3. Input the following commands (seperately) in your terminal to run tests using the Banyan Infrastructure website: 
    - npx playwright test banyanTestPass.spec.ts --headed
    - npx playwright test banyanTestFail.spec.ts --headed
      
4. After each command completes, you may review the test report manually by using the command:
    - npx playwright show-report
    - Note: Test Cases that experience failures should auto-run the above command by default. 





