// @ts-check
import { expect, test } from "../pages/pages";
import * as pageData from "../pages/page-data/pageData";

test.beforeEach("Visit home page", async ({page, commonActions}) => {
    await page.goto("/");
    await commonActions.verifyPage("", pageData.PageTitle.home, page)
})
test.describe("Nav bar 'Women' submenu test suite", () => {
    test("Verify all 'Women' submenu hover links are present", async ({navBar}) => {
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
test.describe("Nav bar 'Men' submenu test suite", () => {
    test("Verify all 'Men' submenu hover links are present", async ({page, navBar}) => {
        await navBar.hover(navBar.navButtonMen)
        await navBar.hover(navBar.navHoverMenu(pageData.NavID.menTops))
        const topIDs = pageData.NavID.menTopsIDs
        const topLinks = pageData.NavID.menTopLinks
        for( let i = 0; i < topIDs.length; i++){
            const id = topIDs[i];
            const linkText = topLinks[i]
            const submenuLocator = navBar.navHoverMenu(id)
            await expect(submenuLocator).toBeVisible()
            await expect(submenuLocator).toHaveText(linkText)
        }
        await navBar.hover(navBar.navHoverMenu(pageData.NavID.menBottoms))
        const bottomIDs = pageData.NavID.menBottomIDs
        const bottomLinks = pageData.NavID.bottomLinks
        for( let i = 0; i < bottomIDs.length; i++){
            const id = bottomIDs[i]
            const linkText = bottomLinks[i]
            const submenuLocator = navBar.navHoverMenu(id)
            await expect(submenuLocator).toBeVisible()
            await expect(submenuLocator).toHaveText(linkText)
        }
    })
    test("Verify 'Men' link", async ({page, navBar}) => {
        await expect(navBar.navButtonMen).toBeVisible()
        await navBar.navButtonMen.click()
        await expect(page).toHaveURL(pageData.Url.men)
        await expect(page).toHaveTitle(pageData.PageTitle.men)
    })
    test("Verify 'Tops' links", async ({page, navBar, cataloguePage}) => {
        const urls = pageData.Url.menTopsLinks
        const topIDs = pageData.NavID.menTopsIDs
        const headerText = pageData.NavID.menTopLinks
        await navBar.hover(navBar.navButtonMen)
        await navBar.navHoverMenu(pageData.NavID.menTops).click()
        await expect (page).toHaveURL(pageData.Url.menTops)
        for( let i = 0; i < topIDs.length; i++){
            await navBar.hover(navBar.navButtonMen)
            await navBar.hover(navBar.navHoverMenu(pageData.NavID.menTops))
            const id = topIDs[i];
            const submenuLocator = navBar.navHoverMenu(id)
            await submenuLocator.click()
            await expect(page).toHaveURL(urls[i])
            await expect(cataloguePage.headerName).toHaveText(headerText[i])
        }        
    })
    test("Verify 'Bottoms' links", async ({page, navBar, cataloguePage}) => {
        const urls = pageData.Url.menBottomsLinks
        const bottomIDs = pageData.NavID.menBottomIDs
        const headerText = pageData.NavID.bottomLinks
        await navBar.hover(navBar.navButtonMen)
        await navBar.navHoverMenu(pageData.NavID.menBottoms).click()
        await expect(page).toHaveURL(pageData.Url.menBottoms)
        for(let i = 0; i < bottomIDs.length; i++){
            await navBar.hover(navBar.navButtonMen)
            await navBar.hover(navBar.navHoverMenu(pageData.NavID.menBottoms))
            const id = bottomIDs[i];
            const submenuLocator = navBar.navHoverMenu(id)
            await submenuLocator.click()
            await expect(page).toHaveURL(urls[i])
            await expect(cataloguePage.headerName).toHaveText(headerText[i])
        }
    })
})

test.describe("Nav bar 'Gear' submenu test suite", () => {
    test("Verify all 'Gear' submenu hover links are present", async ({page, navBar}) => {
        await navBar.hover(navBar.navButtonGear)
        const gearID = pageData.NavID.gearIDs
        const links = pageData.NavID.gearLinks
        for( let i = 0; i < gearID.length; i++){
            const id = gearID[i];
            const linkText = links[i]
            const submenuLocator = navBar.navHoverMenu(id)
            await expect(submenuLocator).toBeVisible()
            await expect(submenuLocator).toHaveText(linkText)
        }
    })
    test("Verify 'Gear' pages load correctly", async ({page, navBar, cataloguePage}) => {
        const urls = pageData.Url.gearLinks
        const gearIDs = pageData.NavID.gearIDs
        const headerText = pageData.NavID.gearLinks
        await navBar.hover(navBar.navButtonGear)
        for( let i = 0; i < gearIDs.length; i++){
            await navBar.hover(navBar.navButtonGear)
            const id = gearIDs[i];
            const submenuLocator = navBar.navHoverMenu(id)
            await submenuLocator.click()
            await expect(page).toHaveURL(urls[i])
            await expect(cataloguePage.headerName).toHaveText(headerText[i])
        }        
    })
})

test.describe("Nav bar 'Sale' submenu test suite", () => {
    test("Verify 'Sale' page loads correctly", async ({page, navBar, cataloguePage}) => {
        await expect(navBar.navButtonSale).toBeVisible()
        await navBar.navButtonSale.click()
        await expect(page).toHaveURL(pageData.Url.sale)
        await expect(cataloguePage.headerName).toHaveText(pageData.NavID.sale)
    })
    })
