// @ts-check
import { expect, test } from "@playwright/test";
import { Pages } from "../pages/pages";
import * as registerPageData from "../pages/page-data/registerPageData.json"
import * as signInPageData from "../pages/page-data/signInPageData.json"


test("Open home page", async ({page}) =>{
    const pages = Pages(page);

    await pages.homePage.goToHome();
    await expect(page).toHaveURL("/")
    await expect(page).toHaveTitle("Home Page")
})


test("Click on 'Create an Account' button", async ({page}) => {
    const pages = Pages(page);

    await pages.homePage.goToHome()
    await expect(pages.homePage.createAccountButton).toBeVisible()
    await pages.homePage.clickCreateAccount()
    await expect(page).toHaveURL(registerPageData.registerURL)
    await expect(page).toHaveTitle(registerPageData.title)

})

test("Click on the 'Sign In' button", async ({page}) => {
    const pages = Pages(page);

    await pages.homePage.goToHome()
    await expect(pages.homePage.signInButton).toBeVisible()
    await pages.homePage.clickSignIn()
    await expect(page.url()).toContain(signInPageData.signInURL)
    await expect(page).toHaveTitle(signInPageData.title)
    
})