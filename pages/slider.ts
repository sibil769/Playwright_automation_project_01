import { Page } from "@playwright/test";

export class Slider{
    constructor(private page:Page){}

    //Locator of the slider
    sliderInput = '[data-testid="slider-input"]';

    async moveSliderToValue(value:string){

        await this.page.locator(this.sliderInput).fill(value);
        await this.page.locator(this.sliderInput).dispatchEvent('input');
        await this.page.pause();

    }
}