// @ts-check
import { expect, test } from "../pages/pages";
import * as pageData from "../pages/page-data/pageData";

test.describe("Home Page test suite", () => {
  test.beforeEach("Visit home page", async ({ page, homePage }) => {
    await page.goto("/");
    await expect(page).toHaveURL("/");
    await expect(page).toHaveTitle("Home Page");
  });

  test("Verify home page components load correctly", async ({ page, homePage }) => {
    await expect(homePage.signInButton).toBeVisible();
    await expect(homePage.createAccountButton).toBeVisible();
    await expect(homePage.cartButton).toBeVisible();
    await expect(homePage.searchBar).toBeVisible();
    await expect(homePage.searchButton).toBeVisible();
    await expect(homePage.navButtonNew).toBeVisible();
    await expect(homePage.navButtonWomen).toBeVisible();
    await expect(homePage.navButtonMen).toBeVisible();
    await expect(homePage.navButtonGear).toBeVisible();
    await expect(homePage.navButtonTraining).toBeVisible();
    await expect(homePage.navButtonSale).toBeVisible();
  });

  test("Verify home page cards load correctly", async ({ page, homePage }) => {
    await expect(homePage.mainCard).toBeVisible();
    await expect(homePage.pantsCard).toBeVisible();
    await expect(homePage.tShirtCard).toBeVisible();
    await expect(homePage.erinCard).toBeVisible();
    await expect(homePage.performanceCard).toBeVisible();
    await expect(homePage.ecoCard).toBeVisible();
  });

  test("Verify click on 'Create an Account' button loads registration page correctly", async ({ page, homePage }) => {
    await expect(homePage.createAccountButton).toBeVisible();
    await homePage.clickCreateAccount();
    await expect(page).toHaveURL(pageData.Url.register);
    await expect(page).toHaveTitle(pageData.PageTitle.register);
  });

  test("Verify click on the 'Sign In' button loads Sign in page correctly", async ({ page, homePage }) => {
    await expect(homePage.signInButton).toBeVisible();
    await homePage.clickSignIn();
    await expect(page.url()).toContain(pageData.Url.login);
    await expect(page).toHaveTitle(pageData.PageTitle.login);
  });
});
