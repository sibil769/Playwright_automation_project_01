import { test, expect } from '@playwright/test';
import { BtnInterActions } from '../pages/buttonInterActions';

test('button inter actions', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let inter = new BtnInterActions(page);

  await inter.singleClick();
  await expect(page.locator(inter.singleClickResult)).toContainText('Single clicked!');

  await inter.doubleClick();
  await expect(page.locator(inter.doubleClickResult)).toContainText('Double clicked!');

  await inter.rightClick();
  await expect(page.locator(inter.rightClickResult)).toContainText('Right click captured (context menu blocked)');
  

});
