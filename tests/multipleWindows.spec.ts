import { test, expect } from '@playwright/test';
import { MultipleWindowHandling } from '../pages/multipleWindow';

test('multiple window handling ', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  let mwh = new MultipleWindowHandling(page);
  await mwh.handleWindow();


});