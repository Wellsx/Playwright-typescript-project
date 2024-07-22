import { BasePage } from "./basePage";

export class CataloguePage extends BasePage {
    headerName = this.page.locator(".page-title")
    minimumSearchError = this.page.locator(".message notice")
    product = (itemName: string) => this.page.getByText(itemName)
    
    async getUrl(itemName: string){
        return itemName.split(" ").join("-").toLowerCase() + ".html"
    }
}