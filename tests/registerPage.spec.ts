// @ts-check
import { test, expect } from "../pages/pages";
import Data from "../pages/page-data/data";
import * as pageData from "../pages/page-data/pageData";

test.beforeEach("Open registration page", async ({ page, commonActions}) => {
  await page.goto(pageData.Url.register);
  await commonActions.verifyPage(pageData.Url.register, pageData.PageTitle.register, page)
});

test.describe("Registration positive test suite", () => {
  test("Verify registration page loads correctly", async ({registerPage }) => {
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
    await registerPage.clickCreateAccount();
    await expect(page).toHaveURL(pageData.Url.myAccount);
    await expect(myAccountPage.myAccountHeader).toHaveText(pageData.PageTitle.myAccount);
    Data.save_email(Data.uniqueEmail);
  });
});

test.describe("Registration negative test suite", () => {
  test("Verify registration with blank input fields", async ({ registerPage }) => {
    await registerPage.fillAccountInfo("", "", "", "", "");
    await expect(registerPage.firstNameFIeld).toHaveValue("");
    await expect(registerPage.lastNameField).toHaveValue("");
    await expect(registerPage.emailField).toHaveValue("");
    await expect(registerPage.passwordField).toHaveValue("");
    await expect(registerPage.confirmPasswordField).toHaveValue("");
    await registerPage.clickCreateAccount();

    await expect(registerPage.firstNameError).toHaveText(pageData.ErrorMessages.requiredFIeldError);
    await expect(registerPage.lastNameError).toHaveText(pageData.ErrorMessages.requiredFIeldError);
    await expect(registerPage.emailError).toHaveText(pageData.ErrorMessages.requiredFIeldError);
    await expect(registerPage.passwordError).toHaveText(pageData.ErrorMessages.requiredFIeldError);
    await expect(registerPage.confirmPasswordError).toHaveText(pageData.ErrorMessages.requiredFIeldError);
  });

  test("Verify registration with invalid email and invalid password", async ({ registerPage }) => {
    await registerPage.fillAccountInfo(Data.firstName, Data.lastName, Data.invalidEmail, Data.invalidPassword, Data.invalidPassword);
    await expect(registerPage.firstNameFIeld).toHaveValue(Data.firstName);
    await expect(registerPage.lastNameField).toHaveValue(Data.lastName);
    await expect(registerPage.emailField).toHaveValue(Data.invalidEmail);
    await expect(registerPage.passwordField).toHaveValue(Data.invalidPassword);
    await expect(registerPage.confirmPasswordField).toHaveValue(Data.invalidPassword);
    await registerPage.clickCreateAccount();

    await expect(registerPage.emailError).toHaveText(pageData.ErrorMessages.invalidEmailError);
    await expect(registerPage.passwordError).toHaveText(pageData.ErrorMessages.invalidPasswordError);
  });

  test("Verify registration with password mismatch", async ({ registerPage }) => {
    await registerPage.fillAccountInfo(Data.firstName, Data.lastName, Data.uniqueEmail, Data.validPassword, Data.invalidPassword);
    await expect(registerPage.firstNameFIeld).toHaveValue(Data.firstName);
    await expect(registerPage.lastNameField).toHaveValue(Data.lastName);
    await expect(registerPage.emailField).toHaveValue(Data.uniqueEmail);
    await expect(registerPage.passwordField).toHaveValue(Data.validPassword);
    await expect(registerPage.confirmPasswordField).toHaveValue(Data.invalidPassword);
    await registerPage.clickCreateAccount();

    await expect(registerPage.confirmPasswordError).toHaveText(pageData.ErrorMessages.confirmPasswordError);
  });

  test("Verify registration with weak password", async ({ registerPage }) => {
    await registerPage.fillAccountInfo(Data.firstName, Data.lastName, Data.uniqueEmail, Data.shortPassword, Data.shortPassword);
    await expect(registerPage.firstNameFIeld).toHaveValue(Data.firstName);
    await expect(registerPage.lastNameField).toHaveValue(Data.lastName);
    await expect(registerPage.emailField).toHaveValue(Data.uniqueEmail);
    await expect(registerPage.passwordField).toHaveValue(Data.shortPassword);
    await expect(registerPage.confirmPasswordField).toHaveValue(Data.shortPassword);
    await registerPage.clickCreateAccount();

    await expect(registerPage.passwordError).toHaveText(pageData.ErrorMessages.minimumPasswordError);
  });
});
