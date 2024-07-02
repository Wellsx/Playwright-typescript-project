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
        const topIDs = pageData.NavID.womenTopsIDs
        const topLinks = pageData.NavID.womenTopLinks
        for( let i = 0; i < topIDs.length; i++){
            const id = topIDs[i];
            const linkText = topLinks[i]
            const submenuLocator = navBar.navHoverMenu(id)
            await expect(submenuLocator).toBeVisible()
            await expect(submenuLocator).toHaveText(linkText)
        }
        await navBar.hover(navBar.navHoverMenu(pageData.NavID.womenBottoms))
        const bottomIDs = pageData.NavID.womenBottomIDs
        const bottomLinks = pageData.NavID.bottomLinks
        for( let i = 0; i < bottomIDs.length; i++){
            const id = bottomIDs[i]
            const linkText = bottomLinks[i]
            const submenuLocator = navBar.navHoverMenu(id)
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

    test("Verify 'Tops' links", async ({page, navBar, cataloguePage}) => {
        const urls = pageData.Url.womenTopsLinks
        const topIDs = pageData.NavID.womenTopsIDs
        const headerText = pageData.NavID.womenTopLinks
        await navBar.hover(navBar.navButtonWomen)
        await navBar.navHoverMenu(pageData.NavID.womenTops).click()
        await expect (page).toHaveURL(pageData.Url.womenTops)
        for( let i = 0; i < topIDs.length; i++){
            await navBar.hover(navBar.navButtonWomen)
            await navBar.hover(navBar.navHoverMenu(pageData.NavID.womenTops))
            const id = topIDs[i];
            const submenuLocator = navBar.navHoverMenu(id)
            await submenuLocator.click()
            await expect(page).toHaveURL(urls[i])
            await expect(cataloguePage.headerName).toHaveText(headerText[i])
        }        
    })
    test("Verify 'Bottoms' links", async ({page, navBar, cataloguePage}) => {
        const urls = pageData.Url.womenBottomsLinks
        const bottomIDs = pageData.NavID.womenBottomIDs
        const headerText = pageData.NavID.bottomLinks
        await navBar.hover(navBar.navButtonWomen)
        await navBar.navHoverMenu(pageData.NavID.womenBottoms).click()
        await expect(page).toHaveURL(pageData.Url.womenBottoms)
        for(let i = 0; i < bottomIDs.length; i++){
            await navBar.hover(navBar.navButtonWomen)
            await navBar.hover(navBar.navHoverMenu(pageData.NavID.womenBottoms))
            const id = bottomIDs[i];
            const submenuLocator = navBar.navHoverMenu(id)
            await submenuLocator.click()
            await expect(page).toHaveURL(urls[i])
            await expect(cataloguePage.headerName).toHaveText(headerText[i])
        }

    })
})