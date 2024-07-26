import { BasePage, expect } from "./basePage";

export class CartPage extends BasePage {
    //Cart item
    public readonly pageTitle = this.page.locator(".page-title")
    public readonly proceedToCheckout = this.page.getByRole('button', { name: 'Proceed to Checkout' })
    public readonly removeItemButton = this.page.getByRole('link', { name: ' Remove item' })
    public readonly editItem = this.page.getByRole('link', { name: ' Edit' })
    public readonly updateCartButton = this.page.getByRole('button', { name: 'Update Shopping Cart' })
    public readonly itemPrice = this.page.locator('[data-th="Price"]').locator(".price")
    public readonly itemQty = this.page.locator('[data-th="Qty"]')
    public readonly itemSubtotal = this.page.locator('[data-th="Subtotal"]').locator(".price")
    public readonly cartItemName = this.page.locator(".cart.item").locator(".product-item-name")
    //Summary
    public readonly estimateShipping = this.page.locator("#block-shipping-heading")
    public readonly country = this.page.locator('[name="country_id"]')
    public readonly region = this.page.locator('select[name="region_id"]')
    public readonly postcode = this.page.locator('[name="postcode"]')
    public readonly flatRate = this.page.locator("#s_method_flatrate_flatrate")
    public readonly bestWay = this.page.locator("#s_method_tablerate_bestway")
    //Discount
    public readonly applyDiscount = this.page.locator("#block-discount-heading")
    public readonly discountCodeField = this.page.locator("#coupon_code")
    public readonly discountCodeError = this.page.locator("#coupon_code-error")
    public readonly applyDiscountButton = this.page.getByRole("button", {name: "Apply Discount"})

}