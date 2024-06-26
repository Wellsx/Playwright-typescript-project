import { BasePage } from "./basePage";
import { BrowserContext } from "@playwright/test";

export class LoginPage extends BasePage {
  loginHeader = this.page.getByText("Customer Login");
  signOutHeader = this.page.getByText("You are signed out");
  emailField = this.page.locator("#email");
  passwordField = this.page.getByLabel("Password");
  signInButton = this.page.getByRole("button", { name: "Sign In" });
  forgotPassword = this.page.getByRole("link", {
    name: "Forgot Your Password?",
  });
  createAccountButton = this.page.locator("#maincontent").getByRole("link", { name: "Create an Account" });
  navbarDropDownButton = this.page.getByRole("banner").locator("button").filter({ hasText: "Change" });
  dropdownMenu = this.page.locator(".customer-menu");
  signOutButton = this.page.getByRole("link", { name: "Sign Out" });
  wishlistButton = this.page.getByRole("banner").getByRole("link", { name: "My Wish List" });
  myAccountButton = this.page.getByRole("link", { name: "My Account" });
  authcookie = "X-Magento-Vary";

  emailError = this.page.locator("#email-error");
  passwordError = this.page.locator("#pass-error");
  invalidLoginError = this.page.getByRole("alert").locator("div").first();

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

  async openDropDownMenu() {
    await this.navbarDropDownButton.click();
  }

  async clickSignOut() {
    await this.signOutButton.click();
  }
}
