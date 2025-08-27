import { test, expect } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker'

test.beforeEach(async ({ page }) => {
    await page.goto('/') // Pasando este caracter PW reconoce que tiene que usar la "baseURL" definida en el archivo de configuración
})

test('Navigate to from page @smoke @regression', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datePickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()
})

test('Parametrized methods @smoke', async ({ page }) => {
    const pm = new PageManager(page)
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ','')}${faker.number.int(1000)}@test.com`

    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, 'Option 2')
    await page.screenshot({path: 'screenshots/formsLayoutsPage.png'})
    const buffer = await page.screenshot()
    console.log(buffer.toString('base64'))
    await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, true)
    await page.locator('nb-card', { hasText: "Inline form" }).screenshot({path: 'screenshots/inlineForm.png'})
    await pm.navigateTo().datePickerPage()
    await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(5)
    await pm.onDatePickerPage().selectDatePickerWithRangeFromToday(6, 15)
})

test.only('Testing with argos CI', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datePickerPage()
})