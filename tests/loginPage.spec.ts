// @ts-check
import { test, expect } from "../pages/pages";
import * as registeredUser from "../pages/page-data/registeredUser.json";
import * as myAccountPageData from "../pages/page-data/myAccountPageData.json";
import * as loginPageData from "../pages/page-data/loginPageData.json";
import * as registerPageData from "../pages/page-data/registerPageData.json";
import Data from "../pages/page-data/data";
import { Url } from "../pages/page-data/url";
import { ErrorMessages } from "../pages/page-data/errorMessages";

test.beforeEach("Navigate to Customer Login page", async ({ page, loginPage }) => {
  await page.goto(Url.login);
});

test.describe("Customer Login test suite", () => {
  test("Verify Login page loads correctly", async ({ loginPage }) => {
    await expect(loginPage.loginHeader).toBeVisible();
    await expect(loginPage.emailField).toBeVisible();
    await expect(loginPage.passwordField).toBeVisible();
    await expect(loginPage.forgotPassword).toBeVisible();
    await expect(loginPage.createAccountButton).toBeVisible();
  });

  test("Verify login functionality", async ({ page, loginPage, myAccountPage }) => {
    await loginPage.fillLoginInfo(registeredUser.email, Data.validPassword);
    await expect(loginPage.emailField).toHaveValue(registeredUser.email);
    await expect(loginPage.passwordField).toHaveValue(Data.validPassword);
    await expect(loginPage.signInButton).toBeVisible();
    await loginPage.clickSignIn();
    await expect(page).toHaveURL(Url.myAccount);
    await expect(myAccountPage.myAccountHeader).toHaveText(myAccountPageData.myAccountHeader);
  });

  test("Verify login with invalid credentials", async ({ page, loginPage }) => {
    await loginPage.fillLoginInfo(registeredUser.email, Data.invalidPassword);
    await expect(loginPage.emailField).toHaveValue(registeredUser.email);
    await expect(loginPage.passwordField).toHaveValue(Data.invalidPassword);
    await expect(loginPage.signInButton).toBeVisible();
    await loginPage.clickSignIn();
    await expect(page).not.toHaveURL(Url.myAccount);
    await expect(loginPage.invalidLoginError).toHaveText(ErrorMessages.invalidPasswordError);
  });

  test("Verify login with blank input fields", async ({ page, loginPage }) => {
    await loginPage.fillLoginInfo("", "");
    await expect(loginPage.emailField).toHaveValue("");
    await expect(loginPage.passwordField).toHaveValue("");
    await expect(loginPage.signInButton).toBeVisible();
    await loginPage.clickSignIn();
    await expect(loginPage.emailError).toHaveText(ErrorMessages.requiredFIeldError);
  });

  test("Verify 'Create an Account' button functionality on Login Page", async ({ page, loginPage, registerPage }) => {
    await expect(loginPage.createAccountButton).toBeVisible();
    await loginPage.clickCreateAnAccount();
    await registerPage.goToRegisterPage();
    await expect(page).toHaveURL(Url.register);
    await expect(page).toHaveTitle(registerPageData.title);
  });

  test("Verify 'Forgot Password?' functionality", async ({ page, loginPage, forgotPasswordPage }) => {
    await expect(loginPage.forgotPassword).toBeVisible();
    await loginPage.clickForgotPassword();
    await expect(page).toHaveURL(Url.forgotPassword);
    await expect(forgotPasswordPage.forgotPasswordHeader).toHaveText(loginPageData.forgotPasswordHeader);
  });
});
