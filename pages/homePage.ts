import { BasePage } from "./basePage";

export class HomePage extends BasePage {

    signInButton = this.page.getByRole('link', { name: 'Sign In' })
    createAccountButton = this.page.getByRole('link', { name: 'Create an Account' })


    async goToHome(){
        await this.page.goto("/")

    }

    async clickCreateAccount(){
        await this.createAccountButton.click()
    }

    async clickSignIn(){
        await this.signInButton.click()
    }

}

