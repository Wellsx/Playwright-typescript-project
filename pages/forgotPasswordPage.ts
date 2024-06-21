import { BasePage } from "./basePage";

export class ForgotPasswordPage extends BasePage {
  forgotPasswordHeader = this.page.getByText("Forgot Your Password?");
  forgotPasswordEmail = this.page.locator("#email_address");
  resetPasswordButton = this.page.getByRole("button", {
    name: "Reset My Password",
  });
  forgotPasswordEmailError = this.page.locator("#email_address-error");

  async clickResetPassword() {
    await this.resetPasswordButton.click();
  }
}
