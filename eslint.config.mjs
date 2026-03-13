import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ['tests/**/*.ts'],
    plugins: {
      playwright,
    },
    rules: {
      ...playwright.configs.recommended.rules,

      'playwright/no-focused-test': 'error',
      'playwright/no-skipped-test': 'warn',
    },
  },

  prettier,

  {
    ignores: ['node_modules', 'dist', 'playwright-report', 'test-results'],
  },
];
