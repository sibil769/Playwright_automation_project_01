import { Page } from "@playwright/test";

export class KeyboardActions{
    constructor(private page:Page){}

    // Keyboard Input
    keyboardInput = '[data-testid="keyboard-input"]';

    // Keyboard Input Expected Result & Counter Result
    keyboardResult = '[data-testid="keyboard-result"]';
    arrowCounter = '[data-testid="arrow-counter"]';

    async typeAndPress(text:string, delay:number=300){

        await this.page.locator(this.keyboardInput).pressSequentially(text,{delay});
        await this.page.locator(this.keyboardResult).press('ArrowUp');
        await this.page.pause();
        

    }
}