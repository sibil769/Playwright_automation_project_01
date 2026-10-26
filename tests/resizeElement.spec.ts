import { test, expect } from '@playwright/test';
import { ResizeElementPage } from '../pages/resizeElement';

test('resize element', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let rzOBJ = new ResizeElementPage(page);
  await rzOBJ.resizeBox(80,80);

  
});