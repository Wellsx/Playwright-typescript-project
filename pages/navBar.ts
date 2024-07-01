import { BasePage, Locator } from "./basePage"

export class NavBar extends BasePage {
    navButtonNew = this.page.locator("#ui-id-3");
    navButtonWomen = this.page.locator("#ui-id-4");
    navButtonMen = this.page.locator("#ui-id-5");
    navButtonGear = this.page.locator("#ui-id-6");
    navButtonTraining = this.page.locator("#ui-id-7");
    navButtonSale = this.page.locator("#ui-id-8");
    navHoverMenu = (id: number) => this.page.locator("#ui-id-"+ id) 

    async hover(navButton: Locator){
        await navButton.hover()
    }

}