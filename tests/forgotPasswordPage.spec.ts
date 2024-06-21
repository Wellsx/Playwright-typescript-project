// @ts-check
import { test, expect } from "../pages/pages";
import * as forgotPasswordData from "../pages/page-data/forgotPasswordData.json";
import { Url } from "../pages/page-data/url";
import { ErrorMessages } from "../pages/page-data/errorMessages";

test.describe("Forgot Password test suite", () => {
  test.beforeEach("Open Forgot Password page, forgotPasswordPage", async ({ page, forgotPasswordPage }) => {
    await page.goto(Url.forgotPassword);
    await expect(page).toHaveURL(forgotPasswordData.forgotPasswordURL);
  });
  test("Verify Forgot Password page, forgotPasswordPage loads correctly", async ({ page, forgotPasswordPage }) => {
    await expect(forgotPasswordPage.forgotPasswordHeader).toHaveText(forgotPasswordData.forgotPasswordHeader);
    await expect(forgotPasswordPage.forgotPasswordEmail).toBeVisible();
    await expect(forgotPasswordPage.resetPasswordButton).toBeVisible();
  });

  test("Verify Forgot Password blank email field", async ({ page, forgotPasswordPage }) => {
    await expect(forgotPasswordPage.forgotPasswordEmail).toHaveValue("");
    await expect(forgotPasswordPage.resetPasswordButton).toBeVisible();
    await forgotPasswordPage.clickResetPassword();
    await expect(forgotPasswordPage.forgotPasswordEmailError).toHaveText(ErrorMessages.requiredFIeldError);
  });
});
