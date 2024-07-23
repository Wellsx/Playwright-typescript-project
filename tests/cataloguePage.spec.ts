// @ts-check
import { test, expect } from "../pages/pages";
import * as pageData from "../pages/page-data/pageData";

test.describe("Catalogue page test suite", () => {
    test.beforeEach("Open catalogue", async ({page}) => {
        await page.goto(pageData.Url.menTops)
    })

    test("Verify adding to cart through catalogue card", async ({page, cataloguePage, itemPage, cartPage}) => {
        let cardTitle: string;
        let cardPrice: string;
        let itemNumber: number = await cataloguePage.product.count()
        let randomElement = Math.round(Math.floor(Math.random() * (itemNumber - 3)) +1 )
        cardTitle = (await cataloguePage.productCardTitle.locator(`nth=${randomElement}`).innerText()).toString()
        cardPrice = (await cataloguePage.productCardPrice.locator(`nth=${randomElement}`).innerText()).toString()
        const product = cataloguePage.product.locator(`nth=${randomElement}`)
        await product.hover()
        await product.locator(itemPage.sizeM).click()
        await expect(product.locator(itemPage.sizeM)).toHaveClass(/selected/)
        await product.locator(cataloguePage.productCardColor).click()
        await expect(product.locator(cataloguePage.productCardColor)).toHaveClass(/selected/)
        await expect(product.locator(cataloguePage.productCardAddToCart)).toBeVisible()
        await product.locator(cataloguePage.productCardAddToCart).click()
        await page.goto(pageData.Url.cart)
        await expect((await cartPage.cartItemName.innerText()).toString()).toEqual(cardTitle)
        await expect((await cartPage.itemPrice.innerText()).toString()).toEqual(cardPrice)

    })
})