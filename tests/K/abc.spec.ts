import {test, Page, Locator } from '@playwright/test';
import { tap } from '../../pages/K/tap';

test('TAP', async ({ page }) => {
    const tapPage = new tap(page);
    await tapPage.goto(tapPage.url);
    await tapPage.fill("kalyan");
    

});
