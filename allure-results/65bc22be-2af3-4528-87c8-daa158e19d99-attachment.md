# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 4W.spec.ts >> Request a test drive - SWIFT
- Location: tests\4W.spec.ts:143:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('radio', { name: 'Customer type Motability' })

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
              - heading "Download brochure(s)" [level=2] [ref=e61]
              - paragraph [ref=e62]: Step 1 of 2
            - heading "Request a new car brochure" [level=1] [ref=e63]
          - generic [ref=e64]:
            - group [ref=e67]:
              - paragraph [ref=e69]: Choose the model (or models!) you are interested in and we’ll get you to your brochures
              - generic [ref=e71]:
                - generic [ref=e72] [cursor=pointer]:
                  - checkbox "e VITARA" [ref=e73]
                  - generic [ref=e74]: e VITARA
                - generic [ref=e77] [cursor=pointer]:
                  - checkbox "SWIFT" [ref=e78]
                  - generic [ref=e79]: SWIFT
                - generic [ref=e82] [cursor=pointer]:
                  - checkbox "S-CROSS" [ref=e83]
                  - generic [ref=e84]: S-CROSS
                - generic [ref=e87] [cursor=pointer]:
                  - checkbox "VITARA" [ref=e88]
                  - generic [ref=e89]: VITARA
            - button "Next" [disabled] [ref=e94]
        - status [ref=e97]
      - button "Next" [disabled] [ref=e99]
      - generic [ref=e105]:
        - paragraph
        - paragraph [ref=e106]:
          - strong [ref=e107]: "e Vitara 49kWh Motion Auto: £229 a month. 0% APR, 49-month PCP agreement. £4,858 customer deposit & £9,149 optional final payment. 8,000 miles per annum."
          - text: "HP finance also available. Credit subject to status, UK residents 18+, Suzuki Financial Services Ltd, No. 1 John Street, Callaghan Square, Cardiff, CF10 5PE. With Personal Contract Purchase (PCP) you have the option after you have paid all of the regular monthly repayments to: (1) Return the vehicle and not pay the Optional Final Repayment. In this example if the vehicle has exceeded 32,667 miles, a charge of 9.6p (including VAT at 20%) will apply per excess mile. If the vehicle is in good condition (fair wear and tear accepted) and has not exceeded 32,667 miles you will have nothing further to pay. (2) Pay the Optional Final Repayment to own the vehicle or (3) Part exchange the vehicle subject to settlement of your existing finance agreement; new finance agreements are subject to status. Excludes Channel Islands and Isle of Man Dealers. Valid from 1st October 2026 and 31st December 2026. Offers may be varied or withdrawn at any time."
        - paragraph [ref=e108]:
          - strong [ref=e109]: PCP end of contract options
          - text: "With Personal Contract Purchase (PCP) you have the option after you have paid all of the regular monthly repayments to: (1) Return the vehicle and not pay the Optional Final Repayment. In this example if the vehicle has exceeded 32,667 miles, a charge of 4.8p (including VAT at 20%) will apply per excess mile. If the vehicle is in good condition (fair wear and tear accepted) and has not exceeded 32,667 miles you will have nothing further to pay. (2) Pay the Optional Final Repayment to own the vehicle or (3) Part exchange the vehicle subject to settlement of your existing finance agreement; new finance agreements are subject to status."
        - paragraph [ref=e110]
        - paragraph [ref=e111]:
          - text: "*Offer applies to UK private retail customers purchasing and registering a new Suzuki from participating Dealers between 1st October 2026 until 31st December 2026. Excludes Channel Islands and Isle of Man Dealers. Offer cannot be used in conjunction with any other offer unless otherwise stated. Credit subject to status, UK residents 18+. This offer is subject to availability and Suzuki Financial Services Ltd reserves the right to withdraw or amend this offer without notice or prior warning. Suzuki Financial Services Ltd, part of Lloyds Banking Group, Suzuki Finance is a trading style of"
          - generic [ref=e112]: Suzuki Financial Services Ltd, No. 1 John Street, Callaghan Square, Cardiff, CF10 5PE
          - text: . All prices, specifications and offers correct at the time of being published. Offers may be varied or withdrawn at any time.
        - paragraph [ref=e113]
        - paragraph [ref=e114]:
          - strong [ref=e115]: "Last updated on: 1st October 2026"
    - contentinfo [ref=e116]:
      - generic [ref=e117]:
        - paragraph [ref=e118]: Not finished? It's all here...
        - generic [ref=e119]:
          - button "Search for results" [ref=e120] [cursor=pointer]:
            - img "Search icon" [ref=e121]
          - searchbox "Search" [ref=e122]
        - generic [ref=e123]:
          - generic [ref=e124]: "Popular searches:"
          - list [ref=e125]:
            - listitem [ref=e126]:
              - link "Vitara" [ref=e127] [cursor=pointer]:
                - /url: /search/?search=Vitara&pageCount=1
            - listitem [ref=e129]:
              - link "Motability" [ref=e130] [cursor=pointer]:
                - /url: /search/?search=Motability&pageCount=1
            - listitem [ref=e132]:
              - link "Dealers" [ref=e133] [cursor=pointer]:
                - /url: /search/?search=Dealers&pageCount=1
            - listitem [ref=e135]:
              - link "Hybrid" [ref=e136] [cursor=pointer]:
                - /url: /search/?search=Hybrid&pageCount=1
            - listitem [ref=e138]:
              - link "Contact" [ref=e139] [cursor=pointer]:
                - /url: /search/?search=Contact&pageCount=1
            - listitem [ref=e141]:
              - link "Swift" [ref=e142] [cursor=pointer]:
                - /url: /search/?search=Swift&pageCount=1
            - listitem [ref=e144]:
              - link "0% Car Finance" [ref=e145] [cursor=pointer]:
                - /url: /search/?search=0%25%20Car%20Finance&pageCount=1
            - listitem [ref=e147]:
              - link "Electric" [ref=e148] [cursor=pointer]:
                - /url: /search/?search=Electric&pageCount=1
      - generic [ref=e151]:
        - generic [ref=e152]:
          - generic [ref=e153]: Models
          - list [ref=e154]:
            - listitem [ref=e155]:
              - link "e Vitara" [ref=e156] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/e-vitara/
            - listitem [ref=e157]:
              - link "Swift" [ref=e158] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift/
            - listitem [ref=e159]:
              - link "S-Cross" [ref=e160] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/s-cross/
            - listitem [ref=e161]:
              - link "Vitara" [ref=e162] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/vitara/
            - listitem [ref=e163]:
              - link "Across" [ref=e164] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/across/
            - listitem [ref=e165]:
              - link "Ignis" [ref=e166] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/ignis/
            - listitem [ref=e167]:
              - link "Swace" [ref=e168] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swace/
            - listitem [ref=e169]:
              - link "Swift Sport" [ref=e170] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift-sport/
            - listitem [ref=e171]:
              - link "Jimny" [ref=e172] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/jimny/
        - generic [ref=e173]:
          - generic [ref=e174]: About Suzuki
          - list [ref=e175]:
            - listitem [ref=e176]:
              - link "About Us" [ref=e177] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/about-us/
            - listitem [ref=e178]:
              - link "Awards" [ref=e179] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/awards/
            - listitem [ref=e180]:
              - link "Contact Us" [ref=e181] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/
            - listitem [ref=e182]:
              - link "Careers" [ref=e183] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/careers/
            - listitem [ref=e184]:
              - link "Apprenticeships" [ref=e185] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/apprenticeships/
        - generic [ref=e186]:
          - generic [ref=e187]: Business
          - list [ref=e188]:
            - listitem [ref=e189]:
              - link "Company Car Driver" [ref=e190] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/company-car/
            - listitem [ref=e191]:
              - link "Fleet Managers" [ref=e192] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/fleet-manager/
            - listitem [ref=e193]:
              - link "Driving Instructors" [ref=e194] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/driving-school-programme/
            - listitem [ref=e195]:
              - link "Suzuki Dealer Franchise" [ref=e196] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/franchised-suzuki-dealer/
        - generic [ref=e197]:
          - generic [ref=e198]: Owners
          - list [ref=e199]:
            - listitem [ref=e200]:
              - link "Book a Service" [ref=e201] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/request-a-service/
            - listitem [ref=e202]:
              - link "Suzuki Servicing" [ref=e203] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/servicing/
            - listitem [ref=e204]:
              - link "Handbooks" [ref=e205] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/using-your-car/owners-handbooks/
        - generic [ref=e206]:
          - generic [ref=e207]: Suzuki Global
          - list [ref=e208]:
            - listitem [ref=e209]:
              - link "Bikes" [ref=e210] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/
            - listitem [ref=e211]:
              - link "ATV" [ref=e212] [cursor=pointer]:
                - /url: https://staging-atv.test-suzuki.co.uk/
            - listitem [ref=e213]:
              - link "Marine" [ref=e214] [cursor=pointer]:
                - /url: https://staging-marine.test-suzuki.co.uk/
        - generic [ref=e215]:
          - generic [ref=e216]: Useful Information
          - list [ref=e217]:
            - listitem [ref=e218]:
              - link "Privacy Policy" [ref=e219] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/
            - listitem [ref=e220]:
              - link "Cookie Policy" [ref=e221] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/cookie-policy/
            - listitem [ref=e222]:
              - link "Quality Policy" [ref=e223] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
            - listitem [ref=e224]:
              - link "Legal" [ref=e225] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/terms-of-use/
            - listitem [ref=e226]:
              - link "Section 172 Statement" [ref=e227] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/section-172-statement/
            - listitem [ref=e228]:
              - link "Tax Strategy" [ref=e229] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/uk-tax-strategy/
            - listitem [ref=e230]:
              - link "Human Trafficking Statement, opens in new tab" [ref=e231] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
                - text: Human Trafficking Statement
            - listitem [ref=e232]:
              - link "Certificate of Conformity" [ref=e233] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/certificate-of-conformity/
            - listitem [ref=e234]:
              - link "Sitemap" [ref=e235] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
            - listitem [ref=e236]:
              - link "Manage Cookies" [ref=e237] [cursor=pointer]:
                - /url: /request-a-brochure/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy#
        - generic [ref=e238]:
          - generic [ref=e239]: Motability
          - list [ref=e240]:
            - listitem [ref=e241]:
              - link "What is Motability" [ref=e242] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/what-is-motability/
            - listitem [ref=e243]:
              - link "Motability Offers" [ref=e244] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/
        - generic [ref=e245]:
          - generic [ref=e246]: Categories
          - list [ref=e247]:
            - listitem [ref=e248]:
              - link "Electric Cars" [ref=e249] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/electric-cars/
            - listitem [ref=e250]:
              - link "SUV Cars" [ref=e251] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/suv-crossovers/
            - listitem [ref=e252]:
              - link "Small Cars" [ref=e253] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/small-hatchbacks/
            - listitem [ref=e254]:
              - link "Hybrid Cars" [ref=e255] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/
            - listitem [ref=e256]:
              - link "City Cars" [ref=e257] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/city-cars/
            - listitem [ref=e258]:
              - link "Automatic Cars" [ref=e259] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/automatic-cars/
            - listitem [ref=e260]:
              - link "Family Cars" [ref=e261] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/family-cars/
            - listitem [ref=e262]:
              - link "Plug-In Hybrid Cars" [ref=e263] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/plug-in-hybrid-electric-vehicles/
            - listitem [ref=e264]:
              - link "AllGrip" [ref=e265] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/allgrip/
        - generic [ref=e266]:
          - generic [ref=e267]: Get your Suzuki
          - list [ref=e268]:
            - listitem [ref=e269]:
              - link "Request a Brochure" [ref=e270] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-brochure/
            - listitem [ref=e271]:
              - link "Find us" [ref=e272] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/find-a-dealer/
            - listitem [ref=e273]:
              - link "Request A Test Drive" [ref=e274] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-test-drive/
            - listitem [ref=e275]:
              - link "Car Configurator" [ref=e276] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/configure/
            - listitem [ref=e277]:
              - link "Finance Calculator" [ref=e278] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/finance-calculator/
        - generic [ref=e279]:
          - generic [ref=e280]: Suzuki on social media
          - generic [ref=e281]:
            - link "Visit our Facebook page (opens in new tab)" [ref=e282] [cursor=pointer]:
              - /url: http://facebook.com/suzukicarsuk/
            - link "Visit our X (formerly Twitter) page (opens in new tab)" [ref=e283] [cursor=pointer]:
              - /url: http://twitter.com/SuzukiCarsUK
            - link "Visit our Instagram page (opens in new tab)" [ref=e284] [cursor=pointer]:
              - /url: https://instagram.com/suzukicarsuk
            - link "Visit our YouTube page (opens in new tab)" [ref=e285] [cursor=pointer]:
              - /url: https://www.youtube.com/user/SuzukiCarsUK
      - list "Legal and policy links" [ref=e286]:
        - listitem [ref=e287]:
          - link "Quality Policy" [ref=e288] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
        - listitem [ref=e289]:
          - link "Human Trafficking Statement" [ref=e290] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
        - listitem [ref=e291]:
          - link "Manage Cookies" [ref=e292] [cursor=pointer]:
            - /url: /request-a-brochure/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy#
        - listitem [ref=e293]:
          - link "Sitemap" [ref=e294] [cursor=pointer]:
            - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
        - link "Cyber Essentials Certified" [ref=e295] [cursor=pointer]:
          - /url: /cyber-essentials-certificate/
          - img "Suzuki Cyber Essentials Certified" [ref=e296]
  - generic: ...
  - alert [ref=e297]
```

# Test source

```ts
  58  |   await allure.owner("QA Team");
  59  |   await allure.tag("smoke");
  60  |   await page.goto(
  61  |     "https://staging-cars.test-suzuki.co.uk/request-a-brochure/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  62  |   );
  63  |   await acceptCookiesIfPresent(page);
  64  | 
  65  |   await allure.step("Select brochure", async () => {
  66  |     await page.locator('.styles_toggle__e0m3u > img').first().click();
  67  |   });
  68  |   await allure.step("Click Next", async () => {
  69  |     await page.getByRole('button', { name: 'Next' }).nth(1).click();
  70  |   });
  71  |   await allure.step("Select customer type Personal", async () => {
  72  |     await page.getByRole('radio', { name: 'Customer type Personal' }).check();
  73  |   });
  74  |   await allure.step("Select title", async () => {
  75  |     await page.getByRole('combobox', { name: 'Select Title' }).click();
  76  |     await page.getByRole('option', { name: 'Mr', exact: true }).click();
  77  |   });
  78  |   await allure.step("Fill First name and last name", async () => {
  79  |     await page.getByRole('textbox', { name: 'First Name (required)' }).fill('Test');
  80  |   await page.getByRole('textbox', { name: 'Last Name (required)' }).fill('Data');
  81  |   });
  82  |   await allure.step("Fill Email", async () => {
  83  |     await page.getByRole('textbox', { name: 'Email (required)' }).fill('hello@suzuki.co.uk');
  84  |   });
  85  |   await allure.step("Accept Email opt in", async () => {
  86  |     await page.getByRole('checkbox', { name: 'Email' }).check();
  87  |   });
  88  |   await allure.step("Click Access your downloads", async () => {
  89  |     await page.getByRole('button', { name: 'Access your downloads' }).click();
  90  |   });
  91  |   await allure.step("Verify Download your brochures heading is displayed", async () => {
  92  |     await expect(page.getByRole('heading', { name: 'Download your brochures' })).toBeVisible();
  93  |   });
  94  | });
  95  | 
  96  | test("Download a brochure by email - 3 brochures", async ({ page }) => {
  97  |   await allure.epic("Brochures");
  98  |   await allure.feature("Brochures download");
  99  |   await allure.severity(Severity.CRITICAL);
  100 |   await allure.description(
  101 |     "User is able to succesfully request a brochure to email - Swift",
  102 |   );
  103 |   await allure.owner("QA Team");
  104 |   await allure.tag("smoke");
  105 |   await page.goto(
  106 |     "https://staging-cars.test-suzuki.co.uk/request-a-brochure/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  107 |   );
  108 |   await acceptCookiesIfPresent(page);
  109 | 
  110 |   await allure.step("Select 3 brochures", async () => {
  111 |     await page.locator('label:nth-child(2) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img').click();
  112 |     await page.locator('label:nth-child(3) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img').click();
  113 |     await page.locator('label:nth-child(4) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img').click();
  114 |   });
  115 |   await allure.step("Click Next", async () => {
  116 |     await page.getByRole('button', { name: 'Next' }).click();
  117 |   });
  118 |   await allure.step("Select customer type Personal", async () => {
  119 |     await page.getByRole('radio', { name: 'Customer type Personal' }).check();
  120 |   });
  121 |   await allure.step("Select title", async () => {
  122 |     await page.getByRole('combobox', { name: 'Select Title' }).click();
  123 |     await page.getByRole('option', { name: 'Mr', exact: true }).click();
  124 |   });
  125 |   await allure.step("Fill First name and last name", async () => {
  126 |     await page.getByRole('textbox', { name: 'First Name (required)' }).fill('Test');
  127 |   await page.getByRole('textbox', { name: 'Last Name (required)' }).fill('Data');
  128 |   });
  129 |   await allure.step("Fill Email", async () => {
  130 |     await page.getByRole('textbox', { name: 'Email (required)' }).fill('hello@suzuki.co.uk');
  131 |   });
  132 |   await allure.step("Accept Email opt in", async () => {
  133 |     await page.getByRole('checkbox', { name: 'Email' }).check();
  134 |   });
  135 |   await allure.step("Click Access your downloads", async () => {
  136 |     await page.getByRole('button', { name: 'Access your downloads' }).click();
  137 |   });
  138 |   await allure.step("Verify Download your brochures heading is displayed", async () => {
  139 |     await expect(page.getByText('SWIFTDownload pdfDownload pdf for SWIFT (opens in a new tab)S-CROSSDownload')).toBeVisible();
  140 |   });
  141 | });
  142 | 
  143 | test("Request a test drive - SWIFT", async ({ page }) => {
  144 |   await allure.epic("Test Drive");
  145 |   await allure.feature("Requesting test drive");
  146 |   await allure.severity(Severity.CRITICAL);
  147 |   await allure.description(
  148 |     "User is able to succesfully request a test drive - Swift",
  149 |   );
  150 |   await allure.owner("QA Team");
  151 |   await allure.tag("smoke");
  152 |   await page.goto(
  153 |     "https://staging-cars.test-suzuki.co.uk/request-a-brochure/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  154 |   );
  155 |   await acceptCookiesIfPresent(page);
  156 | 
  157 | await allure.step("Select customer type Motability", async () => {
> 158 |   await page.getByRole('radio', { name: 'Customer type Motability' }).check();
      |                                                                       ^ Error: locator.check: Test timeout of 30000ms exceeded.
  159 | });
  160 | await allure.step("Close the popup", async () => {
  161 |   await page.getByRole('button', { name: 'Close', exact: true }).click();
  162 | });
  163 | await allure.step("Select model", async () => {
  164 |   await page.locator('label:nth-child(3) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img').click();
  165 | });
  166 | await allure.step("Click Choose a Dealer", async () => {
  167 |   await page.getByRole('button', { name: 'Choose a Dealer' }).click();
  168 | });
  169 | await allure.step("Enter postcode or location", async () => {
  170 |   await page.getByRole('searchbox', { name: 'Postcode or location' }).fill('sw1w 0ny');
  171 | });
  172 | await allure.step("Click search", async () => {
  173 |   await page.getByRole('button', { name: 'Search postcode or location' }).click();
  174 | });
  175 | await allure.step("Click Your Details", async () => {
  176 |   await page.getByRole('button', { name: 'Your Details' }).nth(1).click();
  177 | });
  178 | await allure.step("Select title", async () => {
  179 |   await page.getByRole('combobox', { name: 'Select Title' }).click();
  180 |   await page.getByRole('option', { name: 'Mr', exact: true }).click();
  181 | });
  182 | await allure.step("Fill First name and Last name fields", async () => {
  183 |   await page.getByRole('textbox', { name: 'First name (required)' }).fill('Test');
  184 |   await page.getByRole('textbox', { name: 'Last name (required)' }).fill('Data');
  185 | });
  186 | await allure.step("Fill Postcode", async () => {
  187 |   await page.getByRole('textbox', { name: 'Postcode (required)' }).fill('SW1W 0NY');
  188 | });
  189 | await allure.step("Fill Building number / name", async () => {
  190 |   await page.getByRole('textbox', { name: 'Building number / name (' }).fill('7E');
  191 | });
  192 | await allure.step("Fill Email", async () => {
  193 |   await page.getByRole('textbox', { name: 'Email (required)' }).fill('test@gmail.com');
  194 | });
  195 | await allure.step("Fill Phone number", async () => {
  196 |   await page.getByRole('textbox', { name: 'Phone Number (required)' }).fill('022845456');
  197 | });
  198 | await allure.step("Email opt in", async () => {
  199 |   await page.getByRole('checkbox', { name: 'Email' }).check();
  200 | });
  201 | await allure.step("Click Review booking", async () => {
  202 |   await page.getByRole('button', { name: 'Review booking' }).click();
  203 | });
  204 | await allure.step("Click Confirm booking", async () => {
  205 |   await page.getByRole('button', { name: 'Confirm booking' }).nth(1).click();
  206 | });
  207 | await allure.step("Verify Booking confirmed heading is displayed", async () => {
  208 |   await expect(page.getByRole('heading', { name: 'Booking confirmed' })).toBeVisible();
  209 | });
  210 | });
```