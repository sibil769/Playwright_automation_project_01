import { test, expect } from '@playwright/test';
import { Wikipedia } from '../pages/exampleTest';

test('has title', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Main_Page');

  let pag = new Wikipedia(page);
  await pag.Police('Kereala police');

});