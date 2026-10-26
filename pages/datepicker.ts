import { Page } from "@playwright/test";

export class DatePicker{

    constructor(private page:Page){}

    /** Selector for the date input element */
    dateInput = '[data-testid="date-input"]';

    /** Selector for displaying the selected date result */
    dateResult = '[data-testid="date-result"]';

    async ShowDate(dateStr:string){

        await this.page.locator(this.dateInput).fill(dateStr);
        await this.page.locator(this.dateInput).press('Enter');
        await this.page.pause();

    }
}