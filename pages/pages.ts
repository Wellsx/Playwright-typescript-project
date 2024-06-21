import { test as base } from "@playwright/test";
import { HomePage } from "./homePage";
import { RegisterPage } from "./registerPage";
import { MyAccountPage } from "./myAccountPage";
import { LoginPage } from "./loginPage";
import { ForgotPasswordPage } from "./forgotPasswordPage";

type MyFixtures = {
  homePage: HomePage;
  registerPage: RegisterPage;
  myAccountPage: MyAccountPage;
  loginPage: LoginPage;
  forgotPasswordPage: ForgotPasswordPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await use(registerPage);
  },
  myAccountPage: async ({ page }, use) => {
    const myAccountPage = new MyAccountPage(page);
    await use(myAccountPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  forgotPasswordPage: async ({ page }, use) => {
    const forgotPasswordPage = new ForgotPasswordPage(page);
    await use(forgotPasswordPage);
  },
});

export { expect } from "@playwright/test";
