import { Page } from "@playwright/test";

export class Wikipedia{

    constructor(private page:Page){}

    //locators
    searchBar='#searchInput';

    async Police(text:string){

        await this.page.locator(this.searchBar).fill(text);
        await this.page.pause();

    }
}