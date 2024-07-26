// @ts-check
import { test, expect } from "../pages/pages";
import * as pageData from "../pages/page-data/pageData";

test.describe("Item checkout test suite", () => {
    test.beforeEach("Add item to cart", async ({commonActions, page}) => {
        await commonActions.addItemToCart(page)
        await page.goto(pageData.Url.shipping)
    })

    test("Verify Shipping page loads correctly", async ({page}) => {
        await expect(page).toHaveURL(pageData.Url.shipping)
    })
})