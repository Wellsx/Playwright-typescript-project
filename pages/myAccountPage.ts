import { BasePage } from "./basePage";

export class MyAccountPage extends BasePage {
    public readonly myAccountHeader = this.page.getByRole("heading", { name: "My Account" }).locator("span");
}
