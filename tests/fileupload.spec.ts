import { test, expect } from '@playwright/test';
import { FileUpload } from '../pages/fileupload';

test('file upload', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let fi = new FileUpload(page);
  let file="C:\\Users\\sibil\\OneDrive\\Documents\\Code explanation\\Automation program explanation.pdf";

  await fi.uploadFile(file);

  await expect(page.locator(fi.uploadResult)).toContainText('Automation program explanation.pdf');

});