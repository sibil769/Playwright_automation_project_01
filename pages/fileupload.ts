import { Page } from "@playwright/test";

export class FileUpload{

    constructor(private page:Page){}

    //locators
    fileInput = '[data-testid="file-upload"]';
    uploadResult = '[data-testid="file-upload-result"]';

    async uploadFile(filepath:string){

        await this.page.locator(this.fileInput).setInputFiles(filepath);
        
    }
}