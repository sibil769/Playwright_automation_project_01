import { test, expect } from '@playwright/test';

test('Open google test demo', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');


});


