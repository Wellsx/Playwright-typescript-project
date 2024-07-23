import { BasePage, expect, Locator } from "./basePage";

export class CataloguePage extends BasePage {
    public readonly headerName = this.page.locator(".page-title")
    public readonly minimumSearchError = this.page.locator(".message notice")
    public readonly product = this.page.locator(".product-item")
    public readonly productCardTitle = this.page.locator(".product-item-link")
    public readonly productCardPrice = this.page.locator(".price")
    public readonly productCardAddToCart = this.page.locator('[title="Add to Cart"]')
    public readonly productCardColor = this.page.locator(".swatch-option.color").locator("nth=0")
    
    async getUrl(itemName: string): Promise<string>{
        return itemName.split(" ").join("-").toLowerCase() + ".html"
    }

}