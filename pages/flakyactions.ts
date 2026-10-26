import { Page } from "@playwright/test";

export class FlakyAction{

    constructor(private page:Page){}

    //locators
    // Flaky Button & Expected Result
    flakyBtn = '[data-testid="flaky-btn"]';
    flakyResult = '[data-testid="flaky-result"]';

    async clickFlakyBtn(){

        await this.page.locator(this.flakyBtn).click();
        
    }
}