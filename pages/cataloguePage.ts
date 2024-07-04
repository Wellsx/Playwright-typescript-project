import { BasePage } from "./basePage";

export class CataloguePage extends BasePage {
    headerName = this.page.locator(".page-title")
    minimumSearchError = this.page.locator(".message notice")
}