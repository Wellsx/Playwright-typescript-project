import { test as setup } from "../pages/pages";
import * as registeredUser from "../pages/page-data/registeredUser.json";
import * as loginPageData from "../pages/page-data/loginPageData.json";
import Data from "../pages/page-data/data";

const authFile = "../playwright/.auth/user.json";

setup("authenticate", async ({ page, loginPage }) => {
  await loginPage.goToLoginPage();
  await loginPage.fillLoginInfo(registeredUser.email, Data.validPassword);
  await loginPage.clickSignIn();
  await page.waitForURL(loginPageData.loginURL);

  await page.context().storageState({ path: authFile });
});
