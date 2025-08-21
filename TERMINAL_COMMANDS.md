# Terminal Commands Used

This document lists the main commands run during development and testing, grouped by usage, with brief explanations.

---

## **Project Setup & Dependency Management**

- `npm start`  
  Starts the Angular development server for the project (`ng serve`).

- `npm install -D allure-playwright`  
  Installs the Allure Playwright reporter as a development dependency.

- `npm install -D allure-playwright --force`  
  Installs Allure Playwright reporter, forcing resolution of dependency conflicts.

- `brew install allure`  
  Installs the Allure CLI tool using Homebrew (Mac).

---

## **Playwright Test Execution**

- `npx playwright test`  
  Runs all Playwright tests.

- `npx playwright test --project=chromium --grep @smoke`  
  Runs Playwright tests in the Chromium browser, filtering for tests tagged with `@smoke`.

- `npx playwright test --project=chromium --grep "@block|@smoke"`  
  Runs Playwright tests in Chromium, filtering for tests tagged with either `@block` or `@smoke`.

- `npx playwright test --project=likeCounterGlobal --headed`  
  Runs Playwright tests for the `likeCounterGlobal` project in headed mode (browser UI visible).

- `npx playwright test --project=likeCounter`  
  Runs Playwright tests for the `likeCounter` project.

- `npx playwright test --project=likeCounterGlobal`  
  Runs Playwright tests for the `likeCounterGlobal` project.

- `npx playwright test --project=likeCounterGlobal --list`  
  Lists all available Playwright tests for the `likeCounterGlobal` project.

- `npx playwright test --project=likeCounterGlobal --grep @smoke`  
  Runs Playwright tests for the `likeCounterGlobal` project, filtering for tests tagged with `@smoke`.

- `npx playwright test --headed`  
  Runs all Playwright tests in headed mode (browser UI visible).

- `npx playwright test --config=playwright-prod.config.ts`  
  Runs Playwright tests using the configuration specified in `playwright-prod.config.ts`.

- `npx playwright test --list`  
  Lists all available Playwright tests in the project.

- `npm run pageObjects-chrome`  
  Runs Playwright tests for page objects in Chromium via a custom npm script.

---

## **Playwright Utilities & Debugging**

- `npx playwright install`  
  Installs browser binaries required by Playwright (Chromium, Firefox, WebKit).

- `npx playwright codegen <url>`  
  Opens the Playwright Codegen tool to record user actions and generate test scripts for the given URL.

- `npx playwright test --debug`  
  Runs tests in debug mode, opening the Playwright Inspector for step-by-step debugging.

- `npx playwright test --update-snapshots`  
  Updates all snapshot expectations in your tests.

- `npx playwright test --reporter=html`  
  Runs tests and generates an HTML report.

- `npx playwright doctor`  
  Checks your Playwright installation for common issues.

---

## **Reporting**

- `npx playwright show-report`  
  Opens the last generated Playwright HTML test report in your browser.

- `allure generate ./allure-results -o ./allure-report`  
  Generates an Allure report from Playwright test results.

---

## **Security & Maintenance**

- `npm audit fix`  
  Automatically fixes vulnerabilities in your dependencies.

- `npm audit fix --force`  
  Fixes all vulnerabilities, including those that require breaking changes.

- `npm fund`  
  Lists packages looking for funding.

---

## **Notes**

- Make sure the Angular server is running (`npm start`) before executing Playwright tests that depend on it.
- The Playwright commands generate test reports and may retry failed tests automatically.
- Use `--list` to see which tests are available for a specific project.
- Use `--headed` to run tests with the browser UI visible for debugging.
- Use `--config` to specify a custom Playwright configuration file for your test runs.
- Use `codegen` to quickly generate test scripts by recording browser actions.
- Use `doctor` to troubleshoot Playwright installation issues.
- Allure commands are used for advanced reporting and require the Allure CLI.
