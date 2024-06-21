// @ts-check
import { test, expect } from "../pages/pages";
import * as registeredUser from "../pages/page-data/registeredUser.json";
import Data from "../pages/page-data/data";
import PageData from "../pages/page-data/pageData";

test.beforeEach("Navigate to Customer Login page", async ({ page, loginPage }) => {
  await page.goto(PageData.Url.login);
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
    await expect(page).toHaveURL(PageData.Url.myAccount);
    await expect(myAccountPage.myAccountHeader).toHaveText(PageData.PageTitle.myAccount);
  });

  test("Verify login with invalid credentials", async ({ page, loginPage }) => {
    await loginPage.fillLoginInfo(registeredUser.email, Data.invalidPassword);
    await expect(loginPage.emailField).toHaveValue(registeredUser.email);
    await expect(loginPage.passwordField).toHaveValue(Data.invalidPassword);
    await expect(loginPage.signInButton).toBeVisible();
    await loginPage.clickSignIn();
    await expect(page).not.toHaveURL(PageData.Url.myAccount);
    await expect(loginPage.invalidLoginError).toHaveText(PageData.ErrorMessages.invalidPasswordError);
  });

  test("Verify login with blank input fields", async ({ page, loginPage }) => {
    await loginPage.fillLoginInfo("", "");
    await expect(loginPage.emailField).toHaveValue("");
    await expect(loginPage.passwordField).toHaveValue("");
    await expect(loginPage.signInButton).toBeVisible();
    await loginPage.clickSignIn();
    await expect(loginPage.emailError).toHaveText(PageData.ErrorMessages.requiredFIeldError);
  });

  test("Verify 'Create an Account' button functionality on Login Page", async ({ page, loginPage, registerPage }) => {
    await expect(loginPage.createAccountButton).toBeVisible();
    await loginPage.clickCreateAnAccount();
    await expect(page).toHaveURL(PageData.Url.register);
    await expect(page).toHaveTitle(PageData.PageTitle.register);
  });

  test("Verify 'Forgot Password?' functionality", async ({ page, loginPage, forgotPasswordPage }) => {
    await expect(loginPage.forgotPassword).toBeVisible();
    await loginPage.clickForgotPassword();
    await expect(page).toHaveURL(PageData.Url.forgotPassword);
    await expect(forgotPasswordPage.forgotPasswordHeader).toHaveText(PageData.PageTitle.forgotPassword);
  });
});
