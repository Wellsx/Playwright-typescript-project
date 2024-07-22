
import * as registeredUser from "./page-data/registeredUser.json";
import Data from "./page-data/data";
import { BasePage, request, expect, Page } from "./basePage";

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

  async verifyPage(url: string, title: string, page: Page){
    await expect(page).toHaveURL(url)
    await expect(page).toHaveTitle(title)
  }
}
