import { Locator, Page } from '@playwright/test';

export class InventoryPage {
  private readonly page: Page;
  readonly inventoryContainer: Locator;
  readonly inventoryItems: Locator;
  readonly bikeLightAddButton: Locator;
  readonly backpackAddButton: Locator;
  readonly shoppingCartButton: Locator;
  readonly shoppingCartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryContainer = this.page.getByTestId('inventory-container');
    this.inventoryItems = this.page.getByTestId('inventory-item');
    this.bikeLightAddButton = this.page.getByTestId('add-to-cart-sauce-labs-bike-light');
    this.backpackAddButton = this.page.getByTestId('add-to-cart-sauce-labs-backpack');
    this.shoppingCartButton = this.page.getByTestId('shopping-cart-link');
    this.shoppingCartBadge = this.shoppingCartButton.getByTestId('shopping-cart-badge');
  }
}
