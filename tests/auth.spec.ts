import { test as setup, request } from "../pages/pages";
import Data from "../pages/page-data/data";
import * as pageData from "../pages/page-data/pageData";
import * as registeredUser from "../pages/page-data/registeredUser.json";
import fs from "fs";
import path from "path";

setup("authenticate", async ({ page, loginPage }) => {
  const requestCOntext = await request.newContext({
    httpCredentials: {
      username: registeredUser.email,
      password: Data.validPassword,
    },
  });
  await requestCOntext.post("https://magento.softwaretestingboard.com/customer/account/loginPost/**");
  await requestCOntext.storageState({ path: "storage.json" });

  /**   const authenticate = await page.request.post("https://magento.softwaretestingboard.com/customer/account/loginPost/**", {
    data: {
      "login[username]": registeredUser.email,
      "login[password]": Data.validPassword,
    },
  });
  const storage = await page.context().cookies();
  const auth = storage.find((cookie) => cookie.name === loginPage.authcookie);
  const authToken = { token: auth };
  const filePath = path.join(__dirname, ".authToken.json");
  fs.writeFileSync(filePath, JSON.stringify(authToken, null, 2));*/
});
