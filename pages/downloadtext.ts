import { Page } from "@playwright/test";

export class Download{
    constructor(private page:Page){}

    // CSS selector for locating the download button on the page
    downloadBtn = '[data-testid="download-btn"]';

    downloadResult = '[data-testid="download-result"]';

    async triggerDownload(){
        const [download]= await Promise.all(
            [
                this.page.waitForEvent('download'),
                this.page.locator(this.downloadBtn).click()
            ]
        );
        return download;
    }
}