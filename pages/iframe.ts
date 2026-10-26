import { Page } from '@playwright/test';

export class IFrame {
    constructor(private page: Page) {}

    // IFrame Container
    iframeLocator = '[data-testid="practice-iframe"]';

    // Inside IFrame Input & Action Button
    iframeInput = '#iframe-input';
    iframeBtn = '#iframe-btn';

    // Inside IFrame Expected Result
    iframeResult = '#iframe-result';

    /**
     * Submits text into an input field located inside an iframe and clicks the action button.
     * @param text - The string value to enter into the iframe input field.
     */
    async submitInsideIframe(text: string) {
        // Access the frame locator targeting the iframe element on the page
        const frame = this.page.frameLocator(this.iframeLocator);

        // Locate the input element inside the iframe and fill it with the specified text
        await frame.locator(this.iframeInput).fill(text);

        // Locate the button element inside the iframe and perform a click action
        await frame.locator(this.iframeBtn).click();
    }
}