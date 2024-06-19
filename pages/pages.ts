import { Page } from "./basePage";
import { BasePage } from "./basePage";
import { HomePage } from "./homePage";
import { RegisterPage } from "./registerPage";

export const Pages = (page: Page) => {
    return {
        base: new BasePage(page),
        homePage: new HomePage(page),
        registerPage: new RegisterPage(page),
    }
}