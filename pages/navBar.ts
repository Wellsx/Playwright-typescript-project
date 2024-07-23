import { BasePage, expect, Locator } from "./basePage"
import * as pageData from "../pages/page-data/pageData";

export class NavBar extends BasePage {
    public readonly navButtonNew = this.page.locator("#ui-id-3");
    public readonly navButtonWomen = this.page.locator("#ui-id-4");
    public readonly navButtonMen = this.page.locator("#ui-id-5");
    public readonly navButtonGear = this.page.locator("#ui-id-6");
    public readonly navButtonTraining = this.page.locator("#ui-id-7");
    public readonly navButtonSale = this.page.locator("#ui-id-8");
    public readonly navHoverMenu = (id: number) => this.page.locator("#ui-id-"+ id) 

    async hover(navButton: Locator): Promise<void>{
        await expect(navButton).toBeVisible()
        await navButton.hover()
    }

}