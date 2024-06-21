import { Page } from "./basePage";
import { BasePage } from "./basePage";
import { HomePage } from "./homePage";
import { RegisterPage } from "./registerPage";
import { MyAccountPage } from "./myAccountPage";
import { LoginPage } from "./loginPage";
import { ForgotPasswordPage } from "./forgotPasswordPage";

export const Pages = (page: Page) => {
  return {
    base: new BasePage(page),
    homePage: new HomePage(page),
    registerPage: new RegisterPage(page),
    myAccountPage: new MyAccountPage(page),
    loginPage: new LoginPage(page),
    forgotPasswordPage: new ForgotPasswordPage(page),
  };
};
