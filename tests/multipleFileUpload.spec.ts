import { test, expect } from '@playwright/test';
import { MultipleFileUpld } from '../pages/multipleFileUploads';

test('multiple files', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  let mf = new MultipleFileUpld(page);

  let filee= "C:\\Users\\sibil\\OneDrive\\Documents\\Code explanation\\PlayWrightCodeExplanation.pdf";
  let fileee="C:\\Users\\sibil\\OneDrive\\Documents\\Code explanation\\Selenium_Classes_And_Methods.pdf";

  await mf.fileupload([filee, fileee]);
  await expect(page.locator(mf.multipleFileResult)).toContainText('Multiple files selected');
});