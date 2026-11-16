# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 4W.spec.ts >> Finance - Vitara
- Location: tests\4W.spec.ts:837:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('slider', { name: 'A larger deposit could reduce' })

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
      - navigation "Secondary site navigation" [ref=e55]:
        - generic [ref=e56]:
          - generic [ref=e57]: VITARA
          - list [ref=e58]:
            - listitem [ref=e59]:
              - link "Overview" [ref=e60] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/vitara/?dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpJTIwVml0YXJhJTIwQ2FyJTIwRmluYW5jZSUyMENhbGN1bGF0b3IlMjAlN0MlMjBTdXp1a2klMjBDYXJzJTIwVUsmbmF2aWdhdGlvbl9lbGVtZW50PU92ZXJ2aWV3
            - listitem [ref=e61]:
              - link "Colours & Styling" [ref=e62] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/vitara/colours-and-styling/?dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpJTIwVml0YXJhJTIwQ2FyJTIwRmluYW5jZSUyMENhbGN1bGF0b3IlMjAlN0MlMjBTdXp1a2klMjBDYXJzJTIwVUsmbmF2aWdhdGlvbl9lbGVtZW50PUNvbG91cnMlMjAlMjYlMjBTdHlsaW5n
            - listitem [ref=e63]:
              - link "Configure" [ref=e64] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/vitara/configure/?dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpJTIwVml0YXJhJTIwQ2FyJTIwRmluYW5jZSUyMENhbGN1bGF0b3IlMjAlN0MlMjBTdXp1a2klMjBDYXJzJTIwVUsmbmF2aWdhdGlvbl9lbGVtZW50PUNvbmZpZ3VyZQ
            - listitem [ref=e65]:
              - link "Specs" [ref=e66] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/vitara/specs-performance/?dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpJTIwVml0YXJhJTIwQ2FyJTIwRmluYW5jZSUyMENhbGN1bGF0b3IlMjAlN0MlMjBTdXp1a2klMjBDYXJzJTIwVUsmbmF2aWdhdGlvbl9lbGVtZW50PVNwZWNz
            - listitem [ref=e67]:
              - link "Finance & Offers" [ref=e68] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/vitara/finance-calculator/?dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpJTIwVml0YXJhJTIwQ2FyJTIwRmluYW5jZSUyMENhbGN1bGF0b3IlMjAlN0MlMjBTdXp1a2klMjBDYXJzJTIwVUsmbmF2aWdhdGlvbl9lbGVtZW50PUZpbmFuY2UlMjAlMjYlMjBPZmZlcnM
          - generic [ref=e69]:
            - link "Test Drive" [ref=e70] [cursor=pointer]:
              - /url: https://staging-cars.test-suzuki.co.uk/request-a-test-drive/?v=VklUQVJB
            - button "Toggle dropdown menu" [ref=e72] [cursor=pointer]
      - generic [ref=e74]:
        - generic [ref=e75]:
          - paragraph [ref=e76]: FINANCE
          - heading "VITARA CAR FINANCE CALCULATOR" [level=1] [ref=e77]
          - paragraph [ref=e79]: Use the filters below to select your model, grade and pricing options to fully customise your finance offering
        - form "Finance calculator" [ref=e80]:
          - generic [ref=e81]:
            - generic [ref=e82]:
              - radiogroup "Are you a Personal, Mobility or Business Customer? (Required) More information about customer types" [ref=e83]:
                - generic [ref=e86]:
                  - generic [ref=e87]:
                    - text: Are you a Personal, Mobility or Business Customer?*
                    - generic [ref=e88]: (Required)
                  - button "More information about customer types" [ref=e89] [cursor=pointer]
                - generic [ref=e91]:
                  - generic [ref=e92]:
                    - radio "Personal" [ref=e93]
                    - generic [ref=e94] [cursor=pointer]: Personal
                  - generic [ref=e96]:
                    - radio "Motability" [ref=e97]
                    - generic [ref=e98] [cursor=pointer]: Motability
                  - generic [ref=e100]:
                    - radio "Business" [ref=e101]
                    - generic [ref=e102] [cursor=pointer]: Business
                - status
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - text: Model
                      - generic: "*"
                      - generic: (Required)
                - combobox [disabled]: VITARA
            - generic [ref=e104]:
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - text: Grade type
                      - generic: "*"
                      - generic: (Required)
                - combobox [disabled]: MOTION MILD HYBRID Motion Mild Hybrid Manual
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - text: Finance type
                      - generic: "*"
                      - generic: (Required)
                  - button [disabled]
                - combobox [disabled]: Personal Contract Purchase
            - paragraph [ref=e107]: Personal Contract Purchase (PCP) is a finance plan that allows you to spread the cost of the car by making monthly payments over an agreed term, with a large proportion of the amount you repay deferred into an optional final repayment.
            - generic [ref=e108]:
              - group [disabled] [ref=e109]:
                - generic [ref=e110]:
                  - generic [ref=e111]: A larger deposit could reduce your monthly payments.
                  - button [disabled] [ref=e112] [cursor=pointer]
                - slider [disabled] [ref=e114]: "25"
                - generic [ref=e115]: Minimum value is 25. Maximum value is 49.
                - generic [ref=e116]: "25"
                - generic [ref=e117]: "25"
                - generic [ref=e118]: "49"
                - generic [ref=e119]: Value must be set
              - group [disabled] [ref=e120]:
                - generic [ref=e121]:
                  - generic [ref=e122]: What’s your annual mileage?
                  - button [disabled] [ref=e123] [cursor=pointer]
                - slider [disabled] [ref=e125]: "6000"
                - generic [ref=e126]: Minimum value is 6000. Maximum value is 24000.
                - generic [ref=e127]: 6,000
                - generic [ref=e128]: 6,000
                - generic [ref=e129]: 24,000
                - generic [ref=e130]: Value must be set
              - generic [ref=e131]:
                - group [disabled] [ref=e133]:
                  - generic [ref=e136]:
                    - generic [ref=e137]: Quote using your preferred deposit or monthly payment?
                    - button [disabled] [ref=e138] [cursor=pointer]
                  - generic [ref=e140]:
                    - generic [ref=e141] [cursor=pointer]:
                      - radio [disabled] [ref=e142]
                      - generic [ref=e143]: Monthly Payment
                    - generic [ref=e144] [cursor=pointer]:
                      - radio [checked] [disabled] [ref=e145]
                      - generic [ref=e146]: Deposit
                - generic [ref=e148]:
                  - generic [ref=e149]:
                    - generic [ref=e150]: Deposit
                    - button [disabled] [ref=e152] [cursor=pointer]
                  - generic [ref=e154]:
                    - generic [ref=e155]: £
                    - textbox [disabled] [ref=e156]:
                      - /placeholder: "0.00"
                      - text: "0"
            - paragraph [ref=e157]: Adjust the deposit or monthly payment to explore finance options that suit your needs.
            - generic [ref=e159]:
              - button [disabled] [ref=e160]:
                - generic [ref=e161]: Calculate financing
              - link [disabled]:
                - /url: /new-cars/vitara/finance-calculator/?model=Vitara&grade=Motion%20Mild%20Hybrid#
                - text: COMPARE PCP, HP & PCH
        - generic [ref=e164]:
          - button [disabled] [ref=e165] [cursor=pointer]:
            - generic [ref=e166]: Print
          - button [disabled] [ref=e168]:
            - generic [ref=e169]: Submit to dealer
      - generic [ref=e175]:
        - generic [ref=e177]:
          - img "SUZUKI CAR INSURANCE" [ref=e178]
          - generic [ref=e180]:
            - heading "SUZUKI CAR INSURANCE" [level=4] [ref=e181]
            - paragraph [ref=e182]: Get a quote for flexible monthly insurance designed for your Suzuki.
            - link "Get A Quote" [ref=e184] [cursor=pointer]:
              - /url: https://cars.suzuki.co.uk/insurance/?utm_source=suzuki&utm_medium=website&utm_campaign=finance_to_insurance&utm_content=vitara
        - generic [ref=e192]:
          - heading "READY TO CONFIGURE" [level=4] [ref=e193]
          - paragraph [ref=e194]: Build your perfect Suzuki and tailor it to your lifestyle.
          - link "Configure Now" [ref=e196] [cursor=pointer]:
            - /url: https://staging-cars.test-suzuki.co.uk/new-cars/vitara/configure/
        - generic [ref=e203]:
          - heading "BOOK A TEST DRIVE" [level=4] [ref=e204]
          - paragraph [ref=e205]: Experience your Suzuki on the road and find the right fit for you.
          - link "Book A Test Drive" [ref=e207] [cursor=pointer]:
            - /url: https://staging-cars.test-suzuki.co.uk/request-a-test-drive/
      - paragraph [ref=e217]:
        - strong [ref=e218]: Terms of credit
        - text: Credit is available to UK residents aged 18 years or over, subject to status, from Suzuki Finance, a trading style of
        - generic [ref=e219]: Suzuki Financial Services Ltd, No. 1 John Street, Callaghan Square, Cardiff, CF10 5PE
        - text: ". With Personal Contract Purchase (PCP) you have the option after you have paid all of the regular monthly repayments to: (1) Return the vehicle and not pay the Optional Final Payment. If the vehicle has exceeded the maximum permitted mileage, a charge will apply per excess mile. If the vehicle is in good condition (fair wear and tear accepted) and has not exceeded the maximum permitted mileage you will have nothing further to pay. (2) Pay the Optional Final Repayment to own the vehicle or (3) Part exchange the vehicle subject to settlement of your existing finance agreement; new finance agreements are subject to status."
        - generic [ref=e220]: Valid from 1st October 2026 and 31st December 2026
        - text: .
        - strong [ref=e221]: Terms of hire
        - text: Personal and Business Contract hire is subject to status and approval, available to UK residents aged 18 and over. Contract Hire is provided by Suzuki Contract Hire, a trading style of Lex Autolease Limited, PO Box 3982, Chester, CH1 9XD. If the vehicle exceeds the contract mileage, an excess mileage charge will apply. You will not own the vehicle and it should be returned to us in a condition that meets BVRLA ‘fair wear and tear’ guidelines, otherwise charges may apply. Lex Autolease Limited. Registered in England & Wales No. 1090741.
        - strong [ref=e222]: "Registered office: 25 Gresham Street, London, EC2V 7HN"
        - text: .
    - contentinfo [ref=e223]:
      - generic [ref=e224]:
        - paragraph [ref=e225]: Not finished? It's all here...
        - generic [ref=e226]:
          - button "Search for results" [ref=e227] [cursor=pointer]:
            - img "Search icon" [ref=e228]
          - searchbox "Search" [ref=e229]
        - generic [ref=e230]:
          - generic [ref=e231]: "Popular searches:"
          - list [ref=e232]:
            - listitem [ref=e233]:
              - link "Vitara" [ref=e234] [cursor=pointer]:
                - /url: /search/?search=Vitara&pageCount=1
            - listitem [ref=e236]:
              - link "Motability" [ref=e237] [cursor=pointer]:
                - /url: /search/?search=Motability&pageCount=1
            - listitem [ref=e239]:
              - link "Dealers" [ref=e240] [cursor=pointer]:
                - /url: /search/?search=Dealers&pageCount=1
            - listitem [ref=e242]:
              - link "Hybrid" [ref=e243] [cursor=pointer]:
                - /url: /search/?search=Hybrid&pageCount=1
            - listitem [ref=e245]:
              - link "Contact" [ref=e246] [cursor=pointer]:
                - /url: /search/?search=Contact&pageCount=1
            - listitem [ref=e248]:
              - link "Swift" [ref=e249] [cursor=pointer]:
                - /url: /search/?search=Swift&pageCount=1
            - listitem [ref=e251]:
              - link "0% Car Finance" [ref=e252] [cursor=pointer]:
                - /url: /search/?search=0%25%20Car%20Finance&pageCount=1
            - listitem [ref=e254]:
              - link "Electric" [ref=e255] [cursor=pointer]:
                - /url: /search/?search=Electric&pageCount=1
      - generic [ref=e258]:
        - generic [ref=e259]:
          - generic [ref=e260]: Models
          - list [ref=e261]:
            - listitem [ref=e262]:
              - link "e Vitara" [ref=e263] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/e-vitara/
            - listitem [ref=e264]:
              - link "Swift" [ref=e265] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift/
            - listitem [ref=e266]:
              - link "S-Cross" [ref=e267] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/s-cross/
            - listitem [ref=e268]:
              - link "Vitara" [ref=e269] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/vitara/
            - listitem [ref=e270]:
              - link "Across" [ref=e271] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/across/
            - listitem [ref=e272]:
              - link "Ignis" [ref=e273] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/ignis/
            - listitem [ref=e274]:
              - link "Swace" [ref=e275] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swace/
            - listitem [ref=e276]:
              - link "Swift Sport" [ref=e277] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift-sport/
            - listitem [ref=e278]:
              - link "Jimny" [ref=e279] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/jimny/
        - generic [ref=e280]:
          - generic [ref=e281]: About Suzuki
          - list [ref=e282]:
            - listitem [ref=e283]:
              - link "About Us" [ref=e284] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/about-us/
            - listitem [ref=e285]:
              - link "Awards" [ref=e286] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/awards/
            - listitem [ref=e287]:
              - link "Contact Us" [ref=e288] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/
            - listitem [ref=e289]:
              - link "Careers" [ref=e290] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/careers/
            - listitem [ref=e291]:
              - link "Apprenticeships" [ref=e292] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/apprenticeships/
        - generic [ref=e293]:
          - generic [ref=e294]: Business
          - list [ref=e295]:
            - listitem [ref=e296]:
              - link "Company Car Driver" [ref=e297] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/company-car/
            - listitem [ref=e298]:
              - link "Fleet Managers" [ref=e299] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/fleet-manager/
            - listitem [ref=e300]:
              - link "Driving Instructors" [ref=e301] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/driving-school-programme/
            - listitem [ref=e302]:
              - link "Suzuki Dealer Franchise" [ref=e303] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/franchised-suzuki-dealer/
        - generic [ref=e304]:
          - generic [ref=e305]: Owners
          - list [ref=e306]:
            - listitem [ref=e307]:
              - link "Book a Service" [ref=e308] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/request-a-service/
            - listitem [ref=e309]:
              - link "Suzuki Servicing" [ref=e310] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/servicing/
            - listitem [ref=e311]:
              - link "Handbooks" [ref=e312] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/using-your-car/owners-handbooks/
        - generic [ref=e313]:
          - generic [ref=e314]: Suzuki Global
          - list [ref=e315]:
            - listitem [ref=e316]:
              - link "Bikes" [ref=e317] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/
            - listitem [ref=e318]:
              - link "ATV" [ref=e319] [cursor=pointer]:
                - /url: https://staging-atv.test-suzuki.co.uk/
            - listitem [ref=e320]:
              - link "Marine" [ref=e321] [cursor=pointer]:
                - /url: https://staging-marine.test-suzuki.co.uk/
        - generic [ref=e322]:
          - generic [ref=e323]: Useful Information
          - list [ref=e324]:
            - listitem [ref=e325]:
              - link "Privacy Policy" [ref=e326] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/
            - listitem [ref=e327]:
              - link "Cookie Policy" [ref=e328] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/cookie-policy/
            - listitem [ref=e329]:
              - link "Quality Policy" [ref=e330] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
            - listitem [ref=e331]:
              - link "Legal" [ref=e332] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/terms-of-use/
            - listitem [ref=e333]:
              - link "Section 172 Statement" [ref=e334] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/section-172-statement/
            - listitem [ref=e335]:
              - link "Tax Strategy" [ref=e336] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/uk-tax-strategy/
            - listitem [ref=e337]:
              - link "Human Trafficking Statement, opens in new tab" [ref=e338] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
                - text: Human Trafficking Statement
            - listitem [ref=e339]:
              - link "Certificate of Conformity" [ref=e340] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/certificate-of-conformity/
            - listitem [ref=e341]:
              - link "Sitemap" [ref=e342] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
            - listitem [ref=e343]:
              - link "Manage Cookies" [ref=e344] [cursor=pointer]:
                - /url: /new-cars/vitara/finance-calculator/?model=Vitara&grade=Motion%20Mild%20Hybrid#
        - generic [ref=e345]:
          - generic [ref=e346]: Motability
          - list [ref=e347]:
            - listitem [ref=e348]:
              - link "What is Motability" [ref=e349] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/what-is-motability/
            - listitem [ref=e350]:
              - link "Motability Offers" [ref=e351] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/
        - generic [ref=e352]:
          - generic [ref=e353]: Categories
          - list [ref=e354]:
            - listitem [ref=e355]:
              - link "Electric Cars" [ref=e356] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/electric-cars/
            - listitem [ref=e357]:
              - link "SUV Cars" [ref=e358] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/suv-crossovers/
            - listitem [ref=e359]:
              - link "Small Cars" [ref=e360] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/small-hatchbacks/
            - listitem [ref=e361]:
              - link "Hybrid Cars" [ref=e362] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/
            - listitem [ref=e363]:
              - link "City Cars" [ref=e364] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/city-cars/
            - listitem [ref=e365]:
              - link "Automatic Cars" [ref=e366] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/automatic-cars/
            - listitem [ref=e367]:
              - link "Family Cars" [ref=e368] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/family-cars/
            - listitem [ref=e369]:
              - link "Plug-In Hybrid Cars" [ref=e370] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/plug-in-hybrid-electric-vehicles/
            - listitem [ref=e371]:
              - link "AllGrip" [ref=e372] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/allgrip/
        - generic [ref=e373]:
          - generic [ref=e374]: Get your Suzuki
          - list [ref=e375]:
            - listitem [ref=e376]:
              - link "Request a Brochure" [ref=e377] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-brochure/
            - listitem [ref=e378]:
              - link "Find us" [ref=e379] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/find-a-dealer/
            - listitem [ref=e380]:
              - link "Request A Test Drive" [ref=e381] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-test-drive/
            - listitem [ref=e382]:
              - link "Car Configurator" [ref=e383] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/configure/
            - listitem [ref=e384]:
              - link "Finance Calculator" [ref=e385] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/finance-calculator/
        - generic [ref=e386]:
          - generic [ref=e387]: Suzuki on social media
          - generic [ref=e388]:
            - link "Visit our Facebook page (opens in new tab)" [ref=e389] [cursor=pointer]:
              - /url: http://facebook.com/suzukicarsuk/
            - link "Visit our X (formerly Twitter) page (opens in new tab)" [ref=e390] [cursor=pointer]:
              - /url: http://twitter.com/SuzukiCarsUK
            - link "Visit our Instagram page (opens in new tab)" [ref=e391] [cursor=pointer]:
              - /url: https://instagram.com/suzukicarsuk
            - link "Visit our YouTube page (opens in new tab)" [ref=e392] [cursor=pointer]:
              - /url: https://www.youtube.com/user/SuzukiCarsUK
      - list "Legal and policy links" [ref=e393]:
        - listitem [ref=e394]:
          - link "Quality Policy" [ref=e395] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
        - listitem [ref=e396]:
          - link "Human Trafficking Statement" [ref=e397] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
        - listitem [ref=e398]:
          - link "Manage Cookies" [ref=e399] [cursor=pointer]:
            - /url: /new-cars/vitara/finance-calculator/?model=Vitara&grade=Motion%20Mild%20Hybrid#
        - listitem [ref=e400]:
          - link "Sitemap" [ref=e401] [cursor=pointer]:
            - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
        - link "Cyber Essentials Certified" [ref=e402] [cursor=pointer]:
          - /url: /cyber-essentials-certificate/
          - img "Suzuki Cyber Essentials Certified" [ref=e403]
  - alert [ref=e404]: Suzuki Vitara Car Finance Calculator | Suzuki Cars UK
  - generic: ...
```

# Test source

```ts
  762 |   await allure.step("Click Review your booking", async () => {
  763 |     await page.getByRole("button", { name: "Review your booking" }).click();
  764 |   });
  765 |   await allure.step("Select title", async () => {
  766 |     await page.getByRole("combobox", { name: "Select Title" }).click();
  767 |     await page.getByRole("option", { name: "Mr", exact: true }).click();
  768 |   });
  769 |   await allure.step("Fill First name and Last name fields", async () => {
  770 |     await page
  771 |       .getByRole("textbox", { name: "First Name (required)" })
  772 |       .fill("Test");
  773 |     await page
  774 |       .getByRole("textbox", { name: "Last Name (required)" })
  775 |       .fill("Data");
  776 |   });
  777 |   await allure.step("Fill Job title", async () => {
  778 |     await page
  779 |       .getByRole("textbox", { name: "Job Title (required)" })
  780 |       .fill("Test");
  781 |   });
  782 |   await allure.step("Fill Business email", async () => {
  783 |     await page
  784 |       .getByRole("textbox", { name: "Business email (required)" })
  785 |       .fill("hello@suzuki.co.uk");
  786 |   });
  787 |   await allure.step("Fill Business phone", async () => {
  788 |     await page
  789 |       .getByRole("textbox", { name: "Business Phone (required)" })
  790 |       .fill("022634646");
  791 |   });
  792 |   await allure.step("Fill Business name", async () => {
  793 |     await page
  794 |       .getByRole("textbox", { name: "Business name (required)" })
  795 |       .fill("Test");
  796 |   });
  797 |   await allure.step("Fill Business postcode", async () => {
  798 |     await page
  799 |       .getByRole("textbox", { name: "Business Postcode (required)" })
  800 |       .fill("MK4 4AE");
  801 |   });
  802 |   await allure.step("Select vehicle registration option", async () => {
  803 |     await page
  804 |       .locator(".styles_vrn_label__G3cbO.false > span:nth-child(2)")
  805 |       .first()
  806 |       .click();
  807 |   });
  808 |   await allure.step("Fill Building number / name", async () => {
  809 |     await page
  810 |       .getByRole("textbox", { name: "Building number / name (" })
  811 |       .fill("7e");
  812 |   });
  813 |   await allure.step("Fill Street name", async () => {
  814 |     await page
  815 |       .getByRole("textbox", { name: "Street name (required)" })
  816 |       .fill("Street");
  817 |   });
  818 |   await allure.step("Fill Town", async () => {
  819 |     await page.getByRole("textbox", { name: "Town (required)" }).fill("Town");
  820 |   });
  821 |   await allure.step("Fill County", async () => {
  822 |     await page
  823 |       .getByRole("textbox", { name: "County (required)" })
  824 |       .fill("County");
  825 |   });
  826 |   await allure.step("Accept Email opt in", async () => {
  827 |     await page.getByRole("checkbox", { name: "Email" }).check();
  828 |   });
  829 |   await allure.step("Click Review booking", async () => {
  830 |     await page.getByRole("button", { name: "Review booking" }).click();
  831 |   });
  832 |   await allure.step("Click Review booking again", async () => {
  833 |     await page.getByRole("button", { name: "Review booking" }).click();
  834 |   });
  835 | });
  836 | 
  837 | test("Finance - Vitara", async ({ page }) => {
  838 |   await allure.epic("Service booking");
  839 |   await allure.feature("Booking a service and MOT");
  840 |   await allure.severity(Severity.CRITICAL);
  841 |   await allure.description("User is able to calculate financing - Vitara");
  842 |   await allure.owner("QA Team");
  843 |   await allure.tag("smoke");
  844 |   await page.goto(
  845 |     "https://staging-cars.test-suzuki.co.uk/offers-finance/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  846 |   );
  847 |   await acceptCookiesIfPresent(page);
  848 | 
  849 |   await allure.step("Click Explore Vitara offers", async () => {
  850 |     await page.getByRole('link', { name: 'Explore Vitara offers' }).click();
  851 |   });
  852 |   
  853 |   await allure.step("Click Finance Calculator", async () => {
  854 |     await expect(page).toHaveURL(/vitara-offers-and-finance\//);
  855 |     await page.getByLabel('Main banner').getByRole('link', { name: 'Finance Calculator' }).click();
  856 |   });
  857 |   await allure.step("Select customer type Personal", async () => {
  858 |     await page.locator('label').filter({ hasText: 'Personal' }).click();
  859 |   });
  860 |   await allure.step("Set deposit percentage slider", async () => {
  861 |     await expect(page).toHaveURL(new RegExp("model=Vitara&grade=Motion%20Mild%20Hybrid"));
> 862 |     await page.getByRole('slider', { name: 'A larger deposit could reduce' }).fill('30');
      |                                                                               ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  863 |   });
  864 |   await allure.step("Set annual mileage slider", async () => {
  865 |     const mileage_slider = page.getByRole("slider", { name: "What’s your annual mileage?" });
  866 |     await mileage_slider.scrollIntoViewIfNeeded();
  867 |     await mileage_slider.fill("14000");
  868 |   });
  869 |   await allure.step("Fill Deposit amount", async () => {
  870 |     await page.getByRole("textbox", { name: "Deposit" }).fill("4000");
  871 |   });
  872 |   await allure.step("Click Calculate financing", async () => {
  873 |     await page.getByRole("button", { name: "Calculate financing" }).click();
  874 |   });
  875 |   await allure.step("Click Send to dealer", async () => {
  876 |     await page.getByRole("button", { name: "Send to dealer" }).click();
  877 |   });
  878 |   await allure.step("Enter postcode or location", async () => {
  879 |     await page
  880 |       .getByRole("searchbox", { name: "Postcode or location" })
  881 |       .fill("mk4 4ae");
  882 |   });
  883 |   await allure.step("Click search", async () => {
  884 |     await page
  885 |       .getByRole("button", { name: "Search postcode or location" })
  886 |       .click();
  887 |   });
  888 |   await allure.step("Click Your details", async () => {
  889 |     await page.getByRole("button", { name: "Your details" }).nth(1).click();
  890 |   });
  891 |   await allure.step("Select title", async () => {
  892 |     await page.getByRole("combobox", { name: "Select Title" }).click();
  893 |     await page.getByRole("option", { name: "Mr", exact: true }).click();
  894 |   });
  895 |   await allure.step("Fill First name and Last name fields", async () => {
  896 |     await page
  897 |       .getByRole("textbox", { name: "First name (required)" })
  898 |       .fill("Test");
  899 |     await page
  900 |       .getByRole("textbox", { name: "Last name (required)" })
  901 |       .fill("Data");
  902 |   });
  903 |   await allure.step("Fill Email", async () => {
  904 |     await page
  905 |       .getByRole("textbox", { name: "Email (required)" })
  906 |       .fill("hello@suzuki.co.uk");
  907 |   });
  908 |   await allure.step("Fill Phone number", async () => {
  909 |     await page
  910 |       .getByRole("textbox", { name: "Phone (required)" })
  911 |       .fill("022636565");
  912 |   });
  913 |   await allure.step("Click Review details", async () => {
  914 |     await page.getByRole("button", { name: "Review details" }).click();
  915 |   });
  916 | });
  917 | 
```