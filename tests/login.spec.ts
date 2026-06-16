import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test.describe('Login Tests', () => {

  test('Verify login page UI', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.verifyLoginPageLoaded();
  });

  test('Successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.performLogin('amol.pisal@trigyn.com', 'Account@123');

    // Update with real validation
    //await expect(page).toHaveURL(/.*dashboard|home|landing/i);
  });

 /* test('Invalid login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.performLogin('wrong@gmail.com', 'wrong123');

    //await loginPage.verifyLoginFailed();
  });*/

});