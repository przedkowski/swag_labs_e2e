import { Locator, Page } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = this.page.getByTestId('username');
    this.passwordInput = this.page.getByTestId('password');
    this.loginButton = this.page.getByTestId('login-button');
    this.errorMessage = this.page.getByTestId('error');
  }

  public async login(username: string, password: string): Promise<void> {
    if (!username || !password) {
      throw new Error('Missing environment variables for login credentials');
    }
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
