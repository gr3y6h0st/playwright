import { test, expect } from '@playwright/test';

test('first', async ({ page }) => {
  //navigate to Banyan Infrastructure website.
  await page.goto('/settings');

  //click the About section link.
  await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();

  //Check to make sure the new page's URL contains the text: 'about'
  await expect(page).toHaveURL(/.*about/);

  //check for a header role that contains the Company Mission.
  let companyMission = "Our mission is to accelerate the deployment of sustainable infrastructure projects everywhere.";
  //use locator to find header w/ Company Mission Statement.
  const pageCompanyMission = page.getByRole('heading', { name: 'Our mission is to accelerate the deployment of sustainable infrastructure projects everywhere.' });
  //webFirst Assert company mission text on webpage vs companyMission value.
  await expect(pageCompanyMission).toHaveText(companyMission)});

test('second', async ({ page }) => {
  //navigate to Bayan Infrastructure home page.
  await page.goto('/settings');

  //click on Join Us link
  await page.getByRole('link', { name: 'Join Us' }).click();
  //test expect URL to have 'greenhouse'
  await expect(page).toHaveURL(/.*greenhouse/);
  //click Departments Drop Down
  await page.getByRole('link', { name: 'All Departments' }).click();
  //Select Engineering filter
  await page.locator('#select2-result-label-7').click();

  //create locator based on role interest: job title "QA Engineer"
  const resultsInterest = page.getByRole('link', {name: 'QA Engineer'});
  const resultsJobTitle = "QA Engineer";

  //Click and Load next page for QA Engineer Role from Results.
  await page.getByRole('link', { name: 'QA Engineer' }).click();

  //find QA Engineer header on new page.
  const listingJobTitle = page.getByRole('heading', { name: 'QA Engineer' });

  //Assert expectation for role clicked contains "QA Engineer".
  await expect(listingJobTitle).toHaveText(resultsJobTitle);

});
