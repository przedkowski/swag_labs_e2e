import { Locator, Page } from '@playwright/test';

export class CheckoutPage {
  private readonly page: Page;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = this.page.getByTestId('title');
  }
}
