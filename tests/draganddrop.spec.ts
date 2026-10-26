import { test, expect } from '@playwright/test';
import { DragAndDrop } from '../pages/draganddrop';

test('drag', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let drdp = new DragAndDrop(page);
  await drdp.dragAndDrop();
  await expect(page.locator(drdp.dropResult)).toContainText('Item dropped successfully');

});