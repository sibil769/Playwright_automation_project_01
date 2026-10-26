import { Page } from "@playwright/test";

export class MultipleWindowHandling{

    constructor(private page:Page){}

    // Locators
    link = '//*[@id="Attribution1"]/div[1]/a[1]';
    dropdown = '//*[@id="radix-_R_19ol9depl_"]';

    async handleWindow(){

        const newPagePromise = this.page.context().waitForEvent('page');

        //click the link
        await this.page.locator(this.link).click();

        //get the new page
        const newPage = await newPagePromise;

        //wait the new page to load
        await newPage.waitForLoadState('domcontentloaded');

        //find the dropdown in the new page
        const dropdown = newPage.locator(this.dropdown);

        //click the dropdown
        await dropdown.click();
        
    }
}