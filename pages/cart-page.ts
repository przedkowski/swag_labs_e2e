import { Locator, Page } from '@playwright/test';

export class CartPage {
  private readonly page: Page;
  readonly inventoryItem: Locator;
  readonly inventoryItemName: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItem = this.page.getByTestId('inventory-item');
    this.inventoryItemName = this.page.getByTestId('inventory-item-name');
    this.checkoutButton = this.page.getByTestId('checkout');
  }
}
