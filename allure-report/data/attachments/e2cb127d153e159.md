# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 4W.spec.ts >> Finance - Vitara
- Location: tests\4W.spec.ts:837:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Review details' }) resolved to 2 elements:
    1) <button type="button" class="styles_button_wrapper__M3BJg ">…</button> aka getByRole('button', { name: 'Review details' }).first()
    2) <button type="button" class="styles_button_wrapper__M3BJg ">…</button> aka getByRole('button', { name: 'Review details' }).nth(1)

Call log:
  - waiting for getByRole('button', { name: 'Review details' })

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
          - generic [ref=e60]:
            - img "car" [ref=e61]
            - generic [ref=e62]: Your new VITARA MOTION MILD HYBRID
          - generic [ref=e63]:
            - generic [ref=e64]:
              - button "Back" [ref=e65] [cursor=pointer]
              - heading "Send to dealer" [level=2] [ref=e66]
              - paragraph [ref=e67]: Step 2 of 3
            - heading "Your details" [level=1] [ref=e68]
          - generic [ref=e69]:
            - generic [ref=e74]:
              - generic [ref=e75]:
                - 'group "Are you a Personal, Motability or Business Customer? required More information: Enquiry Type" [ref=e76]':
                  - generic [ref=e77]:
                    - generic [ref=e78]:
                      - text: Are you a Personal, Motability or Business Customer?
                      - generic [ref=e79]: required
                      - generic [ref=e80]: "*"
                    - 'button "More information: Enquiry Type" [ref=e81] [cursor=pointer]'
                  - generic [ref=e83]:
                    - generic [ref=e84]:
                      - generic:
                        - generic: Personal
                        - radio "Customer type Personal" [checked] [disabled]
                    - generic [ref=e85]:
                      - generic:
                        - generic: Motability
                        - radio "Customer type Motability" [disabled]
                    - generic [ref=e86]:
                      - generic:
                        - generic: Business
                        - radio "Customer type Business" [disabled]
                - paragraph
                - paragraph [ref=e89]: Please leave your details and we will call you with all the information you need
                - generic [ref=e91]:
                  - generic [ref=e92]:
                    - generic [ref=e93]: List collapsed.
                    - generic:
                      - generic:
                        - text: Title
                        - generic: required
                        - generic: (required)
                    - combobox "Title required" [ref=e95] [cursor=pointer]:
                      - generic [ref=e96]: Mr
                  - paragraph
                - generic [ref=e97]:
                  - generic [ref=e98]:
                    - generic [ref=e99]:
                      - text: First name
                      - generic [ref=e100]: (required)
                      - text: (required)
                    - textbox "First name (required)" [ref=e101]:
                      - /placeholder: ""
                      - text: Test
                  - paragraph
                - generic [ref=e102]:
                  - generic [ref=e103]:
                    - generic [ref=e104]:
                      - text: Last name
                      - generic [ref=e105]: (required)
                      - text: (required)
                    - textbox "Last name (required)" [ref=e106]:
                      - /placeholder: ""
                      - text: Data
                  - paragraph
                - generic [ref=e108]:
                  - generic [ref=e109]:
                    - generic [ref=e110]:
                      - text: Postcode
                      - generic [ref=e111]: (required)
                      - text: (required)
                    - textbox "Postcode (required)" [ref=e112]:
                      - /placeholder: ""
                      - text: MK4 4AE
                  - paragraph
                - generic [ref=e113]:
                  - generic [ref=e114]:
                    - generic [ref=e115]:
                      - text: Email
                      - generic [ref=e116]: (required)
                      - text: (required)
                    - textbox "Email (required)" [ref=e117]:
                      - /placeholder: ""
                      - text: hello@suzuki.co.uk
                  - paragraph
                - generic [ref=e118]:
                  - generic [ref=e119]:
                    - generic [ref=e120]:
                      - text: Phone
                      - generic [ref=e121]: (required)
                      - text: (required)
                    - textbox "Phone (required)" [active] [ref=e122]:
                      - /placeholder: ""
                      - text: "022636565"
                  - paragraph
              - generic [ref=e124]:
                - text: Suzuki GB PLC and our
                - link "authorised Dealer network (opens in new tab)" [ref=e126] [cursor=pointer]:
                  - /url: /find-a-dealer/
                  - text: authorised Dealer network
                  - generic [ref=e127]: (opens in new tab)
                - text: value your privacy and are committed to protecting your data. If you'd like to receive updates on news, offers, and services, simply OPT IN by checking the boxes below.
              - generic [ref=e128]:
                - generic [ref=e129]:
                  - generic [ref=e130]: Phone
                  - checkbox "Phone" [ref=e132] [cursor=pointer]
                - generic [ref=e133]:
                  - generic [ref=e134]: Email
                  - checkbox "Email" [ref=e136] [cursor=pointer]
                - generic [ref=e137]:
                  - generic [ref=e138]: SMS
                  - checkbox "SMS" [ref=e140] [cursor=pointer]
              - generic [ref=e142]:
                - text: To find out more, please see
                - link "SGB's Privacy Policy (opens in new tab)" [ref=e143] [cursor=pointer]:
                  - /url: /privacy/
                  - text: SGB's Privacy Policy
                  - generic [ref=e144]: (opens in new tab)
                - text: . You can withdraw your consent to receiving communications at any time by
                - link "emailing customer services" [ref=e145] [cursor=pointer]:
                  - /url: mailto:customerservices@suzuki.co.uk
                - text: .
            - button "Review details" [ref=e148] [cursor=pointer]
        - status [ref=e151]: 6 locations found. Brayley Milton Keynes selected.
      - button "Review details" [ref=e153] [cursor=pointer]
      - button [ref=e157] [cursor=pointer]:
        - img "Back to Top" [ref=e158]
    - contentinfo [ref=e159]:
      - generic [ref=e160]:
        - paragraph [ref=e161]: Not finished? It's all here...
        - generic [ref=e162]:
          - button "Search for results" [ref=e163] [cursor=pointer]:
            - img "Search icon" [ref=e164]
          - searchbox "Search" [ref=e165]
        - generic [ref=e166]:
          - generic [ref=e167]: "Popular searches:"
          - list [ref=e168]:
            - listitem [ref=e169]:
              - link "Vitara" [ref=e170] [cursor=pointer]:
                - /url: /search/?search=Vitara&pageCount=1
            - listitem [ref=e172]:
              - link "Motability" [ref=e173] [cursor=pointer]:
                - /url: /search/?search=Motability&pageCount=1
            - listitem [ref=e175]:
              - link "Dealers" [ref=e176] [cursor=pointer]:
                - /url: /search/?search=Dealers&pageCount=1
            - listitem [ref=e178]:
              - link "Hybrid" [ref=e179] [cursor=pointer]:
                - /url: /search/?search=Hybrid&pageCount=1
            - listitem [ref=e181]:
              - link "Contact" [ref=e182] [cursor=pointer]:
                - /url: /search/?search=Contact&pageCount=1
            - listitem [ref=e184]:
              - link "Swift" [ref=e185] [cursor=pointer]:
                - /url: /search/?search=Swift&pageCount=1
            - listitem [ref=e187]:
              - link "0% Car Finance" [ref=e188] [cursor=pointer]:
                - /url: /search/?search=0%25%20Car%20Finance&pageCount=1
            - listitem [ref=e190]:
              - link "Electric" [ref=e191] [cursor=pointer]:
                - /url: /search/?search=Electric&pageCount=1
      - generic [ref=e194]:
        - generic [ref=e195]:
          - generic [ref=e196]: Models
          - list [ref=e197]:
            - listitem [ref=e198]:
              - link "e Vitara" [ref=e199] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/e-vitara/
            - listitem [ref=e200]:
              - link "Swift" [ref=e201] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift/
            - listitem [ref=e202]:
              - link "S-Cross" [ref=e203] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/s-cross/
            - listitem [ref=e204]:
              - link "Vitara" [ref=e205] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/vitara/
            - listitem [ref=e206]:
              - link "Across" [ref=e207] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/across/
            - listitem [ref=e208]:
              - link "Ignis" [ref=e209] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/ignis/
            - listitem [ref=e210]:
              - link "Swace" [ref=e211] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swace/
            - listitem [ref=e212]:
              - link "Swift Sport" [ref=e213] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift-sport/
            - listitem [ref=e214]:
              - link "Jimny" [ref=e215] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/jimny/
        - generic [ref=e216]:
          - generic [ref=e217]: About Suzuki
          - list [ref=e218]:
            - listitem [ref=e219]:
              - link "About Us" [ref=e220] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/about-us/
            - listitem [ref=e221]:
              - link "Awards" [ref=e222] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/awards/
            - listitem [ref=e223]:
              - link "Contact Us" [ref=e224] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/
            - listitem [ref=e225]:
              - link "Careers" [ref=e226] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/careers/
            - listitem [ref=e227]:
              - link "Apprenticeships" [ref=e228] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/apprenticeships/
        - generic [ref=e229]:
          - generic [ref=e230]: Business
          - list [ref=e231]:
            - listitem [ref=e232]:
              - link "Company Car Driver" [ref=e233] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/company-car/
            - listitem [ref=e234]:
              - link "Fleet Managers" [ref=e235] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/fleet-manager/
            - listitem [ref=e236]:
              - link "Driving Instructors" [ref=e237] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/driving-school-programme/
            - listitem [ref=e238]:
              - link "Suzuki Dealer Franchise" [ref=e239] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/franchised-suzuki-dealer/
        - generic [ref=e240]:
          - generic [ref=e241]: Owners
          - list [ref=e242]:
            - listitem [ref=e243]:
              - link "Book a Service" [ref=e244] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/request-a-service/
            - listitem [ref=e245]:
              - link "Suzuki Servicing" [ref=e246] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/servicing/
            - listitem [ref=e247]:
              - link "Handbooks" [ref=e248] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/using-your-car/owners-handbooks/
        - generic [ref=e249]:
          - generic [ref=e250]: Suzuki Global
          - list [ref=e251]:
            - listitem [ref=e252]:
              - link "Bikes" [ref=e253] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/
            - listitem [ref=e254]:
              - link "ATV" [ref=e255] [cursor=pointer]:
                - /url: https://staging-atv.test-suzuki.co.uk/
            - listitem [ref=e256]:
              - link "Marine" [ref=e257] [cursor=pointer]:
                - /url: https://staging-marine.test-suzuki.co.uk/
        - generic [ref=e258]:
          - generic [ref=e259]: Useful Information
          - list [ref=e260]:
            - listitem [ref=e261]:
              - link "Privacy Policy" [ref=e262] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/
            - listitem [ref=e263]:
              - link "Cookie Policy" [ref=e264] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/cookie-policy/
            - listitem [ref=e265]:
              - link "Quality Policy" [ref=e266] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
            - listitem [ref=e267]:
              - link "Legal" [ref=e268] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/terms-of-use/
            - listitem [ref=e269]:
              - link "Section 172 Statement" [ref=e270] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/section-172-statement/
            - listitem [ref=e271]:
              - link "Tax Strategy" [ref=e272] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/uk-tax-strategy/
            - listitem [ref=e273]:
              - link "Human Trafficking Statement, opens in new tab" [ref=e274] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
                - text: Human Trafficking Statement
            - listitem [ref=e275]:
              - link "Certificate of Conformity" [ref=e276] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/certificate-of-conformity/
            - listitem [ref=e277]:
              - link "Sitemap" [ref=e278] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
            - listitem [ref=e279]:
              - link "Manage Cookies" [ref=e280] [cursor=pointer]:
                - /url: /send-to-dealer/?itemID=SIVI14MT15EPTM%20%203&name=VITARA%20MOTION%20MILD%20HYBRID&model=VITARA&price=21999&categ=SUV%20Styling%3APractical%3AAutomatic%3A4x4&gtm=eyJkcml2ZXRyYWluVGl0bGUiOiIyLXdoZWVsIERyaXZlIiwiZW5naW5lRGlzcGxhY2VtZW50IjoxMzczLCJtcGdWYWx1ZSI6IjQ3LjgifQ==&doorType=&fuelType=Petrol&exteriorColour=White&transmission=6-Speed%20Manual%20&vmff=Vml0YXJhIE1vdGlvbiBNaWxk&mffq=Vml0YXJhIE1vdGlvbiBNaWxk&mileage=14000&monthlyPayment=379.91&noOfPayments=30&finalOptionalPayment=9997&cashPrice=21999.00&cashDeposit=4000&totalCredit=17999&totalPayable=25014.39&duration=30&apr=8.9&financeType=PCP&fixedRateInterest=8.53&excessMileageRate=4.8&purchaseFee=10&customerType=Personal&capcode=U0lWSTE0TVQxNUVQVE0gIDM=&capid=&isRedirectFromFinance=true&grIm=aHR0cHM6Ly9tZWRpYS51bWJyYWNvLmlvL3N0YWdlLXN1enVraS1nYi9kZ3RuNGZ3NS9fMDAyMF8xMTE1NF9zdXp1a2lfdml0YXJhX3VsdHJhX3RvX21vdGlvbl9yMl9pZ2IucG5n&dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpJTIwVml0YXJhJTIwQ2FyJTIwRmluYW5jZSUyMENhbGN1bGF0b3IlMjAlN0MlMjBTdXp1a2klMjBDYXJzJTIwVUsmbmF2aWdhdGlvbl9lbGVtZW50PVNlbmQlMjB0byUyMGRlYWxlcg#
        - generic [ref=e281]:
          - generic [ref=e282]: Motability
          - list [ref=e283]:
            - listitem [ref=e284]:
              - link "What is Motability" [ref=e285] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/what-is-motability/
            - listitem [ref=e286]:
              - link "Motability Offers" [ref=e287] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/
        - generic [ref=e288]:
          - generic [ref=e289]: Categories
          - list [ref=e290]:
            - listitem [ref=e291]:
              - link "Electric Cars" [ref=e292] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/electric-cars/
            - listitem [ref=e293]:
              - link "SUV Cars" [ref=e294] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/suv-crossovers/
            - listitem [ref=e295]:
              - link "Small Cars" [ref=e296] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/small-hatchbacks/
            - listitem [ref=e297]:
              - link "Hybrid Cars" [ref=e298] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/
            - listitem [ref=e299]:
              - link "City Cars" [ref=e300] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/city-cars/
            - listitem [ref=e301]:
              - link "Automatic Cars" [ref=e302] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/automatic-cars/
            - listitem [ref=e303]:
              - link "Family Cars" [ref=e304] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/family-cars/
            - listitem [ref=e305]:
              - link "Plug-In Hybrid Cars" [ref=e306] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/plug-in-hybrid-electric-vehicles/
            - listitem [ref=e307]:
              - link "AllGrip" [ref=e308] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/allgrip/
        - generic [ref=e309]:
          - generic [ref=e310]: Get your Suzuki
          - list [ref=e311]:
            - listitem [ref=e312]:
              - link "Request a Brochure" [ref=e313] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-brochure/
            - listitem [ref=e314]:
              - link "Find us" [ref=e315] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/find-a-dealer/
            - listitem [ref=e316]:
              - link "Request A Test Drive" [ref=e317] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-test-drive/
            - listitem [ref=e318]:
              - link "Car Configurator" [ref=e319] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/configure/
            - listitem [ref=e320]:
              - link "Finance Calculator" [ref=e321] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/finance-calculator/
        - generic [ref=e322]:
          - generic [ref=e323]: Suzuki on social media
          - generic [ref=e324]:
            - link "Visit our Facebook page (opens in new tab)" [ref=e325] [cursor=pointer]:
              - /url: http://facebook.com/suzukicarsuk/
            - link "Visit our X (formerly Twitter) page (opens in new tab)" [ref=e326] [cursor=pointer]:
              - /url: http://twitter.com/SuzukiCarsUK
            - link "Visit our Instagram page (opens in new tab)" [ref=e327] [cursor=pointer]:
              - /url: https://instagram.com/suzukicarsuk
            - link "Visit our YouTube page (opens in new tab)" [ref=e328] [cursor=pointer]:
              - /url: https://www.youtube.com/user/SuzukiCarsUK
      - list "Legal and policy links" [ref=e329]:
        - listitem [ref=e330]:
          - link "Quality Policy" [ref=e331] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
        - listitem [ref=e332]:
          - link "Human Trafficking Statement" [ref=e333] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
        - listitem [ref=e334]:
          - link "Manage Cookies" [ref=e335] [cursor=pointer]:
            - /url: /send-to-dealer/?itemID=SIVI14MT15EPTM%20%203&name=VITARA%20MOTION%20MILD%20HYBRID&model=VITARA&price=21999&categ=SUV%20Styling%3APractical%3AAutomatic%3A4x4&gtm=eyJkcml2ZXRyYWluVGl0bGUiOiIyLXdoZWVsIERyaXZlIiwiZW5naW5lRGlzcGxhY2VtZW50IjoxMzczLCJtcGdWYWx1ZSI6IjQ3LjgifQ==&doorType=&fuelType=Petrol&exteriorColour=White&transmission=6-Speed%20Manual%20&vmff=Vml0YXJhIE1vdGlvbiBNaWxk&mffq=Vml0YXJhIE1vdGlvbiBNaWxk&mileage=14000&monthlyPayment=379.91&noOfPayments=30&finalOptionalPayment=9997&cashPrice=21999.00&cashDeposit=4000&totalCredit=17999&totalPayable=25014.39&duration=30&apr=8.9&financeType=PCP&fixedRateInterest=8.53&excessMileageRate=4.8&purchaseFee=10&customerType=Personal&capcode=U0lWSTE0TVQxNUVQVE0gIDM=&capid=&isRedirectFromFinance=true&grIm=aHR0cHM6Ly9tZWRpYS51bWJyYWNvLmlvL3N0YWdlLXN1enVraS1nYi9kZ3RuNGZ3NS9fMDAyMF8xMTE1NF9zdXp1a2lfdml0YXJhX3VsdHJhX3RvX21vdGlvbl9yMl9pZ2IucG5n&dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpJTIwVml0YXJhJTIwQ2FyJTIwRmluYW5jZSUyMENhbGN1bGF0b3IlMjAlN0MlMjBTdXp1a2klMjBDYXJzJTIwVUsmbmF2aWdhdGlvbl9lbGVtZW50PVNlbmQlMjB0byUyMGRlYWxlcg#
        - listitem [ref=e336]:
          - link "Sitemap" [ref=e337] [cursor=pointer]:
            - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
        - link "Cyber Essentials Certified" [ref=e338] [cursor=pointer]:
          - /url: /cyber-essentials-certificate/
          - img "Suzuki Cyber Essentials Certified" [ref=e339]
  - generic: ...
  - alert [ref=e340]: Send to Dealer | Suzuki Cars UK
```

# Test source

```ts
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
  858 |     await expect(page).toHaveURL(new RegExp("model=Vitara&grade=Motion%20Mild%20Hybrid"));
  859 |     await expect(async () => {
  860 |       await page.locator("label").filter({ hasText: "Personal" }).click();
  861 |       await expect(page.getByRole("radio", { name: /Personal/ })).toBeChecked();
  862 | }).toPass();
  863 |   });
  864 |   await allure.step("Set deposit percentage slider", async () => {
  865 |     await page.getByRole('slider', { name: 'A larger deposit could reduce' }).fill('30');
  866 |   });
  867 |   await allure.step("Set annual mileage slider", async () => {
  868 |     const mileage_slider = page.getByRole("slider", { name: "What’s your annual mileage?" });
  869 |     await mileage_slider.scrollIntoViewIfNeeded();
  870 |     await mileage_slider.fill("14000");
  871 |   });
  872 |   await allure.step("Fill Deposit amount", async () => {
  873 |     await page.getByRole("textbox", { name: "Deposit" }).fill("4000");
  874 |   });
  875 |   await allure.step("Click Calculate financing", async () => {
  876 |     await page.getByRole("button", { name: "Calculate financing" }).click();
  877 |   });
  878 |   await allure.step("Click Send to dealer", async () => {
  879 |     await page.getByRole("button", { name: "Send to dealer" }).click();
  880 |   });
  881 |   await allure.step("Enter postcode or location", async () => {
  882 |     await page
  883 |       .getByRole("searchbox", { name: "Postcode or location" })
  884 |       .fill("mk4 4ae");
  885 |   });
  886 |   await allure.step("Click search", async () => {
  887 |     await page
  888 |       .getByRole("button", { name: "Search postcode or location" })
  889 |       .click();
  890 |   });
  891 |   await allure.step("Click Your details", async () => {
  892 |     await page.getByRole("button", { name: "Your details" }).nth(1).click();
  893 |   });
  894 |   await allure.step("Select title", async () => {
  895 |     await page.getByRole("combobox", { name: "Select Title" }).click();
  896 |     await page.getByRole("option", { name: "Mr", exact: true }).click();
  897 |   });
  898 |   await allure.step("Fill First name and Last name fields", async () => {
  899 |     await page
  900 |       .getByRole("textbox", { name: "First name (required)" })
  901 |       .fill("Test");
  902 |     await page
  903 |       .getByRole("textbox", { name: "Last name (required)" })
  904 |       .fill("Data");
  905 |   });
  906 |   await allure.step("Fill Email", async () => {
  907 |     await page
  908 |       .getByRole("textbox", { name: "Email (required)" })
  909 |       .fill("hello@suzuki.co.uk");
  910 |   });
  911 |   await allure.step("Fill Phone number", async () => {
  912 |     await page
  913 |       .getByRole("textbox", { name: "Phone (required)" })
  914 |       .fill("022636565");
  915 |   });
  916 |   await allure.step("Click Review details", async () => {
> 917 |     await page.getByRole("button", { name: "Review details" }).click();
      |                                                                ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Review details' }) resolved to 2 elements:
  918 |   });
  919 | });
  920 | 
```