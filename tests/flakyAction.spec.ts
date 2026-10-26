import { test, expect } from '@playwright/test';
import { FlakyAction } from '../pages/flakyactions';

test('flaky actions', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  let flakyOBJ = new FlakyAction(page);

  await flakyOBJ.clickFlakyBtn();

  const resultTextPresent = await page.locator(flakyOBJ.flakyResult).textContent();

  await expect(resultTextPresent).toMatch(/success|failure|error|failed/i);
  
});