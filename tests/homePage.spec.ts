// @ts-check
import { expect, test } from "@playwright/test";
import { Pages } from "../pages/pages";
import * as registerPageData from "../pages/page-data/registerPageData.json";
import * as loginPageData from "../pages/page-data/loginPageData.json";

test.describe("Home Page test suite", () => {
  test.beforeEach("Visit home page", async ({ page }) => {
    const pages = Pages(page);
    await pages.homePage.goToHome();
    await expect(page).toHaveURL("/");
    await expect(page).toHaveTitle("Home Page");
  });

  test("Verify home page components load correctly", async ({ page }) => {
    const pages = Pages(page);

    await expect(pages.homePage.signInButton).toBeVisible();
    await expect(pages.homePage.createAccountButton).toBeVisible();
    await expect(pages.homePage.cartButton).toBeVisible();
    await expect(pages.homePage.searchBar).toBeVisible();
    await expect(pages.homePage.searchButton).toBeVisible();
    await expect(pages.homePage.navButtonNew).toBeVisible();
    await expect(pages.homePage.navButtonWomen).toBeVisible();
    await expect(pages.homePage.navButtonMen).toBeVisible();
    await expect(pages.homePage.navButtonGear).toBeVisible();
    await expect(pages.homePage.navButtonTraining).toBeVisible();
    await expect(pages.homePage.navButtonSale).toBeVisible();
  });

  test("Verify home page cards load correctly", async ({ page }) => {
    const pages = Pages(page);

    await expect(pages.homePage.mainCard).toBeVisible();
    await expect(pages.homePage.pantsCard).toBeVisible();
    await expect(pages.homePage.tShirtCard).toBeVisible();
    await expect(pages.homePage.erinCard).toBeVisible();
    await expect(pages.homePage.performanceCard).toBeVisible();
    await expect(pages.homePage.ecoCard).toBeVisible();
  });

  test("Verify click on 'Create an Account' button loads registration page correctly", async ({ page }) => {
    const pages = Pages(page);

    await expect(pages.homePage.createAccountButton).toBeVisible();
    await pages.homePage.clickCreateAccount();
    await expect(page).toHaveURL(registerPageData.registerURL);
    await expect(page).toHaveTitle(registerPageData.title);
  });

  test("Verify click on the 'Sign In' button loads Sign in page correctly", async ({ page }) => {
    const pages = Pages(page);

    await expect(pages.homePage.signInButton).toBeVisible();
    await pages.homePage.clickSignIn();
    await expect(page.url()).toContain(loginPageData.loginURL);
    await expect(page).toHaveTitle(loginPageData.title);
  });
});
