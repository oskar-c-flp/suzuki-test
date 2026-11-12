# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 4W.spec.ts >> Find a dealer - Request a test drive
- Location: tests\4W.spec.ts:525:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Review booking' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
              - button "Back" [ref=e60] [cursor=pointer]
              - heading "Book a Test Drive" [level=2] [ref=e61]
              - paragraph [ref=e62]: Step 4 of 4
            - heading "Review your booking" [level=1] [ref=e63]
          - generic [ref=e64]:
            - generic [ref=e65]:
              - paragraph [ref=e68]: We will only use your personal information for the purposes of contacting you about your test drive.
              - generic [ref=e69]:
                - generic [ref=e70]:
                  - generic [ref=e71]:
                    - term [ref=e72]: Cars
                    - definition [ref=e73]: S-CROSS
                  - button "Edit cars section" [active] [ref=e74] [cursor=pointer]:
                    - generic [ref=e75]: Edit
                - generic [ref=e77]:
                  - generic [ref=e78]:
                    - term [ref=e79]: Dealer
                    - definition [ref=e80]:
                      - generic [ref=e81]: Brayley Milton Keynes,
                      - generic [ref=e82]: 27 Barnsdale Drive,
                      - generic [ref=e83]: Westcroft,
                      - generic [ref=e84]: Milton Keynes,
                      - generic [ref=e85]: Buckinghamshire,
                      - text: MK4 4DD
                  - button "Edit dealer section" [ref=e86] [cursor=pointer]:
                    - generic [ref=e87]: Edit
                - generic [ref=e89]:
                  - generic [ref=e90]:
                    - term [ref=e91]: Contact Details
                    - definition [ref=e92]: Test Data
                    - definition
                    - definition [ref=e93]: hello@suzuki.co.uk
                    - definition [ref=e94]: "022634646"
                  - button "Edit contact details section" [ref=e95] [cursor=pointer]:
                    - generic [ref=e96]: Edit
                - generic [ref=e98]:
                  - generic [ref=e99]:
                    - term [ref=e100]: Business Details
                    - definition [ref=e101]: Test
                    - definition [ref=e102]: Street, Town
                    - definition [ref=e103]: hello@suzuki.co.uk
                    - definition [ref=e104]: "022634646"
                  - button "Edit business details section" [ref=e105] [cursor=pointer]:
                    - generic [ref=e106]: Edit
              - generic [ref=e108]:
                - iframe [ref=e113]:
                  - generic [ref=f11e2]:
                    - generic [ref=f11e3]:
                      - checkbox "I'm not a robot" [ref=f11e7]
                      - generic [ref=f11e9]: I'm not a robot
                    - generic [ref=f11e12]: reCAPTCHA
                - paragraph [ref=e114]: Recaptcha is required
            - button "Confirm booking" [disabled] [ref=e117]
        - status [ref=e120]
      - button "Confirm booking" [disabled] [ref=e122]
      - generic [ref=e128]:
        - paragraph
        - paragraph [ref=e129]:
          - strong [ref=e130]: "e Vitara 49kWh Motion Auto: £229 a month. 0% APR, 49-month PCP agreement. £4,858 customer deposit & £9,149 optional final payment. 8,000 miles per annum."
          - text: "HP finance also available. Credit subject to status, UK residents 18+, Suzuki Financial Services Ltd, No. 1 John Street, Callaghan Square, Cardiff, CF10 5PE. With Personal Contract Purchase (PCP) you have the option after you have paid all of the regular monthly repayments to: (1) Return the vehicle and not pay the Optional Final Repayment. In this example if the vehicle has exceeded 32,667 miles, a charge of 9.6p (including VAT at 20%) will apply per excess mile. If the vehicle is in good condition (fair wear and tear accepted) and has not exceeded 32,667 miles you will have nothing further to pay. (2) Pay the Optional Final Repayment to own the vehicle or (3) Part exchange the vehicle subject to settlement of your existing finance agreement; new finance agreements are subject to status. Excludes Channel Islands and Isle of Man Dealers. Valid from 1st October 2026 and 31st December 2026. Offers may be varied or withdrawn at any time."
        - paragraph [ref=e131]:
          - strong [ref=e132]: PCP end of contract options
          - text: "With Personal Contract Purchase (PCP) you have the option after you have paid all of the regular monthly repayments to: (1) Return the vehicle and not pay the Optional Final Repayment. In this example if the vehicle has exceeded 32,667 miles, a charge of 4.8p (including VAT at 20%) will apply per excess mile. If the vehicle is in good condition (fair wear and tear accepted) and has not exceeded 32,667 miles you will have nothing further to pay. (2) Pay the Optional Final Repayment to own the vehicle or (3) Part exchange the vehicle subject to settlement of your existing finance agreement; new finance agreements are subject to status."
        - paragraph [ref=e133]
        - paragraph [ref=e134]:
          - text: "*Offer applies to UK private retail customers purchasing and registering a new Suzuki from participating Dealers between 1st October 2026 until 31st December 2026. Excludes Channel Islands and Isle of Man Dealers. Offer cannot be used in conjunction with any other offer unless otherwise stated. Credit subject to status, UK residents 18+. This offer is subject to availability and Suzuki Financial Services Ltd reserves the right to withdraw or amend this offer without notice or prior warning. Suzuki Financial Services Ltd, part of Lloyds Banking Group, Suzuki Finance is a trading style of"
          - generic [ref=e135]: Suzuki Financial Services Ltd, No. 1 John Street, Callaghan Square, Cardiff, CF10 5PE
          - text: . All prices, specifications and offers correct at the time of being published. Offers may be varied or withdrawn at any time.
        - paragraph [ref=e136]
        - paragraph [ref=e137]:
          - strong [ref=e138]: "Last updated on: 1st October 2026"
      - button [ref=e140] [cursor=pointer]:
        - img "Back to Top" [ref=e141]
    - contentinfo [ref=e142]:
      - generic [ref=e143]:
        - paragraph [ref=e144]: Not finished? It's all here...
        - generic [ref=e145]:
          - button "Search for results" [ref=e146] [cursor=pointer]:
            - img "Search icon" [ref=e147]
          - searchbox "Search" [ref=e148]
        - generic [ref=e149]:
          - generic [ref=e150]: "Popular searches:"
          - list [ref=e151]:
            - listitem [ref=e152]:
              - link "Vitara" [ref=e153] [cursor=pointer]:
                - /url: /search/?search=Vitara&pageCount=1
            - listitem [ref=e155]:
              - link "Motability" [ref=e156] [cursor=pointer]:
                - /url: /search/?search=Motability&pageCount=1
            - listitem [ref=e158]:
              - link "Dealers" [ref=e159] [cursor=pointer]:
                - /url: /search/?search=Dealers&pageCount=1
            - listitem [ref=e161]:
              - link "Hybrid" [ref=e162] [cursor=pointer]:
                - /url: /search/?search=Hybrid&pageCount=1
            - listitem [ref=e164]:
              - link "Contact" [ref=e165] [cursor=pointer]:
                - /url: /search/?search=Contact&pageCount=1
            - listitem [ref=e167]:
              - link "Swift" [ref=e168] [cursor=pointer]:
                - /url: /search/?search=Swift&pageCount=1
            - listitem [ref=e170]:
              - link "0% Car Finance" [ref=e171] [cursor=pointer]:
                - /url: /search/?search=0%25%20Car%20Finance&pageCount=1
            - listitem [ref=e173]:
              - link "Electric" [ref=e174] [cursor=pointer]:
                - /url: /search/?search=Electric&pageCount=1
      - generic [ref=e177]:
        - generic [ref=e178]:
          - generic [ref=e179]: Models
          - list [ref=e180]:
            - listitem [ref=e181]:
              - link "e Vitara" [ref=e182] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/e-vitara/
            - listitem [ref=e183]:
              - link "Swift" [ref=e184] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift/
            - listitem [ref=e185]:
              - link "S-Cross" [ref=e186] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/s-cross/
            - listitem [ref=e187]:
              - link "Vitara" [ref=e188] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/vitara/
            - listitem [ref=e189]:
              - link "Across" [ref=e190] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/across/
            - listitem [ref=e191]:
              - link "Ignis" [ref=e192] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/ignis/
            - listitem [ref=e193]:
              - link "Swace" [ref=e194] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swace/
            - listitem [ref=e195]:
              - link "Swift Sport" [ref=e196] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift-sport/
            - listitem [ref=e197]:
              - link "Jimny" [ref=e198] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/jimny/
        - generic [ref=e199]:
          - generic [ref=e200]: About Suzuki
          - list [ref=e201]:
            - listitem [ref=e202]:
              - link "About Us" [ref=e203] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/about-us/
            - listitem [ref=e204]:
              - link "Awards" [ref=e205] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/awards/
            - listitem [ref=e206]:
              - link "Contact Us" [ref=e207] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/
            - listitem [ref=e208]:
              - link "Careers" [ref=e209] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/careers/
            - listitem [ref=e210]:
              - link "Apprenticeships" [ref=e211] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/apprenticeships/
        - generic [ref=e212]:
          - generic [ref=e213]: Business
          - list [ref=e214]:
            - listitem [ref=e215]:
              - link "Company Car Driver" [ref=e216] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/company-car/
            - listitem [ref=e217]:
              - link "Fleet Managers" [ref=e218] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/fleet-manager/
            - listitem [ref=e219]:
              - link "Driving Instructors" [ref=e220] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/driving-school-programme/
            - listitem [ref=e221]:
              - link "Suzuki Dealer Franchise" [ref=e222] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/franchised-suzuki-dealer/
        - generic [ref=e223]:
          - generic [ref=e224]: Owners
          - list [ref=e225]:
            - listitem [ref=e226]:
              - link "Book a Service" [ref=e227] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/request-a-service/
            - listitem [ref=e228]:
              - link "Suzuki Servicing" [ref=e229] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/servicing/
            - listitem [ref=e230]:
              - link "Handbooks" [ref=e231] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/using-your-car/owners-handbooks/
        - generic [ref=e232]:
          - generic [ref=e233]: Suzuki Global
          - list [ref=e234]:
            - listitem [ref=e235]:
              - link "Bikes" [ref=e236] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/
            - listitem [ref=e237]:
              - link "ATV" [ref=e238] [cursor=pointer]:
                - /url: https://staging-atv.test-suzuki.co.uk/
            - listitem [ref=e239]:
              - link "Marine" [ref=e240] [cursor=pointer]:
                - /url: https://staging-marine.test-suzuki.co.uk/
        - generic [ref=e241]:
          - generic [ref=e242]: Useful Information
          - list [ref=e243]:
            - listitem [ref=e244]:
              - link "Privacy Policy" [ref=e245] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/
            - listitem [ref=e246]:
              - link "Cookie Policy" [ref=e247] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/cookie-policy/
            - listitem [ref=e248]:
              - link "Quality Policy" [ref=e249] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
            - listitem [ref=e250]:
              - link "Legal" [ref=e251] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/terms-of-use/
            - listitem [ref=e252]:
              - link "Section 172 Statement" [ref=e253] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/section-172-statement/
            - listitem [ref=e254]:
              - link "Tax Strategy" [ref=e255] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/uk-tax-strategy/
            - listitem [ref=e256]:
              - link "Human Trafficking Statement, opens in new tab" [ref=e257] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
                - text: Human Trafficking Statement
            - listitem [ref=e258]:
              - link "Certificate of Conformity" [ref=e259] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/certificate-of-conformity/
            - listitem [ref=e260]:
              - link "Sitemap" [ref=e261] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
            - listitem [ref=e262]:
              - link "Manage Cookies" [ref=e263] [cursor=pointer]:
                - /url: /request-a-test-drive/?dealer=NmNkODA0NWUtZDEwYi00YTZiLWE2ZTYtYmQwZGZmOTQwYWNk&postcode=mk4%204ae&dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9RmluZCUyMEElMjBDYXIlMjBEZWFsZXIlMjAlN0MlMjBTdXp1a2klMjBDYXJzJTIwVUsmbmF2aWdhdGlvbl9lbGVtZW50PVJlcXVlc3QlMjBBJTIwVGVzdCUyMERyaXZl#
        - generic [ref=e264]:
          - generic [ref=e265]: Motability
          - list [ref=e266]:
            - listitem [ref=e267]:
              - link "What is Motability" [ref=e268] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/what-is-motability/
            - listitem [ref=e269]:
              - link "Motability Offers" [ref=e270] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/
        - generic [ref=e271]:
          - generic [ref=e272]: Categories
          - list [ref=e273]:
            - listitem [ref=e274]:
              - link "Electric Cars" [ref=e275] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/electric-cars/
            - listitem [ref=e276]:
              - link "SUV Cars" [ref=e277] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/suv-crossovers/
            - listitem [ref=e278]:
              - link "Small Cars" [ref=e279] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/small-hatchbacks/
            - listitem [ref=e280]:
              - link "Hybrid Cars" [ref=e281] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/
            - listitem [ref=e282]:
              - link "City Cars" [ref=e283] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/city-cars/
            - listitem [ref=e284]:
              - link "Automatic Cars" [ref=e285] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/automatic-cars/
            - listitem [ref=e286]:
              - link "Family Cars" [ref=e287] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/family-cars/
            - listitem [ref=e288]:
              - link "Plug-In Hybrid Cars" [ref=e289] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/plug-in-hybrid-electric-vehicles/
            - listitem [ref=e290]:
              - link "AllGrip" [ref=e291] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/allgrip/
        - generic [ref=e292]:
          - generic [ref=e293]: Get your Suzuki
          - list [ref=e294]:
            - listitem [ref=e295]:
              - link "Request a Brochure" [ref=e296] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-brochure/
            - listitem [ref=e297]:
              - link "Find us" [ref=e298] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/find-a-dealer/
            - listitem [ref=e299]:
              - link "Request A Test Drive" [ref=e300] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-test-drive/
            - listitem [ref=e301]:
              - link "Car Configurator" [ref=e302] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/configure/
            - listitem [ref=e303]:
              - link "Finance Calculator" [ref=e304] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/finance-calculator/
        - generic [ref=e305]:
          - generic [ref=e306]: Suzuki on social media
          - generic [ref=e307]:
            - link "Visit our Facebook page (opens in new tab)" [ref=e308] [cursor=pointer]:
              - /url: http://facebook.com/suzukicarsuk/
            - link "Visit our X (formerly Twitter) page (opens in new tab)" [ref=e309] [cursor=pointer]:
              - /url: http://twitter.com/SuzukiCarsUK
            - link "Visit our Instagram page (opens in new tab)" [ref=e310] [cursor=pointer]:
              - /url: https://instagram.com/suzukicarsuk
            - link "Visit our YouTube page (opens in new tab)" [ref=e311] [cursor=pointer]:
              - /url: https://www.youtube.com/user/SuzukiCarsUK
      - list "Legal and policy links" [ref=e312]:
        - listitem [ref=e313]:
          - link "Quality Policy" [ref=e314] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
        - listitem [ref=e315]:
          - link "Human Trafficking Statement" [ref=e316] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
        - listitem [ref=e317]:
          - link "Manage Cookies" [ref=e318] [cursor=pointer]:
            - /url: /request-a-test-drive/?dealer=NmNkODA0NWUtZDEwYi00YTZiLWE2ZTYtYmQwZGZmOTQwYWNk&postcode=mk4%204ae&dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9RmluZCUyMEElMjBDYXIlMjBEZWFsZXIlMjAlN0MlMjBTdXp1a2klMjBDYXJzJTIwVUsmbmF2aWdhdGlvbl9lbGVtZW50PVJlcXVlc3QlMjBBJTIwVGVzdCUyMERyaXZl#
        - listitem [ref=e319]:
          - link "Sitemap" [ref=e320] [cursor=pointer]:
            - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
        - link "Cyber Essentials Certified" [ref=e321] [cursor=pointer]:
          - /url: /cyber-essentials-certificate/
          - img "Suzuki Cyber Essentials Certified" [ref=e322]
  - alert [ref=e323]: Book A Test Drive | Suzuki Cars UK
  - generic: ...
```

# Test source

```ts
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
  524 | 
  525 | test("Find a dealer - Request a test drive", async ({ page }) => {
  526 |   await allure.epic("Test Drive");
  527 |   await allure.feature("Requesting test drive");
  528 |   await allure.severity(Severity.CRITICAL);
  529 |   await allure.description(
  530 |     "User is able to find a dealer and request a test drive",
  531 |   );
  532 |   await allure.owner("QA Team");
  533 |   await allure.tag("smoke");
  534 |   await page.goto(
  535 |     "https://staging-cars.test-suzuki.co.uk/find-a-dealer/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  536 |   );
  537 |   await acceptCookiesIfPresent(page);
  538 | 
  539 | await allure.step("Enter postcode", async () => {
  540 |   await page.getByRole('searchbox', { name: 'Postcode or location' }).fill('mk4 4ae');
  541 | });
  542 | await allure.step("Click Search", async () => {
  543 |   await page.getByRole('button', { name: 'Search for dealers' }).click();
  544 | });
  545 | await allure.step("Click Request A Test Drive", async () => {
  546 |   await page.locator('#main-content').getByRole('link', { name: 'Request A Test Drive' }).click();
  547 | });
  548 | await allure.step("Select Business type", async () => {
  549 |   await page.getByRole('radio', { name: 'Customer type Business' }).check();
  550 | });
  551 | await allure.step("Select model", async () => {
  552 |   await page.locator('label:nth-child(4) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img').click();
  553 | });
  554 | await allure.step("Click Review your booking", async () => {
  555 |   await page.getByRole('button', { name: 'Review your booking' }).click();
  556 | });
  557 | await allure.step("Select title", async () => {
  558 |   await page.getByRole('combobox', { name: 'Select Title' }).click();
  559 |   await page.getByRole('option', { name: 'Mr', exact: true }).click();
  560 | });
  561 | await allure.step("Fill First name and Last name fields", async () => {
  562 |   await page.getByRole('textbox', { name: 'First Name (required)' }).fill('Test');
  563 |   await page.getByRole('textbox', { name: 'Last Name (required)' }).fill('Data');
  564 | });
  565 | await allure.step("Fill Job title", async () => {
  566 |   await page.getByRole('textbox', { name: 'Job Title (required)' }).fill('Test');
  567 | });
  568 | await allure.step("Fill Business email", async () => {
  569 |   await page.getByRole('textbox', { name: 'Business email (required)' }).fill('hello@suzuki.co.uk');
  570 | });
  571 | await allure.step("Fill Business phone", async () => {
  572 |   await page.getByRole('textbox', { name: 'Business Phone (required)' }).fill('022634646');
  573 | });
  574 | await allure.step("Fill Business name", async () => {
  575 |   await page.getByRole('textbox', { name: 'Business name (required)' }).fill('Test');
  576 | });
  577 | await allure.step("Fill Business postcode", async () => {
  578 |   await page.getByRole('textbox', { name: 'Business Postcode (required)' }).fill('MK4 4AE');
  579 | });
  580 | await allure.step("Select vehicle registration option", async () => {
  581 |   await page.locator('.styles_vrn_label__G3cbO.false > span:nth-child(2)').first().click();
  582 | });
  583 | await allure.step("Fill Building number / name", async () => {
  584 |   await page.getByRole('textbox', { name: 'Building number / name (' }).fill('7e');
  585 | });
  586 | await allure.step("Fill Street name", async () => {
  587 |   await page.getByRole('textbox', { name: 'Street name (required)' }).fill('Street');
  588 | });
  589 | await allure.step("Fill Town", async () => {
  590 |   await page.getByRole('textbox', { name: 'Town (required)' }).fill('Town');
  591 | });
  592 | await allure.step("Fill County", async () => {
  593 |   await page.getByRole('textbox', { name: 'County (required)' }).fill('County');
  594 | });
  595 | await allure.step("Accept Email opt in", async () => {
  596 |   await page.getByRole('checkbox', { name: 'Email' }).check();
  597 | });
  598 | await allure.step("Click Review booking", async () => {
  599 |   await page.getByRole('button', { name: 'Review booking' }).click();
  600 | });
  601 | await allure.step("Click Review booking again", async () => {
> 602 |   await page.getByRole('button', { name: 'Review booking' }).click();
      |                                                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  603 | });
  604 | });
```