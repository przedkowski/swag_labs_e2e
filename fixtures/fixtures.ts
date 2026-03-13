import { test as base } from './page-fixtures';

export const test = base.extend<{
  startFromLogin: () => Promise<void>;
  startFromPage: (url: string) => Promise<void>;
}>({
  startFromLogin: async ({ page }, use) => {
    await use(async () => {
      await page.goto('');
    });
  },

  startFromPage: async ({ page, context }, use) => {
    await use(async (url: string) => {
      await context.addCookies([
        {
          name: 'session-username',
          value: 'standard_user',
          domain: 'www.saucedemo.com',
          path: '/',
          httpOnly: false,
          secure: false,
          sameSite: 'Lax',
        },
      ]);

      await page.goto(url);
    });
  },
});
