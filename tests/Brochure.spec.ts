import { test, expect, Page } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { Severity } from 'allure-js-commons';

async function acceptCookiesIfPresent(page: Page): Promise<void> {
  const acceptBtn = await page.getByRole('button', { name: 'Accept All Cookies' });
  const isVisible = await acceptBtn.isVisible().catch(() => false);
  
  if (isVisible) {
    await allure.step('Accept cookie banner', async () => {
      await acceptBtn.click();
    });
  }
}

test('Download a brochure by dropdown', async ({ page }) => {
  await allure.epic('Brochures');
  await allure.feature('Brochure download');
  await allure.story('Brochure download by dropdown');
  await allure.severity(Severity.CRITICAL);
  await allure.description("User is able to succesfully download a brochure by selecting it from a dropdown");
  await allure.owner('QA Team');
  await allure.tag('smoke');
  await page.goto('https://staging-bikes.test-suzuki.co.uk/order-a-brochure/');

  await acceptCookiesIfPresent(page);
  await allure.step('Choose a model', async () => {
    await page.getByRole('img', { name: 'Sport-image', exact: true }).click();
  });
  await allure.step('Select brochure', async () => {
    await page.getByText('Select brochure').first().click();
  });
  await allure.step('Download Model Brochure', async () => {
    page.getByRole('link', { name: 'Download Model Brochure' }).click();
  });
  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL("https://staging-bikes.test-suzuki.co.uk/order-a-brochure/");
  
});
test('Download a brochure by email', async ({ page }) => {
  await allure.epic('Brochures');
  await allure.feature('Brochure download');
  await allure.story('Brochure download by email');
  await allure.severity(Severity.CRITICAL);
  await allure.description("User is able to succesfully request a brochure to email");
  await allure.owner('QA Team');
  await allure.tag('smoke');
  await page.goto('https://staging-bikes.test-suzuki.co.uk/order-a-brochure/');

  await acceptCookiesIfPresent(page);
  await allure.step('Choose a model', async () => {
    await page.getByRole('img', { name: 'Sport-image', exact: true }).click();
  });
  await allure.step('Select model from dropdown', async () => {
    await page.getByText('Please select').first().click();
    await page.locator('form').getByText('Hayabusa Special Edition').click();
  });
  await allure.step('Fill e-mail address field', async () => {
    await page.locator('#emailAddress').fill('hello@suzuki.co.uk');
  });
  await allure.step('Select Title from dropdown', async () => {
    await page.getByText('Please select').click();
    await page.getByText('Mr', { exact: true }).click();
  });
  await allure.step('Fill First name and Last name fields', async () => {
    await page.locator('#firstName').fill('Test');
    await page.locator('#surname').fill('Test');
  });
  await allure.step('Email opt in', async () => {
    await page.getByRole('checkbox').check();
  });
  await allure.step('Send a request', async () => {
    await page.getByRole('button', { name: 'Send request' }).click();
  });

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Thank you for requesting a' })).toBeVisible();
});
