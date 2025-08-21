import { expect, test } from '@playwright/test';

test('Input fields', async ({ page }, testInfo) => {
    await page.goto('/')
    if (testInfo.project.name == 'mobile') {
        await page.locator('.sidebar-toggle').click()
    }
    await page.getByText('Forms').click()
    await page.getByText('Form Layout').click()
    if (testInfo.project.name == 'mobile') {
        await page.locator('.sidebar-toggle').click()
    }

    const usingTheGriidEmailInput = page.locator('nb-card', { hasText: "Using the Grid" }).getByRole("textbox", { name: "Email" })

    await usingTheGriidEmailInput.fill('test@test.com')
    await usingTheGriidEmailInput.clear()
    await usingTheGriidEmailInput.pressSequentially('test2@test.com')
})