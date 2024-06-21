import { test as setup } from "@playwright/test";
import { Pages } from "../pages/pages";
import * as registeredUser from "../pages/page-data/registeredUser.json";
import * as loginPageData from "../pages/page-data/loginPageData.json";
import Data from "../pages/page-data/userData";

const authFile = "../playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  const pages = Pages(page);

  await pages.loginPage.goToLoginPage();
  await pages.loginPage.fillLoginInfo(registeredUser.email, Data.validPassword);
  await pages.loginPage.clickSignIn();
  await page.waitForURL(loginPageData.loginURL);

  await page.context().storageState({ path: authFile });
});
