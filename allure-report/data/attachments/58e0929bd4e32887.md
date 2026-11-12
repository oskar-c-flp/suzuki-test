# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 4W.spec.ts >> Request a test drive - SWIFT
- Location: tests\4W.spec.ts:143:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Review booking' }) resolved to 2 elements:
    1) <button type="button" class="styles_button_wrapper__M3BJg ">…</button> aka getByRole('button', { name: 'Review booking' }).first()
    2) <button type="button" class="styles_button_wrapper__M3BJg ">…</button> aka getByRole('button', { name: 'Review booking' }).nth(1)

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
              - paragraph [ref=e62]: Step 3 of 4
            - heading "Your details" [level=1] [ref=e63]
          - generic [ref=e64]:
            - generic [ref=e67]:
              - generic:
                - group "Are you a Personal, Motability or Business Customer? required":
                  - generic:
                    - generic:
                      - text: Are you a Personal, Motability or Business Customer?
                      - generic: required
                      - generic: "*"
                  - generic:
                    - generic:
                      - generic:
                        - generic: Personal
                        - radio "Customer type Personal" [disabled]
                    - generic:
                      - generic:
                        - generic: Motability
                        - radio "Customer type Motability" [checked] [disabled]
                    - generic:
                      - generic:
                        - generic: Business
                        - radio "Customer type Business" [disabled]
                - paragraph
              - paragraph [ref=e70]: We will only use your personal information for the purposes of contacting you about your test drive.
              - generic [ref=e71]:
                - generic [ref=e73]:
                  - generic [ref=e74]:
                    - generic [ref=e75]:
                      - generic [ref=e76]: List collapsed.
                      - generic:
                        - generic:
                          - text: Title
                          - generic: required
                          - generic: (required)
                      - combobox "Title required" [ref=e78] [cursor=pointer]:
                        - generic [ref=e79]: Mr
                    - paragraph
                  - generic [ref=e80]:
                    - generic [ref=e81]:
                      - generic [ref=e82]:
                        - text: First name
                        - generic [ref=e83]: (required)
                        - text: (required)
                      - textbox "First name (required)" [ref=e84]:
                        - /placeholder: ""
                        - text: Test
                    - paragraph
                  - generic [ref=e85]:
                    - generic [ref=e86]:
                      - generic [ref=e87]:
                        - text: Last name
                        - generic [ref=e88]: (required)
                        - text: (required)
                      - textbox "Last name (required)" [ref=e89]:
                        - /placeholder: ""
                        - text: Data
                    - paragraph
                  - generic [ref=e91]:
                    - generic [ref=e92]:
                      - generic [ref=e93]:
                        - text: Postcode
                        - generic [ref=e94]: (required)
                        - text: (required)
                      - textbox "Postcode (required)" [ref=e95]:
                        - /placeholder: ""
                        - text: SW1W 0NY
                    - paragraph
                  - generic [ref=e96]:
                    - generic [ref=e97]:
                      - generic [ref=e98]:
                        - text: Building number / name
                        - generic [ref=e99]: (required)
                        - text: (required)
                      - textbox "Building number / name (required)" [ref=e100]:
                        - /placeholder: ""
                        - text: 7E
                    - paragraph
                  - generic [ref=e101]:
                    - generic [ref=e102]:
                      - generic [ref=e103]:
                        - text: Email
                        - generic [ref=e104]: (required)
                        - text: (required)
                      - textbox "Email (required)" [ref=e105]:
                        - /placeholder: ""
                        - text: test@gmail.com
                    - paragraph
                  - generic [ref=e106]:
                    - generic [ref=e107]:
                      - generic [ref=e108]:
                        - text: Phone Number
                        - generic [ref=e109]: (required)
                        - text: (required)
                      - textbox "Phone Number (required)" [ref=e110]:
                        - /placeholder: ""
                        - text: "022845456"
                    - paragraph
                - generic [ref=e112]:
                  - text: Suzuki GB PLC and our
                  - link "authorised Dealer network (opens in new tab)" [ref=e114] [cursor=pointer]:
                    - /url: /find-a-dealer/
                    - text: authorised Dealer network
                    - generic [ref=e115]: (opens in new tab)
                  - text: value your privacy and are committed to protecting your data. If you'd like to receive updates on news, offers, and services, simply OPT IN by checking the boxes below.
                - generic [ref=e116]:
                  - generic [ref=e117]:
                    - generic [ref=e118]: Phone
                    - checkbox "Phone" [ref=e120] [cursor=pointer]
                  - generic [ref=e121]:
                    - generic [ref=e122]: Email
                    - checkbox "Email" [checked] [active] [ref=e124] [cursor=pointer]
                  - generic [ref=e125]:
                    - generic [ref=e126]: SMS
                    - checkbox "SMS" [ref=e128] [cursor=pointer]
                - generic [ref=e130]:
                  - text: To find out more, please see
                  - link "SGB's Privacy Policy (opens in new tab)" [ref=e131] [cursor=pointer]:
                    - /url: /privacy/
                    - text: SGB's Privacy Policy
                    - generic [ref=e132]: (opens in new tab)
                  - text: . You can withdraw your consent to receiving communications at any time by emailing
                  - link "customerservices@suzuki.co.uk" [ref=e133] [cursor=pointer]:
                    - /url: mailto:customerservices@suzuki.co.uk
                  - text: .
            - button "Review booking" [ref=e136] [cursor=pointer]
        - status [ref=e139]: 6 locations found. Brayley Suzuki selected.
      - generic [ref=e143]:
        - paragraph
        - paragraph [ref=e144]:
          - strong [ref=e145]: "e Vitara 49kWh Motion Auto: £229 a month. 0% APR, 49-month PCP agreement. £4,858 customer deposit & £9,149 optional final payment. 8,000 miles per annum."
          - text: "HP finance also available. Credit subject to status, UK residents 18+, Suzuki Financial Services Ltd, No. 1 John Street, Callaghan Square, Cardiff, CF10 5PE. With Personal Contract Purchase (PCP) you have the option after you have paid all of the regular monthly repayments to: (1) Return the vehicle and not pay the Optional Final Repayment. In this example if the vehicle has exceeded 32,667 miles, a charge of 9.6p (including VAT at 20%) will apply per excess mile. If the vehicle is in good condition (fair wear and tear accepted) and has not exceeded 32,667 miles you will have nothing further to pay. (2) Pay the Optional Final Repayment to own the vehicle or (3) Part exchange the vehicle subject to settlement of your existing finance agreement; new finance agreements are subject to status. Excludes Channel Islands and Isle of Man Dealers. Valid from 1st October 2026 and 31st December 2026. Offers may be varied or withdrawn at any time."
        - paragraph [ref=e146]:
          - strong [ref=e147]: PCP end of contract options
          - text: "With Personal Contract Purchase (PCP) you have the option after you have paid all of the regular monthly repayments to: (1) Return the vehicle and not pay the Optional Final Repayment. In this example if the vehicle has exceeded 32,667 miles, a charge of 4.8p (including VAT at 20%) will apply per excess mile. If the vehicle is in good condition (fair wear and tear accepted) and has not exceeded 32,667 miles you will have nothing further to pay. (2) Pay the Optional Final Repayment to own the vehicle or (3) Part exchange the vehicle subject to settlement of your existing finance agreement; new finance agreements are subject to status."
        - paragraph [ref=e148]
        - paragraph [ref=e149]:
          - text: "*Offer applies to UK private retail customers purchasing and registering a new Suzuki from participating Dealers between 1st October 2026 until 31st December 2026. Excludes Channel Islands and Isle of Man Dealers. Offer cannot be used in conjunction with any other offer unless otherwise stated. Credit subject to status, UK residents 18+. This offer is subject to availability and Suzuki Financial Services Ltd reserves the right to withdraw or amend this offer without notice or prior warning. Suzuki Financial Services Ltd, part of Lloyds Banking Group, Suzuki Finance is a trading style of"
          - generic [ref=e150]: Suzuki Financial Services Ltd, No. 1 John Street, Callaghan Square, Cardiff, CF10 5PE
          - text: . All prices, specifications and offers correct at the time of being published. Offers may be varied or withdrawn at any time.
        - paragraph [ref=e151]
        - paragraph [ref=e152]:
          - strong [ref=e153]: "Last updated on: 1st October 2026"
      - button [ref=e155] [cursor=pointer]:
        - img "Back to Top" [ref=e156]
    - contentinfo [ref=e157]:
      - generic [ref=e158]:
        - paragraph [ref=e159]: Not finished? It's all here...
        - generic [ref=e160]:
          - button "Search for results" [ref=e161] [cursor=pointer]:
            - img "Search icon" [ref=e162]
          - searchbox "Search" [ref=e163]
        - generic [ref=e164]:
          - generic [ref=e165]: "Popular searches:"
          - list [ref=e166]:
            - listitem [ref=e167]:
              - link "Vitara" [ref=e168] [cursor=pointer]:
                - /url: /search/?search=Vitara&pageCount=1
            - listitem [ref=e170]:
              - link "Motability" [ref=e171] [cursor=pointer]:
                - /url: /search/?search=Motability&pageCount=1
            - listitem [ref=e173]:
              - link "Dealers" [ref=e174] [cursor=pointer]:
                - /url: /search/?search=Dealers&pageCount=1
            - listitem [ref=e176]:
              - link "Hybrid" [ref=e177] [cursor=pointer]:
                - /url: /search/?search=Hybrid&pageCount=1
            - listitem [ref=e179]:
              - link "Contact" [ref=e180] [cursor=pointer]:
                - /url: /search/?search=Contact&pageCount=1
            - listitem [ref=e182]:
              - link "Swift" [ref=e183] [cursor=pointer]:
                - /url: /search/?search=Swift&pageCount=1
            - listitem [ref=e185]:
              - link "0% Car Finance" [ref=e186] [cursor=pointer]:
                - /url: /search/?search=0%25%20Car%20Finance&pageCount=1
            - listitem [ref=e188]:
              - link "Electric" [ref=e189] [cursor=pointer]:
                - /url: /search/?search=Electric&pageCount=1
      - generic [ref=e192]:
        - generic [ref=e193]:
          - generic [ref=e194]: Models
          - list [ref=e195]:
            - listitem [ref=e196]:
              - link "e Vitara" [ref=e197] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/e-vitara/
            - listitem [ref=e198]:
              - link "Swift" [ref=e199] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift/
            - listitem [ref=e200]:
              - link "S-Cross" [ref=e201] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/s-cross/
            - listitem [ref=e202]:
              - link "Vitara" [ref=e203] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/vitara/
            - listitem [ref=e204]:
              - link "Across" [ref=e205] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/across/
            - listitem [ref=e206]:
              - link "Ignis" [ref=e207] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/ignis/
            - listitem [ref=e208]:
              - link "Swace" [ref=e209] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swace/
            - listitem [ref=e210]:
              - link "Swift Sport" [ref=e211] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift-sport/
            - listitem [ref=e212]:
              - link "Jimny" [ref=e213] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/jimny/
        - generic [ref=e214]:
          - generic [ref=e215]: About Suzuki
          - list [ref=e216]:
            - listitem [ref=e217]:
              - link "About Us" [ref=e218] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/about-us/
            - listitem [ref=e219]:
              - link "Awards" [ref=e220] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/awards/
            - listitem [ref=e221]:
              - link "Contact Us" [ref=e222] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/
            - listitem [ref=e223]:
              - link "Careers" [ref=e224] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/careers/
            - listitem [ref=e225]:
              - link "Apprenticeships" [ref=e226] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/apprenticeships/
        - generic [ref=e227]:
          - generic [ref=e228]: Business
          - list [ref=e229]:
            - listitem [ref=e230]:
              - link "Company Car Driver" [ref=e231] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/company-car/
            - listitem [ref=e232]:
              - link "Fleet Managers" [ref=e233] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/fleet-manager/
            - listitem [ref=e234]:
              - link "Driving Instructors" [ref=e235] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/driving-school-programme/
            - listitem [ref=e236]:
              - link "Suzuki Dealer Franchise" [ref=e237] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/franchised-suzuki-dealer/
        - generic [ref=e238]:
          - generic [ref=e239]: Owners
          - list [ref=e240]:
            - listitem [ref=e241]:
              - link "Book a Service" [ref=e242] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/request-a-service/
            - listitem [ref=e243]:
              - link "Suzuki Servicing" [ref=e244] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/servicing/
            - listitem [ref=e245]:
              - link "Handbooks" [ref=e246] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/using-your-car/owners-handbooks/
        - generic [ref=e247]:
          - generic [ref=e248]: Suzuki Global
          - list [ref=e249]:
            - listitem [ref=e250]:
              - link "Bikes" [ref=e251] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/
            - listitem [ref=e252]:
              - link "ATV" [ref=e253] [cursor=pointer]:
                - /url: https://staging-atv.test-suzuki.co.uk/
            - listitem [ref=e254]:
              - link "Marine" [ref=e255] [cursor=pointer]:
                - /url: https://staging-marine.test-suzuki.co.uk/
        - generic [ref=e256]:
          - generic [ref=e257]: Useful Information
          - list [ref=e258]:
            - listitem [ref=e259]:
              - link "Privacy Policy" [ref=e260] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/
            - listitem [ref=e261]:
              - link "Cookie Policy" [ref=e262] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/cookie-policy/
            - listitem [ref=e263]:
              - link "Quality Policy" [ref=e264] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
            - listitem [ref=e265]:
              - link "Legal" [ref=e266] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/terms-of-use/
            - listitem [ref=e267]:
              - link "Section 172 Statement" [ref=e268] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/section-172-statement/
            - listitem [ref=e269]:
              - link "Tax Strategy" [ref=e270] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/uk-tax-strategy/
            - listitem [ref=e271]:
              - link "Human Trafficking Statement, opens in new tab" [ref=e272] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
                - text: Human Trafficking Statement
            - listitem [ref=e273]:
              - link "Certificate of Conformity" [ref=e274] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/certificate-of-conformity/
            - listitem [ref=e275]:
              - link "Sitemap" [ref=e276] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
            - listitem [ref=e277]:
              - link "Manage Cookies" [ref=e278] [cursor=pointer]:
                - /url: /request-a-test-drive/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy#
        - generic [ref=e279]:
          - generic [ref=e280]: Motability
          - list [ref=e281]:
            - listitem [ref=e282]:
              - link "What is Motability" [ref=e283] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/what-is-motability/
            - listitem [ref=e284]:
              - link "Motability Offers" [ref=e285] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/
        - generic [ref=e286]:
          - generic [ref=e287]: Categories
          - list [ref=e288]:
            - listitem [ref=e289]:
              - link "Electric Cars" [ref=e290] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/electric-cars/
            - listitem [ref=e291]:
              - link "SUV Cars" [ref=e292] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/suv-crossovers/
            - listitem [ref=e293]:
              - link "Small Cars" [ref=e294] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/small-hatchbacks/
            - listitem [ref=e295]:
              - link "Hybrid Cars" [ref=e296] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/
            - listitem [ref=e297]:
              - link "City Cars" [ref=e298] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/city-cars/
            - listitem [ref=e299]:
              - link "Automatic Cars" [ref=e300] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/automatic-cars/
            - listitem [ref=e301]:
              - link "Family Cars" [ref=e302] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/family-cars/
            - listitem [ref=e303]:
              - link "Plug-In Hybrid Cars" [ref=e304] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/plug-in-hybrid-electric-vehicles/
            - listitem [ref=e305]:
              - link "AllGrip" [ref=e306] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/allgrip/
        - generic [ref=e307]:
          - generic [ref=e308]: Get your Suzuki
          - list [ref=e309]:
            - listitem [ref=e310]:
              - link "Request a Brochure" [ref=e311] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-brochure/
            - listitem [ref=e312]:
              - link "Find us" [ref=e313] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/find-a-dealer/
            - listitem [ref=e314]:
              - link "Request A Test Drive" [ref=e315] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-test-drive/
            - listitem [ref=e316]:
              - link "Car Configurator" [ref=e317] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/configure/
            - listitem [ref=e318]:
              - link "Finance Calculator" [ref=e319] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/finance-calculator/
        - generic [ref=e320]:
          - generic [ref=e321]: Suzuki on social media
          - generic [ref=e322]:
            - link "Visit our Facebook page (opens in new tab)" [ref=e323] [cursor=pointer]:
              - /url: http://facebook.com/suzukicarsuk/
            - link "Visit our X (formerly Twitter) page (opens in new tab)" [ref=e324] [cursor=pointer]:
              - /url: http://twitter.com/SuzukiCarsUK
            - link "Visit our Instagram page (opens in new tab)" [ref=e325] [cursor=pointer]:
              - /url: https://instagram.com/suzukicarsuk
            - link "Visit our YouTube page (opens in new tab)" [ref=e326] [cursor=pointer]:
              - /url: https://www.youtube.com/user/SuzukiCarsUK
      - list "Legal and policy links" [ref=e327]:
        - listitem [ref=e328]:
          - link "Quality Policy" [ref=e329] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
        - listitem [ref=e330]:
          - link "Human Trafficking Statement" [ref=e331] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
        - listitem [ref=e332]:
          - link "Manage Cookies" [ref=e333] [cursor=pointer]:
            - /url: /request-a-test-drive/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy#
        - listitem [ref=e334]:
          - link "Sitemap" [ref=e335] [cursor=pointer]:
            - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
        - link "Cyber Essentials Certified" [ref=e336] [cursor=pointer]:
          - /url: /cyber-essentials-certificate/
          - img "Suzuki Cyber Essentials Certified" [ref=e337]
  - alert [ref=e338]
  - generic: ...
```

# Test source

```ts
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
  153 |     "https://staging-cars.test-suzuki.co.uk/request-a-test-drive/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  154 |   );
  155 |   await acceptCookiesIfPresent(page);
  156 | 
  157 |   await allure.step("Select customer type Motability", async () => {
  158 |     await page.getByRole('radio', { name: 'Customer type Motability' }).check();
  159 |   });
  160 |   await allure.step("Select model", async () => {
  161 |     await page.locator('label:nth-child(3) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img').click();
  162 |   });
  163 |   await allure.step("Click Choose a Dealer", async () => {
  164 |     await page.getByRole('button', { name: 'Choose a Dealer' }).click();
  165 |   });
  166 |   await allure.step("Enter postcode or location", async () => {
  167 |     await page.getByRole('searchbox', { name: 'Postcode or location' }).fill('sw1w 0ny');
  168 |   });
  169 |   await allure.step("Click search", async () => {
  170 |     await page.getByRole('button', { name: 'Search postcode or location' }).click();
  171 |   });
  172 |   await allure.step("Click Your Details", async () => {
  173 |     await page.getByRole('button', { name: 'Your Details' }).nth(1).click();
  174 |   });
  175 |   await allure.step("Select title", async () => {
  176 |     await page.getByRole('combobox', { name: 'Select Title' }).click();
  177 |     await page.getByRole('option', { name: 'Mr', exact: true }).click();
  178 |   });
  179 |   await allure.step("Fill First name and Last name fields", async () => {
  180 |     await page.getByRole('textbox', { name: 'First name (required)' }).fill('Test');
  181 |     await page.getByRole('textbox', { name: 'Last name (required)' }).fill('Data');
  182 |   });
  183 |   await allure.step("Fill Postcode", async () => {
  184 |     await page.getByRole('textbox', { name: 'Postcode (required)' }).fill('SW1W 0NY');
  185 |   });
  186 |   await allure.step("Fill Building number / name", async () => {
  187 |     await page.getByRole('textbox', { name: 'Building number / name (' }).fill('7E');
  188 |   });
  189 |   await allure.step("Fill Email", async () => {
  190 |     await page.getByRole('textbox', { name: 'Email (required)' }).fill('test@gmail.com');
  191 |   });
  192 |   await allure.step("Fill Phone number", async () => {
  193 |     await page.getByRole('textbox', { name: 'Phone Number (required)' }).fill('022845456');
  194 |   });
  195 |   await allure.step("Email opt in", async () => {
  196 |     await page.getByRole('checkbox', { name: 'Email' }).check();
  197 |   });
  198 |   await allure.step("Click Review booking", async () => {
> 199 |     await page.getByRole('button', { name: 'Review booking' }).click();
      |                                                                ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Review booking' }) resolved to 2 elements:
  200 |   });
  201 |   await allure.step("Click Confirm booking", async () => {
  202 |     await page.getByRole('button', { name: 'Confirm booking' }).nth(1).click();
  203 |   });
  204 |   await allure.step("Verify Booking confirmed heading is displayed", async () => {
  205 |     await expect(page.getByRole('heading', { name: 'Booking confirmed' })).toBeVisible();
  206 |   });
  207 | });
```