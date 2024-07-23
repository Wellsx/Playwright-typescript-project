import { BasePage, expect } from "./basePage";

export class RegisterPage extends BasePage {
    public readonly createNewAccountHeader = this.page.getByText("Create New Customer Account");
    public readonly personalInformationHeader = this.page.getByText("Personal Information");
    public readonly signInInformationHeader = this.page.getByText("Sign-in Information");
    //input fields
    public readonly firstNameFIeld = this.page.locator("#firstname");
    public readonly lastNameField = this.page.locator("#lastname");
    public readonly emailField = this.page.locator("#email_address");
    public readonly passwordField = this.page.locator("#password");
    public readonly confirmPasswordField = this.page.locator("#password-confirmation");
    public readonly createAccountButton = this.page.getByRole("button", {name: "Create an Account"});
    //error messages
    public readonly firstNameError = this.page.locator("#firstname-error");
    public readonly lastNameError = this.page.locator("#lastname-error");
    public readonly emailError = this.page.locator("#email_address-error");
    public readonly passwordError = this.page.locator("#password-error");
    public readonly confirmPasswordError = this.page.locator("#password-confirmation-error");
    public readonly passwordStrength = this.page.locator("#password-strength-meter-label");

  async fillAccountInfo(firstName: string, lastName: string, email: string, password: 
    string, confirmPassword: string): Promise<void> {
    const fields = [this.firstNameFIeld, this.lastNameField, this.emailField, this.passwordField, 
      this.confirmPasswordField]
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      await expect(field).toBeVisible()   
    }
    await this.firstNameFIeld.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.confirmPasswordField.fill(confirmPassword);
  }

  async clickCreateAccount(): Promise<void> {
    await expect(this.createAccountButton).toBeVisible()
    this.createAccountButton.click();
  }
}
