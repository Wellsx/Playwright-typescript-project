import { BasePage, expect } from "./basePage";

export class LoginPage extends BasePage {
    public readonly loginHeader = this.page.getByText("Customer Login");
    public readonly signOutHeader = this.page.getByText("You are signed out");
    public readonly emailField = this.page.locator("#email");
    public readonly passwordField = this.page.getByLabel("Password");
    public readonly signInButton = this.page.getByRole("button", { name: "Sign In" });
    //redirect links
    public readonly forgotPassword = this.page.getByRole("link", { name: "Forgot Your Password?",});
    public readonly createAccountButton = this.page.locator("#maincontent").getByRole("link", { name: "Create an Account" });
    public readonly navbarDropDownButton = this.page.getByRole("banner").locator("button").filter({ hasText: "Change" });
    //hamburger menu
    public readonly dropdownMenu = this.page.locator(".customer-menu");
    public readonly signOutButton = this.page.getByRole("link", { name: "Sign Out" });
    public readonly wishlistButton = this.page.getByRole("banner").getByRole("link", { name: "My Wish List" });
    public readonly myAccountButton = this.page.getByRole("link", { name: "My Account" });
    public readonly authcookie = "X-Magento-Vary";
    //error messages
    public readonly emailError = this.page.locator("#email-error");
    public readonly passwordError = this.page.locator("#pass-error");
    public readonly invalidLoginError = this.page.getByRole("alert").locator("div").first();

    async fillLoginInfo(email: string, password: string): Promise<void> {
      await this.emailField.fill(email);
      await this.passwordField.fill(password);
  }

    async clickSignIn(): Promise<void> {
      await expect(this.signInButton).toBeVisible()
      await this.signInButton.click();
  }

  async clickCreateAnAccount() {
    await expect(this.createAccountButton).toBeVisible()
    await this.createAccountButton.click();
  }

  async clickForgotPassword() {
    await expect(this.forgotPassword).toBeVisible()
    await this.forgotPassword.click();
  }

  async openDropDownMenu() {
    await expect(this.navbarDropDownButton).toBeVisible()
    await this.navbarDropDownButton.click();
  }

  async clickSignOut() {
    await expect(this.signOutButton).toBeVisible()
    await this.signOutButton.click();
  }
}
