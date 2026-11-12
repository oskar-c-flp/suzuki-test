# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 4W.spec.ts >> Find a dealer - Request a callback
- Location: tests\4W.spec.ts:468:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('searchbox', { name: 'Postcode or location' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - alert [ref=e3]
    - status [ref=e4]
    - link "Skip to main content" [ref=e5] [cursor=pointer]:
      - /url: "#main-content"
    - banner [ref=e6]:
      - button "Close notification banner" [ref=e7] [cursor=pointer]
      - generic [ref=e9]:
        - navigation "Quick links" [ref=e10]:
          - list [ref=e11]:
            - listitem [ref=e12]:
              - link "Find us" [ref=e13] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/find-a-dealer/
            - listitem [ref=e16]:
              - link "Book a Test Drive" [ref=e17] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-test-drive/
            - listitem [ref=e20]:
              - link "Book a Service" [ref=e21] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/request-a-service/
            - listitem [ref=e24]:
              - link "Request a callback" [ref=e25] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-call-back/
                - generic [ref=e27]: Request a Callback
            - listitem [ref=e28]:
              - link "Request a brochure" [ref=e29] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-brochure/
            - listitem [ref=e32]:
              - link "Finance Calculator" [ref=e33] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/finance-calculator/
        - link "Suzuki homepage" [ref=e36] [cursor=pointer]:
          - /url: /
        - navigation "Main navigation" [ref=e38]:
          - list [ref=e42]:
            - link "NEW CARS, 1 of 6" [ref=e43] [cursor=pointer]:
              - /url: "#"
              - text: NEW CARS
            - link "USED CARS, 2 of 6" [ref=e44] [cursor=pointer]:
              - /url: "#"
              - text: USED CARS
            - link "MOTABILITY, 3 of 6" [ref=e45] [cursor=pointer]:
              - /url: "#"
              - text: MOTABILITY
            - link "BUSINESS, 4 of 6" [ref=e46] [cursor=pointer]:
              - /url: "#"
              - text: BUSINESS
            - link "OFFERS & FINANCE, 5 of 6" [ref=e47] [cursor=pointer]:
              - /url: "#"
              - text: OFFERS & FINANCE
            - link "OWNERS, 6 of 6" [ref=e48] [cursor=pointer]:
              - /url: "#"
              - text: OWNERS
          - status [ref=e49]
          - button "Search Suzuki website. Focus moves to search field when activated." [ref=e50] [cursor=pointer]
    - main [ref=e54]:
      - generic [ref=e56]:
        - heading "We're sorry, but the page is not found" [level=2] [ref=e58]
        - generic [ref=e59]:
          - paragraph [ref=e60]
          - paragraph [ref=e61]
          - paragraph [ref=e62]
        - link "Let's take you to the homepage arrow" [ref=e64] [cursor=pointer]:
          - /url: https://staging-cars.suzuki.ie/
          - generic [ref=e65]: Let's take you to the homepage
          - img "arrow" [ref=e66]
    - contentinfo [ref=e67]:
      - generic [ref=e68]:
        - paragraph [ref=e69]: Not finished? It's all here...
        - generic [ref=e70]:
          - button "Search for results" [ref=e71] [cursor=pointer]:
            - img "Search icon" [ref=e72]
          - searchbox "Search" [ref=e73]
        - generic [ref=e74]:
          - generic [ref=e75]: "Popular searches:"
          - list [ref=e76]:
            - listitem [ref=e77]:
              - link "Vitara" [ref=e78] [cursor=pointer]:
                - /url: /search/?search=Vitara&pageCount=1
            - listitem [ref=e80]:
              - link "Motability" [ref=e81] [cursor=pointer]:
                - /url: /search/?search=Motability&pageCount=1
            - listitem [ref=e83]:
              - link "Dealers" [ref=e84] [cursor=pointer]:
                - /url: /search/?search=Dealers&pageCount=1
            - listitem [ref=e86]:
              - link "Hybrid" [ref=e87] [cursor=pointer]:
                - /url: /search/?search=Hybrid&pageCount=1
            - listitem [ref=e89]:
              - link "Contact" [ref=e90] [cursor=pointer]:
                - /url: /search/?search=Contact&pageCount=1
            - listitem [ref=e92]:
              - link "Swift" [ref=e93] [cursor=pointer]:
                - /url: /search/?search=Swift&pageCount=1
            - listitem [ref=e95]:
              - link "0% Car Finance" [ref=e96] [cursor=pointer]:
                - /url: /search/?search=0%25%20Car%20Finance&pageCount=1
            - listitem [ref=e98]:
              - link "Electric" [ref=e99] [cursor=pointer]:
                - /url: /search/?search=Electric&pageCount=1
      - generic [ref=e102]:
        - generic [ref=e103]:
          - generic [ref=e104]: Models
          - list [ref=e105]:
            - listitem [ref=e106]:
              - link "e Vitara" [ref=e107] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/e-vitara/
            - listitem [ref=e108]:
              - link "Swift" [ref=e109] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift/
            - listitem [ref=e110]:
              - link "S-Cross" [ref=e111] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/s-cross/
            - listitem [ref=e112]:
              - link "Vitara" [ref=e113] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/vitara/
            - listitem [ref=e114]:
              - link "Across" [ref=e115] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/across/
            - listitem [ref=e116]:
              - link "Ignis" [ref=e117] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/ignis/
            - listitem [ref=e118]:
              - link "Swace" [ref=e119] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swace/
            - listitem [ref=e120]:
              - link "Swift Sport" [ref=e121] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift-sport/
            - listitem [ref=e122]:
              - link "Jimny" [ref=e123] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/jimny/
        - generic [ref=e124]:
          - generic [ref=e125]: About Suzuki
          - list [ref=e126]:
            - listitem [ref=e127]:
              - link "About Us" [ref=e128] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/about-us/
            - listitem [ref=e129]:
              - link "Awards" [ref=e130] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/awards/
            - listitem [ref=e131]:
              - link "Contact Us" [ref=e132] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/
            - listitem [ref=e133]:
              - link "Careers" [ref=e134] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/careers/
            - listitem [ref=e135]:
              - link "Apprenticeships" [ref=e136] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/apprenticeships/
        - generic [ref=e137]:
          - generic [ref=e138]: Business
          - list [ref=e139]:
            - listitem [ref=e140]:
              - link "Company Car Driver" [ref=e141] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/company-car/
            - listitem [ref=e142]:
              - link "Fleet Managers" [ref=e143] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/fleet-manager/
            - listitem [ref=e144]:
              - link "Driving Instructors" [ref=e145] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/driving-school-programme/
            - listitem [ref=e146]:
              - link "Suzuki Dealer Franchise" [ref=e147] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/franchised-suzuki-dealer/
        - generic [ref=e148]:
          - generic [ref=e149]: Owners
          - list [ref=e150]:
            - listitem [ref=e151]:
              - link "Book a Service" [ref=e152] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/request-a-service/
            - listitem [ref=e153]:
              - link "Suzuki Servicing" [ref=e154] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/servicing/
            - listitem [ref=e155]:
              - link "Handbooks" [ref=e156] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/using-your-car/owners-handbooks/
        - generic [ref=e157]:
          - generic [ref=e158]: Suzuki Global
          - list [ref=e159]:
            - listitem [ref=e160]:
              - link "Bikes" [ref=e161] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/
            - listitem [ref=e162]:
              - link "ATV" [ref=e163] [cursor=pointer]:
                - /url: https://staging-atv.test-suzuki.co.uk/
            - listitem [ref=e164]:
              - link "Marine" [ref=e165] [cursor=pointer]:
                - /url: https://staging-marine.test-suzuki.co.uk/
        - generic [ref=e166]:
          - generic [ref=e167]: Useful Information
          - list [ref=e168]:
            - listitem [ref=e169]:
              - link "Privacy Policy" [ref=e170] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/
            - listitem [ref=e171]:
              - link "Cookie Policy" [ref=e172] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/cookie-policy/
            - listitem [ref=e173]:
              - link "Quality Policy" [ref=e174] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
            - listitem [ref=e175]:
              - link "Legal" [ref=e176] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/terms-of-use/
            - listitem [ref=e177]:
              - link "Section 172 Statement" [ref=e178] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/section-172-statement/
            - listitem [ref=e179]:
              - link "Tax Strategy" [ref=e180] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/uk-tax-strategy/
            - listitem [ref=e181]:
              - link "Human Trafficking Statement, opens in new tab" [ref=e182] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
                - text: Human Trafficking Statement
            - listitem [ref=e183]:
              - link "Certificate of Conformity" [ref=e184] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/certificate-of-conformity/
            - listitem [ref=e185]:
              - link "Sitemap" [ref=e186] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
            - listitem [ref=e187]:
              - link "Manage Cookies" [ref=e188] [cursor=pointer]:
                - /url: /find-a-dealer/request-a-test-drive/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy#
        - generic [ref=e189]:
          - generic [ref=e190]: Motability
          - list [ref=e191]:
            - listitem [ref=e192]:
              - link "What is Motability" [ref=e193] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/what-is-motability/
            - listitem [ref=e194]:
              - link "Motability Offers" [ref=e195] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/
        - generic [ref=e196]:
          - generic [ref=e197]: Categories
          - list [ref=e198]:
            - listitem [ref=e199]:
              - link "Electric Cars" [ref=e200] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/electric-cars/
            - listitem [ref=e201]:
              - link "SUV Cars" [ref=e202] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/suv-crossovers/
            - listitem [ref=e203]:
              - link "Small Cars" [ref=e204] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/small-hatchbacks/
            - listitem [ref=e205]:
              - link "Hybrid Cars" [ref=e206] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/
            - listitem [ref=e207]:
              - link "City Cars" [ref=e208] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/city-cars/
            - listitem [ref=e209]:
              - link "Automatic Cars" [ref=e210] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/automatic-cars/
            - listitem [ref=e211]:
              - link "Family Cars" [ref=e212] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/family-cars/
            - listitem [ref=e213]:
              - link "Plug-In Hybrid Cars" [ref=e214] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/plug-in-hybrid-electric-vehicles/
            - listitem [ref=e215]:
              - link "AllGrip" [ref=e216] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/allgrip/
        - generic [ref=e217]:
          - generic [ref=e218]: Get your Suzuki
          - list [ref=e219]:
            - listitem [ref=e220]:
              - link "Request a Brochure" [ref=e221] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-brochure/
            - listitem [ref=e222]:
              - link "Find us" [ref=e223] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/find-a-dealer/
            - listitem [ref=e224]:
              - link "Request A Test Drive" [ref=e225] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-test-drive/
            - listitem [ref=e226]:
              - link "Car Configurator" [ref=e227] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/configure/
            - listitem [ref=e228]:
              - link "Finance Calculator" [ref=e229] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/finance-calculator/
        - generic [ref=e230]:
          - generic [ref=e231]: Suzuki on social media
          - generic [ref=e232]:
            - link "Visit our Facebook page (opens in new tab)" [ref=e233] [cursor=pointer]:
              - /url: http://facebook.com/suzukicarsuk/
            - link "Visit our X (formerly Twitter) page (opens in new tab)" [ref=e234] [cursor=pointer]:
              - /url: http://twitter.com/SuzukiCarsUK
            - link "Visit our Instagram page (opens in new tab)" [ref=e235] [cursor=pointer]:
              - /url: https://instagram.com/suzukicarsuk
            - link "Visit our YouTube page (opens in new tab)" [ref=e236] [cursor=pointer]:
              - /url: https://www.youtube.com/user/SuzukiCarsUK
      - list "Legal and policy links" [ref=e237]:
        - listitem [ref=e238]:
          - link "Quality Policy" [ref=e239] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
        - listitem [ref=e240]:
          - link "Human Trafficking Statement" [ref=e241] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
        - listitem [ref=e242]:
          - link "Manage Cookies" [ref=e243] [cursor=pointer]:
            - /url: /find-a-dealer/request-a-test-drive/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy#
        - listitem [ref=e244]:
          - link "Sitemap" [ref=e245] [cursor=pointer]:
            - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
        - link "Cyber Essentials Certified" [ref=e246] [cursor=pointer]:
          - /url: /cyber-essentials-certificate/
          - img "Suzuki Cyber Essentials Certified" [ref=e247]
  - generic: ...
  - alert [ref=e248]
```

# Test source

```ts
  383 |   });
  384 |   await allure.step("Fill Email", async () => {
  385 |     await page.getByRole('textbox', { name: 'Email (required)' }).fill('test@gmail.com');
  386 |   });
  387 |   await allure.step("Fill Phone number", async () => {
  388 |     await page.getByRole('textbox', { name: 'Phone Number (required)' }).fill('022845456');
  389 |   });
  390 |   await allure.step("Click Review booking", async () => {
  391 |     await page.getByRole('button', { name: 'Review booking' }).first().click();
  392 |   });
  393 |   await allure.step("Click Confirm booking", async () => {
  394 |     await page.getByRole('button', { name: 'Confirm booking' }).nth(1).click();
  395 |   });
  396 |   await allure.step("Verify Booking confirmed heading is displayed", async () => {
  397 |     await expect(page.getByRole('heading', { name: 'Booking confirmed' })).toBeVisible();
  398 |   });
  399 | });
  400 | test("Request a test drive - 3 products", async ({ page }) => {
  401 |   await allure.epic("Test Drive");
  402 |   await allure.feature("Requesting test drive");
  403 |   await allure.severity(Severity.CRITICAL);
  404 |   await allure.description(
  405 |     "User is able to succesfully request a test drive - 3 products",
  406 |   );
  407 |   await allure.owner("QA Team");
  408 |   await allure.tag("smoke");
  409 |   await page.goto(
  410 |     "https://staging-cars.test-suzuki.co.uk/request-a-test-drive/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  411 |   );
  412 |   await acceptCookiesIfPresent(page);
  413 | 
  414 |   await allure.step("Select customer type Motability", async () => {
  415 |     await page.getByRole('radio', { name: 'Customer type Motability' }).check();
  416 |   });
  417 |   await allure.step("Select 3 models", async () => {
  418 |     await page.locator('label:nth-child(5) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img').click();
  419 |     await page.locator('.styles_toggle__e0m3u > img').first().click();
  420 |     await page.locator('label:nth-child(3) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img').click();
  421 |   });
  422 |   await allure.step("Click Choose a Dealer", async () => {
  423 |     await page.getByRole('button', { name: 'Choose a Dealer' }).click();
  424 |   });
  425 |   await allure.step("Enter postcode or location", async () => {
  426 |     await page.getByRole('searchbox', { name: 'Postcode or location' }).fill('sw1w 0ny');
  427 |   });
  428 |   await allure.step("Click search", async () => {
  429 |     await page.getByRole('button', { name: 'Search postcode or location' }).click();
  430 |   });
  431 |   await allure.step("Click Your Details", async () => {
  432 |     await page.getByRole('button', { name: 'Your Details' }).nth(1).click();
  433 |   });
  434 |   await allure.step("Select title", async () => {
  435 |     await page.getByRole('combobox', { name: 'Select Title' }).click();
  436 |     await page.getByRole('option', { name: 'Mr', exact: true }).click();
  437 |   });
  438 |   await allure.step("Fill First name and Last name fields", async () => {
  439 |     await page.getByRole('textbox', { name: 'First name (required)' }).fill('Test');
  440 |     await page.getByRole('textbox', { name: 'Last name (required)' }).fill('Data');
  441 |   });
  442 |   await allure.step("Fill Postcode", async () => {
  443 |     await page.getByRole('textbox', { name: 'Postcode (required)' }).fill('SW1W 0NY');
  444 |   });
  445 |   await allure.step("Fill Building number / name", async () => {
  446 |     await page.getByRole('textbox', { name: 'Building number / name (' }).fill('7E');
  447 |   });
  448 |   await allure.step("Fill Email", async () => {
  449 |     await page.getByRole('textbox', { name: 'Email (required)' }).fill('test@gmail.com');
  450 |   });
  451 |   await allure.step("Fill Phone number", async () => {
  452 |     await page.getByRole('textbox', { name: 'Phone Number (required)' }).fill('022845456');
  453 |   });
  454 |   await allure.step("Email opt in", async () => {
  455 |     await page.getByRole('checkbox', { name: 'Email' }).check();
  456 |   });
  457 |   await allure.step("Click Review booking", async () => {
  458 |     await page.getByRole('button', { name: 'Review booking' }).first().click();
  459 |   });
  460 |   await allure.step("Click Confirm booking", async () => {
  461 |     await page.getByRole('button', { name: 'Confirm booking' }).nth(1).click();
  462 |   });
  463 |   await allure.step("Verify Booking confirmed heading is displayed", async () => {
  464 |     await expect(page.getByRole('heading', { name: 'Booking confirmed' })).toBeVisible();
  465 |   });
  466 | });
  467 | 
  468 | test("Find a dealer - Request a callback", async ({ page }) => {
  469 |   await allure.epic("Test Drive");
  470 |   await allure.feature("Requesting test drive");
  471 |   await allure.severity(Severity.CRITICAL);
  472 |   await allure.description(
  473 |     "User is able to succesfully request a test drive - 3 products",
  474 |   );
  475 |   await allure.owner("QA Team");
  476 |   await allure.tag("smoke");
  477 |   await page.goto(
  478 |     "https://staging-cars.test-suzuki.co.uk/find-a-dealer/request-a-test-drive/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  479 |   );
  480 |   await acceptCookiesIfPresent(page);
  481 | 
  482 | await allure.step("Enter postcode", async () => {
> 483 |   await page.getByRole('searchbox', { name: 'Postcode or location' }).fill('mk4 4ae');
      |                                                                       ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  484 | });
  485 | await allure.step("Click Search", async () => {
  486 |   await page.getByRole('button', { name: 'Search for dealers' }).click();
  487 | });
  488 | await allure.step("Click Request A Callback", async () => {
  489 |   await page.getByRole('link', { name: 'Request A Callback', exact: true }).click();
  490 | });
  491 | await allure.step("Select Personal", async () => {
  492 |   await page.getByRole('radio', { name: 'Customer type Personal' }).check();
  493 | });
  494 | await allure.step("Select title", async () => {
  495 |   await page.getByRole('combobox', { name: 'Select Title' }).click();
  496 |   await page.getByRole('option', { name: 'Mr', exact: true }).click();
  497 | });
  498 | await allure.step("Fill First name and Last name fields", async () => {
  499 |   await page.getByRole('textbox', { name: 'First name (required)' }).fill('Test');
  500 |   await page.getByRole('textbox', { name: 'Last name (required)' }).fill('Data');
  501 | });
  502 | await allure.step("Fill Postcode", async () => {
  503 |   await page.getByRole('textbox', { name: 'Postcode (required)' }).fill('MK4 4AE');
  504 | });
  505 | await allure.step("Fill Building number / name", async () => {
  506 |   await page.getByRole('textbox', { name: 'Building number / name (' }).fill('7E');
  507 | });
  508 | await allure.step("Fill Email", async () => {
  509 |   await page.getByRole('textbox', { name: 'Email (required)' }).fill('hello@suzuki.co.uk');
  510 | });
  511 | await allure.step("Fill Phone number", async () => {
  512 |   await page.getByRole('textbox', { name: 'Phone Number (required)' }).fill('022342344');
  513 | });
  514 | await allure.step("Accept Email opt in", async () => {
  515 |   await page.getByRole('checkbox', { name: 'Email' }).check();
  516 | });
  517 | await allure.step("Click Review details", async () => {
  518 |   await page.getByRole('button', { name: 'Review details' }).click();
  519 | });
  520 | await allure.step("Verify Review your details heading is displayed", async () => {
  521 |   await expect(page.getByRole('heading', { name: 'Review your details' })).toBeVisible();
  522 | });
  523 | });
```