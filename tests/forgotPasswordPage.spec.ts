// @ts-check
import { test, expect } from "../pages/pages";
import PageData from "../pages/page-data/pageData";

test.describe("Forgot Password test suite", () => {
  test.beforeEach("Open Forgot Password page, forgotPasswordPage", async ({ page, forgotPasswordPage }) => {
    await page.goto(PageData.Url.forgotPassword);
    await expect(page).toHaveURL(PageData.Url.forgotPassword);
  });
  test("Verify Forgot Password page, forgotPasswordPage loads correctly", async ({ page, forgotPasswordPage }) => {
    await expect(forgotPasswordPage.forgotPasswordHeader).toHaveText(PageData.PageTitle.forgotPassword);
    await expect(forgotPasswordPage.forgotPasswordEmail).toBeVisible();
    await expect(forgotPasswordPage.resetPasswordButton).toBeVisible();
  });

  test("Verify Forgot Password blank email field", async ({ page, forgotPasswordPage }) => {
    await expect(forgotPasswordPage.forgotPasswordEmail).toHaveValue("");
    await expect(forgotPasswordPage.resetPasswordButton).toBeVisible();
    await forgotPasswordPage.clickResetPassword();
    await expect(forgotPasswordPage.forgotPasswordEmailError).toHaveText(PageData.ErrorMessages.requiredFIeldError);
  });
});
