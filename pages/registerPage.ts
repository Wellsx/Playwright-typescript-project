import { BasePage } from "./basePage";
import * as registerPageData from "../pages/page-data/registerPageData.json"

export class RegisterPage extends BasePage {

    createNewAccountHeader = this.page.getByText('Create New Customer Account')
    personalInformationHeader = this.page.getByText('Personal Information')
    signInInformationHeader = this.page.getByText('Sign-in Information')

    firstNameFIeld = this.page.locator("#firstname")
    lastNameField = this.page.locator("#lastname")
    emailField = this.page.locator("#email_address")
    passwordField = this.page.locator("#password")
    confirmPasswordField = this.page.locator("#password-confirmation")
    createAccountButton = this.page.getByRole('button', { name: 'Create an Account' })

    firstNameError = this.page.locator("#firstname-error")
    lastNameError = this.page.locator("#lastname-error")
    emailError = this.page.locator("#email_address-error")
    passwordError = this.page.locator("#password-error")
    confirmPasswordError = this.page.locator("#password-confirmation-error")
    passwordStrength = this.page.locator("#password-strength-meter-label")

async goToRegisterPage(){
    await this.page.goto(registerPageData.registerURL)
}

async fillAccountInfo(
    firstName: string, 
    lastName: string, 
    email: string, 
    password: string, 
    confirmPassword: string){
        
        await this.firstNameFIeld.fill(firstName)
        await this.lastNameField.fill(lastName)
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.confirmPasswordField.fill(confirmPassword)      
}

async clickCreateAccount(){
    this.createAccountButton.click();
}

}