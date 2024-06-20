// @ts-check
import { Pages } from "../pages/pages";
import * as registerPageData from "../pages/page-data/registerPageData.json"
import * as myAccountPageData from "../pages/page-data/myAccountPageData.json"
import { test, expect, request } from "@playwright/test";
import Data from "../pages/page-data/userData"

test.beforeEach("Open registration page",async ({page}) => {
    const pages = Pages(page);

    await pages.registerPage.goToRegisterPage()
    await expect(page).toHaveURL(registerPageData.registerURL)
    await expect(page).toHaveTitle(registerPageData.title)
})

test.describe("Registration positive test suite", () => {
    
    test("Verify registration page loads correctly", async ({page}) => {
    
        const pages = Pages(page);

        await pages.registerPage.goToRegisterPage()
        await expect(page).toHaveURL(registerPageData.registerURL)
        await expect(page).toHaveTitle(registerPageData.title)
        await expect(pages.registerPage.createNewAccountHeader).toBeVisible()
        await expect(pages.registerPage.personalInformationHeader).toBeVisible()
        await expect(pages.registerPage.signInInformationHeader).toBeVisible()
        await expect(pages.registerPage.firstNameFIeld).toBeVisible()
        await expect(pages.registerPage.lastNameField).toBeVisible()
        await expect(pages.registerPage.emailField).toBeVisible()
        await expect(pages.registerPage.passwordField).toBeVisible()
        await expect(pages.registerPage.passwordStrength).toBeVisible()
        await expect(pages.registerPage.confirmPasswordField).toBeVisible()
        await expect(pages.registerPage.createAccountButton).toBeVisible()
        
    })

    test("Verify Registration functionality", async ({page}) => {
        const pages = Pages(page);
        await pages.registerPage.fillAccountInfo(
            Data.firstName,
            Data.lastName,
            Data.uniqueEmail,
            Data.validPassword,
            Data.validPassword
        )
        await expect(pages.registerPage.firstNameFIeld).toHaveValue(Data.firstName)
        await expect(pages.registerPage.lastNameField).toHaveValue(Data.lastName)
        await expect(pages.registerPage.emailField).toHaveValue(Data.uniqueEmail)
        await expect(pages.registerPage.passwordField).toHaveValue(Data.validPassword)
        await expect(pages.registerPage.confirmPasswordField).toHaveValue(Data.validPassword)
        await expect(pages.registerPage.createAccountButton).toBeVisible()

        await pages.registerPage.clickCreateAccount()
        await expect(page).toHaveURL(myAccountPageData.myAccountURL)
        await expect(pages.myAccountPage.myAccountHeader).toHaveText(myAccountPageData.myAccountHeader)
        Data.save_email(Data.uniqueEmail)
        })
    })

test.describe("Registration negative test suite", () => {
    
    test("Verify registration with blank input fields", async ({page}) => {
        const pages = Pages(page);
        await pages.registerPage.fillAccountInfo("","","","","")
        await expect(pages.registerPage.firstNameFIeld).toHaveValue("")
        await expect(pages.registerPage.lastNameField).toHaveValue("")
        await expect(pages.registerPage.emailField).toHaveValue("")
        await expect(pages.registerPage.passwordField).toHaveValue("")
        await expect(pages.registerPage.confirmPasswordField).toHaveValue("")
        await expect(pages.registerPage.createAccountButton).toBeVisible()
        await pages.registerPage.clickCreateAccount()

        await expect(pages.registerPage.firstNameError).toHaveText(registerPageData.requiredFIeldError)
        await expect(pages.registerPage.lastNameError).toHaveText(registerPageData.requiredFIeldError)
        await expect(pages.registerPage.emailError).toHaveText(registerPageData.requiredFIeldError)
        await expect(pages.registerPage.passwordError).toHaveText(registerPageData.requiredFIeldError)
        await expect(pages.registerPage.confirmPasswordError).toHaveText(registerPageData.requiredFIeldError)
        
    })

    test("Verify registration with invalid email and invalid password", async ({page}) => {
        const pages = Pages(page)
        await pages.registerPage.fillAccountInfo(
            Data.firstName,
            Data.lastName,
            Data.invalidEmail,
            Data.invalidPassword,
            Data.invalidPassword,
        )
        await expect(pages.registerPage.firstNameFIeld).toHaveValue(Data.firstName)
        await expect(pages.registerPage.lastNameField).toHaveValue(Data.lastName)
        await expect(pages.registerPage.emailField).toHaveValue(Data.invalidEmail)
        await expect(pages.registerPage.passwordField).toHaveValue(Data.invalidPassword)
        await expect(pages.registerPage.confirmPasswordField).toHaveValue(Data.invalidPassword)
        await expect(pages.registerPage.createAccountButton).toBeVisible()
        await pages.registerPage.clickCreateAccount()
        
        await expect(pages.registerPage.emailError).toHaveText(registerPageData.invalidEmailError)
        await expect(pages.registerPage.passwordError).toHaveText(registerPageData.invalidPasswordError)
    })

    test("Verify registration with password mismatch", async ({page}) => {
        const pages = Pages(page)
        await pages.registerPage.fillAccountInfo(
            Data.firstName,
            Data.lastName,
            Data.uniqueEmail,
            Data.validPassword,
            Data.invalidPassword
        )
        await expect(pages.registerPage.firstNameFIeld).toHaveValue(Data.firstName)
        await expect(pages.registerPage.lastNameField).toHaveValue(Data.lastName)
        await expect(pages.registerPage.emailField).toHaveValue(Data.uniqueEmail)
        await expect(pages.registerPage.passwordField).toHaveValue(Data.validPassword)
        await expect(pages.registerPage.confirmPasswordField).toHaveValue(Data.invalidPassword)
        await expect(pages.registerPage.createAccountButton).toBeVisible()
        await pages.registerPage.clickCreateAccount()

        await expect(pages.registerPage.confirmPasswordError).toHaveText(registerPageData.confirmPasswordError)
    })

    test("Verify registration with weak password", async ({page}) => {
        const pages = Pages(page)
        await pages.registerPage.fillAccountInfo(
            Data.firstName,
            Data.lastName,
            Data.uniqueEmail,
            Data.shortPassword,
            Data.shortPassword
        )
        await expect(pages.registerPage.firstNameFIeld).toHaveValue(Data.firstName)
        await expect(pages.registerPage.lastNameField).toHaveValue(Data.lastName)
        await expect(pages.registerPage.emailField).toHaveValue(Data.uniqueEmail)
        await expect(pages.registerPage.passwordField).toHaveValue(Data.shortPassword)
        await expect(pages.registerPage.confirmPasswordField).toHaveValue(Data.shortPassword)
        await expect(pages.registerPage.createAccountButton).toBeVisible()
        await pages.registerPage.clickCreateAccount()

        await expect(pages.registerPage.passwordError).toHaveText(registerPageData.minimumPasswordError)
    })
})
