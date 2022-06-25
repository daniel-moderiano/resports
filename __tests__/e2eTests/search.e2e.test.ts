import { test, expect } from '@playwright/test';

test('search page shows invalid message when searchQuery is invalid', async ({ page }) => {
  await page.goto('http://localhost:3000/search');
  const title = page.locator('.title');
  await expect(title).toHaveText(/invalid/i);
});