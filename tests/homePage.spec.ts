// @ts-check
import { expect, test } from "../pages/pages";
import * as pageData from "../pages/page-data/pageData";

test.describe("Home Page test suite", () => {
  test.beforeEach("Visit home page", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL("/");
    await expect(page).toHaveTitle("Home Page");
  });

  test("Verify home page components load correctly", async ({ homePage, navBar }) => {
    await expect(homePage.signInButton).toBeVisible();
    await expect(homePage.createAccountButton).toBeVisible();
    await expect(homePage.cartButton).toBeVisible();
    await expect(homePage.searchBar).toBeVisible();
    await expect(homePage.searchButton).toBeVisible();
    await expect(navBar.navButtonNew).toBeVisible();
    await expect(navBar.navButtonWomen).toBeVisible();
    await expect(navBar.navButtonMen).toBeVisible();
    await expect(navBar.navButtonGear).toBeVisible();
    await expect(navBar.navButtonTraining).toBeVisible();
    await expect(navBar.navButtonSale).toBeVisible();
  });

  test("Verify home page cards load correctly", async ({ homePage }) => {
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
