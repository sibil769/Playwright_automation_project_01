import { Page } from "@playwright/test";

export class fillTheForm2{

    nameinput;

    constructor (private page:Page){

        this.nameinput=this.page.getByPlaceholder('Enter Name');

    }

    async formFill2(){

        await this.nameinput.fill('Basil jacob');

    }


}