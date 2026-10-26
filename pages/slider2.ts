import { Page } from "@playwright/test";

export class Slider2{
    constructor (private page:Page){}

    //locators
    sliderXpath='#slider span.ui-slider-handle:nth-of-type(2)';

    async moveSlider(val:string){
        await this.page.locator(this.sliderXpath).fill(val);
        await this.page.locator(this.sliderXpath).dispatchEvent('input');
        await this.page.pause();
    }
}