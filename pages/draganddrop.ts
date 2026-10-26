import { Page } from "@playwright/test";

export class DragAndDrop{
    constructor(private page:Page){}

    draggable = '[data-testid="drag-source"]';
    dropSpot = '[data-testid="drop-zone"]';
    dropResult = '[data-testid="drop-result"]';

    async dragAndDrop(){

        await this.page.locator(this.draggable).dragTo(this.page.locator(this.dropSpot));
        
    }
}