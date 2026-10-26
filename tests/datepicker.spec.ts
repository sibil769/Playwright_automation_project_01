import { test, expect } from '@playwright/test';
import { DatePicker } from '../pages/datepicker';

test('datepicker', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let datepickerObj = new DatePicker(page);
  await datepickerObj.ShowDate('2025-09-29');
  await expect(page.locator(datepickerObj.dateResult)).toContainText('2025-09-29');
  


});