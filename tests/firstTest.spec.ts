import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});

test('locator syntax rules', async ({ page }) => {
    //by Tag name
    page.locator('input');

    //by ID
    await page.locator('#inputEmail1').click();

    //by Class name
    page.locator('.input-full-width');

    //by Attribute name
    page.locator('[placeholder="Email"]');

    //by Class value (full)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]');

    //combine different selectors
    page.locator('input[placeholder="Email"]');

    //by partial text
    page.locator(':text("Using")');

    //by text with exact match
    page.locator(':text-is("Using the Grid")');
});

test('User facing locators', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Email' }).first().click();

    await page.getByRole('button', { name: 'Sign in' }).first().click();

    await page.getByLabel('Email').first().click();

    await page.getByPlaceholder('Jane Doe').click();

    await page.getByText('Using the Grid').click();

    await page.getByTitle('IoT Dashboard').click();

    // await page.getByTestId('test-id').click();
});