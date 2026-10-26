import { test, expect } from '@playwright/test';
import { TestData } from '../testData/testData';
import { Slider } from '../pages/slider';

test('Slider swiping', async ({ page }) => {
  await page.goto(TestData.url);

  let sliOBJ = new Slider(page);
  await sliOBJ.moveSliderToValue('50');


});