import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';

const firstProduct = 'Sauce Labs Bike Light';
const secondProduct = 'Sauce Labs Backpack';

test.describe('Checkout', () => {
  test('Add products and start checkout', async ({
    startFromPage,
    inventoryPage,
    cartPage,
    checkoutPage,
  }) => {
    await startFromPage('inventory.html');
    await inventoryPage.bikeLightAddButton.click();
    await expect(inventoryPage.shoppingCartBadge).toHaveText('1');
    await inventoryPage.backpackAddButton.click();
    await expect(inventoryPage.shoppingCartBadge).toHaveText('2');
    await inventoryPage.shoppingCartButton.click();
    await expect(cartPage.inventoryItem).toHaveCount(2);
    await expect(cartPage.inventoryItemName).toHaveText([firstProduct, secondProduct]);
    await cartPage.checkoutButton.click();
    await expect(checkoutPage.title).toHaveText('Checkout: Your Information');
  });
});
