// @ts-check
import { test, expect } from "../pages/pages";
import Data from "../pages/page-data/data";
import PageData from "../pages/page-data/pageData";

test.beforeEach("Open registration page", async ({ page, registerPage }) => {
  await page.goto(PageData.Url.register);
  await expect(page).toHaveURL(PageData.Url.register);
  await expect(page).toHaveTitle(PageData.PageTitle.register);
});

test.describe("Registration positive test suite", () => {
  test("Verify registration page loads correctly", async ({ page, registerPage }) => {
    await expect(page).toHaveURL(PageData.Url.register);
    await expect(page).toHaveTitle(PageData.PageTitle.register);
    await expect(registerPage.createNewAccountHeader).toBeVisible();
    await expect(registerPage.personalInformationHeader).toBeVisible();
    await expect(registerPage.signInInformationHeader).toBeVisible();
    await expect(registerPage.firstNameFIeld).toBeVisible();
    await expect(registerPage.lastNameField).toBeVisible();
    await expect(registerPage.emailField).toBeVisible();
    await expect(registerPage.passwordField).toBeVisible();
    await expect(registerPage.passwordStrength).toBeVisible();
    await expect(registerPage.confirmPasswordField).toBeVisible();
    await expect(registerPage.createAccountButton).toBeVisible();
  });

  test("Verify Registration functionality", async ({ page, registerPage, myAccountPage }) => {
    await registerPage.fillAccountInfo(Data.firstName, Data.lastName, Data.uniqueEmail, Data.validPassword, Data.validPassword);
    await expect(registerPage.firstNameFIeld).toHaveValue(Data.firstName);
    await expect(registerPage.lastNameField).toHaveValue(Data.lastName);
    await expect(registerPage.emailField).toHaveValue(Data.uniqueEmail);
    await expect(registerPage.passwordField).toHaveValue(Data.validPassword);
    await expect(registerPage.confirmPasswordField).toHaveValue(Data.validPassword);
    await expect(registerPage.createAccountButton).toBeVisible();

    await registerPage.clickCreateAccount();
    await expect(page).toHaveURL(PageData.Url.myAccount);
    await expect(myAccountPage.myAccountHeader).toHaveText(PageData.PageTitle.myAccount);
    Data.save_email(Data.uniqueEmail);
  });
});

test.describe("Registration negative test suite", () => {
  test("Verify registration with blank input fields", async ({ page, registerPage }) => {
    await registerPage.fillAccountInfo("", "", "", "", "");
    await expect(registerPage.firstNameFIeld).toHaveValue("");
    await expect(registerPage.lastNameField).toHaveValue("");
    await expect(registerPage.emailField).toHaveValue("");
    await expect(registerPage.passwordField).toHaveValue("");
    await expect(registerPage.confirmPasswordField).toHaveValue("");
    await expect(registerPage.createAccountButton).toBeVisible();
    await registerPage.clickCreateAccount();

    await expect(registerPage.firstNameError).toHaveText(PageData.ErrorMessages.requiredFIeldError);
    await expect(registerPage.lastNameError).toHaveText(PageData.ErrorMessages.requiredFIeldError);
    await expect(registerPage.emailError).toHaveText(PageData.ErrorMessages.requiredFIeldError);
    await expect(registerPage.passwordError).toHaveText(PageData.ErrorMessages.requiredFIeldError);
    await expect(registerPage.confirmPasswordError).toHaveText(PageData.ErrorMessages.requiredFIeldError);
  });

  test("Verify registration with invalid email and invalid password", async ({ page, registerPage }) => {
    await registerPage.fillAccountInfo(Data.firstName, Data.lastName, Data.invalidEmail, Data.invalidPassword, Data.invalidPassword);
    await expect(registerPage.firstNameFIeld).toHaveValue(Data.firstName);
    await expect(registerPage.lastNameField).toHaveValue(Data.lastName);
    await expect(registerPage.emailField).toHaveValue(Data.invalidEmail);
    await expect(registerPage.passwordField).toHaveValue(Data.invalidPassword);
    await expect(registerPage.confirmPasswordField).toHaveValue(Data.invalidPassword);
    await expect(registerPage.createAccountButton).toBeVisible();
    await registerPage.clickCreateAccount();

    await expect(registerPage.emailError).toHaveText(PageData.ErrorMessages.invalidEmailError);
    await expect(registerPage.passwordError).toHaveText(PageData.ErrorMessages.invalidPasswordError);
  });

  test("Verify registration with password mismatch", async ({ page, registerPage }) => {
    await registerPage.fillAccountInfo(Data.firstName, Data.lastName, Data.uniqueEmail, Data.validPassword, Data.invalidPassword);
    await expect(registerPage.firstNameFIeld).toHaveValue(Data.firstName);
    await expect(registerPage.lastNameField).toHaveValue(Data.lastName);
    await expect(registerPage.emailField).toHaveValue(Data.uniqueEmail);
    await expect(registerPage.passwordField).toHaveValue(Data.validPassword);
    await expect(registerPage.confirmPasswordField).toHaveValue(Data.invalidPassword);
    await expect(registerPage.createAccountButton).toBeVisible();
    await registerPage.clickCreateAccount();

    await expect(registerPage.confirmPasswordError).toHaveText(PageData.ErrorMessages.confirmPasswordError);
  });

  test("Verify registration with weak password", async ({ page, registerPage }) => {
    await registerPage.fillAccountInfo(Data.firstName, Data.lastName, Data.uniqueEmail, Data.shortPassword, Data.shortPassword);
    await expect(registerPage.firstNameFIeld).toHaveValue(Data.firstName);
    await expect(registerPage.lastNameField).toHaveValue(Data.lastName);
    await expect(registerPage.emailField).toHaveValue(Data.uniqueEmail);
    await expect(registerPage.passwordField).toHaveValue(Data.shortPassword);
    await expect(registerPage.confirmPasswordField).toHaveValue(Data.shortPassword);
    await expect(registerPage.createAccountButton).toBeVisible();
    await registerPage.clickCreateAccount();

    await expect(registerPage.passwordError).toHaveText(PageData.ErrorMessages.minimumPasswordError);
  });
});
