import { test, expect } from '@playwright/test'

// You can override the default Playwright test timeout of 30s
// test.setTimeout(60_000);

test('Sample Homepage', async ({ page }) => {
  const response = await page.goto('https://rahulshettyacademy.com/client')
  expect(response?.status()).toBeLessThan(400)
  await expect(page).toHaveTitle('Let\'s Shop');
  await page.screenshot({ path: 'homepage.jpg' })
})
