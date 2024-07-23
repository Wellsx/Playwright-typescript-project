// @ts-check
import { test, expect } from "../pages/pages";
import * as pageData from "../pages/page-data/pageData";

test.describe("Cart page test suite", () => {
    test.beforeEach("Add item to cart", async ({commonActions, page}) => {
        await commonActions.addItemToCart(page)
        await page.goto(pageData.Url.cart)
    })
    test("Verify cart page loads correctly", async ({cartPage}) => {
        await expect(cartPage.pageTitle).toHaveText(pageData.PageTitle.cart)
        await expect(cartPage.cartItemName).toBeVisible()
        await expect(cartPage.itemPrice).toBeVisible()
        await expect(cartPage.itemQty).toBeVisible()
        await expect(cartPage.itemSubtotal).toBeVisible()
        await expect(cartPage.proceedToCheckout).toBeVisible()
        await expect(cartPage.editItem).toBeVisible()
        await expect(cartPage.removeItemButton).toBeVisible()
        await expect(cartPage.updateCartButton).toBeVisible()
        await expect(cartPage.applyDiscount).toBeVisible()
        await cartPage.estimateShipping.click()
        await expect(cartPage.country).toBeVisible()
        await expect(cartPage.region).toBeVisible()
        await expect(cartPage.postcode).toBeVisible()    
        
    })
})