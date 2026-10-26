import { test, expect } from '@playwright/test';
import { Alerts } from '../pages/alerts';

test('alerts', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let alertOBJ = new Alerts(page);
  await alertOBJ.showAlert();

  await alertOBJ.conformAlert(true);
  await expect(page.locator(alertOBJ.alertResult)).toContainText("Confirm result: OK");

  await alertOBJ.promptAlert('nusra');
  await expect(page.locator(alertOBJ.alertResult)).toContainText("Prompt value: nusra");


});
