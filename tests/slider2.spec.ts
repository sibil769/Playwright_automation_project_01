import { test, expect } from '@playwright/test';
import { Slider2 } from '../pages/slider2';

test('slider two', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  let sl2OBJ = new Slider2(page);
  await sl2OBJ.moveSlider('30');

  
});