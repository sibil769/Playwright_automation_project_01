import { Page } from "@playwright/test";

export class DropDownClass{

    constructor (private page:Page){}

    //Assertion

    // Standard Select Dropdown & Expected Result
    standardSelect = '[data-testid="standard-select"]';
    standardResult = '[data-testid="standard-select-result"]';

    // Multi-Select Dropdown & Expected Result
    multiSelect = '[data-testid="multi-select"]';
    multiResult = '[data-testid="multi-select-result"]';

    // Custom Dropdown & Expected Result
    customToggle = '[data-testid="custom-dropdown-toggle"]';
    customOptionBeta = '[data-testid="custom-option-beta"]';
    customResult = '[data-testid="custom-dropdown-result"]';

    // Dynamic Select Dropdown & Expected Result
    dynamicSelect = '[data-testid="dynamic-select"]';
    dynamicResult = '[data-testid="dynamic-select-result"]';


    async dropDown(val:string){

        await this.page.locator(this.standardSelect).selectOption(val);        
    }

    async multiSelectop(values:string[]){

        await this.page.locator(this.multiSelect).selectOption(values); 
    }

    async customDiv(){

        await this.page.locator(this.customToggle).click();
        await this.page.locator(this.customOptionBeta).click();     
    }

    async populatedMethod(valu:string){

        await this.page.locator(this.dynamicSelect).selectOption(valu);
        await this.page.pause();
    }


}