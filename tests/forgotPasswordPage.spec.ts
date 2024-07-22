// @ts-check
import { test, expect } from "../pages/pages";
import * as pageData from "../pages/page-data/pageData";

test.describe("Forgot Password test suite", () => {
  test.beforeEach("Open Forgot Password page, forgotPasswordPage", async ({ page, commonActions }) => {
    await page.goto(pageData.Url.forgotPassword);
    await commonActions.verifyPage(pageData.Url.forgotPassword, pageData.PageTitle.forgotPassword, page)
  });
  test("Verify Forgot Password page, forgotPasswordPage loads correctly", async ({ forgotPasswordPage }) => {
    await expect(forgotPasswordPage.forgotPasswordHeader).toHaveText(pageData.PageTitle.forgotPassword);
    await expect(forgotPasswordPage.forgotPasswordEmail).toBeVisible();
    await expect(forgotPasswordPage.resetPasswordButton).toBeVisible();
  });

  test("Verify Forgot Password blank email field", async ({ forgotPasswordPage }) => {
    await expect(forgotPasswordPage.forgotPasswordEmail).toHaveValue("");
    await expect(forgotPasswordPage.resetPasswordButton).toBeVisible();
    await forgotPasswordPage.clickResetPassword();
    await expect(forgotPasswordPage.forgotPasswordEmailError).toHaveText(pageData.ErrorMessages.requiredFIeldError);
  });
});
