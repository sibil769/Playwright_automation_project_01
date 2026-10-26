import { test, expect } from '@playwright/test';
import { form } from '../pages/egprg';

test('egsample program', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');
  
  
  let obj2 = new form(page);
  await obj2.form();
  
});