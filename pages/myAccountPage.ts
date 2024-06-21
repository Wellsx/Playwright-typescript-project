import { BasePage } from "./basePage";
import * as myAccountPageData from "../pages/page-data/myAccountPageData.json";

export class MyAccountPage extends BasePage {
  myAccountHeader = this.page
    .getByRole("heading", { name: "My Account" })
    .locator("span");
}
