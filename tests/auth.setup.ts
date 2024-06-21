import { test as setup } from "../pages/pages";
import Data from "../pages/page-data/data";
import PageData from "../pages/page-data/pageData";
import * as registeredUser from "../pages/page-data/registeredUser.json";

const authFile = "../playwright/.auth/user.json";

setup("authenticate", async ({ page, loginPage }) => {
  await page.goto(PageData.Url.login);
  await loginPage.fillLoginInfo(registeredUser.email, Data.validPassword);
  await loginPage.clickSignIn();
  await page.waitForURL(PageData.Url.login);

  await page.context().storageState({ path: authFile });
});
