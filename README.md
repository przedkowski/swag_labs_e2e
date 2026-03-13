# Playwright E2E Testing Project

This project is an end-to-end (E2E) testing suite for the [saucedemo.com](https://www.saucedemo.com/) web application, built using [Playwright](https://playwright.dev/) and TypeScript.

## Project Structure

- **tests/**: Contains Playwright test specifications (e.g., login, checkout).
- **pages/**: Page Object Model (POM) classes for different application pages (cart, checkout, inventory, login).
- **fixtures/**: Custom Playwright fixtures for test setup and utilities.
- **playwright.config.ts**: Playwright configuration file (test directory, reporter, retries, baseURL, etc.).
- **package.json**: Project metadata, scripts, and dependencies.
- **eslint.config.mjs**: ESLint configuration for code linting.
- **secrets.yml**: (If used) for storing secrets or environment variables.

## Design Decisions

- **Page Object Model (POM):** The project uses the POM pattern to encapsulate page-specific logic and selectors in the `pages/` directory. This improves test maintainability and readability by separating test logic from UI structure.
- **Custom Fixtures:** Shared setup and utilities are implemented as Playwright fixtures in the `fixtures/` directory, promoting code reuse and consistent test environments.
- **Environment Configuration:** The project supports environment variables via `.env` and `dotenv`, allowing for flexible configuration without hardcoding sensitive data.
- **Parallel Execution:** Playwright is configured for fully parallel test execution to speed up test runs and ensure tests are independent.
- **Retry and Trace:** Retries are enabled in CI environments, and traces are collected on first retry to aid debugging of flaky tests.
- **HTML Reporting:** Test results are output as an HTML report for easy review and sharing.
- **Code Quality:** ESLint and Prettier are integrated to enforce code style and quality across the codebase.
- **Scripted Workflows:** Common tasks (test, lint, format) are available as npm scripts for developer convenience.

## Environment Variables

Create a `.env` file in the project root with the following variables:

```
# Login credentials for tests
CORRECT_LOGIN=your_valid_username
INCORRECT_LOGIN=your_invalid_username
PASSWORD=your_password

```

- `CORRECT_LOGIN`: Valid username for successful login tests.
- `INCORRECT_LOGIN`: Invalid username for negative login tests.
- `PASSWORD`: Password for both login scenarios.

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

2. (Optional) Create a `.env` file for environment variables if needed.

### Running Tests

- Run all E2E tests:
  ```sh
  npm run test:e2e
  ```
- Run tests in UI mode:
  ```sh
  npm run test:e2e:ui
  ```
- Run tests in headed mode:
  ```sh
  npm run test:e2e:headed
  ```
- Run tests with trace enabled:
  ```sh
  npm run test:e2e:trace
  ```
- Run tests only in Chromium:
  ```sh
  npm run test:e2e:chromium
  ```

### Linting & Formatting

- Lint code:
  ```sh
  npm run lint
  ```
- Fix lint issues:
  ```sh
  npm run lint:fix
  ```
- Format code:
  ```sh
  npm run format
  ```

### Test Reports

- After running tests, view the HTML report in the `playwright-report/` directory. Open `index.html` in your browser.

## Dependencies

- [@playwright/test](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [dotenv](https://github.com/motdotla/dotenv)

## License

ISC
