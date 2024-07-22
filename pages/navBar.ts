import { BasePage, expect, Locator } from "./basePage"
import * as pageData from "../pages/page-data/pageData";

export class NavBar extends BasePage {
    navButtonNew = this.page.locator("#ui-id-3");
    navButtonWomen = this.page.locator("#ui-id-4");
    navButtonMen = this.page.locator("#ui-id-5");
    navButtonGear = this.page.locator("#ui-id-6");
    navButtonTraining = this.page.locator("#ui-id-7");
    navButtonSale = this.page.locator("#ui-id-8");
    navHoverMenu = (id: number) => this.page.locator("#ui-id-"+ id) 

    async hover(navButton: Locator){
        await expect(navButton).toBeVisible()
        await navButton.hover()
    }

}