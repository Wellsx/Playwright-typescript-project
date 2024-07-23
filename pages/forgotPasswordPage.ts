import { BasePage } from "./basePage";

export class ForgotPasswordPage extends BasePage {
  public readonly forgotPasswordHeader = this.page.getByText("Forgot Your Password?");
  public readonly forgotPasswordEmail = this.page.locator("#email_address");
  public readonly resetPasswordButton = this.page.getByRole("button", {name: "Reset My Password"});
  public readonly forgotPasswordEmailError = this.page.locator("#email_address-error");

  async clickResetPassword(): Promise<void> {
    await this.resetPasswordButton.click();
  }
}
