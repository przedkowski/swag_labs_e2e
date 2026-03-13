import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';

const inventoryUrl = '/inventory.html';
const inventoryTitle = 'Swag Labs';

test.describe('Login tests', () => {
  test('successful', async ({ page, startFromLogin, loginPage, inventoryPage }) => {
    await startFromLogin();

    await loginPage.login(process.env.CORRECT_LOGIN!, process.env.PASSWORD!);
    await expect(page).toHaveURL(inventoryUrl);
    await expect(page).toHaveTitle(inventoryTitle);
    await expect(inventoryPage.inventoryContainer).toBeVisible();
    await expect(inventoryPage.inventoryItems).not.toHaveCount(0);
  });

  test('unsuccessful', async ({ startFromLogin, loginPage }) => {
    await startFromLogin();
    await loginPage.login(process.env.INCORRECT_LOGIN!, process.env.PASSWORD!);
    await expect(loginPage.errorMessage).toContainText(
      'Epic sadface: Sorry, this user has been locked out.',
    );
  });
});
