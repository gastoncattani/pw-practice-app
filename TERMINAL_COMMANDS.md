# Terminal Commands Used

This document lists the main commands run during development and testing, along with brief explanations.

---

## Commands

### 1. `npm start`

Starts the Angular development server for the project.  
This runs the `ng serve` command, compiling the application and serving it at [http://localhost:4200](http://localhost:4200).

---

### 2. `npx playwright test --project=chromium --grep @smoke`

Runs Playwright tests using the Chromium browser.  
The `--grep @smoke` option filters and runs only tests tagged with `@smoke`.

---

### 3. `npx playwright test --project=chromium --grep "@block|@smoke"`

Runs Playwright tests using the Chromium browser.  
The `--grep "@block|@smoke"` option runs tests tagged with either `@block` or `@smoke`.

---

### 4. `npx playwright show-report`

Opens the last generated Playwright HTML test report in your browser.

---

### 5. `npx playwright test --project=likeCounterGlobal --headed`

Runs Playwright tests for the `likeCounterGlobal` project in headed mode (browser UI visible).

---

### 6. `npx playwright test --list`

Lists all available Playwright tests in the project.

---

### 7. `npx playwright test --project=likeCounter`

Runs Playwright tests for the `likeCounter` project.

---

### 8. `npx playwright test --project=likeCounterGlobal`

Runs Playwright tests for the `likeCounterGlobal` project.

---

### 9. `npx playwright test --project=likeCounterGlobal --list`

Lists all available Playwright tests for the `likeCounterGlobal` project.

---

### 10. `npx playwright test --project=likeCounterGlobal --grep @smoke`

Runs Playwright tests for the `likeCounterGlobal` project, filtering for tests tagged with `@smoke`.

---

### 11. `npx playwright test --headed`

Runs all Playwright tests in headed mode (browser UI visible).

---

### 12. `npx playwright test --config=playwright-prod.config.ts`

Runs Playwright tests using the configuration specified in `playwright-prod.config.ts`.  
This is useful for running tests with production settings or different environments.

---

### 13. `npx playwright install`

Installs browser binaries required by Playwright (Chromium, Firefox, WebKit).

---

### 14. `npx playwright codegen <url>`

Opens the Playwright Codegen tool to record user actions and generate test scripts for the given URL.

---

### 15. `npx playwright test --debug`

Runs tests in debug mode, opening the Playwright Inspector for step-by-step debugging.

---

### 16. `npx playwright test --update-snapshots`

Updates all snapshot expectations in your tests.

---

### 17. `npx playwright test --reporter=html`

Runs tests and generates an HTML report.

---

### 18. `npx playwright doctor`

Checks your Playwright installation for common issues.

---

## Notes

- Make sure the Angular server is running (`npm start`) before executing Playwright tests that depend on it.
- The Playwright commands generate test reports and may retry failed tests automatically.
- Use `--list` to see which tests are available for a specific project.
- Use `--headed` to run tests with the browser UI visible for debugging.
- Use `--config` to specify a custom Playwright configuration file for your test runs.
- Use `codegen` to quickly generate test scripts by recording browser actions.
- Use `doctor` to troubleshoot Playwright installation