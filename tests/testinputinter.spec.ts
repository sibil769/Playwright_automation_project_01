import { test, expect } from '@playwright/test';
import { FillTheForm } from '../pages/textinputPage';
import { TestData } from '../testData/testData';

test('Open the sause demo website', async ({ page }) => {
  await page.goto(TestData.url);

  let inputfield = new FillTheForm(page);
  await inputfield.formEnterAction();

});