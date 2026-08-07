# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Brochure.spec.ts >> Download a brochure by email
- Location: tests\Brochure.spec.ts:40:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Thank you for requesting a' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Thank you for requesting a' })

```

```yaml
- alert
- status
- link "Skip to main content":
  - /url: "#main-content"
- banner:
  - navigation "Quick links":
    - list:
      - listitem:
        - link "Book a test ride":
          - /url: https://staging-bikes.test-suzuki.co.uk/book-a-test-ride/
      - listitem:
        - link "Find a Dealer":
          - /url: https://staging-bikes.test-suzuki.co.uk/find-a-dealer/
      - listitem:
        - link "Download a brochure":
          - /url: https://staging-bikes.test-suzuki.co.uk/order-a-brochure/
      - listitem:
        - link "Offers and Finance":
          - /url: https://staging-bikes.test-suzuki.co.uk/offers-and-finance/
  - link "Suzuki homepage":
    - /url: /
  - navigation "Main navigation":
    - list:
      - link "BIKES, 1 of 4":
        - /url: /order-a-brochure/#
        - text: BIKES
      - link "OFFERS & FINANCE":
        - /url: https://staging-bikes.test-suzuki.co.uk/offers-and-finance/
      - link "OWNERS, 3 of 4":
        - /url: /order-a-brochure/#
        - text: OWNERS
      - link "NEWS & EVENTS":
        - /url: https://staging-bikes.test-suzuki.co.uk/news-events/
    - status
    - button "Search Suzuki website. Focus moves to search field when activated."
- main:
  - paragraph: DOWNLOAD A
  - heading "BROCHURE" [level=1]
  - heading "Sport" [level=3]
  - img "Hayabusa Special Edition-image"
  - heading "Hayabusa Special Edition" [level=3]
  - paragraph: £18,999
  - text: OTR* Select brochure
  - img "HAYABUSA-image"
  - heading "HAYABUSA" [level=3]
  - paragraph: £18,599
  - text: OTR* Select brochure
  - img "GSX-R1000R 40th Anniversary-image"
  - heading "GSX-R1000R 40th Anniversary" [level=3]
  - paragraph: £17,599
  - text: OTR* Select brochure
  - img "GSX-R125-image"
  - heading "GSX-R125" [level=3]
  - paragraph: £3,999
  - text: OTR* Select brochure
  - img "GSX-S1000GX+-image"
  - heading "GSX-S1000GX+" [level=3]
  - paragraph: £12,999
  - text: OTR* Select brochure
  - img "SV-7GX-image"
  - heading "SV-7GX" [level=3]
  - paragraph: £6,999
  - text: OTR* Select brochure
  - img "GSX-S1000GT+-image"
  - heading "GSX-S1000GT+" [level=3]
  - paragraph: £11,999
  - text: OTR* Select brochure
  - img "GSX-8R-image"
  - heading "GSX-8R" [level=3]
  - paragraph: £8,999
  - text: OTR* Select brochure
  - button "arrow Select Range":
    - img "arrow"
    - text: Select Range
  - text: "**The OTR price shown excludes First Registration charges and Vehicle Excise Duty"
  - heading "send to my email" [level=3]
  - text: Model * Hayabusa Special Edition
  - img "arrow"
  - text: Email *
  - textbox: hello@suzuki.co.uk
  - text: Title * Mr
  - img "arrow"
  - text: First Name *
  - textbox: Test
  - text: Last Name *
  - textbox: Test
  - text: Suzuki GB PLC and our
  - link "authorised Dealer network":
    - /url: https://bikes.suzuki.co.uk/find-a-dealer/
  - text: value your privacy and are committed to protecting your data. If you’d like to receive updates on news, offers, and services, simply OPT IN by checking the boxes below.
  - checkbox [checked]
  - img "checkmark"
  - text: Email To find out more, please see
  - link "SGB’s Privacy Policy":
    - /url: https://bikes.suzuki.co.uk/privacy/
  - text: . You can withdraw your consent to receiving communications at any time by emailing
  - link "customerservices@suzuki.co.uk":
    - /url: mailto:customerservices@suzuki.co.uk
  - text: .
  - iframe
  - paragraph: Recaptcha is required
  - button "Send request"
  - button "Back to Top":
    - img "Back to Top"
- contentinfo:
  - button "Search for results":
    - img "Search icon"
  - searchbox "Search"
  - text: Categories
  - list:
    - listitem:
      - link "Sport":
        - /url: https://staging-bikes.test-suzuki.co.uk/bikes/sport/
    - listitem:
      - link "Street":
        - /url: https://staging-bikes.test-suzuki.co.uk/bikes/street/
    - listitem:
      - link "Adventure & Dual Sport":
        - /url: https://staging-bikes.test-suzuki.co.uk/bikes/adventure-dual-sport/
    - listitem:
      - link "Scooter":
        - /url: https://staging-bikes.test-suzuki.co.uk/bikes/scooter/
    - listitem:
      - link "MX":
        - /url: https://staging-bikes.test-suzuki.co.uk/bikes/mx/
    - listitem:
      - link "Suzuki Vault":
        - /url: https://staging-bikes.test-suzuki.co.uk/suzuki-vault/
  - text: Owners
  - list:
    - listitem:
      - link "Warranty, opens in new tab":
        - /url: https://staging-bikes.test-suzuki.co.uk/owners/warranty/
        - text: Warranty
    - listitem:
      - link "Suzuki Insurance":
        - /url: https://staging-bikes.test-suzuki.co.uk/owners/suzuki-insurance/
    - listitem:
      - link "Parts & Accessories":
        - /url: https://staging-bikes.test-suzuki.co.uk/shop/
    - listitem:
      - link "Handbooks":
        - /url: https://staging-bikes.test-suzuki.co.uk/owners/service-maintenance/owners-manuals/
  - text: About Suzuki
  - list:
    - listitem:
      - link "About Us":
        - /url: https://staging-bikes.test-suzuki.co.uk/about-us/
    - listitem:
      - link "Contact Us":
        - /url: https://staging-bikes.test-suzuki.co.uk/contact-us/
    - listitem:
      - link "Careers":
        - /url: https://staging-bikes.test-suzuki.co.uk/careers/
    - listitem:
      - link "Apprenticeships":
        - /url: https://staging-bikes.test-suzuki.co.uk/careers/apprenticeships/
  - text: Useful Information
  - list:
    - listitem:
      - link "Privacy":
        - /url: https://staging-bikes.test-suzuki.co.uk/privacy/
    - listitem:
      - link "Cookie Policy":
        - /url: https://staging-bikes.test-suzuki.co.uk/privacy/cookie-policy/
    - listitem:
      - link "Quality Policy":
        - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
    - listitem:
      - link "Legal":
        - /url: https://staging-bikes.test-suzuki.co.uk/legal/
    - listitem:
      - link "Tax Strategy":
        - /url: https://staging-bikes.test-suzuki.co.uk/about-us/uk-tax-strategy/
    - listitem:
      - link "Human Trafficking Statement":
        - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
    - listitem:
      - link "Certificate of Conformity":
        - /url: https://staging-bikes.test-suzuki.co.uk/contact-us/certificate-of-conformity/
    - listitem:
      - link "Sitemap":
        - /url: https://staging-bikes.test-suzuki.co.uk/sitemap/
    - listitem:
      - link "Manage Cookies":
        - /url: /order-a-brochure/#
  - text: Suzuki Global
  - list:
    - listitem:
      - link "Suzuki Cars":
        - /url: https://staging-cars.test-suzuki.co.uk/
    - listitem:
      - link "Suzuki Marine":
        - /url: https://staging-marine.test-suzuki.co.uk/
    - listitem:
      - link "Suzuki ATV":
        - /url: https://staging-atv.test-suzuki.co.uk/
    - listitem:
      - link "Global Suzuki":
        - /url: https://www.globalsuzuki.com/
  - text: Suzuki on social media
  - link "Visit our Facebook page":
    - /url: https://www.facebook.com/suzukibikesuk
  - link "Visit our X (formerly Twitter) page":
    - /url: https://www.twitter.com/suzukibikesuk
  - link "Visit our Instagram page":
    - /url: https://www.instagram.com/suzukibikesuk
  - link "Visit our YouTube page":
    - /url: https://www.youtube.com/suzukibikesuk
  - list "Legal and policy links"
- alert
```

# Test source

```ts
  1  | import { test, expect, Page } from '@playwright/test';
  2  | import * as allure from 'allure-js-commons';
  3  | import { Severity } from 'allure-js-commons';
  4  | 
  5  | async function acceptCookiesIfPresent(page: Page): Promise<void> {
  6  |   const acceptBtn = await page.getByRole('button', { name: 'Accept All Cookies' });
  7  |   const isVisible = await acceptBtn.isVisible().catch(() => false);
  8  |   
  9  |   if (isVisible) {
  10 |     await allure.step('Accept cookie banner', async () => {
  11 |       await acceptBtn.click();
  12 |     });
  13 |   }
  14 | }
  15 | 
  16 | test('Download a brochure by dropdown', async ({ page }) => {
  17 |   await allure.epic('Brochures');
  18 |   await allure.feature('Brochure download');
  19 |   await allure.story('Brochure download by dropdown');
  20 |   await allure.severity(Severity.CRITICAL);
  21 |   await allure.description("User is able to succesfully download a brochure by selecting it from a dropdown");
  22 |   await allure.owner('QA Team');
  23 |   await allure.tag('smoke');
  24 |   await page.goto('https://staging-bikes.test-suzuki.co.uk/order-a-brochure/');
  25 | 
  26 |   await acceptCookiesIfPresent(page);
  27 |   await allure.step('Choose a model', async () => {
  28 |     await page.getByRole('img', { name: 'Sport-image', exact: true }).click();
  29 |   });
  30 |   await allure.step('Select brochure', async () => {
  31 |     await page.getByText('Select brochure').first().click();
  32 |   });
  33 |   await allure.step('Download Model Brochure', async () => {
  34 |     page.getByRole('link', { name: 'Download Model Brochure' }).click();
  35 |   });
  36 |   // Expect a title "to contain" a substring.
  37 |   await expect(page).toHaveURL("https://staging-bikes.test-suzuki.co.uk/order-a-brochure/");
  38 |   
  39 | });
  40 | test('Download a brochure by email', async ({ page }) => {
  41 |   await allure.epic('Brochures');
  42 |   await allure.feature('Brochure download');
  43 |   await allure.story('Brochure download by email');
  44 |   await allure.severity(Severity.CRITICAL);
  45 |   await allure.description("User is able to succesfully request a brochure to email");
  46 |   await allure.owner('QA Team');
  47 |   await allure.tag('smoke');
  48 |   await page.goto('https://staging-bikes.test-suzuki.co.uk/order-a-brochure/');
  49 | 
  50 |   await acceptCookiesIfPresent(page);
  51 |   await allure.step('Choose a model', async () => {
  52 |     await page.getByRole('img', { name: 'Sport-image', exact: true }).click();
  53 |   });
  54 |   await allure.step('Select model from dropdown', async () => {
  55 |     await page.getByText('Please select').first().click();
  56 |     await page.locator('form').getByText('Hayabusa Special Edition').click();
  57 |   });
  58 |   await allure.step('Fill e-mail address field', async () => {
  59 |     await page.locator('#emailAddress').fill('hello@suzuki.co.uk');
  60 |   });
  61 |   await allure.step('Select Title from dropdown', async () => {
  62 |     await page.getByText('Please select').click();
  63 |     await page.getByText('Mr', { exact: true }).click();
  64 |   });
  65 |   await allure.step('Fill First name and Last name fields', async () => {
  66 |     await page.locator('#firstName').fill('Test');
  67 |     await page.locator('#surname').fill('Test');
  68 |   });
  69 |   await allure.step('Email opt in', async () => {
  70 |     await page.getByRole('checkbox').check();
  71 |   });
  72 |   await allure.step('Send a request', async () => {
  73 |     await page.getByRole('button', { name: 'Send request' }).click();
  74 |   });
  75 | 
  76 |   // Expects page to have a heading with the name of Installation.
> 77 |   await expect(page.getByRole('heading', { name: 'Thank you for requesting a' })).toBeVisible();
     |                                                                                   ^ Error: expect(locator).toBeVisible() failed
  78 | });
  79 | 
```