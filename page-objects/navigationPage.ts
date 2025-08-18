import { Locator, Page } from '@playwright/test'
import { HelperBase } from './helperBase';

export class NavigationPage extends HelperBase {

    // Locators
    readonly formLayoutsMenuItem: Locator
    readonly datePickerMenuItem: Locator
    readonly smartTableMenuItem: Locator
    readonly toastrMenuItem: Locator
    readonly tooltipMenmuItem: Locator

    constructor(page: Page) {
        super(page)

        // Locator initialization
        this.formLayoutsMenuItem = page.getByText('Form Layout')
        this.datePickerMenuItem = page.getByText('Datepicker')
        this.smartTableMenuItem = page.getByText('Smart Table')
        this.toastrMenuItem = page.getByText('Toastr')
        this.tooltipMenmuItem = page.getByText('Tooltip')
    }

    async formLayoutsPage() {
        await this.selectGroupMenuItem('Forms')
        await this.formLayoutsMenuItem.click()
        await this.waitForNumberOfSeconds(2)
    }

    async datePickerPage() {
        await this.selectGroupMenuItem('Forms')
        await this.page.waitForTimeout(1000)
        await this.datePickerMenuItem.click()
    }

    async smartTablePage() {
        await this.selectGroupMenuItem('Tables & Data')
        await this.smartTableMenuItem.click()
    }

    async toastrPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.toastrMenuItem.click()
    }

    async tooltipPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.tooltipMenmuItem.click()
    }

    private async selectGroupMenuItem(groupItemTile: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTile)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if (expandedState == "false") {
            await groupMenuItem.click()
        }
    }
}