import { Page } from "@playwright/test";

export class MultipleFileUpld{

    constructor(private page:Page){}

    //locators
    fileinput='#multipleFilesInput';
    fileUpload='//*[@id="multipleFilesForm"]/button';
    multipleFileResult='#multipleFilesStatus';

    async fileupload(filepaths:string[]){

        await this.page.locator(this.fileinput).setInputFiles(filepaths);

        await this.page.locator(this.fileUpload).click();     

    }


}