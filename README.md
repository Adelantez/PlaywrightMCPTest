# EPAM Playwright Test Suite

This repository contains automated tests for the EPAM website using Playwright and TypeScript.

## Test Scenario

The main test scenario validates the following user journey:

1. **Navigate** to https://www.epam.com/
2. **Click** "Services" from the header menu
3. **Click** "Explore Our Client Work" link
4. **Verify** that "Client Work" text is visible on the page

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run tests with UI mode (interactive)
```bash
npm run test:ui
```

### Run specific test file
```bash
npm run test:client-work
```

### Run tests on specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Test Reports

After running tests, view the HTML report:
```bash
npm run test:report
```

## Project Structure

```
.
├── tests/
│   └── epam-client-work.spec.ts    # Main test file
├── playwright.config.ts             # Playwright configuration
├── package.json                     # Dependencies and scripts
└── README.md                        # This file
```

## Test Features

### Test Organization
- Tests are organized using `test.describe()` blocks
- Each step is wrapped in `test.step()` for clear reporting
- Includes both full navigation test and direct navigation test

### Best Practices Implemented
- ✅ Uses role-based locators for accessibility
- ✅ Includes proper assertions with expect()
- ✅ Step-by-step test execution with clear descriptions
- ✅ URL and title verification
- ✅ Timeout configuration
- ✅ Multiple browser support
- ✅ Screenshot and video on failure
- ✅ Trace collection for debugging

## CI/CD Integration

The tests are configured to work in CI/CD environments:
- Retries on failure (2 retries in CI)
- Single worker in CI for stability
- JUnit XML report generation
- Screenshots and videos on failure

### Example GitHub Actions workflow:

```yaml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install dependencies
        run: npm ci
      - name: Install Playwright browsers
        run: npx playwright install --with-deps
      - name: Run tests
        run: npm test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

## Troubleshooting

### Tests failing due to timeouts
- Increase timeout in `playwright.config.ts`
- Check network connectivity
- Verify EPAM website is accessible

### Browser not installed error
Run: `npx playwright install`

### Element not found errors
- Website structure may have changed
- Update locators in test file
- Use Playwright Inspector: `npm run test:debug`

## Additional Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)

## License

ISC
