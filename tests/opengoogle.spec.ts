import { test, expect } from '@playwright/test';

test('Open google test demo', async ({ page }) => {
  await page.goto('https://google.com/');

  await expect(page).toHaveTitle(/Google/);

});

test('Open amazon test demo', async ({ page }) => {
  await page.goto('https://www.amazon.in/ref=nav_logo');

  await expect(page).toHaveTitle(/Amazon/);

});
