import { test, expect } from '@playwright/test';
import { radioAndCheckBox } from '../pages/checkBoxAndRadioBtn';

test('radio buttons and check boxes', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let radioCheck = new radioAndCheckBox(page);
  await radioCheck.toggleSelect();
  await radioCheck.radioBtnSlt();
  await radioCheck.hiddenText();


  
});
