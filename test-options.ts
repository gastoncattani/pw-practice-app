import { test as base } from '@playwright/test'
import { PageManager } from '../pw-practice-app/page-objects/pageManager'

export type TestOptions = {
    globalsQaURL: string
    formLayoutsPage: string
    pageManager: PageManager
}

export const test = base.extend<TestOptions>({
    globalsQaURL: ['', { option: true }],

    // /**
    //  * Este es un fixtrue que se usa para abrir la página en el navegador, asi no se hace directo en cada test, se centraliza aca
    //  */
    // formLayoutsPage: [ async ({ page }, use) => {
    //     await page.goto('/') // Pasando este caracter PW reconoce que tiene que usar la "baseURL" definida en el archivo de configuración
    //     await page.getByText('Forms').click()
    //     await page.getByText('Form Layouts').click()
    //     await use('')
    // }, {auto: true}], // Con esto {auto: true} hacemos que este código se ejecute primero que todo, es necesario usar los []

    /**
     * Este es un fixtrue que se usa para abrir la página en el navegador, asi no se hace directo en cada test, se centraliza aca
     */
    formLayoutsPage: async ({ page }, use) => {
        await page.goto('/') // Pasando este caracter PW reconoce que tiene que usar la "baseURL" definida en el archivo de configuración
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
        await use('')
        console.log('formLayoutsPage - Tear Down')
    },

    /**
     * Fixture para instanciar la PageManager para usarlo en los tests. Al agregar formLayoutsPage estamos generando una dependencia
     * Por lo que primero se va a llamar a formLayoutsPage
     */
    pageManager: async({page, formLayoutsPage}, use) => {
        const pm = new PageManager(page)
        await use(pm) // En esta linea es cuando se ejecutan los tests
        console.log('pageManager - Tear Down')
    }
})