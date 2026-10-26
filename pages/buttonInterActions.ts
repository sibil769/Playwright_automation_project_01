import { Page } from "@playwright/test";

export class BtnInterActions{

    constructor(private page:Page){}

    //Locator of the single click button 
 singleClickBtn = '[data-testid="single-click-btn"]';
 singleClickResult = '[data-testid="single-click-result"]';

 //Locator of the db button
 doubleClickBtn = '[data-testid="double-click-btn"]';
 doubleClickResult = '[data-testid="double-click-result"]'

  //Locator of the right click button
 rightClickBtn = '[data-testid="right-click-btn"]';
 rightClickResult = '[data-testid="right-click-result"]';

 async singleClick(){

    await this.page.locator(this.singleClickBtn).click();

 }

 async doubleClick(){

    await this.page.locator(this.doubleClickBtn).dblclick();
    
 }

 async rightClick(){

    await this.page.locator(this.rightClickBtn).click({button:"right"});
    await this.page.pause();
 }
}