import { BasePage, Locator } from "./basePage";

export class HomePage extends BasePage {
  signInButton = this.page.getByRole("link", { name: "Sign In" });
  createAccountButton = this.page.getByRole("link", { name: "Create an Account" });
  cartButton = this.page.getByRole("link", { name: " My Cart" });
  searchBar = this.page.locator("#search");
  searchButton = this.page.getByRole("button", { name: "Search" });
  searchOptions = this.page.locator("#search_autocomplete");
  
  mainCard = this.page.locator(".home-main");
  pantsCard = this.page.locator(".home-pants");
  tShirtCard = this.page.locator(".home-t-shirts");
  erinCard = this.page.locator(".home-erin");
  performanceCard = this.page.locator(".home-performance");
  ecoCard = this.page.locator(".home-eco");
  hotSellersHeader = this.page.getByRole("heading", { name: "Hot Sellers" });
  productGrid = this.page.locator(".product-items");

  async goToHome() {
    await this.page.goto("/");
  }

  async clickCreateAccount() {
    await this.createAccountButton.click();
  }

  async clickSignIn() {
    await this.signInButton.click();
  }

  async fillSearch(query: string) {
    await this.searchBar.fill(query);
  }

  async clickSearch(){
    await this.searchButton.click()
  }

}
