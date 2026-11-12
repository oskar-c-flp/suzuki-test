# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 4W.spec.ts >> Book a service - Service and MOT
- Location: tests\4W.spec.ts:606:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Review Booking' }) resolved to 2 elements:
    1) <button type="button" tabindex="-1" class="styles_button_wrapper__M3BJg ">…</button> aka getByRole('button', { name: 'Review Booking' }).first()
    2) <button type="button" class="styles_button_wrapper__M3BJg ">…</button> aka getByRole('button', { name: 'Review Booking' }).nth(1)

Call log:
  - waiting for getByRole('button', { name: 'Review Booking' })

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
      - status [ref=e55]: 6 locations found. Brayley Milton Keynes selected.
      - generic [ref=e56]:
        - generic [ref=e57]:
          - generic [ref=e59]:
            - generic [ref=e60]:
              - button "Back" [ref=e61] [cursor=pointer]
              - heading "Request a Service, MOT or Recall Work" [level=2] [ref=e62]
              - paragraph [ref=e63]: Step 4 of 5
            - heading "Your contact details" [level=1] [ref=e64]
          - generic [ref=e65]:
            - generic [ref=e69]:
              - 'group "Are you a Personal, Motability or Business Customer? required More information: Enquiry Type" [ref=e70]':
                - generic [ref=e71]:
                  - generic [ref=e72]:
                    - text: Are you a Personal, Motability or Business Customer?
                    - generic [ref=e73]: required
                    - generic [ref=e74]: "*"
                  - 'button "More information: Enquiry Type" [ref=e75] [cursor=pointer]'
                - generic [ref=e77]:
                  - generic [ref=e79]:
                    - generic [ref=e80]: Personal
                    - radio "Customer type Personal" [ref=e81] [cursor=pointer]
                  - generic [ref=e83]:
                    - generic [ref=e84]: Motability
                    - radio "Customer type Motability" [checked] [ref=e85] [cursor=pointer]
                  - generic [ref=e87]:
                    - generic [ref=e88]: Business
                    - radio "Customer type Business" [ref=e89] [cursor=pointer]
              - paragraph
              - paragraph [ref=e92]: We will only use your personal information for the purposes of contacting you about your service.
              - generic [ref=e94]:
                - generic [ref=e96]:
                  - generic [ref=e97]:
                    - generic [ref=e98]: List collapsed.
                    - generic:
                      - generic:
                        - text: Title
                        - generic: required
                        - generic: (required)
                    - combobox "Title required" [ref=e100] [cursor=pointer]:
                      - generic [ref=e101]: Mr
                  - paragraph
                - generic [ref=e102]:
                  - generic [ref=e103]:
                    - generic [ref=e104]:
                      - text: First Name
                      - generic [ref=e105]: (required)
                      - text: (required)
                    - textbox "First Name (required)" [ref=e106]:
                      - /placeholder: ""
                      - text: Test
                  - paragraph
                - generic [ref=e107]:
                  - generic [ref=e108]:
                    - generic [ref=e109]:
                      - text: Last Name
                      - generic [ref=e110]: (required)
                      - text: (required)
                    - textbox "Last Name (required)" [ref=e111]:
                      - /placeholder: ""
                      - text: Data
                  - paragraph
                - generic [ref=e113]:
                  - generic [ref=e114]:
                    - generic [ref=e115]:
                      - text: Postcode
                      - generic [ref=e116]: (required)
                      - text: (required)
                    - textbox "Postcode (required)" [ref=e117]:
                      - /placeholder: ""
                      - text: MK4 4AE
                  - paragraph
                - generic [ref=e118]:
                  - generic [ref=e119]:
                    - generic [ref=e120]:
                      - text: Building number / name
                      - generic [ref=e121]: (required)
                      - text: (required)
                    - textbox "Building number / name (required)" [ref=e122]:
                      - /placeholder: ""
                      - text: 7E
                  - paragraph
                - generic [ref=e123]:
                  - generic [ref=e124]:
                    - generic [ref=e125]:
                      - text: Email
                      - generic [ref=e126]: (required)
                      - text: (required)
                    - textbox "Email (required)" [ref=e127]:
                      - /placeholder: ""
                      - text: hello@suzuki.co.uk
                  - paragraph
                - generic [ref=e128]:
                  - generic [ref=e129]:
                    - generic [ref=e130]:
                      - text: Phone Number
                      - generic [ref=e131]: (required)
                      - text: (required)
                    - textbox "Phone Number (required)" [active] [ref=e132]:
                      - /placeholder: ""
                      - text: "02236756465"
                  - paragraph
              - generic [ref=e134]:
                - text: Suzuki GB PLC and our
                - link "authorised Dealer network (opens in new tab)" [ref=e136] [cursor=pointer]:
                  - /url: /find-a-dealer/
                  - text: authorised Dealer network
                  - generic [ref=e137]: (opens in new tab)
                - text: value your privacy and are committed to protecting your data. If you'd like to receive updates on news, offers, and services, simply OPT IN by checking the boxes below.
              - generic [ref=e138]:
                - generic [ref=e139]:
                  - generic [ref=e140]: Phone
                  - checkbox "Phone" [ref=e142] [cursor=pointer]
                - generic [ref=e143]:
                  - generic [ref=e144]: Email
                  - checkbox "Email" [ref=e146] [cursor=pointer]
                - generic [ref=e147]:
                  - generic [ref=e148]: SMS
                  - checkbox "SMS" [ref=e150] [cursor=pointer]
              - generic [ref=e152]:
                - text: To find out more, please see
                - link "SGB’s Privacy Policy (opens in new tab)" [ref=e154] [cursor=pointer]:
                  - /url: /privacy/
                  - text: SGB’s Privacy Policy
                  - generic [ref=e155]: (opens in new tab)
                - text: . You can withdraw your consent to receiving communications at any time by emailing
                - link "customerservices@suzuki.co.uk" [ref=e156] [cursor=pointer]:
                  - /url: mailto:customerservices@suzuki.co.uk
                - text: .
            - button "Review Booking" [ref=e159] [cursor=pointer]
        - status [ref=e162]: 6 locations found. Brayley Milton Keynes selected.
      - button "Review Booking" [ref=e164] [cursor=pointer]
      - generic [ref=e168]:
        - generic [ref=e171]:
          - generic [ref=e173]:
            - img "Suzuki 10 Year Warranty" [ref=e177]
            - generic [ref=e178]:
              - heading "The Suzuki Up To 10 Year Warranty" [level=3] [ref=e179]
              - paragraph [ref=e180]: You’ll wish we could service everything you care about. Simply have a qualifying service and you’ll get a year’s warranty, up until your Suzuki is 10 years old, or 100,000 miles, whichever comes first*.
              - link "Explore Warranty" [ref=e182] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/warranty/
          - generic [ref=e187]:
            - img "Suzuki Accident Support" [ref=e191]
            - generic [ref=e192]:
              - heading "Suzuki Accident Support" [level=3] [ref=e193]
              - paragraph [ref=e194]: When an accident leaves you in a jam, we’ve got your back. Call us first, even before your insurer to access 24/7 experts, complimentary recovery and support in arranging an approved repair. Save our number and make sure we're your first call - 0800 107 1156
              - link "Accident Support, opens in new tab" [ref=e196] [cursor=pointer]:
                - /url: https://accident-support.suzuki.co.uk/?utm_source=oem&utm_medium=referral&utm_campaign=book_service
                - generic [ref=e197]: Accident Support
        - generic [ref=e202]:
          - generic [ref=e203]:
            - img "Suzuki safety" [ref=e205]
            - generic [ref=e206]: Complete peace of mind through to your next service, and no extra cost.
          - generic [ref=e210]:
            - text: "*Available to UK customers on Suzuki cars under 10 years old and under 100,000 miles. Warranty is valid for up to 12 months or (if lower) 9,000/12,500 miles (mileage cap varies based on model’s service interval). Activates on first qualifying service and renews on subsequent qualifying services, up to a maximum of 10 years from the date of first registration or (if lower) 100,000 miles. A qualifying service is one carried out by a Suzuki service partner in accordance with the applicable Suzuki service interval. Cars without a full, up-to-date Suzuki service history will be subject to an initial health check and any identified faults will be excluded from warranty cover unless repaired at your cost during the qualifying service. Terms & exclusions apply, see"
            - link "cars.suzuki.co.uk/owners/warranty" [ref=e211] [cursor=pointer]:
              - /url: https://cars.suzuki.co.uk/owners/warranty
            - text: .
      - button [ref=e213] [cursor=pointer]:
        - img "Back to Top" [ref=e214]
    - contentinfo [ref=e215]:
      - generic [ref=e216]:
        - paragraph [ref=e217]: Not finished? It's all here...
        - generic [ref=e218]:
          - button "Search for results" [ref=e219] [cursor=pointer]:
            - img "Search icon" [ref=e220]
          - searchbox "Search" [ref=e221]
        - generic [ref=e222]:
          - generic [ref=e223]: "Popular searches:"
          - list [ref=e224]:
            - listitem [ref=e225]:
              - link "Vitara" [ref=e226] [cursor=pointer]:
                - /url: /search/?search=Vitara&pageCount=1
            - listitem [ref=e228]:
              - link "Motability" [ref=e229] [cursor=pointer]:
                - /url: /search/?search=Motability&pageCount=1
            - listitem [ref=e231]:
              - link "Dealers" [ref=e232] [cursor=pointer]:
                - /url: /search/?search=Dealers&pageCount=1
            - listitem [ref=e234]:
              - link "Hybrid" [ref=e235] [cursor=pointer]:
                - /url: /search/?search=Hybrid&pageCount=1
            - listitem [ref=e237]:
              - link "Contact" [ref=e238] [cursor=pointer]:
                - /url: /search/?search=Contact&pageCount=1
            - listitem [ref=e240]:
              - link "Swift" [ref=e241] [cursor=pointer]:
                - /url: /search/?search=Swift&pageCount=1
            - listitem [ref=e243]:
              - link "0% Car Finance" [ref=e244] [cursor=pointer]:
                - /url: /search/?search=0%25%20Car%20Finance&pageCount=1
            - listitem [ref=e246]:
              - link "Electric" [ref=e247] [cursor=pointer]:
                - /url: /search/?search=Electric&pageCount=1
      - generic [ref=e250]:
        - generic [ref=e251]:
          - generic [ref=e252]: Models
          - list [ref=e253]:
            - listitem [ref=e254]:
              - link "e Vitara" [ref=e255] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/e-vitara/
            - listitem [ref=e256]:
              - link "Swift" [ref=e257] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift/
            - listitem [ref=e258]:
              - link "S-Cross" [ref=e259] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/s-cross/
            - listitem [ref=e260]:
              - link "Vitara" [ref=e261] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/vitara/
            - listitem [ref=e262]:
              - link "Across" [ref=e263] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/across/
            - listitem [ref=e264]:
              - link "Ignis" [ref=e265] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/ignis/
            - listitem [ref=e266]:
              - link "Swace" [ref=e267] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swace/
            - listitem [ref=e268]:
              - link "Swift Sport" [ref=e269] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift-sport/
            - listitem [ref=e270]:
              - link "Jimny" [ref=e271] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/jimny/
        - generic [ref=e272]:
          - generic [ref=e273]: About Suzuki
          - list [ref=e274]:
            - listitem [ref=e275]:
              - link "About Us" [ref=e276] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/about-us/
            - listitem [ref=e277]:
              - link "Awards" [ref=e278] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/awards/
            - listitem [ref=e279]:
              - link "Contact Us" [ref=e280] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/
            - listitem [ref=e281]:
              - link "Careers" [ref=e282] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/careers/
            - listitem [ref=e283]:
              - link "Apprenticeships" [ref=e284] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/apprenticeships/
        - generic [ref=e285]:
          - generic [ref=e286]: Business
          - list [ref=e287]:
            - listitem [ref=e288]:
              - link "Company Car Driver" [ref=e289] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/company-car/
            - listitem [ref=e290]:
              - link "Fleet Managers" [ref=e291] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/fleet-manager/
            - listitem [ref=e292]:
              - link "Driving Instructors" [ref=e293] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/driving-school-programme/
            - listitem [ref=e294]:
              - link "Suzuki Dealer Franchise" [ref=e295] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/franchised-suzuki-dealer/
        - generic [ref=e296]:
          - generic [ref=e297]: Owners
          - list [ref=e298]:
            - listitem [ref=e299]:
              - link "Book a Service" [ref=e300] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/request-a-service/
            - listitem [ref=e301]:
              - link "Suzuki Servicing" [ref=e302] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/servicing/
            - listitem [ref=e303]:
              - link "Handbooks" [ref=e304] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/using-your-car/owners-handbooks/
        - generic [ref=e305]:
          - generic [ref=e306]: Suzuki Global
          - list [ref=e307]:
            - listitem [ref=e308]:
              - link "Bikes" [ref=e309] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/
            - listitem [ref=e310]:
              - link "ATV" [ref=e311] [cursor=pointer]:
                - /url: https://staging-atv.test-suzuki.co.uk/
            - listitem [ref=e312]:
              - link "Marine" [ref=e313] [cursor=pointer]:
                - /url: https://staging-marine.test-suzuki.co.uk/
        - generic [ref=e314]:
          - generic [ref=e315]: Useful Information
          - list [ref=e316]:
            - listitem [ref=e317]:
              - link "Privacy Policy" [ref=e318] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/
            - listitem [ref=e319]:
              - link "Cookie Policy" [ref=e320] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/cookie-policy/
            - listitem [ref=e321]:
              - link "Quality Policy" [ref=e322] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
            - listitem [ref=e323]:
              - link "Legal" [ref=e324] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/terms-of-use/
            - listitem [ref=e325]:
              - link "Section 172 Statement" [ref=e326] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/section-172-statement/
            - listitem [ref=e327]:
              - link "Tax Strategy" [ref=e328] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/uk-tax-strategy/
            - listitem [ref=e329]:
              - link "Human Trafficking Statement, opens in new tab" [ref=e330] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
                - text: Human Trafficking Statement
            - listitem [ref=e331]:
              - link "Certificate of Conformity" [ref=e332] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/certificate-of-conformity/
            - listitem [ref=e333]:
              - link "Sitemap" [ref=e334] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
            - listitem [ref=e335]:
              - link "Manage Cookies" [ref=e336] [cursor=pointer]:
                - /url: /owners/request-a-service/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy#
        - generic [ref=e337]:
          - generic [ref=e338]: Motability
          - list [ref=e339]:
            - listitem [ref=e340]:
              - link "What is Motability" [ref=e341] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/what-is-motability/
            - listitem [ref=e342]:
              - link "Motability Offers" [ref=e343] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/
        - generic [ref=e344]:
          - generic [ref=e345]: Categories
          - list [ref=e346]:
            - listitem [ref=e347]:
              - link "Electric Cars" [ref=e348] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/electric-cars/
            - listitem [ref=e349]:
              - link "SUV Cars" [ref=e350] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/suv-crossovers/
            - listitem [ref=e351]:
              - link "Small Cars" [ref=e352] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/small-hatchbacks/
            - listitem [ref=e353]:
              - link "Hybrid Cars" [ref=e354] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/
            - listitem [ref=e355]:
              - link "City Cars" [ref=e356] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/city-cars/
            - listitem [ref=e357]:
              - link "Automatic Cars" [ref=e358] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/automatic-cars/
            - listitem [ref=e359]:
              - link "Family Cars" [ref=e360] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/family-cars/
            - listitem [ref=e361]:
              - link "Plug-In Hybrid Cars" [ref=e362] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/plug-in-hybrid-electric-vehicles/
            - listitem [ref=e363]:
              - link "AllGrip" [ref=e364] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/allgrip/
        - generic [ref=e365]:
          - generic [ref=e366]: Get your Suzuki
          - list [ref=e367]:
            - listitem [ref=e368]:
              - link "Request a Brochure" [ref=e369] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-brochure/
            - listitem [ref=e370]:
              - link "Find us" [ref=e371] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/find-a-dealer/
            - listitem [ref=e372]:
              - link "Request A Test Drive" [ref=e373] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-test-drive/
            - listitem [ref=e374]:
              - link "Car Configurator" [ref=e375] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/configure/
            - listitem [ref=e376]:
              - link "Finance Calculator" [ref=e377] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/finance-calculator/
        - generic [ref=e378]:
          - generic [ref=e379]: Suzuki on social media
          - generic [ref=e380]:
            - link "Visit our Facebook page (opens in new tab)" [ref=e381] [cursor=pointer]:
              - /url: http://facebook.com/suzukicarsuk/
            - link "Visit our X (formerly Twitter) page (opens in new tab)" [ref=e382] [cursor=pointer]:
              - /url: http://twitter.com/SuzukiCarsUK
            - link "Visit our Instagram page (opens in new tab)" [ref=e383] [cursor=pointer]:
              - /url: https://instagram.com/suzukicarsuk
            - link "Visit our YouTube page (opens in new tab)" [ref=e384] [cursor=pointer]:
              - /url: https://www.youtube.com/user/SuzukiCarsUK
      - list "Legal and policy links" [ref=e385]:
        - listitem [ref=e386]:
          - link "Quality Policy" [ref=e387] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
        - listitem [ref=e388]:
          - link "Human Trafficking Statement" [ref=e389] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
        - listitem [ref=e390]:
          - link "Manage Cookies" [ref=e391] [cursor=pointer]:
            - /url: /owners/request-a-service/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy#
        - listitem [ref=e392]:
          - link "Sitemap" [ref=e393] [cursor=pointer]:
            - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
        - link "Cyber Essentials Certified" [ref=e394] [cursor=pointer]:
          - /url: /cyber-essentials-certificate/
          - img "Suzuki Cyber Essentials Certified" [ref=e395]
  - generic: ...
  - alert [ref=e396]
```

# Test source

```ts
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
  602 |   await page.getByRole('button', { name: 'Review booking' }).click();
  603 | });
  604 | });
  605 | 
  606 | test("Book a service - Service and MOT", async ({ page }) => {
  607 |   await allure.epic("Service booking");
  608 |   await allure.feature("Booking a service and MOT");
  609 |   await allure.severity(Severity.CRITICAL);
  610 |   await allure.description(
  611 |     "User is able to book a service",
  612 |   );
  613 |   await allure.owner("QA Team");
  614 |   await allure.tag("smoke");
  615 |   await page.goto(
  616 |     "https://staging-cars.test-suzuki.co.uk/owners/request-a-service/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  617 |   );
  618 |   await acceptCookiesIfPresent(page);
  619 | 
  620 | await allure.step("Fill Vehicle registration number", async () => {
  621 |   await page.getByRole("searchbox", { name: "Vehicle registration number (" }).fill("KX18BBT");
  622 | });
  623 | await allure.step("Click Search vehicle registration", async () => {
  624 |   await page.getByRole("button", { name: "Search vehicle registration" }).click();
  625 | });
  626 | await allure.step("Select vehicle", async () => {
  627 |   await page.getByRole("radio", { name: "SUZUKI SWIFT SZ3 DUALJET" }).check();
  628 | });
  629 | await allure.step("Click Choose a Service Type", async () => {
  630 |   await page.getByRole("button", { name: "Choose a Service Type" }).click();
  631 | });
  632 | await allure.step("Select service types", async () => {
  633 |   await page.getByRole("checkbox", { name: "MOT" }).check();
  634 |   await page.getByRole("checkbox", { name: "Book a manufacturer scheduled" }).check();
  635 | });
  636 | await allure.step("Click Choose a Dealer", async () => {
  637 |   await page.getByRole("button", { name: "Choose a Dealer" }).click();
  638 | });
  639 | await allure.step("Enter postcode or location", async () => {
  640 |   await page.getByRole("searchbox", { name: "Postcode or location" }).fill("mk4 4ae");
  641 | });
  642 | await allure.step("Click search", async () => {
  643 |   await page.getByRole("button", { name: "Search postcode or location" }).click();
  644 | });
  645 | await allure.step("Click Your Details", async () => {
  646 |   await page.getByRole("button", { name: "Your Details" }).nth(1).click();
  647 | });
  648 | await allure.step("Select customer type Motability", async () => {
  649 |   await page.getByRole("radio", { name: "Customer type Motability" }).check();
  650 | });
  651 | await allure.step("Select title", async () => {
  652 |   await page.getByRole("combobox", { name: "Select Title" }).click();
  653 |   await page.getByRole("option", { name: "Mr", exact: true }).click();
  654 | });
  655 | await allure.step("Fill First name and Last name fields", async () => {
  656 |   await page.getByRole("textbox", { name: "First Name (required)" }).fill("Test");
  657 |   await page.getByRole("textbox", { name: "Last Name (required)" }).fill("Data");
  658 | });
  659 | await allure.step("Fill Postcode", async () => {
  660 |   await page.getByRole("textbox", { name: "Postcode (required)" }).fill("MK4 4AE");
  661 | });
  662 | await allure.step("Fill Building number / name", async () => {
  663 |   await page.getByRole("textbox", { name: "Building number / name (" }).fill("7E");
  664 | });
  665 | await allure.step("Fill Email", async () => {
  666 |   await page.getByRole("textbox", { name: "Email (required)" }).fill("hello@suzuki.co.uk");
  667 | });
  668 | await allure.step("Fill Phone number", async () => {
  669 |   await page.getByRole("textbox", { name: "Phone Number (required)" }).fill("02236756465");
  670 | });
  671 | await allure.step("Click Review Booking", async () => {
> 672 |   await page.getByRole("button", { name: "Review Booking" }).click();
      |                                                              ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Review Booking' }) resolved to 2 elements:
  673 | });
  674 | await allure.step("Click Confirm Booking", async () => {
  675 |   await page.getByRole("button", { name: "Confirm Booking" }).nth(1).click();
  676 | });
  677 | await allure.step("Verify Booking confirmed heading is displayed", async () => {
  678 |   await expect(page.getByRole("heading", { name: "Booking confirmed" })).toBeVisible();
  679 | });
  680 | });
```