import { test, expect } from '@playwright/test';
import { ScrollTesting } from '../pages/scrollTests';

test('scroll to a specific element', async ({ page }) => {

  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let stOBj = new ScrollTesting(page);
  await stOBj.scrollToElement();
  await expect(page.locator(stOBj.scrollTarget)).toContainText('You scrolled to me');

  
});