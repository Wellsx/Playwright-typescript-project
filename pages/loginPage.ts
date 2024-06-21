import { BasePage } from "./basePage";
import * as loginPageData from "../pages/page-data/loginPageData.json";

export class LoginPage extends BasePage {
  loginHeader = this.page.getByText("Customer Login");
  emailField = this.page.locator("#email");
  passwordField = this.page.getByLabel("Password");
  signInButton = this.page.getByRole("button", { name: "Sign In" });
  forgotPassword = this.page.getByRole("link", {
    name: "Forgot Your Password?",
  });
  createAccountButton = this.page
    .locator("#maincontent")
    .getByRole("link", { name: "Create an Account" });

  emailError = this.page.locator("#email-error");
  passwordError = this.page.locator("#pass-error");
  invalidLoginError = this.page.getByRole("alert").locator("div").first();

  async goToLoginPage() {
    await this.page.goto(loginPageData.loginURL);
  }

  async fillLoginInfo(email: string, password: string) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
  }

  async clickSignIn() {
    await this.signInButton.click();
  }

  async clickCreateAnAccount() {
    await this.createAccountButton.click();
  }

  async clickForgotPassword() {
    await this.forgotPassword.click();
  }
}
