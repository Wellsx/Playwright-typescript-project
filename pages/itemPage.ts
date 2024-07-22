import { BasePage, expect, Locator } from "./basePage";

export class ItemPage extends BasePage {
    pageTitle = this.page.locator(".page-title")
    price = this.page.locator(".price")
    availability = this.page.getByTitle('Availability')
    addToCart = this.page.locator("#product-addtocart-button")
    sizeList = this.page.getByLabel('Size')
    sizeXS = this.page.locator("#option-label-size-143-item-166")
    sizeS = this.page.locator("#option-label-size-143-item-167")
    sizeM = this.page.locator("#option-label-size-143-item-168")
    sizeL = this.page.locator("#option-label-size-143-item-169")
    sizeXL = this.page.locator("#option-label-size-143-item-170")
    sizeOptions = [this.sizeXS, this.sizeS, this.sizeM, this.sizeL, this.sizeXL]
    color = this.page.getByLabel('Color')
    colorBlue = this.page.getByLabel('Blue')
    qty = this.page.locator("#qty")
    addSuccess = this.page.locator('[data-ui-id="message-success"]')
    shoppingCartLink = this.page.getByRole('link', { name: 'shopping cart' })
    addToWIshList = this.page.getByRole('link', { name: ' Add to Wish List' })
    addToCompare = this.page.getByRole('link', { name: ' Add to Compare' })
    detailsTab = this.page.locator("#tab-label-description-title")
    moreInfoTab = this.page.locator("#tab-label-additional-title")
    reviewsTab = this.page.locator("#tab-label-reviews-title")
    relatedProducts = this.page.locator("#block-related-heading")
    qtyError = this.page.locator("#qty-error")
    colorError = this.page.locator('[id="super_attribute\\[93\\]-error"]')
    sizeError = this.page.locator('[id="super_attribute\\[143\\]-error"]')

    async selectSIze(size: Locator){
        await expect(this.sizeList).toBeVisible()
        await size.click()
    }

    async selectColor(color: Locator){
        await expect(this.color).toBeVisible()
        await color.click()
    }

    async addItem(){
        await expect(this.addToCart).toBeVisible()
        await this.addToCart.click()
    }

}