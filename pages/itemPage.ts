import { BasePage, expect, Locator } from "./basePage";

export class ItemPage extends BasePage {
    public readonly pageTitle = this.page.locator(".page-title")
    public readonly price = this.page.locator(".product-info-price").locator(".price")
    public readonly availability = this.page.getByTitle('Availability')
    public readonly addToCart = this.page.locator("#product-addtocart-button")
    public readonly updateCart = this.page.getByRole('button', { name: 'Update Cart' })
    //item parameters
    public readonly sizeList = this.page.getByLabel('Size')
    public readonly size = (index: number) => this.page.locator(".swatch-option.text").locator(`nth=${index}`)
    public readonly sizeXS = this.page.locator("#option-label-size-143-item-166")
    public readonly sizeS = this.page.locator("#option-label-size-143-item-167")
    public readonly sizeM = this.page.locator("#option-label-size-143-item-168")
    public readonly sizeL = this.page.locator("#option-label-size-143-item-169")
    public readonly sizeXL = this.page.locator("#option-label-size-143-item-170")
    public readonly sizeOptions = [this.sizeXS, this.sizeS, this.sizeM, this.sizeL, this.sizeXL]
    public readonly color = this.page.getByLabel('Color')
    public readonly colorOption = this.page.locator(".swatch-option.color").locator("nth=0")
    public readonly qty = this.page.locator("#qty")
    public readonly shoppingCartLink = this.page.getByRole('link', { name: 'shopping cart' })
    //bottom part
    public readonly addToWIshList = this.page.getByRole('link', { name: ' Add to Wish List' })
    public readonly addToCompare = this.page.getByRole('link', { name: ' Add to Compare' })
    public readonly detailsTab = this.page.locator("#tab-label-description-title")
    public readonly moreInfoTab = this.page.locator("#tab-label-additional-title")
    public readonly reviewsTab = this.page.locator("#tab-label-reviews-title")
    public readonly relatedProducts = this.page.locator("#block-related-heading")
    //status messages
    public readonly qtyError = this.page.locator("#qty-error")
    public readonly colorError = this.page.locator('[id="super_attribute\\[93\\]-error"]')
    public readonly sizeError = this.page.locator('[id="super_attribute\\[143\\]-error"]')
    public readonly addSuccess = this.page.locator('[data-ui-id="message-success"]')

    async selectSIze(size: Locator): Promise<void>{
        await size.click()
    }

    async selectColor(): Promise<void>{
        await expect(this.color).toBeVisible()
        await this.colorOption.click()
    }

    async typeQty(qty: string): Promise<void>{
        await expect(this.qty).toBeVisible()
        await this.qty.fill(qty)
    }

    async addItem(): Promise<void>{
        await expect(this.addToCart).toBeVisible()
        await this.addToCart.click()
    }

}