import { Page } from "@playwright/test";

export class BasePage {
  constructor(protected page: Page) {
    this.page = page;
  }
}

export { expect, Page, Locator } from "@playwright/test";
