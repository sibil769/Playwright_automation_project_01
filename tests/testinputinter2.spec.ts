import { test, expect } from '@playwright/test';
import { fillTheForm2 } from '../pages/testinputPage2';


test('Open the sause demo website', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  let form2 = new fillTheForm2(page);
  await form2.formFill2();

  

});