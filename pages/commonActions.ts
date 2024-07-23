
import * as registeredUser from "./page-data/registeredUser.json";
import Data from "./page-data/data";
import { BasePage, request, expect, Page } from "./basePage";
import * as pageData from "../pages/page-data/pageData"
import { ItemPage } from "./itemPage";
import { CataloguePage } from "./cataloguePage";


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

  async verifyPage(url: string, title: string, page: Page): Promise<void>{
    await expect(page).toHaveURL(url)
    await expect(page).toHaveTitle(title)
  }

  async addItemToCart(page: Page): Promise<void> {
    const itemPage = new ItemPage(page)
    const cataloguePage = new CataloguePage(page)
    await page.goto(pageData.Url.womenTops)
    await expect(page).toHaveURL(pageData.Url.womenTops)
    let itemNumber: number = await cataloguePage.product.count()
    let randomElement = Math.round(Math.floor(Math.random() * (itemNumber - 3)) +1 )
    await cataloguePage.product.locator(`nth=${randomElement}`).click()
    await itemPage.selectSIze(itemPage.sizeL)
    await expect(itemPage.sizeL).toHaveClass(/selected/)
    await itemPage.selectColor()
    await expect(itemPage.colorOption).toHaveClass(/selected/)
    await itemPage.addItem()
    await expect(itemPage.addSuccess).toBeVisible()
  }
}
