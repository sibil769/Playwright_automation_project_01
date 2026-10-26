import { Page } from "@playwright/test";

export class ScrollTesting{

    constructor(private page:Page){}

    //locator
    scrollTarget = '[data-testid="scroll-target"]';

    async scrollToElement(){

        await this.page.locator(this.scrollTarget).scrollIntoViewIfNeeded();
        await this.page.pause();
    }
}