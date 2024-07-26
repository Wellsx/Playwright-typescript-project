import {expect, test} from "../pages/pages"
import * as pageData from "../pages/page-data/pageData";
import { randomInt } from "crypto";

test.describe("Item Page test suite", () => {

    let pageTitle: string;

    test.beforeEach("Select a random item from the catalogue", async ({ cataloguePage, page }) => {
        await page.goto(pageData.Url.menTops)
        await expect(page).toHaveURL(pageData.Url.menTops)
        let itemNumber: number = await cataloguePage.product.count()
        let randomElement = Math.round(Math.floor(Math.random() * (itemNumber - 2)) +1 )
        pageTitle = (await cataloguePage.productCardTitle.locator(`nth=${randomElement}`).innerText()).toString()
        await cataloguePage.product.locator(`nth=${randomElement}`).click()
      });

    test("Verify Item page loads correctly", async ({itemPage}) => {
        await expect(itemPage.pageTitle).toBeVisible()
        await expect(itemPage.pageTitle).toHaveText(pageTitle)
        for (let i = 0; i < itemPage.sizeOptions.length; i++) {
            const option = itemPage.sizeOptions[i];
            const size = pageData.itemPage.size[i]
            await expect(option).toBeVisible()
            await expect(option).toHaveText(size)
        }
        await expect(itemPage.price).toBeVisible()
        await expect(itemPage.color).toBeVisible()
        await expect(itemPage.qty).toBeVisible()
        await expect(itemPage.addToCart).toBeVisible()
        await expect(itemPage.addToWIshList).toBeVisible()
        await expect(itemPage.addToCompare).toBeVisible()
        await expect(itemPage.detailsTab).toBeVisible()
        await expect(itemPage.moreInfoTab).toBeVisible()
        await expect(itemPage.reviewsTab).toBeVisible()
    })

    test("Verify switching between sizes", async ({itemPage}) =>{
        for (let i = 0; i < itemPage.sizeOptions.length; i++) {
            const option = itemPage.sizeOptions[i];
            await itemPage.selectSIze(option)
            await expect(option).toHaveClass(/selected/)
        }
    })
    test("Verify add to cart button functionality", async ({itemPage}) =>{
        await itemPage.selectSIze(itemPage.sizeL)
        await expect(itemPage.sizeL).toHaveClass(/selected/)
        await itemPage.selectColor()
        await expect(itemPage.colorOption).toHaveClass(/selected/)
        await itemPage.addItem()
        await expect(itemPage.addSuccess).toBeVisible()
    })
    test("Verify mandatory field error messages", async ({itemPage}) => {
        await itemPage.qty.fill("0")
        await itemPage.addItem()
        await expect(itemPage.sizeError).toHaveText(pageData.ErrorMessages.requiredFIeldError)
        await expect(itemPage.colorError).toHaveText(pageData.ErrorMessages.requiredFIeldError)
        await expect(itemPage.qtyError).toHaveText(pageData.ErrorMessages.qtyError)
    })
})