import { Page } from "@playwright/test";

export class formfill{

    constructor(private page:Page){}
    //locators
    usernameInput = '[data-testid="text-input"]';
    passwordInput = '[data-testid="password-input"]';
    emailInput = '[data-testid="email-input"]';
    phoneInput = '[data-testid="phone-input"]';
    bioTextarea = '[data-testid="textarea-input"]';

    submitButton = '[data-testid="form-submit"]';
    resetButton = '[data-testid="form-reset"]';
    formResult = '[data-testid="form-result"]';
    
    


    async fillform(name:string,pass:string,email:string,phno:string,bio:string){

        await this.page.locator(this.usernameInput).fill(name);
        await this.page.locator(this.passwordInput).fill(pass);
        await this.page.locator(this.emailInput).fill(email);
        await this.page.locator(this.phoneInput).fill(phno);
        await this.page.locator(this.bioTextarea).fill(bio);

    }

    async submitBtn(){

        await this.page.locator(this.submitButton).click();

    }

    async resetBtn(){

        await this.page.locator(this.resetButton).click();

    }

    
}