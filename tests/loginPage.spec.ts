// @ts-check
import { test, expect } from "../pages/pages";
import * as registeredUser from "../pages/page-data/registeredUser.json";
import Data from "../pages/page-data/data";
import * as pageData from "../pages/page-data/pageData";

test.describe("Customer Login test suite", () => {
  test.beforeEach("Navigate to Customer Login page", async ({ page, loginPage }) => {
    await page.goto(pageData.Url.login);
  });

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
    await expect(page).toHaveURL(pageData.Url.myAccount);
    await expect(myAccountPage.myAccountHeader).toHaveText(pageData.PageTitle.myAccount);
  });

  test("Verify login with invalid credentials", async ({ page, loginPage }) => {
    await loginPage.fillLoginInfo(registeredUser.email, Data.invalidPassword);
    await expect(loginPage.emailField).toHaveValue(registeredUser.email);
    await expect(loginPage.passwordField).toHaveValue(Data.invalidPassword);
    await expect(loginPage.signInButton).toBeVisible();
    await loginPage.clickSignIn();
    await expect(page).not.toHaveURL(pageData.Url.myAccount);
    await expect(loginPage.invalidLoginError).toHaveText(pageData.ErrorMessages.invalidPasswordError);
  });

  test("Verify login with blank input fields", async ({ page, loginPage }) => {
    await loginPage.fillLoginInfo("", "");
    await expect(loginPage.emailField).toHaveValue("");
    await expect(loginPage.passwordField).toHaveValue("");
    await expect(loginPage.signInButton).toBeVisible();
    await loginPage.clickSignIn();
    await expect(loginPage.emailError).toHaveText(pageData.ErrorMessages.requiredFIeldError);
  });

  test("Verify 'Create an Account' button functionality on Login Page", async ({ page, loginPage, registerPage }) => {
    await expect(loginPage.createAccountButton).toBeVisible();
    await loginPage.clickCreateAnAccount();
    await expect(page).toHaveURL(pageData.Url.register);
    await expect(page).toHaveTitle(pageData.PageTitle.register);
  });

  test("Verify 'Forgot Password?' functionality", async ({ page, loginPage, forgotPasswordPage }) => {
    await expect(loginPage.forgotPassword).toBeVisible();
    await loginPage.clickForgotPassword();
    await expect(page).toHaveURL(pageData.Url.forgotPassword);
    await expect(forgotPasswordPage.forgotPasswordHeader).toHaveText(pageData.PageTitle.forgotPassword);
  });

  test("Verify logout functionality", async ({ page, loginPage, commonActions, browser }) => {
    await loginPage.fillLoginInfo(registeredUser.email, Data.validPassword);
    await loginPage.clickSignIn();
    await expect(loginPage.navbarDropDownButton).toBeVisible();
    await loginPage.openDropDownMenu();
    await expect(loginPage.signOutButton).toBeVisible();
    await loginPage.clickSignOut();
    await loginPage.signOutHeader.isVisible();
    expect(loginPage.signOutHeader).toHaveText(pageData.PageTitle.signOut);
    const cookies = await page.context().cookies();
    const authCookie = cookies.find((cookie) => cookie.name === loginPage.authcookie);
    expect(authCookie).toBeUndefined();
  });
});
