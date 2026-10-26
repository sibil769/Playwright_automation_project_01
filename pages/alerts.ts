import { Page } from "@playwright/test";

export class Alerts{
    constructor (private page:Page){}

    //locators
    // Alert Triggers (selectors for buttons on the page)
    alertBtn = '[data-testid="alert-btn"]';
    confirmBtn = '[data-testid="confirm-btn"]';
    promptBtn = '[data-testid="prompt-btn"]';

    // Alert Result Display (selector for the result text on the page)
    alertResult = '[data-testid="alert-result"]';

    async showAlert(){

        await this.page.once('dialog',dialog=>dialog.accept());
        await this.page.locator(this.alertBtn).click();
    }

    async conformAlert(accept:boolean){

        await this.page.once('dialog',dialog1=>accept? dialog1.accept() : dialog1.dismiss());
        await this.page.locator(this.confirmBtn).click();
    }

    async promptAlert(text:string){

        await this.page.once('dialog',dialog=>dialog.accept(text));
        await this.page.locator(this.promptBtn).click();
    }


}