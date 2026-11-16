# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 4W.spec.ts >> Business Enquiry - 25+ cars
- Location: tests\4W.spec.ts:1187:5

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
              - heading "Business Enquiry" [level=2] [ref=e61]
              - paragraph [ref=e62]: Step 3 of 4
            - heading "Your details" [level=1] [ref=e63]
          - generic [ref=e64]:
            - generic [ref=e66]:
              - generic [ref=e67]:
                - heading "Your details:" [level=3] [ref=e68]
                - paragraph [ref=e70]: Tell us about you and your business so we can help you
              - generic [ref=e73]:
                - generic [ref=e74]:
                  - generic [ref=e76]:
                    - generic [ref=e77]:
                      - generic:
                        - generic:
                          - text: Title
                          - generic: required
                          - generic: (required)
                      - combobox "Select Title" [active] [ref=e80] [cursor=pointer]
                    - paragraph
                  - generic [ref=e82]:
                    - generic [ref=e83]:
                      - generic [ref=e84]:
                        - text: First name
                        - generic [ref=e85]: (required)
                        - text: (required)
                      - textbox "First name (required)" [ref=e86]:
                        - /placeholder: ""
                    - paragraph
                  - generic [ref=e87]:
                    - generic [ref=e88]:
                      - generic [ref=e89]:
                        - text: Last name
                        - generic [ref=e90]: (required)
                        - text: (required)
                      - textbox "Last name (required)" [ref=e91]:
                        - /placeholder: ""
                    - paragraph
                  - generic [ref=e92]:
                    - generic [ref=e93]:
                      - generic [ref=e94]:
                        - text: Job title
                        - generic [ref=e95]: (required)
                        - text: (required)
                      - textbox "Job title (required)" [ref=e96]:
                        - /placeholder: ""
                    - paragraph
                  - generic [ref=e97]:
                    - generic [ref=e98]:
                      - generic [ref=e99]:
                        - text: Business email
                        - generic [ref=e100]: (required)
                        - text: (required)
                      - textbox "Business email (required)" [ref=e101]:
                        - /placeholder: ""
                    - paragraph
                  - generic [ref=e102]:
                    - generic [ref=e103]:
                      - generic [ref=e104]:
                        - text: Business phone
                        - generic [ref=e105]: (required)
                        - text: (required)
                      - textbox "Business phone (required)" [ref=e106]:
                        - /placeholder: ""
                    - paragraph
                - generic [ref=e107]:
                  - heading "Business Details:" [level=3] [ref=e108]
                  - generic [ref=e109]:
                    - generic [ref=e110]:
                      - generic [ref=e111]:
                        - text: Business name
                        - generic [ref=e112]: (required)
                        - text: (required)
                      - textbox "Business name (required)" [ref=e113]:
                        - /placeholder: ""
                    - paragraph
                  - generic [ref=e115]:
                    - generic [ref=e116]:
                      - generic [ref=e117]: Business postcode *
                      - textbox "Business postcode *" [ref=e118]
                    - img "search" [ref=e120] [cursor=pointer]
                  - generic [ref=e121]:
                    - generic [ref=e122]:
                      - generic [ref=e123]:
                        - text: Building number / name
                        - generic [ref=e124]: (required)
                        - text: (required)
                      - textbox "Building number / name (required)" [ref=e125]:
                        - /placeholder: ""
                    - paragraph
                  - generic [ref=e126]:
                    - generic [ref=e127]:
                      - generic [ref=e128]:
                        - text: Street name
                        - generic [ref=e129]: (required)
                        - text: (required)
                      - textbox "Street name (required)" [ref=e130]:
                        - /placeholder: ""
                    - paragraph
                  - generic [ref=e131]:
                    - generic [ref=e132]:
                      - generic [ref=e133]:
                        - text: Town
                        - generic [ref=e134]: (required)
                        - text: (required)
                      - textbox "Town (required)" [ref=e135]:
                        - /placeholder: ""
                    - paragraph
                  - generic [ref=e136]:
                    - generic [ref=e137]:
                      - generic [ref=e138]:
                        - text: County
                        - generic [ref=e139]: (required)
                        - text: (required)
                      - textbox "County (required)" [ref=e140]:
                        - /placeholder: ""
                    - paragraph
                - generic [ref=e142]:
                  - text: Suzuki GB PLC and our
                  - link "authorised dealer network (opens in new tab)" [ref=e144] [cursor=pointer]:
                    - /url: /find-a-dealer/
                    - text: authorised dealer network
                    - generic [ref=e145]: (opens in new tab)
                  - text: value your privacy and are committed to protecting your data. If you'd like to receive updates on news, offers, and services, simply OPT IN by checking the boxes below.
                - generic [ref=e146]:
                  - generic [ref=e147]:
                    - generic [ref=e148]: Phone
                    - checkbox "Phone" [ref=e150] [cursor=pointer]
                  - generic [ref=e151]:
                    - generic [ref=e152]: Email
                    - checkbox "Email" [ref=e154] [cursor=pointer]
                  - generic [ref=e155]:
                    - generic [ref=e156]: SMS
                    - checkbox "SMS" [ref=e158] [cursor=pointer]
                - generic [ref=e160]:
                  - text: To find out more, please see
                  - link "SGB’s Privacy Policy (opens in new tab)" [ref=e162] [cursor=pointer]:
                    - /url: /privacy/
                    - text: SGB’s Privacy Policy
                    - generic [ref=e163]: (opens in new tab)
                  - text: . You can withdraw your consent to receiving communications at any time by emailing
                  - link "customerservices@suzuki.co.uk" [ref=e164] [cursor=pointer]:
                    - /url: mailto:customerservices@suzuki.co.uk
                  - text: .
            - button "Review your enquiry" [disabled] [ref=e167]
        - status [ref=e170]
      - button "Review your enquiry" [disabled] [ref=e172]
    - contentinfo [ref=e175]:
      - generic [ref=e176]:
        - paragraph [ref=e177]: Not finished? It's all here...
        - generic [ref=e178]:
          - button "Search for results" [ref=e179] [cursor=pointer]:
            - img "Search icon" [ref=e180]
          - searchbox "Search" [ref=e181]
        - generic [ref=e182]:
          - generic [ref=e183]: "Popular searches:"
          - list [ref=e184]:
            - listitem [ref=e185]:
              - link "Vitara" [ref=e186] [cursor=pointer]:
                - /url: /search/?search=Vitara&pageCount=1
            - listitem [ref=e188]:
              - link "Motability" [ref=e189] [cursor=pointer]:
                - /url: /search/?search=Motability&pageCount=1
            - listitem [ref=e191]:
              - link "Dealers" [ref=e192] [cursor=pointer]:
                - /url: /search/?search=Dealers&pageCount=1
            - listitem [ref=e194]:
              - link "Hybrid" [ref=e195] [cursor=pointer]:
                - /url: /search/?search=Hybrid&pageCount=1
            - listitem [ref=e197]:
              - link "Contact" [ref=e198] [cursor=pointer]:
                - /url: /search/?search=Contact&pageCount=1
            - listitem [ref=e200]:
              - link "Swift" [ref=e201] [cursor=pointer]:
                - /url: /search/?search=Swift&pageCount=1
            - listitem [ref=e203]:
              - link "0% Car Finance" [ref=e204] [cursor=pointer]:
                - /url: /search/?search=0%25%20Car%20Finance&pageCount=1
            - listitem [ref=e206]:
              - link "Electric" [ref=e207] [cursor=pointer]:
                - /url: /search/?search=Electric&pageCount=1
      - generic [ref=e210]:
        - generic [ref=e211]:
          - generic [ref=e212]: Models
          - list [ref=e213]:
            - listitem [ref=e214]:
              - link "e Vitara" [ref=e215] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/e-vitara/
            - listitem [ref=e216]:
              - link "Swift" [ref=e217] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift/
            - listitem [ref=e218]:
              - link "S-Cross" [ref=e219] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/s-cross/
            - listitem [ref=e220]:
              - link "Vitara" [ref=e221] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/vitara/
            - listitem [ref=e222]:
              - link "Across" [ref=e223] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/across/
            - listitem [ref=e224]:
              - link "Ignis" [ref=e225] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/ignis/
            - listitem [ref=e226]:
              - link "Swace" [ref=e227] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swace/
            - listitem [ref=e228]:
              - link "Swift Sport" [ref=e229] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift-sport/
            - listitem [ref=e230]:
              - link "Jimny" [ref=e231] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/jimny/
        - generic [ref=e232]:
          - generic [ref=e233]: About Suzuki
          - list [ref=e234]:
            - listitem [ref=e235]:
              - link "About Us" [ref=e236] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/about-us/
            - listitem [ref=e237]:
              - link "Awards" [ref=e238] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/awards/
            - listitem [ref=e239]:
              - link "Contact Us" [ref=e240] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/
            - listitem [ref=e241]:
              - link "Careers" [ref=e242] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/careers/
            - listitem [ref=e243]:
              - link "Apprenticeships" [ref=e244] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/apprenticeships/
        - generic [ref=e245]:
          - generic [ref=e246]: Business
          - list [ref=e247]:
            - listitem [ref=e248]:
              - link "Company Car Driver" [ref=e249] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/company-car/
            - listitem [ref=e250]:
              - link "Fleet Managers" [ref=e251] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/fleet-manager/
            - listitem [ref=e252]:
              - link "Driving Instructors" [ref=e253] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/driving-school-programme/
            - listitem [ref=e254]:
              - link "Suzuki Dealer Franchise" [ref=e255] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/franchised-suzuki-dealer/
        - generic [ref=e256]:
          - generic [ref=e257]: Owners
          - list [ref=e258]:
            - listitem [ref=e259]:
              - link "Book a Service" [ref=e260] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/request-a-service/
            - listitem [ref=e261]:
              - link "Suzuki Servicing" [ref=e262] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/servicing/
            - listitem [ref=e263]:
              - link "Handbooks" [ref=e264] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/using-your-car/owners-handbooks/
        - generic [ref=e265]:
          - generic [ref=e266]: Suzuki Global
          - list [ref=e267]:
            - listitem [ref=e268]:
              - link "Bikes" [ref=e269] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/
            - listitem [ref=e270]:
              - link "ATV" [ref=e271] [cursor=pointer]:
                - /url: https://staging-atv.test-suzuki.co.uk/
            - listitem [ref=e272]:
              - link "Marine" [ref=e273] [cursor=pointer]:
                - /url: https://staging-marine.test-suzuki.co.uk/
        - generic [ref=e274]:
          - generic [ref=e275]: Useful Information
          - list [ref=e276]:
            - listitem [ref=e277]:
              - link "Privacy Policy" [ref=e278] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/
            - listitem [ref=e279]:
              - link "Cookie Policy" [ref=e280] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/cookie-policy/
            - listitem [ref=e281]:
              - link "Quality Policy" [ref=e282] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
            - listitem [ref=e283]:
              - link "Legal" [ref=e284] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/terms-of-use/
            - listitem [ref=e285]:
              - link "Section 172 Statement" [ref=e286] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/section-172-statement/
            - listitem [ref=e287]:
              - link "Tax Strategy" [ref=e288] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/uk-tax-strategy/
            - listitem [ref=e289]:
              - link "Human Trafficking Statement, opens in new tab" [ref=e290] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
                - text: Human Trafficking Statement
            - listitem [ref=e291]:
              - link "Certificate of Conformity" [ref=e292] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/certificate-of-conformity/
            - listitem [ref=e293]:
              - link "Sitemap" [ref=e294] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
            - listitem [ref=e295]:
              - link "Manage Cookies" [ref=e296] [cursor=pointer]:
                - /url: /business/enquiry/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy#
        - generic [ref=e297]:
          - generic [ref=e298]: Motability
          - list [ref=e299]:
            - listitem [ref=e300]:
              - link "What is Motability" [ref=e301] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/what-is-motability/
            - listitem [ref=e302]:
              - link "Motability Offers" [ref=e303] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/
        - generic [ref=e304]:
          - generic [ref=e305]: Categories
          - list [ref=e306]:
            - listitem [ref=e307]:
              - link "Electric Cars" [ref=e308] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/electric-cars/
            - listitem [ref=e309]:
              - link "SUV Cars" [ref=e310] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/suv-crossovers/
            - listitem [ref=e311]:
              - link "Small Cars" [ref=e312] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/small-hatchbacks/
            - listitem [ref=e313]:
              - link "Hybrid Cars" [ref=e314] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/
            - listitem [ref=e315]:
              - link "City Cars" [ref=e316] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/city-cars/
            - listitem [ref=e317]:
              - link "Automatic Cars" [ref=e318] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/automatic-cars/
            - listitem [ref=e319]:
              - link "Family Cars" [ref=e320] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/family-cars/
            - listitem [ref=e321]:
              - link "Plug-In Hybrid Cars" [ref=e322] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/plug-in-hybrid-electric-vehicles/
            - listitem [ref=e323]:
              - link "AllGrip" [ref=e324] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/allgrip/
        - generic [ref=e325]:
          - generic [ref=e326]: Get your Suzuki
          - list [ref=e327]:
            - listitem [ref=e328]:
              - link "Request a Brochure" [ref=e329] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-brochure/
            - listitem [ref=e330]:
              - link "Find us" [ref=e331] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/find-a-dealer/
            - listitem [ref=e332]:
              - link "Request A Test Drive" [ref=e333] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-test-drive/
            - listitem [ref=e334]:
              - link "Car Configurator" [ref=e335] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/configure/
            - listitem [ref=e336]:
              - link "Finance Calculator" [ref=e337] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/finance-calculator/
        - generic [ref=e338]:
          - generic [ref=e339]: Suzuki on social media
          - generic [ref=e340]:
            - link "Visit our Facebook page (opens in new tab)" [ref=e341] [cursor=pointer]:
              - /url: http://facebook.com/suzukicarsuk/
            - link "Visit our X (formerly Twitter) page (opens in new tab)" [ref=e342] [cursor=pointer]:
              - /url: http://twitter.com/SuzukiCarsUK
            - link "Visit our Instagram page (opens in new tab)" [ref=e343] [cursor=pointer]:
              - /url: https://instagram.com/suzukicarsuk
            - link "Visit our YouTube page (opens in new tab)" [ref=e344] [cursor=pointer]:
              - /url: https://www.youtube.com/user/SuzukiCarsUK
      - list "Legal and policy links" [ref=e345]:
        - listitem [ref=e346]:
          - link "Quality Policy" [ref=e347] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
        - listitem [ref=e348]:
          - link "Human Trafficking Statement" [ref=e349] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
        - listitem [ref=e350]:
          - link "Manage Cookies" [ref=e351] [cursor=pointer]:
            - /url: /business/enquiry/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy#
        - listitem [ref=e352]:
          - link "Sitemap" [ref=e353] [cursor=pointer]:
            - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
        - link "Cyber Essentials Certified" [ref=e354] [cursor=pointer]:
          - /url: /cyber-essentials-certificate/
          - img "Suzuki Cyber Essentials Certified" [ref=e355]
  - alert [ref=e356]
  - generic: ...
```

# Test source

```ts
  1106 |   await allure.step("Verify Thank you message is displayed", async () => {
  1107 |     await expect(page.getByRole("heading", { name: "Thank you!" })).toBeVisible();
  1108 |   });
  1109 | });
  1110 | 
  1111 | test("Business Enquiry - 24 cars", async ({ page }) => {
  1112 |   await allure.epic("Business Enquiry");
  1113 |   await allure.feature("Sending business enquiry for 24 cars");
  1114 |   await allure.severity(Severity.CRITICAL);
  1115 |   await allure.description("User is able to send a business enquiry for 24 cars");
  1116 |   await allure.owner("QA Team");
  1117 |   await allure.tag("smoke");
  1118 |   await page.goto(
  1119 |     "https://staging-cars.test-suzuki.co.uk/business/enquiry/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  1120 |   );
  1121 |   await acceptCookiesIfPresent(page);
  1122 | 
  1123 |   await allure.step("Select dealer option", async () => {
  1124 |   await page.getByRole("radio", { name: "Up to 24 cars Your nearest" }).check();
  1125 | });
  1126 | await allure.step("Click Choose a Dealer", async () => {
  1127 |   await page.getByRole("button", { name: "Choose a Dealer" }).click();
  1128 | });
  1129 | await allure.step("Enter postcode or location", async () => {
  1130 |   await page.getByRole("searchbox", { name: "Postcode or location" }).fill("MK4 4AE");
  1131 | });
  1132 | await allure.step("Click search", async () => {
  1133 |   await page.getByRole("button", { name: "Search postcode or location" }).click();
  1134 | });
  1135 | await allure.step("Click Your details", async () => {
  1136 |   await page.getByRole("button", { name: "Your details" }).nth(1).click();
  1137 | });
  1138 | await allure.step("Select title", async () => {
  1139 |   await page.getByRole("combobox", { name: "Select Title" }).click();
  1140 |   await page.getByRole("option", { name: "Mr", exact: true }).click();
  1141 | });
  1142 | await allure.step("Fill First name and Last name fields", async () => {
  1143 |   await page.getByRole("textbox", { name: "First name (required)" }).fill("Test");
  1144 |   await page.getByRole("textbox", { name: "Last name (required)" }).fill("Data");
  1145 | });
  1146 | await allure.step("Fill Job title", async () => {
  1147 |   await page.getByRole("textbox", { name: "Job title (required)" }).fill("Job");
  1148 | });
  1149 | await allure.step("Fill Business email", async () => {
  1150 |   await page.getByRole("textbox", { name: "Business email (required)" }).fill("hello@suzuki.co.uk");
  1151 | });
  1152 | await allure.step("Fill Business phone", async () => {
  1153 |   await page.getByRole("textbox", { name: "Business phone (required)" }).fill("022342344");
  1154 | });
  1155 | await allure.step("Fill Business name", async () => {
  1156 |   await page.getByRole("textbox", { name: "Business name (required)" }).fill("Business");
  1157 | });
  1158 | await allure.step("Fill Business postcode", async () => {
  1159 |   await page.getByRole("textbox", { name: "Business postcode *" }).fill("MK4 4AE");
  1160 | });
  1161 | await allure.step("Fill Building number / name", async () => {
  1162 |   await page.getByRole("textbox", { name: "Building number / name (" }).fill("7e");
  1163 | });
  1164 | await allure.step("Fill Street name", async () => {
  1165 |   await page.getByRole("textbox", { name: "Street name (required)" }).fill("Street");
  1166 | });
  1167 | await allure.step("Fill Town", async () => {
  1168 |   await page.getByRole("textbox", { name: "Town (required)" }).fill("Town");
  1169 | });
  1170 | await allure.step("Fill County", async () => {
  1171 |   await page.getByRole("textbox", { name: "County (required)" }).fill("County");
  1172 | });
  1173 | await allure.step("Accept Email opt in", async () => {
  1174 |   await page.getByRole("checkbox", { name: "Email" }).check();
  1175 | });
  1176 | await allure.step("Click Review your enquiry", async () => {
  1177 |   await page.getByRole("button", { name: "Review your enquiry" }).click();
  1178 | });
  1179 | await allure.step("Click Send enquiry", async () => {
  1180 |   await page.getByRole("button", { name: "Send enquiry" }).click();
  1181 | });
  1182 | await allure.step("Verify Thank you message is displayed", async () => {
  1183 |   await expect(page.getByRole("heading", { name: "Thank you!" })).toBeVisible();
  1184 | });
  1185 | });
  1186 | 
  1187 | test("Business Enquiry - 25+ cars", async ({ page }) => {
  1188 |   await allure.epic("Business Enquiry");
  1189 |   await allure.feature("Sending business enquiry for 25+ cars");
  1190 |   await allure.severity(Severity.CRITICAL);
  1191 |   await allure.description("User is able to send a business enquiry for 25+ cars");
  1192 |   await allure.owner("QA Team");
  1193 |   await allure.tag("smoke");
  1194 |   await page.goto(
  1195 |     "https://staging-cars.test-suzuki.co.uk/business/enquiry/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  1196 |   );
  1197 |   await acceptCookiesIfPresent(page);
  1198 | 
  1199 |   await allure.step("Select dealer option", async () => {
  1200 |   await page.getByRole('radio', { name: '25+ cars The Suzuki buiness' }).check();
  1201 | });
  1202 | await allure.step("Click Choose a Dealer", async () => {
  1203 |   await page.getByRole("button", { name: "Choose a Dealer" }).click();
  1204 | });
  1205 | await allure.step("Enter postcode or location", async () => {
> 1206 |   await page.getByRole("searchbox", { name: "Postcode or location" }).fill("MK4 4AE");
       |                                                                       ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  1207 | });
  1208 | await allure.step("Click search", async () => {
  1209 |   await page.getByRole("button", { name: "Search postcode or location" }).click();
  1210 | });
  1211 | await allure.step("Click Your details", async () => {
  1212 |   await page.getByRole("button", { name: "Your details" }).nth(1).click();
  1213 | });
  1214 | await allure.step("Select title", async () => {
  1215 |   await page.getByRole("combobox", { name: "Select Title" }).click();
  1216 |   await page.getByRole("option", { name: "Mr", exact: true }).click();
  1217 | });
  1218 | await allure.step("Fill First name and Last name fields", async () => {
  1219 |   await page.getByRole("textbox", { name: "First name (required)" }).fill("Test");
  1220 |   await page.getByRole("textbox", { name: "Last name (required)" }).fill("Data");
  1221 | });
  1222 | await allure.step("Fill Job title", async () => {
  1223 |   await page.getByRole("textbox", { name: "Job title (required)" }).fill("Job");
  1224 | });
  1225 | await allure.step("Fill Business email", async () => {
  1226 |   await page.getByRole("textbox", { name: "Business email (required)" }).fill("hello@suzuki.co.uk");
  1227 | });
  1228 | await allure.step("Fill Business phone", async () => {
  1229 |   await page.getByRole("textbox", { name: "Business phone (required)" }).fill("022342344");
  1230 | });
  1231 | await allure.step("Fill Business name", async () => {
  1232 |   await page.getByRole("textbox", { name: "Business name (required)" }).fill("Business");
  1233 | });
  1234 | await allure.step("Fill Business postcode", async () => {
  1235 |   await page.getByRole("textbox", { name: "Business postcode *" }).fill("MK4 4AE");
  1236 | });
  1237 | await allure.step("Fill Building number / name", async () => {
  1238 |   await page.getByRole("textbox", { name: "Building number / name (" }).fill("7e");
  1239 | });
  1240 | await allure.step("Fill Street name", async () => {
  1241 |   await page.getByRole("textbox", { name: "Street name (required)" }).fill("Street");
  1242 | });
  1243 | await allure.step("Fill Town", async () => {
  1244 |   await page.getByRole("textbox", { name: "Town (required)" }).fill("Town");
  1245 | });
  1246 | await allure.step("Fill County", async () => {
  1247 |   await page.getByRole("textbox", { name: "County (required)" }).fill("County");
  1248 | });
  1249 | await allure.step("Accept Email opt in", async () => {
  1250 |   await page.getByRole("checkbox", { name: "Email" }).check();
  1251 | });
  1252 | await allure.step("Click Review your enquiry", async () => {
  1253 |   await page.getByRole("button", { name: "Review your enquiry" }).click();
  1254 | });
  1255 | await allure.step("Click Send enquiry", async () => {
  1256 |   await page.getByRole("button", { name: "Send enquiry" }).click();
  1257 | });
  1258 | await allure.step("Verify Thank you message is displayed", async () => {
  1259 |   await expect(page.getByRole("heading", { name: "Thank you!" })).toBeVisible();
  1260 | });
  1261 | });
```