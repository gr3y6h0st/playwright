import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //navigate to Banyan Infrastructure website.
  await page.goto('https://www.banyaninfrastructure.com/');
  //click the About section link.
  await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
  //Check to make sure the new page's URL contains the text: 'about'
  await expect(page).toHaveURL(/.*about/);
  //check for a header role that contains the Company Mission.
  const locator = page.getByRole('heading', { name: 'Our mission is to accelerate the deployment of sustainable infrastructure projects everywhere.' });
  await expect(locator).toHaveText('Our mission is to accelerate the deployment of sustainable infrastructure projects everywhere.')});
