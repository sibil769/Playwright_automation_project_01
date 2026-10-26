import { test, expect } from '@playwright/test';
import { MouseHoverAction } from '../pages/mouseHover';

test('mouse hover actions', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let hoverOBJ = new MouseHoverAction(page);
  await hoverOBJ.mouseaHover();
  await expect(page.locator(hoverOBJ.hoverSubmenu)).toBeVisible();

});