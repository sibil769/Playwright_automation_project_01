import { Page } from "@playwright/test";

export class MouseHoverAction{

    constructor(private page:Page){}

    //locators
    // Hover Trigger
    hoverTrigger = '[data-testid="hover-menu-trigger"]';

    // Submenu & Submenu Items / Expected Result
    hoverSubmenu = '[data-testid="hover-submenu"]';

    async mouseaHover(){

        await this.page.locator(this.hoverTrigger).hover();
        
    }

}