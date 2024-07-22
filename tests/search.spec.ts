import {expect, test} from "../pages/pages"
import Data from "../pages/page-data/data"
import * as pageData from "../pages/page-data/pageData"

test.describe("Search functionality test suite", () => {
    test.beforeEach("Visit home page", async ({ page, commonActions }) => {
        await page.goto("/");
        await commonActions.verifyPage("", pageData.PageTitle.home, page)
      });

    test("Verify search functionality works correctly", async ({page, homePage, cataloguePage}) => {
        await expect(homePage.searchBar).toBeVisible()
        await homePage.fillSearch(Data.searchQuery)
        await expect(homePage.searchBar).toHaveValue(Data.searchQuery)
        await expect(homePage.searchOptions).toContainText(Data.searchQuery)
        await homePage.clickSearch()
        await expect(page).toHaveURL(pageData.Url.search + Data.searchQuery)
        await expect(cataloguePage.headerName).toHaveText(pageData.pageInfo.searchHeader + "'" + Data.searchQuery + "'")
    })
    test("Verify invalid search", async ({page, homePage, cataloguePage}) => {
        await expect(homePage.searchBar).toBeVisible()
        await homePage.fillSearch(Data.invalidQuery)
        await homePage.clickSearch()
        await expect(page).toHaveURL(pageData.Url.search + Data.invalidQuery)
        await expect(cataloguePage.minimumSearchError).toHaveText(pageData.ErrorMessages.invalidSearch)
    })
})