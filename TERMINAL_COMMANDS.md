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

- `npm install -D playwright@latest`  
  Installs the latest version of Playwright as a development dependency.  
  **Usage:** Use this to update Playwright to the newest version. If you encounter dependency conflicts, add `--force` or `--legacy-peer-deps`.

- `npm install -D playwright@latest --force`  
  Installs the latest Playwright version, forcing resolution of dependency conflicts.  
  **Usage:** Use this if you see `ERESOLVE` errors during install.

- `npx playwright install`  
  Installs browser binaries required by Playwright (Chromium, Firefox, WebKit).  
  **Usage:** Run after installing Playwright to ensure all browsers are available.

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
  **Usage:** Use this to run a specific test file with a defined project.

---

## **Playwright Utilities & Debugging**

- `npx playwright codegen <url>`  
  Opens the Playwright Codegen tool to record user actions and generate test scripts for the given URL.

- `npx playwright test --debug`  
  Runs tests in debug mode, opening the Playwright Inspector for step-by-step debugging.

- `npx playwright test --update-snapshots`  
  Updates all snapshot expectations in your Playwright tests.  
  **Usage:** Use when your UI or expected output has changed and you want to refresh the stored snapshots.

- `npx playwright test --reporter=html`  
  Runs tests and generates an HTML report.

- `npx playwright doctor`  
  Checks your Playwright installation for common issues.

---

## **Reporting**

- `npx playwright show-report`  
  Opens the last generated Playwright HTML test report in your browser.  
  **Usage:** Run after a test to view the HTML report.

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

## **Docker Usage**

- `docker build -t pw-pageobject-test .`  
  Builds a Docker image for your Playwright test environment.  
  **Usage:** Use this to create a reproducible test environment for CI/CD or local testing.

- `docker images`  
  Lists all Docker images available locally.

- `docker-compose up --build`  
  Builds and starts containers defined in docker-compose.yaml.  
  **Usage:** Use this to build fresh images and start containers in one command.

- `docker-compose down`  
  Stops and removes containers, networks created by docker-compose up.  
  **Usage:** Use this to clean up after running tests in containers.

- `docker-compose up`  
  Starts containers using existing images (without rebuilding).  
  **Usage:** Use when you haven't changed the Dockerfile or source code.

- `docker exec -it <container-id> /bin/bash`  
  Opens an interactive shell in a running container.  
  **Usage:** Useful for debugging or running commands inside the container.

### **Docker Compose File Structure**
The `docker-compose.yaml` file defines:
- Services: Named containers (e.g., playwright-test)
- Image names and build settings
- Volume mappings for test results persistence
- Commands to run when container starts
- Working directory and environment setup

---

## **Version & Troubleshooting**

- `npx playwright --version`  
  Shows the installed Playwright version.

- `npm --version`  
  Shows the installed npm version.

- `npm install -D playwright@latest --force`  
  Use this if you see dependency errors like `ERESOLVE`.  
  **Usage:** This command will override peer dependency conflicts.

---

## **Notes**

- If you see `ERESOLVE` errors during install, use `--force` or `--legacy-peer-deps`.
- After updating Playwright, always run `npx playwright install` to update browser binaries.
- Use `npx playwright show-report` after a test run to view the HTML report.
- For Docker, ensure your image uses the correct Playwright version tag.
- Use `npm audit fix` regularly to keep dependencies secure.
- Custom scripts (like `npm run pageObjects-chrome`) are defined in your `package.json` and may wrap Playwright commands for specific test scenarios.