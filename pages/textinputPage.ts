import { Page } from "@playwright/test";
import { TestData } from "../testData/testData";

export class FillTheForm{

    constructor(private page:Page){}

    //locators
    nameinputField='#name';
    emailInputField='#email';
    numberInputField='#phone';
    addressInputField='//*[@id="textarea"]';

    async formEnterAction(){

        await this.page.locator(this.nameinputField).fill(TestData.name);
        await this.page.locator(this.emailInputField).fill(TestData.email);
        await this.page.locator(this.numberInputField).fill(TestData.number);
        await this.page.locator(this.addressInputField).fill(TestData.location);

    }
        
    
}
