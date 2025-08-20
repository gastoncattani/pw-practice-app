import { expect, test } from '@playwright/test';

test.beforeAll(() => { })

test.beforeEach(async ({ page }) => {
    await page.goto('/') // Pasando este caracter PW reconoce que tiene que usar la "baseURL" definida en el archivo de configuración
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Locator syntax rules', async ({ page }) => {
    //by tag name
    await page.locator('input').first().click()

    //by id
    page.locator('#inputEmail1')

    //by class value
    page.locator('.shape-rectangle')

    //by attribute
    page.locator('[placeholder="Email"]')

    //by Class value (full value)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //combine different selectors
    page.locator('input[placeholder="Email"].shape-rectangle')

    //by XPath (NOT RECOMENDED)
    page.locator('//input[@id="inputEmail1"]')

    //by partial text match
    page.locator(':text("Using")')

    //by exact text match
    page.locator(':text-is("Using the Grid")')

})

test('User facing locators', async ({ page }) => {
    //by role
    await page.getByRole('textbox', { name: "Email" }).first().click()
    await page.getByRole('button', { name: "Sign In" }).first().click()

    //by label
    await page.getByLabel('Email').first().click()

    //by placeholder
    await page.getByPlaceholder('Jane Doe').click()

    //by text
    await page.getByText('Using the Grid').click()

    //by title (data-testid attribute configurable in playwright.config.ts)
    await page.getByTitle('IoT Dashboard').click()

    //by test id
    // await page.getByTestId('test-id-123').click()
})

test('Locating child elements', async ({ page }) => {
    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()

    await page.locator('nb-card').getByRole('button', { name: "Sign In" }).first().click()

    await page.locator('nb-card').nth(3).getByRole('button').click()
})

test('Locating parent elements', async ({ page }) => {
    await page.locator('nb-card', { hasText: "Using the Grid" }).getByRole('textbox', { name: "Email" }).click()
    await page.locator('nb-card', { has: page.locator('#inputEmail1') }).getByRole('textbox', { name: "Email" }).click()

    await page.locator('nb-card').filter({ hasText: "Basic form" }).getByRole('textbox', { name: "Email" }).click()
    await page.locator('nb-card').filter({ has: page.locator('.status-danger') }).getByRole('textbox', { name: "Password" }).click()

    await page.locator('nb-card').filter({ has: page.locator('nb-checkbox') }).filter({ hasText: "Sign in" })
        .getByRole('textbox', { name: "Email" }).click()

    //Move to parent element, onlt way using XPath
    await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox', { name: "Email" }).click()
})

test('Reusing the locators', async ({ page }) => {
    const basicForm = page.locator('nb-card').filter({ hasText: "Basic form" })
    const emailField = basicForm.getByRole('textbox', { name: "Email" })

    await emailField.fill('test@test.com')
    await basicForm.getByRole('textbox', { name: "Password" }).fill('Welcome123')
    await basicForm.locator('nb-checkbox').click()
    await basicForm.getByRole('button').click()

    await expect(emailField).toHaveValue('test@test.com')
})

test('Extracting values', async ({ page }) => {
    //Single text value
    const basicForm = page.locator('nb-card').filter({ hasText: "Basic form" })
    const buttonText = await basicForm.locator('button').textContent()
    expect(buttonText).toEqual('Submit')

    //All text values
    const allRadioButtonsLabels = await page.locator('nb-radio').allTextContents()
    expect(allRadioButtonsLabels).toContain("Option 1")

    //Input value
    const emailField = basicForm.getByRole('textbox', { name: "Email" })
    await emailField.fill('test@test.com')
    const emailValue = await emailField.inputValue()
    expect(emailValue).toEqual('test@test.com')

    const placeHolderValue = await emailField.getAttribute('placeholder')
    expect(placeHolderValue).toEqual('Email')
})

test('Assertions', async ({ page }) => {
    const basicFormButton = page.locator('nb-card').filter({ hasText: "Basic form" }).locator('button')

    //General assertions
    const value = 5;
    expect(value).toEqual(5)

    const text = await basicFormButton.textContent()
    expect(text).toEqual('Submit')

    //Location assertion
    await expect(basicFormButton).toHaveText('Submit')

    //Soft Assertion
    await expect.soft(basicFormButton).toHaveText('Submit')
    await basicFormButton.click()
})