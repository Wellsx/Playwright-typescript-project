import { BasePage } from "./basePage";
import * as registerPageData from "../pages/page-data/registerPageData.json"

export class RegisterPage extends BasePage {


async goToRegisterPage(){
    const page = this.page
    await this.page.goto(registerPageData.registerURL)
}

}