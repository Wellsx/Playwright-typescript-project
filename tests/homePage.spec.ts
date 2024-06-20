// @ts-check
import { expect, test } from "@playwright/test";
import { Pages } from "../pages/pages";
import * as registerPageData from "../pages/page-data/registerPageData.json"
import * as loginPageData from "../pages/page-data/loginPageData.json"

test.describe("Home Page test suite", () => {

    test("Verify home page loads correctly", async ({page}) =>{
        const pages = Pages(page);

        await pages.homePage.goToHome();
        await expect(page).toHaveURL("/")
        await expect(page).toHaveTitle("Home Page")
    })

    test("Verify click on 'Create an Account' button loads registration page correctly", async ({page}) => {
        const pages = Pages(page);

        await pages.homePage.goToHome()
        await expect(pages.homePage.createAccountButton).toBeVisible()
        await pages.homePage.clickCreateAccount()
        await expect(page).toHaveURL(registerPageData.registerURL)
        await expect(page).toHaveTitle(registerPageData.title)
    })

    test("Verify click on the 'Sign In' button loads Sign in page correctly", async ({page}) => {
        const pages = Pages(page);

        await pages.homePage.goToHome()
        await expect(pages.homePage.signInButton).toBeVisible()
        await pages.homePage.clickSignIn()
        await expect(page.url()).toContain(loginPageData.loginURL)
        await expect(page).toHaveTitle(loginPageData.title)
    })
})