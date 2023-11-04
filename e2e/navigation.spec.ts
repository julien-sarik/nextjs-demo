import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('has title', async ({ page }) => {
  console.log(page.url())
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/);
});

test.describe('top menu', () => {
    test('home', async ({ page }) => {
        // Click the 'data fetching' link.
        await page.getByRole('link', { name: 'home' }).click()
      
        // Expects page to have a specific text
        await expect(page.getByText('simple website')).toBeVisible()
    });
    
    test('data fetching', async ({ page }) => {
        // Click the 'data fetching' link.
        await page.getByRole('link', { name: 'data fetching' }).click()
      
        // Expects page to have a heading with the name of 'Data fetching'.
        await expect(page.getByRole('heading', { exact: true, name: 'Data fetching' })).toBeVisible()
    });

    // ...
})