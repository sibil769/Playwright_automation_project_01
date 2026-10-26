import { test, expect } from '@playwright/test';
import { KeyboardActions } from '../pages/keyboardActions';

test('keyboad actions', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let kba = new KeyboardActions(page);
  await kba.typeAndPress('Hellow world');
});