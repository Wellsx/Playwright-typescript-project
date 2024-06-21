// @ts-check
import { test, expect } from "@playwright/test";
import { Pages } from "../pages/pages";
import * as forgotPasswordData from "../pages/page-data/forgotPasswordData.json";

test.beforeEach("Open Forgot Password page", async ({ page }) => {
  const pages = Pages(page);
  await pages.forgotPasswordPage.goToForgotPassword();
  await expect(page).toHaveURL(forgotPasswordData.forgotPasswordURL);
});

test.describe("Forgot Password test suite", () => {
  test("Verify Forgot Password page loads correctly", async ({ page }) => {
    const pages = Pages(page);
    await expect(pages.forgotPasswordPage.forgotPasswordHeader).toHaveText(forgotPasswordData.forgotPasswordHeader);
    await expect(pages.forgotPasswordPage.forgotPasswordEmail).toBeVisible();
    await expect(pages.forgotPasswordPage.resetPasswordButton).toBeVisible();
  });

  test("Verify Forgot Password blank email field", async ({ page }) => {
    const pages = Pages(page);
    await expect(pages.forgotPasswordPage.forgotPasswordEmail).toHaveValue("");
    await expect(pages.forgotPasswordPage.resetPasswordButton).toBeVisible();
    await pages.forgotPasswordPage.clickResetPassword();
    await expect(pages.forgotPasswordPage.forgotPasswordEmailError).toHaveText(forgotPasswordData.requiredFIeldError);
  });
});
