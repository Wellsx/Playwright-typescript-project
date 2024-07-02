import { test as base } from "@playwright/test";
import { HomePage } from "./homePage";
import { RegisterPage } from "./registerPage";
import { MyAccountPage } from "./myAccountPage";
import { LoginPage } from "./loginPage";
import { ForgotPasswordPage } from "./forgotPasswordPage";
import { CommonActions } from "./commonActions";
import { NavBar } from "./navBar";
import { CataloguePage } from "./cataloguePage";

type MyFixtures = {
  homePage: HomePage;
  registerPage: RegisterPage;
  myAccountPage: MyAccountPage;
  loginPage: LoginPage;
  forgotPasswordPage: ForgotPasswordPage;
  commonActions: CommonActions;
  navBar: NavBar;
  cataloguePage: CataloguePage;
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
  commonActions: async ({ page }, use) => {
    const commonActions = new CommonActions(page);
    await use(commonActions);
  },
  navBar: async ({ page }, use) => {
    const navBar = new NavBar(page);
    await use(navBar);
  },
  cataloguePage: async ({ page }, use) => {
    const cataloguePage = new CataloguePage(page);
    await use(cataloguePage);
  }
});

export { expect, request } from "@playwright/test";
