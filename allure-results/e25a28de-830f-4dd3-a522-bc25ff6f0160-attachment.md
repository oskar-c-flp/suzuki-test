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
      - generic [ref=e55]:
        - generic [ref=e56]:
          - generic [ref=e58]:
            - generic [ref=e59]:
              - heading "Book a Test Drive" [level=2] [ref=e61]
              - paragraph [ref=e62]: Step 1 of 4
            - heading "Choose your Suzuki" [level=1] [ref=e63]
          - generic [ref=e64]:
            - generic [ref=e65]:
              - 'group "Are you a Personal, Motability or Business Customer? required More information: Enquiry Type" [ref=e66]':
                - generic [ref=e67]:
                  - generic [ref=e68]:
                    - text: Are you a Personal, Motability or Business Customer?
                    - generic [ref=e69]: required
                    - generic [ref=e70]: "*"
                  - 'button "More information: Enquiry Type" [ref=e71] [cursor=pointer]'
                - generic [ref=e73]:
                  - generic [ref=e75]:
                    - generic [ref=e76]: Personal
                    - radio "Customer type Personal" [ref=e77] [cursor=pointer]
                  - generic [ref=e79]:
                    - generic [ref=e80]: Motability
                    - radio "Customer type Motability" [ref=e81] [cursor=pointer]
                  - generic [ref=e83]:
                    - generic [ref=e84]: Business
                    - radio "Customer type Business" [ref=e85] [cursor=pointer]
              - paragraph
              - paragraph [ref=e89]: Choose the model (or models!) you are interested in.
              - group "Which cars would you like to test drive? Select up to 3." [ref=e90]:
                - generic [ref=e92] [cursor=pointer]:
                  - checkbox "e VITARA" [disabled] [ref=e93]
                  - generic [ref=e94]: e VITARA
                - generic [ref=e97] [cursor=pointer]:
                  - checkbox "SWIFT" [disabled] [ref=e98]
                  - generic [ref=e99]: SWIFT
                - generic [ref=e102] [cursor=pointer]:
                  - checkbox "S-CROSS" [disabled] [ref=e103]
                  - generic [ref=e104]: S-CROSS
                - generic [ref=e107] [cursor=pointer]:
                  - checkbox "VITARA" [disabled] [ref=e108]
                  - generic [ref=e109]: VITARA
            - button "Choose a Dealer" [disabled] [ref=e114]
        - status [ref=e117]
      - button "Choose a Dealer" [disabled] [ref=e119]
      - generic [ref=e125]:
        - paragraph
        - paragraph [ref=e126]:
          - strong [ref=e127]: "e Vitara 49kWh Motion Auto: £229 a month. 0% APR, 49-month PCP agreement. £4,858 customer deposit & £9,149 optional final payment. 8,000 miles per annum."
          - text: "HP finance also available. Credit subject to status, UK residents 18+, Suzuki Financial Services Ltd, No. 1 John Street, Callaghan Square, Cardiff, CF10 5PE. With Personal Contract Purchase (PCP) you have the option after you have paid all of the regular monthly repayments to: (1) Return the vehicle and not pay the Optional Final Repayment. In this example if the vehicle has exceeded 32,667 miles, a charge of 9.6p (including VAT at 20%) will apply per excess mile. If the vehicle is in good condition (fair wear and tear accepted) and has not exceeded 32,667 miles you will have nothing further to pay. (2) Pay the Optional Final Repayment to own the vehicle or (3) Part exchange the vehicle subject to settlement of your existing finance agreement; new finance agreements are subject to status. Excludes Channel Islands and Isle of Man Dealers. Valid from 1st October 2026 and 31st December 2026. Offers may be varied or withdrawn at any time."
        - paragraph [ref=e128]:
          - strong [ref=e129]: PCP end of contract options
          - text: "With Personal Contract Purchase (PCP) you have the option after you have paid all of the regular monthly repayments to: (1) Return the vehicle and not pay the Optional Final Repayment. In this example if the vehicle has exceeded 32,667 miles, a charge of 4.8p (including VAT at 20%) will apply per excess mile. If the vehicle is in good condition (fair wear and tear accepted) and has not exceeded 32,667 miles you will have nothing further to pay. (2) Pay the Optional Final Repayment to own the vehicle or (3) Part exchange the vehicle subject to settlement of your existing finance agreement; new finance agreements are subject to status."
        - paragraph [ref=e130]
        - paragraph [ref=e131]:
          - text: "*Offer applies to UK private retail customers purchasing and registering a new Suzuki from participating Dealers between 1st October 2026 until 31st December 2026. Excludes Channel Islands and Isle of Man Dealers. Offer cannot be used in conjunction with any other offer unless otherwise stated. Credit subject to status, UK residents 18+. This offer is subject to availability and Suzuki Financial Services Ltd reserves the right to withdraw or amend this offer without notice or prior warning. Suzuki Financial Services Ltd, part of Lloyds Banking Group, Suzuki Finance is a trading style of"
          - generic [ref=e132]: Suzuki Financial Services Ltd, No. 1 John Street, Callaghan Square, Cardiff, CF10 5PE
          - text: . All prices, specifications and offers correct at the time of being published. Offers may be varied or withdrawn at any time.
        - paragraph [ref=e133]
        - paragraph [ref=e134]:
          - strong [ref=e135]: "Last updated on: 1st October 2026"
    - contentinfo [ref=e136]:
      - generic [ref=e137]:
        - paragraph [ref=e138]: Not finished? It's all here...
        - generic [ref=e139]:
          - button "Search for results" [ref=e140] [cursor=pointer]:
            - img "Search icon" [ref=e141]
          - searchbox "Search" [ref=e142]
        - generic [ref=e143]:
          - generic [ref=e144]: "Popular searches:"
          - list [ref=e145]:
            - listitem [ref=e146]:
              - link "Vitara" [ref=e147] [cursor=pointer]:
                - /url: /search/?search=Vitara&pageCount=1
            - listitem [ref=e149]:
              - link "Motability" [ref=e150] [cursor=pointer]:
                - /url: /search/?search=Motability&pageCount=1
            - listitem [ref=e152]:
              - link "Dealers" [ref=e153] [cursor=pointer]:
                - /url: /search/?search=Dealers&pageCount=1
            - listitem [ref=e155]:
              - link "Hybrid" [ref=e156] [cursor=pointer]:
                - /url: /search/?search=Hybrid&pageCount=1
            - listitem [ref=e158]:
              - link "Contact" [ref=e159] [cursor=pointer]:
                - /url: /search/?search=Contact&pageCount=1
            - listitem [ref=e161]:
              - link "Swift" [ref=e162] [cursor=pointer]:
                - /url: /search/?search=Swift&pageCount=1
            - listitem [ref=e164]:
              - link "0% Car Finance" [ref=e165] [cursor=pointer]:
                - /url: /search/?search=0%25%20Car%20Finance&pageCount=1
            - listitem [ref=e167]:
              - link "Electric" [ref=e168] [cursor=pointer]:
                - /url: /search/?search=Electric&pageCount=1
      - generic [ref=e171]:
        - generic [ref=e172]:
          - generic [ref=e173]: Models
          - list [ref=e174]:
            - listitem [ref=e175]:
              - link "e Vitara" [ref=e176] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/e-vitara/
            - listitem [ref=e177]:
              - link "Swift" [ref=e178] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift/
            - listitem [ref=e179]:
              - link "S-Cross" [ref=e180] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/s-cross/
            - listitem [ref=e181]:
              - link "Vitara" [ref=e182] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/vitara/
            - listitem [ref=e183]:
              - link "Across" [ref=e184] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/across/
            - listitem [ref=e185]:
              - link "Ignis" [ref=e186] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/ignis/
            - listitem [ref=e187]:
              - link "Swace" [ref=e188] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swace/
            - listitem [ref=e189]:
              - link "Swift Sport" [ref=e190] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift-sport/
            - listitem [ref=e191]:
              - link "Jimny" [ref=e192] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/jimny/
        - generic [ref=e193]:
          - generic [ref=e194]: About Suzuki
          - list [ref=e195]:
            - listitem [ref=e196]:
              - link "About Us" [ref=e197] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/about-us/
            - listitem [ref=e198]:
              - link "Awards" [ref=e199] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/awards/
            - listitem [ref=e200]:
              - link "Contact Us" [ref=e201] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/
            - listitem [ref=e202]:
              - link "Careers" [ref=e203] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/careers/
            - listitem [ref=e204]:
              - link "Apprenticeships" [ref=e205] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/apprenticeships/
        - generic [ref=e206]:
          - generic [ref=e207]: Business
          - list [ref=e208]:
            - listitem [ref=e209]:
              - link "Company Car Driver" [ref=e210] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/company-car/
            - listitem [ref=e211]:
              - link "Fleet Managers" [ref=e212] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/fleet-manager/
            - listitem [ref=e213]:
              - link "Driving Instructors" [ref=e214] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/driving-school-programme/
            - listitem [ref=e215]:
              - link "Suzuki Dealer Franchise" [ref=e216] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/franchised-suzuki-dealer/
        - generic [ref=e217]:
          - generic [ref=e218]: Owners
          - list [ref=e219]:
            - listitem [ref=e220]:
              - link "Book a Service" [ref=e221] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/request-a-service/
            - listitem [ref=e222]:
              - link "Suzuki Servicing" [ref=e223] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/servicing/
            - listitem [ref=e224]:
              - link "Handbooks" [ref=e225] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/using-your-car/owners-handbooks/
        - generic [ref=e226]:
          - generic [ref=e227]: Suzuki Global
          - list [ref=e228]:
            - listitem [ref=e229]:
              - link "Bikes" [ref=e230] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/
            - listitem [ref=e231]:
              - link "ATV" [ref=e232] [cursor=pointer]:
                - /url: https://staging-atv.test-suzuki.co.uk/
            - listitem [ref=e233]:
              - link "Marine" [ref=e234] [cursor=pointer]:
                - /url: https://staging-marine.test-suzuki.co.uk/
        - generic [ref=e235]:
          - generic [ref=e236]: Useful Information
          - list [ref=e237]:
            - listitem [ref=e238]:
              - link "Privacy Policy" [ref=e239] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/
            - listitem [ref=e240]:
              - link "Cookie Policy" [ref=e241] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/cookie-policy/
            - listitem [ref=e242]:
              - link "Quality Policy" [ref=e243] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
            - listitem [ref=e244]:
              - link "Legal" [ref=e245] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/terms-of-use/
            - listitem [ref=e246]:
              - link "Section 172 Statement" [ref=e247] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/section-172-statement/
            - listitem [ref=e248]:
              - link "Tax Strategy" [ref=e249] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/uk-tax-strategy/
            - listitem [ref=e250]:
              - link "Human Trafficking Statement, opens in new tab" [ref=e251] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
                - text: Human Trafficking Statement
            - listitem [ref=e252]:
              - link "Certificate of Conformity" [ref=e253] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/certificate-of-conformity/
            - listitem [ref=e254]:
              - link "Sitemap" [ref=e255] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
            - listitem [ref=e256]:
              - link "Manage Cookies" [ref=e257] [cursor=pointer]:
                - /url: /request-a-test-drive/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy#
        - generic [ref=e258]:
          - generic [ref=e259]: Motability
          - list [ref=e260]:
            - listitem [ref=e261]:
              - link "What is Motability" [ref=e262] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/what-is-motability/
            - listitem [ref=e263]:
              - link "Motability Offers" [ref=e264] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/
        - generic [ref=e265]:
          - generic [ref=e266]: Categories
          - list [ref=e267]:
            - listitem [ref=e268]:
              - link "Electric Cars" [ref=e269] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/electric-cars/
            - listitem [ref=e270]:
              - link "SUV Cars" [ref=e271] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/suv-crossovers/
            - listitem [ref=e272]:
              - link "Small Cars" [ref=e273] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/small-hatchbacks/
            - listitem [ref=e274]:
              - link "Hybrid Cars" [ref=e275] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/
            - listitem [ref=e276]:
              - link "City Cars" [ref=e277] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/city-cars/
            - listitem [ref=e278]:
              - link "Automatic Cars" [ref=e279] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/automatic-cars/
            - listitem [ref=e280]:
              - link "Family Cars" [ref=e281] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/family-cars/
            - listitem [ref=e282]:
              - link "Plug-In Hybrid Cars" [ref=e283] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/plug-in-hybrid-electric-vehicles/
            - listitem [ref=e284]:
              - link "AllGrip" [ref=e285] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/allgrip/
        - generic [ref=e286]:
          - generic [ref=e287]: Get your Suzuki
          - list [ref=e288]:
            - listitem [ref=e289]:
              - link "Request a Brochure" [ref=e290] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-brochure/
            - listitem [ref=e291]:
              - link "Find us" [ref=e292] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/find-a-dealer/
            - listitem [ref=e293]:
              - link "Request A Test Drive" [ref=e294] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-test-drive/
            - listitem [ref=e295]:
              - link "Car Configurator" [ref=e296] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/configure/
            - listitem [ref=e297]:
              - link "Finance Calculator" [ref=e298] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/finance-calculator/
        - generic [ref=e299]:
          - generic [ref=e300]: Suzuki on social media
          - generic [ref=e301]:
            - link "Visit our Facebook page (opens in new tab)" [ref=e302] [cursor=pointer]:
              - /url: http://facebook.com/suzukicarsuk/
            - link "Visit our X (formerly Twitter) page (opens in new tab)" [ref=e303] [cursor=pointer]:
              - /url: http://twitter.com/SuzukiCarsUK
            - link "Visit our Instagram page (opens in new tab)" [ref=e304] [cursor=pointer]:
              - /url: https://instagram.com/suzukicarsuk
            - link "Visit our YouTube page (opens in new tab)" [ref=e305] [cursor=pointer]:
              - /url: https://www.youtube.com/user/SuzukiCarsUK
      - list "Legal and policy links" [ref=e306]:
        - listitem [ref=e307]:
          - link "Quality Policy" [ref=e308] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
        - listitem [ref=e309]:
          - link "Human Trafficking Statement" [ref=e310] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
        - listitem [ref=e311]:
          - link "Manage Cookies" [ref=e312] [cursor=pointer]:
            - /url: /request-a-test-drive/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy#
        - listitem [ref=e313]:
          - link "Sitemap" [ref=e314] [cursor=pointer]:
            - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
        - link "Cyber Essentials Certified" [ref=e315] [cursor=pointer]:
          - /url: /cyber-essentials-certificate/
          - img "Suzuki Cyber Essentials Certified" [ref=e316]
  - generic: ...
  - alert [ref=e317]
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
  478 |     "https://staging-cars.test-suzuki.co.uk/request-a-test-drive/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
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