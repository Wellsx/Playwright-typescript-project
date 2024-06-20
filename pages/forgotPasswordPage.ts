import { BasePage } from "./basePage";
import * as forgotPasswordData from "../pages/page-data/forgotPasswordData.json"


export class ForgotPasswordPage extends BasePage {

    forgotPasswordHeader = this.page.getByText('Forgot Your Password?')
    forgotPasswordEmail = this.page.locator("#email_address")
    resetPasswordButton = this.page.getByRole('button', { name: 'Reset My Password' })
    forgotPasswordEmailError = this.page.locator("#email_address-error")

    async goToForgotPassword(){
        await this.page.goto(forgotPasswordData.forgotPasswordURL)
    }

    async clickResetPassword(){
        await this.resetPasswordButton.click()
    }

}