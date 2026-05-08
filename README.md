# playwright

Playwright E2E test automation learning and practice project.

## Tech Stack

- [Playwright Test](https://playwright.dev/) (`@playwright/test@^1.59.1`)
- TypeScript

## Prerequisites

The tests target an Angular application running at `http://localhost:4200/` (specifically the **Forms → Form Layouts** page). Ensure the Angular dev server is running before executing tests:

```bash
ng serve
```

## Project Structure

```
playwright/
├── tests/
│   └── firstTest.spec.ts       # Test suite demonstrating locator patterns
├── playwright.config.ts        # Test runner configuration
├── playwright-report/          # HTML test reports (gitignored)
├── test-results/               # Test artifacts and traces (gitignored)
└── package.json
```

## Test Coverage

### Locator Syntax Rules

Demonstrates CSS selector-based locators:
- Tag name, ID, class name, attribute selectors
- Full class value matching
- Combined selectors
- Partial and exact text matching (`:text()` / `:text-is()`)

### User-Facing Locators

Demonstrates Playwright's built-in locator API:
- `getByRole()` — button, textbox
- `getByLabel()`
- `getByPlaceholder()`
- `getByText()`
- `getByTitle()`

## Configured Browsers

Tests run across three browser projects:

| Browser  | Device Profile       |
|----------|----------------------|
| Chromium | Desktop Chrome       |
| Firefox  | Desktop Firefox      |
| WebKit   | Desktop Safari       |

## Running Tests

```bash
npx playwright test
```

## Viewing Reports

The project uses the HTML reporter. After a test run, open the report with:

```bash
npx playwright show-report
```
