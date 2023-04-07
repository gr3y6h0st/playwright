import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    //navigate to Bayan Infrastructure home page.
  await page.goto('/settings');

  //click on Join Us link
  await page.getByRole('link', { name: 'Join Us' }).click();
  //test for expected URL to contain 'greenhousetea' but got (intentionally fail).
  await expect(page).toHaveURL(/.*greenhousetea/);
});