import { test, expect } from '@playwright/test';

/**
 * EPAM Client Work Navigation Test
 * 
 * Test Scenario:
 * 1. Navigate to https://www.epam.com/
 * 2. Select "Services" from the header menu
 * 3. Click the "Explore Our Client Work" link
 * 4. Verify that the "Client Work" text is visible on the page
 */

test.describe('EPAM Services - Client Work Navigation', () => {
  test('should navigate to Client Work page and verify content', async ({ page }) => {
    // Step 1: Navigate to EPAM homepage
    await test.step('Navigate to EPAM homepage', async () => {
      await page.goto('https://www.epam.com/');
      await expect(page).toHaveURL('https://www.epam.com/');
      await expect(page).toHaveTitle(/EPAM/);
    });

    // Step 2: Click "Services" from the header menu
    await test.step('Select Services from header menu', async () => {
      // Locate and click the Services link in the navigation
      const servicesLink = page.getByRole('link', { name: 'Services', exact: true });
      await servicesLink.click();
      
      // Verify navigation to Services page
      await expect(page).toHaveURL(/.*\/services/);
    });

    // Step 3: Click "Explore Our Client Work" link
    await test.step('Click Explore Our Client Work link', async () => {
      // Locate and click the "Explore Our Client Work" link
      const clientWorkLink = page.getByRole('link', { name: /Explore Our Client Work/i });
      await clientWorkLink.click();
      
      // Verify navigation to Client Work page
      await expect(page).toHaveURL(/.*\/services\/client-work/);
    });

    // Step 4: Verify "Client Work" text is visible on the page
    await test.step('Verify Client Work heading is visible', async () => {
      // Verify the main heading contains "Client Work"
      const clientWorkHeading = page.getByRole('heading', { name: /Client Work/i, level: 1 });
      await expect(clientWorkHeading).toBeVisible();
      
      // Additional verification: check page title
      await expect(page).toHaveTitle(/Client Work/i);
    });
  });

  test('should verify Client Work page loads successfully', async ({ page }) => {
    // Direct navigation test for faster execution in CI/CD
    await page.goto('https://www.epam.com/services/client-work');
    
    // Verify page loaded correctly
    await expect(page).toHaveURL('https://www.epam.com/services/client-work');
    await expect(page.getByRole('heading', { name: /Client Work/i })).toBeVisible();
  });
});
