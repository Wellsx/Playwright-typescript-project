// @ts-check
import { expect, test } from "../pages/pages";
import * as pageData from "../pages/page-data/pageData";



test.describe("Nav bar 'Women' submenu test suite", () => {
    test.beforeEach("Visit home page", async ({page}) => {
        await page.goto("/");
        await expect(page).toHaveURL("/");
        await expect(page).toHaveTitle("Home Page");
    })

    test("Verify all 'Women' submenu hover links are present", async ({page, navBar}) => {
        await navBar.hover(navBar.navButtonWomen)
        await navBar.hover(navBar.navHoverMenu(pageData.NavID.womenTops))
        const womenTopIDs = pageData.NavID.womenTopsIDs
        const womenTopLinks = pageData.NavID.womenTopLinks
        for( let i = 0; i < womenTopIDs.length; i++){
            const womenID = womenTopIDs[i];
            const linkText = womenTopLinks[i]
            const submenuLocator = navBar.navHoverMenu(womenID)
            await expect(submenuLocator).toBeVisible()
            await expect(submenuLocator).toHaveText(linkText)
        }
        await navBar.hover(navBar.navHoverMenu(pageData.NavID.womenBottoms))
        const womenBottomIDs = pageData.NavID.womenBottomIDs
        const womenBottomLinks = pageData.NavID.bottomLinks
        for( let i = 0; i < womenBottomIDs.length; i++){
            const womenID = womenBottomIDs[i]
            const linkText = womenBottomLinks[i]
            const submenuLocator = navBar.navHoverMenu(womenID)
            await expect(submenuLocator).toBeVisible()
            await expect(submenuLocator).toHaveText(linkText)
        }
    })

    test("Verify 'Women' link", async ({page, navBar}) => {
        await expect(navBar.navButtonWomen).toBeVisible()
        await navBar.navButtonWomen.click()
        await expect(page).toHaveURL(pageData.Url.women)
        await expect(page).toHaveTitle(pageData.PageTitle.women)
    })

    test("Verify 'Tops' link", async ({page, navBar}) => {

    })
})