import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    //navigate to Bayan Infrastructure home page.
  await page.goto('https://www.banyaninfrastructure.com/');

  //click on Join Us link
  await page.getByRole('link', { name: 'Join Us' }).click();
  //test expect URL to have 'greenhouse'
  await expect(page).toHaveURL(/.*greenhousetea/);
});