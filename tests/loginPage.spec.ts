// @ts-check
import {test, expect } from "@playwright/test"
import { Pages } from "../pages/pages";
import * as registeredUser from "../pages/page-data/registeredUser.json"
import * as myAccountPageData from "../pages/page-data/myAccountPageData.json"
import * as loginPageData from "../pages/page-data/loginPageData.json"
import * as registerPageData from "../pages/page-data/registerPageData.json"
import Data from "../pages/page-data/userData"

test.beforeEach("Navigate to Customer Login page", async ({page}) => {
    const pages = Pages(page)
    await pages.loginPage.goToLoginPage()
})

test.describe("Customer Login test suite", () => {
    test("Verify Login page loads correctly", async ({page}) => {
        const pages = Pages(page)
        await pages.loginPage.goToLoginPage()
        await expect(pages.loginPage.loginHeader).toBeVisible()
        await expect(pages.loginPage.emailField).toBeVisible()
        await expect(pages.loginPage.passwordField).toBeVisible()
        await expect(pages.loginPage.forgotPassword).toBeVisible()
        await expect(pages.loginPage.createAccountButton).toBeVisible()
    })

    test("Verify login functionality", async ({page}) => {
        const pages = Pages(page)
        await pages.loginPage.fillLoginInfo(registeredUser.email, Data.validPassword)
        await expect(pages.loginPage.emailField).toHaveValue(registeredUser.email)
        await expect(pages.loginPage.passwordField).toHaveValue(Data.validPassword)
        await expect(pages.loginPage.signInButton).toBeVisible()
        await pages.loginPage.clickSignIn()
        await expect(page).toHaveURL(myAccountPageData.myAccountURL)
        await expect(pages.myAccountPage.myAccountHeader).toHaveText(myAccountPageData.myAccountHeader)
        
    })

    test("Verify login with invalid credentials", async ({page}) => {
        const pages = Pages(page)
        await pages.loginPage.fillLoginInfo(registeredUser.email, Data.invalidPassword)
        await expect(pages.loginPage.emailField).toHaveValue(registeredUser.email)
        await expect(pages.loginPage.passwordField).toHaveValue(Data.invalidPassword)
        await expect(pages.loginPage.signInButton).toBeVisible()
        await pages.loginPage.clickSignIn()
        await expect(page).not.toHaveURL(myAccountPageData.myAccountURL)
        await expect(pages.loginPage.invalidLoginError).toHaveText(loginPageData.invalidLoginMessage)
    })

    test("Verify login with blank input fields", async ({page}) => {
        const pages = Pages(page)
        await pages.loginPage.fillLoginInfo("", "")
        await expect(pages.loginPage.emailField).toHaveValue("")
        await expect(pages.loginPage.passwordField).toHaveValue("")
        await expect(pages.loginPage.signInButton).toBeVisible()
        await pages.loginPage.clickSignIn()
        await expect(pages.loginPage.emailError).toHaveText(loginPageData.requiredFIeldError)
    })

    test("Verify 'Create an Account' button functionality on Login Page", async ({page}) => {
        const pages = Pages(page)
        await expect(pages.loginPage.createAccountButton).toBeVisible()
        await pages.loginPage.clickCreateAnAccount()
        await pages.registerPage.goToRegisterPage()
        await expect(page).toHaveURL(registerPageData.registerURL)
        await expect(page).toHaveTitle(registerPageData.title)
    })

    test("Verify 'Forgot Password?' functionality", async ({page}) => {
        const pages = Pages(page)
        await expect(pages.loginPage.forgotPassword).toBeVisible()
        await pages.loginPage.clickForgotPassword()
        await expect(page).toHaveURL(loginPageData.forgotPasswordURL)
        await expect(pages.forgotPasswordPage.forgotPasswordHeader).toHaveText(loginPageData.forgotPasswordHeader)
    })

})
