import { BasePage } from "./basePage";

export class HomePage extends BasePage {
  public readonly signInButton = this.page.getByRole("link", { name: "Sign In" });
  public readonly createAccountButton = this.page.getByRole("link", { name: "Create an Account" });
  public readonly cartButton = this.page.getByRole("link", { name: " My Cart" });
  //search
  public readonly searchBar = this.page.locator("#search");
  public readonly searchButton = this.page.getByRole("button", { name: "Search" });
  public readonly searchOptions = this.page.locator("#search_autocomplete");
  //cards
  public readonly mainCard = this.page.locator(".home-main");
  public readonly pantsCard = this.page.locator(".home-pants");
  public readonly tShirtCard = this.page.locator(".home-t-shirts");
  public readonly erinCard = this.page.locator(".home-erin");
  public readonly performanceCard = this.page.locator(".home-performance");
  public readonly ecoCard = this.page.locator(".home-eco");
  public readonly hotSellersHeader = this.page.getByRole("heading", { name: "Hot Sellers" });
  public readonly productGrid = this.page.locator(".product-items");

  async goToHome(): Promise<void> {
    await this.page.goto("/");
  }

  async clickCreateAccount(): Promise<void> {
    await this.createAccountButton.click();
  }

  async clickSignIn(): Promise<void> {
    await this.signInButton.click();
  }

  async fillSearch(query: string): Promise<void> {
    await this.searchBar.fill(query);
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click()
  }

}
