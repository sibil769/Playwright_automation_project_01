import { test, expect } from '@playwright/test';
import { Download } from '../pages/downloadtext';

test('download text', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let downloadtextOBJ = new Download(page);
  const d = await downloadtextOBJ.triggerDownload();
  await expect(d.suggestedFilename()).toBe('practice.txt')

});