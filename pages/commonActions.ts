import { request } from "@playwright/test";
import * as registeredUser from "./page-data/registeredUser.json";
import Data from "./page-data/data";
import { BasePage } from "./basePage";

export class CommonActions extends BasePage {
  async apiAuthenticate() {
    const requestContext = await request.newContext({
      httpCredentials: {
        username: registeredUser.email,
        password: Data.validPassword,
      },
    });
    await requestContext.post("https://magento.softwaretestingboard.com/customer/account/loginPost/**");
    await requestContext.storageState({ path: "./page-data/storage.json" });
  }
}
