import { test, expect } from '@playwright/test';
import { testData } from '../config/testData';


test('Update Naukri profile summary conditionally', async ({ page }) => {
    await page.goto(testData.url);

    await page.getByRole('link', { name: 'Login', exact: true }).click();
    await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).fill(testData.credentials.email);
    await page.getByRole('textbox', { name: 'Enter your password' }).fill(testData.credentials.password);

    await page.getByRole('button', { name: 'Login', exact: true }).click();

    await page.waitForTimeout(2000);
    await page.reload();

    await page.getByRole('img', { name: 'naukri user profile img' }).click();
    await page.getByRole('link', { name: 'View & Update Profile' }).click();

    const textbox = page.getByRole('textbox', { name: 'Minimum 5 words. Sample' });

    await page.locator('#lazyResumeHead').getByText('editOneTheme').click();

    const currentValue = await textbox.inputValue();

    if (currentValue.trim() === testData.profileText.oldText) {
            await textbox.fill(testData.profileText.newText);
    } else {
            await textbox.fill(testData.profileText.oldText);
    }

    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(5000);
    
    await page.locator("//a[@title='Recommended Jobs']/div[contains(.,'Jobs')]").click();
    await page.waitForTimeout(5000);

});