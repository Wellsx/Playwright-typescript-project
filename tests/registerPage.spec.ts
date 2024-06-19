import { Pages } from "../pages/pages";
import * as registerPageData from "../pages/page-data/registerPageData.json"
import { test, expect } from "@playwright/test";

test("Open registration page", async ({page}) => {
    const pages = Pages(page);

    await pages.registerPage.goToRegisterPage()
    expect(page).toHaveURL(registerPageData.registerURL)
    expect(page).toHaveTitle(registerPageData.title)

})