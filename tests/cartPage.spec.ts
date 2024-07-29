// @ts-check
import { test, expect } from "../pages/pages";
import * as pageData from "../pages/page-data/pageData";
import Data from "../pages/page-data/data"

test.describe("Cart page test suite", () => {
    test.beforeEach("Add item to cart", async ({commonActions, page}) => {
        await commonActions.addItemToCart(page)
        await page.goto(pageData.Url.cart)
    })
    test("Verify cart page loads correctly", async ({cartPage, commonActions, page}) => {
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

    test("Verify location selection functionality", async ({cartPage}) => {
        await cartPage.estimateShipping.click()
        await cartPage.country.selectOption(Data.country)
        await cartPage.region.fill(Data.state)
        await cartPage.postcode.fill(Data.postcode)
    })

    test("Verify shipping fee is calculated correctly", async ({cartPage})=> {
        await cartPage.estimateShipping.click()
        let subTotal = await cartPage.getCurrency(await cartPage.cartSubtotal.innerText())
        await cartPage.flatRate.check()
        await expect(cartPage.flatRate).toBeChecked()
        await cartPage.loader.waitFor({state: "hidden"})
        let flatRate = await cartPage.getCurrency(await cartPage.shippingFee.innerText())
        let totalFlat = await cartPage.getCurrency(await cartPage.orderTotal.innerText())
        await expect(await cartPage.calculateTotal(flatRate, subTotal)).toEqual(totalFlat)
        await cartPage.bestWay.check()
        await expect(cartPage.bestWay).toBeChecked()
        await cartPage.loader.waitFor({state: "hidden"})
        let bestWay = await cartPage.getCurrency(await cartPage.shippingFee.innerText())
        let totalBest = await cartPage.getCurrency(await cartPage.orderTotal.innerText())
        await expect(await cartPage.calculateTotal(bestWay, subTotal)).toEqual(totalBest)

    })

    test("Verify Edit cart item parameters", async ({cartPage, page, itemPage}) => {
        await expect(cartPage.editItem).toBeVisible()
        await cartPage.editItem.click()
        let random = (Math.floor(Math.random() * 5) + 1).toString()
        await expect(page.url()).toContain(pageData.Url.editCartItem)
        await itemPage.selectSIze(itemPage.size(+random))
        const selectedSize = await itemPage.size(+random).innerText()
        await itemPage.typeQty(random)
        await expect(itemPage.updateCart).toBeVisible()
        await itemPage.updateCart.isEnabled()
        await itemPage.updateCart.click()
        await expect(page).toHaveURL(pageData.Url.cart)
        await expect(cartPage.cartSize).toHaveText(selectedSize)
        await expect(cartPage.itemQty).toHaveText(random)
    })

    test("Verify Remove item from cart", async ({ cartPage }) =>{
        await expect(cartPage.removeItemButton).toBeVisible()
        await cartPage.removeItemButton.click()
        await expect(cartPage.cartEmpty).toHaveText(pageData.Messages.emptyCart)
    })

    test.fixme("Verify price after updating item quantity", async ({cartPage, page}) => {
        let random = (Math.floor(Math.random() * 15) + 1).toString()
        await expect(cartPage.itemQty).toBeVisible()
        await cartPage.itemQty.fill(random)
        await expect(cartPage.itemQty).toHaveValue(random)
        const price = await cartPage.getCurrency((await cartPage.itemPrice.innerText()).toString())
        const finalPrice = price * +random
        await expect(cartPage.updateCartButton).toBeVisible()
        await cartPage.updateCartButton.click()
        await page.waitForLoadState("domcontentloaded")
        let subTotal = await cartPage.getCurrency((await cartPage.itemSubtotal.innerText()).toString())
        expect(await subTotal).toEqual(finalPrice)
    })
})