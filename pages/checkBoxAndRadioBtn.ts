import { Page } from "@playwright/test";

export class radioAndCheckBox{

    constructor (private page:Page){}

    selectAllCheckbox = '[data-testid="select-all"]';

    radio2 = '[data-testid="radio-2"]';

    revealCheckbox = '[data-testid="reveal-checkbox"]';


    async toggleSelect(){

        await this.page.locator(this.selectAllCheckbox).check();

    }

    async radioBtnSlt(){

        await this.page.locator(this.radio2).check();

    }

    async hiddenText(){
        
        await this.page.locator(this.revealCheckbox).check();
        await this.page.pause();

    }
}