// @ts-check
const { test, expect } = require('@playwright/test');

test('Signup Into Qkart Application', async ({ page }) => {
  let userName="Test"+Math.floor((Math.random() * 100) + 1);
// Navigate to the below Url
  await page.goto('https://crio-qkart-frontend-qa.vercel.app/register');


  // Checking the title of the webpage
  await expect(page).toHaveTitle('QKart');
  
  //Locating Username Field and enter data
  await page.getByPlaceholder('Enter Username').fill(userName);
 //Locating password field and enter password
  await page.getByPlaceholder('Enter a password with minimum 6 characters').fill('Test345');
  //Locating  confirm password field and enter password
  await page.getByPlaceholder('Re-enter your password to confirm').fill('Test345');
  //Click on Register Button
  await page.getByRole('button', { name: 'Register Now' }).click();

  
  //Verify application re direct to login page after successfully login
  await expect(page).toHaveURL(/.*login/);
});


