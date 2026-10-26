import { Page } from "@playwright/test";

export class ResizeElementPage{

    constructor(private page:Page){}

    // Locator for the resizable box element
    resizableBox = '[data-testid="resizable-box"]';

    async getBoxDiamention(){

        return await this.page.locator(this.resizableBox).boundingBox();

    }

    async resizeBox(increaseWidth:number,increaseHeight:number){

        const box = await this.getBoxDiamention();

        if(box){

            const handleX = box.x + box.width-2;
            const handleY = box.y + box.height-2;

            await this.page.mouse.move(handleX,handleY);
            await this.page.mouse.down();
            await this.page.mouse.move(handleX+increaseWidth,handleY+increaseHeight);
            await this.page.mouse.up();

            await this.page.pause()
            

        }
    }
}