import { Page } from "@playwright/test";

export class Alert{
    constructor(private page:Page){}

    //locator
    promptBtn='#promptBtn';

    async promptAlert(text:string){

        await this.page.locator()

await this.page.locator(this.promptBtn).click();
    }
}