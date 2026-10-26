import { test, expect } from '@playwright/test';
import { IFrame } from '../pages/iframe';

test('11 iFrame Test', async ({ page }) => {
    
    // Navigate to the practice website URL
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');

    // Create an instance of the IFrame Page Object
    const iframePage = new IFrame(page);

    // Fill in the input inside the iframe with 'Hello iFrame' and click the submit button
    await iframePage.submitInsideIframe('Hello iFrame');

    // Access the iframe container using the page's frame locator
    const frame = page.frameLocator(iframePage.iframeLocator);

    // Assert that the result element inside the iframe displays the expected text 'Hello iFrame'
    await expect(frame.locator(iframePage.iframeResult)).toContainText('Hello iFrame');

});