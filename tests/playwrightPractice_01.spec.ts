import { test, expect } from '@playwright/test';
import { formfill } from '../pages/playwrightPracticeFormFilling';

test('playwright practice web', async ({ page }) => {
  await page.goto(' https://www.sreenidhirajakrishnan.com/practice');

  let formObj = new formfill(page);
  await formObj.fillform('sibil','sibil@2005','sibil@gmail.com','8848859655','Automation tester');

  await formObj.submitBtn();
  await expect(page.locator(formObj.formResult)).toContainText('Form submitted successfully');

  await formObj.resetBtn();  
  await expect(page.locator(formObj.formResult)).toContainText('Form was reset');


});