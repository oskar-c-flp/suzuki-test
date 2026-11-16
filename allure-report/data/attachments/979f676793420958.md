# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 4W.spec.ts >> Business Enquiry - 24 cars
- Location: tests\4W.spec.ts:1111:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('radio', { name: 'Up to 24 cars Your nearest' })

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
      - banner "Main banner" [ref=e55]:
        - group "OUR LATEST SUZUKI OFFERS, READY WHEN YOU ARE.. OFFERS &amp; FINANCE" [ref=e57]:
          - generic [ref=e59]:
            - paragraph [ref=e60]: OUR LATEST SUZUKI OFFERS, READY WHEN YOU ARE.
            - 'heading "Main heading: OFFERS &amp; FINANCE" [level=1] [ref=e62]':
              - heading "OFFERS & FINANCE" [level=1] [ref=e63]
          - group "Call to action links" [ref=e65]:
            - link "Finance Calculator" [ref=e66] [cursor=pointer]:
              - /url: https://staging-cars.test-suzuki.co.uk/finance-calculator/
          - img "Suzuki offers and finance" [ref=e72]
      - generic [ref=e78]:
        - paragraph [ref=e79]:
          - strong [ref=e81]: SUZUKI OFFERS & FINANCE
        - paragraph [ref=e82]: LOADED WITH GOOD DIFFERENT
        - paragraph [ref=e83]
        - paragraph [ref=e84]: On the lookout for a mild hybrid or an all-electric vehicle? Need a roomier ride to fit the whole family? Whatever you’re after, we’ve got a range of deals and finance packages to help you get behind the wheel of your dream Suzuki.
      - generic [ref=e89]:
        - img "New Suzuki eVitara Motion" [ref=e92]
        - generic [ref=e93]:
          - paragraph [ref=e94]: ALL-NEW, ALL-ELECTRIC SUV
          - heading "e VITARA" [level=2] [ref=e95]
          - paragraph [ref=e96]: Enjoy striking SUV style, comfort and capability with the all-new e Vitara, now with 0% APR finance. Starting from £24,999, click below to find out more. Explore your flexible finance options, charging incentives and much more here.
          - generic [ref=e98]:
            - paragraph [ref=e99]: "Model Shown: e Vitara 49kWh Motion at £25,649 including optional metallic paint available at £650."
            - link "Explore e Vitara offers" [ref=e100] [cursor=pointer]:
              - /url: https://staging-cars.test-suzuki.co.uk/offers-finance/e-vitara-offers-and-finance/
      - generic [ref=e108]:
        - img "Suzuki Swift Mild Hybrid Ultra on the road" [ref=e111]
        - generic [ref=e112]:
          - paragraph [ref=e113]: DYNAMIC, AGILE, DISTINCTIVE
          - heading "SWIFT" [level=2] [ref=e114]
          - paragraph [ref=e115]: The Swift range, now with £3,500 customer saving. Starting from £16,499, click below to find out more.
          - generic [ref=e117]:
            - paragraph [ref=e118]: "Model Shown: Swift 1.2 Mild Hybrid Ultra at £18,349 on the road including optional dual-tone metallic paint available at £750 and £3,500 customer saving."
            - link "Explore Swift offers" [ref=e119] [cursor=pointer]:
              - /url: https://staging-cars.test-suzuki.co.uk/offers-finance/swift-offers-and-finance/
      - generic [ref=e127]:
        - img "Suzuki S-Cross Mild Hybrid Ultra on the road" [ref=e130]
        - generic [ref=e131]:
          - paragraph [ref=e132]: PRACTICAL VERSATILITY
          - heading "S-CROSS" [level=2] [ref=e133]
          - paragraph [ref=e134]: The bold and unmistakable SUV styled S-Cross range from £22,999. Now with £5,050 customer saving. Click below to find out more.
          - generic [ref=e136]:
            - paragraph [ref=e137]: "Model Shown: S-Cross 1.4 Boosterjet Mild Hybrid Ultra at £26,049 on the road including single-tone metallic paint available at £550 and £5,050 customer saving."
            - link "Explore S-Cross offers" [ref=e138] [cursor=pointer]:
              - /url: https://staging-cars.test-suzuki.co.uk/offers-finance/s-cross-offers-and-finance/
      - generic [ref=e146]:
        - img "Suzuki Vitara Ultra Mild Hybrid on the road" [ref=e149]
        - generic [ref=e150]:
          - paragraph [ref=e151]: AUTHENTIC SUV DRIVE
          - heading "VITARA" [level=2] [ref=e152]
          - paragraph [ref=e153]: Setting a new standard in SUV style and capability, the Vitara range starts from £21,999. Now with £5,300 customer saving.
          - generic [ref=e155]:
            - paragraph [ref=e156]: "Model Shown: Vitara 1.4 Boosterjet Ultra Mild Hybrid at £24,534 including £835 for dual-tone paint and £5,300 customer saving."
            - link "Explore Vitara offers" [ref=e157] [cursor=pointer]:
              - /url: https://staging-cars.test-suzuki.co.uk/offers-finance/vitara-offers-and-finance/
      - generic [ref=e162]:
        - heading "SUZUKI FINANCE" [level=3] [ref=e165]
        - generic [ref=e168]:
          - generic [ref=e170]:
            - heading "Finance guide" [level=3] [ref=e173]
            - paragraph [ref=e174]: Read our handy guide to the various finance options we offer.
            - link "View document" [ref=e176] [cursor=pointer]:
              - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-finance-product-guide-cars.pdf?isIrelandSite=false
          - generic [ref=e181]:
            - heading "More about finance" [level=3] [ref=e184]
            - paragraph [ref=e185]: Learn more about Suzuki finance.
            - link "Suzuki Finance" [ref=e187] [cursor=pointer]:
              - /url: https://staging-cars.test-suzuki.co.uk/offers-finance/suzuki-finance/
          - generic [ref=e192]:
            - heading "Finance Calculator" [level=3] [ref=e195]
            - paragraph [ref=e196]: Use our finance calculators to check affordability.
            - link "Finance calculator" [ref=e198] [cursor=pointer]:
              - /url: https://staging-cars.test-suzuki.co.uk/finance-calculator/
        - paragraph [ref=e206]:
          - text: Finance applies to UK private retail customers purchasing and registering a new car from participating Dealers. Excludes Channel Islands and Isle of Man Dealers. Offer cannot be used in conjunction with any other offer unless otherwise stated. All prices, specifications and offers correct at the time of being published. Credit subject to status, UK residents 18+. This offer is subject to availability and Suzuki Financial Services Ltd reserves the right to withdraw or amend this offer without notice or prior warning. Suzuki Financial Services Ltd, part of Lloyds Banking Group, Suzuki Finance is a trading style of
          - generic [ref=e207]: Suzuki Financial Services Ltd, No. 1 John Street, Callaghan Square, Cardiff, CF10 5PE
          - text: . Offers may be withdrawn at any time.
          - generic [ref=e208]: Valid from 1st October 2026 and 31st December 2026
          - text: .
      - generic [ref=e213]:
        - generic [ref=e215]:
          - img "FINANCE CALCULATOR" [ref=e216]
          - generic [ref=e218]:
            - heading "FINANCE CALCULATOR" [level=4] [ref=e219]
            - paragraph [ref=e220]: Whatever you’re after, explore our Suzuki deals and finance offers to drive today!
            - link "Calculate now" [ref=e222] [cursor=pointer]:
              - /url: https://staging-cars.test-suzuki.co.uk/finance-calculator/
        - generic [ref=e229]:
          - heading "BOOK A TEST DRIVE" [level=4] [ref=e230]
          - paragraph [ref=e231]: We’re here to help you book a test drive—just find your local Suzuki dealer now!
          - link "Request a test drive" [ref=e233] [cursor=pointer]:
            - /url: https://staging-cars.test-suzuki.co.uk/request-a-test-drive/
        - generic [ref=e240]:
          - heading "14-DAY RETURN GUARANTEE" [level=4] [ref=e241]
          - paragraph [ref=e242]: Not the perfect fit? We guarantee you can return your new Suzuki to the dealer.
          - link "14-DAY RETURN GUARANTEE" [ref=e244] [cursor=pointer]:
            - /url: https://staging-cars.test-suzuki.co.uk/offers-finance/14-day-return-guarantee/
      - paragraph [ref=e253]:
        - generic [ref=e254]:
          - text: "Last updated on:"
          - strong [ref=e255]: 1st October 2026
    - contentinfo [ref=e256]:
      - generic [ref=e257]:
        - paragraph [ref=e258]: Not finished? It's all here...
        - generic [ref=e259]:
          - button "Search for results" [ref=e260] [cursor=pointer]:
            - img "Search icon" [ref=e261]
          - searchbox "Search" [ref=e262]
        - generic [ref=e263]:
          - generic [ref=e264]: "Popular searches:"
          - list [ref=e265]:
            - listitem [ref=e266]:
              - link "Vitara" [ref=e267] [cursor=pointer]:
                - /url: /search/?search=Vitara&pageCount=1
            - listitem [ref=e269]:
              - link "Motability" [ref=e270] [cursor=pointer]:
                - /url: /search/?search=Motability&pageCount=1
            - listitem [ref=e272]:
              - link "Dealers" [ref=e273] [cursor=pointer]:
                - /url: /search/?search=Dealers&pageCount=1
            - listitem [ref=e275]:
              - link "Hybrid" [ref=e276] [cursor=pointer]:
                - /url: /search/?search=Hybrid&pageCount=1
            - listitem [ref=e278]:
              - link "Contact" [ref=e279] [cursor=pointer]:
                - /url: /search/?search=Contact&pageCount=1
            - listitem [ref=e281]:
              - link "Swift" [ref=e282] [cursor=pointer]:
                - /url: /search/?search=Swift&pageCount=1
            - listitem [ref=e284]:
              - link "0% Car Finance" [ref=e285] [cursor=pointer]:
                - /url: /search/?search=0%25%20Car%20Finance&pageCount=1
            - listitem [ref=e287]:
              - link "Electric" [ref=e288] [cursor=pointer]:
                - /url: /search/?search=Electric&pageCount=1
      - generic [ref=e291]:
        - generic [ref=e292]:
          - generic [ref=e293]: Models
          - list [ref=e294]:
            - listitem [ref=e295]:
              - link "e Vitara" [ref=e296] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/e-vitara/
            - listitem [ref=e297]:
              - link "Swift" [ref=e298] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift/
            - listitem [ref=e299]:
              - link "S-Cross" [ref=e300] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/s-cross/
            - listitem [ref=e301]:
              - link "Vitara" [ref=e302] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/vitara/
            - listitem [ref=e303]:
              - link "Across" [ref=e304] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/across/
            - listitem [ref=e305]:
              - link "Ignis" [ref=e306] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/ignis/
            - listitem [ref=e307]:
              - link "Swace" [ref=e308] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swace/
            - listitem [ref=e309]:
              - link "Swift Sport" [ref=e310] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift-sport/
            - listitem [ref=e311]:
              - link "Jimny" [ref=e312] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/jimny/
        - generic [ref=e313]:
          - generic [ref=e314]: About Suzuki
          - list [ref=e315]:
            - listitem [ref=e316]:
              - link "About Us" [ref=e317] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/about-us/
            - listitem [ref=e318]:
              - link "Awards" [ref=e319] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/awards/
            - listitem [ref=e320]:
              - link "Contact Us" [ref=e321] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/
            - listitem [ref=e322]:
              - link "Careers" [ref=e323] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/careers/
            - listitem [ref=e324]:
              - link "Apprenticeships" [ref=e325] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/apprenticeships/
        - generic [ref=e326]:
          - generic [ref=e327]: Business
          - list [ref=e328]:
            - listitem [ref=e329]:
              - link "Company Car Driver" [ref=e330] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/company-car/
            - listitem [ref=e331]:
              - link "Fleet Managers" [ref=e332] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/fleet-manager/
            - listitem [ref=e333]:
              - link "Driving Instructors" [ref=e334] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/business/driving-school-programme/
            - listitem [ref=e335]:
              - link "Suzuki Dealer Franchise" [ref=e336] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/franchised-suzuki-dealer/
        - generic [ref=e337]:
          - generic [ref=e338]: Owners
          - list [ref=e339]:
            - listitem [ref=e340]:
              - link "Book a Service" [ref=e341] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/request-a-service/
            - listitem [ref=e342]:
              - link "Suzuki Servicing" [ref=e343] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/servicing/
            - listitem [ref=e344]:
              - link "Handbooks" [ref=e345] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/owners/using-your-car/owners-handbooks/
        - generic [ref=e346]:
          - generic [ref=e347]: Suzuki Global
          - list [ref=e348]:
            - listitem [ref=e349]:
              - link "Bikes" [ref=e350] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/
            - listitem [ref=e351]:
              - link "ATV" [ref=e352] [cursor=pointer]:
                - /url: https://staging-atv.test-suzuki.co.uk/
            - listitem [ref=e353]:
              - link "Marine" [ref=e354] [cursor=pointer]:
                - /url: https://staging-marine.test-suzuki.co.uk/
        - generic [ref=e355]:
          - generic [ref=e356]: Useful Information
          - list [ref=e357]:
            - listitem [ref=e358]:
              - link "Privacy Policy" [ref=e359] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/
            - listitem [ref=e360]:
              - link "Cookie Policy" [ref=e361] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/privacy/cookie-policy/
            - listitem [ref=e362]:
              - link "Quality Policy" [ref=e363] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
            - listitem [ref=e364]:
              - link "Legal" [ref=e365] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/terms-of-use/
            - listitem [ref=e366]:
              - link "Section 172 Statement" [ref=e367] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/section-172-statement/
            - listitem [ref=e368]:
              - link "Tax Strategy" [ref=e369] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/uk-tax-strategy/
            - listitem [ref=e370]:
              - link "Human Trafficking Statement, opens in new tab" [ref=e371] [cursor=pointer]:
                - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
                - text: Human Trafficking Statement
            - listitem [ref=e372]:
              - link "Certificate of Conformity" [ref=e373] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/contact-us/certificate-of-conformity/
            - listitem [ref=e374]:
              - link "Sitemap" [ref=e375] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
            - listitem [ref=e376]:
              - link "Manage Cookies" [ref=e377] [cursor=pointer]:
                - /url: /offers-finance/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy#
        - generic [ref=e378]:
          - generic [ref=e379]: Motability
          - list [ref=e380]:
            - listitem [ref=e381]:
              - link "What is Motability" [ref=e382] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/what-is-motability/
            - listitem [ref=e383]:
              - link "Motability Offers" [ref=e384] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/motability/
        - generic [ref=e385]:
          - generic [ref=e386]: Categories
          - list [ref=e387]:
            - listitem [ref=e388]:
              - link "Electric Cars" [ref=e389] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/electric-cars/
            - listitem [ref=e390]:
              - link "SUV Cars" [ref=e391] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/suv-crossovers/
            - listitem [ref=e392]:
              - link "Small Cars" [ref=e393] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/small-hatchbacks/
            - listitem [ref=e394]:
              - link "Hybrid Cars" [ref=e395] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/
            - listitem [ref=e396]:
              - link "City Cars" [ref=e397] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/city-cars/
            - listitem [ref=e398]:
              - link "Automatic Cars" [ref=e399] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/automatic-cars/
            - listitem [ref=e400]:
              - link "Family Cars" [ref=e401] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/family-cars/
            - listitem [ref=e402]:
              - link "Plug-In Hybrid Cars" [ref=e403] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/hybrid/plug-in-hybrid-electric-vehicles/
            - listitem [ref=e404]:
              - link "AllGrip" [ref=e405] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/allgrip/
        - generic [ref=e406]:
          - generic [ref=e407]: Get your Suzuki
          - list [ref=e408]:
            - listitem [ref=e409]:
              - link "Request a Brochure" [ref=e410] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-brochure/
            - listitem [ref=e411]:
              - link "Find us" [ref=e412] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/find-a-dealer/
            - listitem [ref=e413]:
              - link "Request A Test Drive" [ref=e414] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/request-a-test-drive/
            - listitem [ref=e415]:
              - link "Car Configurator" [ref=e416] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/new-cars/configure/
            - listitem [ref=e417]:
              - link "Finance Calculator" [ref=e418] [cursor=pointer]:
                - /url: https://staging-cars.test-suzuki.co.uk/finance-calculator/
        - generic [ref=e419]:
          - generic [ref=e420]: Suzuki on social media
          - generic [ref=e421]:
            - link "Visit our Facebook page (opens in new tab)" [ref=e422] [cursor=pointer]:
              - /url: http://facebook.com/suzukicarsuk/
            - link "Visit our X (formerly Twitter) page (opens in new tab)" [ref=e423] [cursor=pointer]:
              - /url: http://twitter.com/SuzukiCarsUK
            - link "Visit our Instagram page (opens in new tab)" [ref=e424] [cursor=pointer]:
              - /url: https://instagram.com/suzukicarsuk
            - link "Visit our YouTube page (opens in new tab)" [ref=e425] [cursor=pointer]:
              - /url: https://www.youtube.com/user/SuzukiCarsUK
      - list "Legal and policy links" [ref=e426]:
        - listitem [ref=e427]:
          - link "Quality Policy" [ref=e428] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
        - listitem [ref=e429]:
          - link "Human Trafficking Statement" [ref=e430] [cursor=pointer]:
            - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
        - listitem [ref=e431]:
          - link "Manage Cookies" [ref=e432] [cursor=pointer]:
            - /url: /offers-finance/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy#
        - listitem [ref=e433]:
          - link "Sitemap" [ref=e434] [cursor=pointer]:
            - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
        - link "Cyber Essentials Certified" [ref=e435] [cursor=pointer]:
          - /url: /cyber-essentials-certificate/
          - img "Suzuki Cyber Essentials Certified" [ref=e436]
  - alert [ref=e437]
  - generic: ...
```

# Test source

```ts
  1024 | test("Finance - Swift", async ({ page }) => {
  1025 |   await allure.epic("Finance");
  1026 |   await allure.feature("Calculating financing options");
  1027 |   await allure.severity(Severity.CRITICAL);
  1028 |   await allure.description("User is able to calculate financing - Swift");
  1029 |   await allure.owner("QA Team");
  1030 |   await allure.tag("smoke");
  1031 |   await page.goto(
  1032 |     "https://staging-cars.test-suzuki.co.uk/offers-finance/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  1033 |   );
  1034 |   await acceptCookiesIfPresent(page);
  1035 | 
  1036 |   await allure.step("Click Explore Swift offers", async () => {
  1037 |     await page.getByRole('link', { name: 'Explore Swift offers' }).click();
  1038 |   });
  1039 |   
  1040 |   await allure.step("Click Finance Calculator", async () => {
  1041 |     await expect(page).toHaveURL(/swift-offers-and-finance\//);
  1042 |     await page.getByLabel('Main banner').getByRole('link', { name: 'Finance Calculator' }).click();
  1043 |   });
  1044 |   await allure.step("Select customer type Personal", async () => {
  1045 |     await expect(page).toHaveURL(new RegExp("model=Swift&grade=Motion%20Mild%20Hybrid"));
  1046 |     await expect(async () => {
  1047 |       await page.locator("label").filter({ hasText: "Personal" }).click();
  1048 |       await expect(page.getByRole("radio", { name: /Personal/ })).toBeChecked();
  1049 | }).toPass();
  1050 |   });
  1051 |   await allure.step("Set deposit percentage slider", async () => {
  1052 |     await page.getByRole('slider', { name: 'A larger deposit could reduce' }).fill('30');
  1053 |   });
  1054 |   await allure.step("Set annual mileage slider", async () => {
  1055 |     const mileage_slider = page.getByRole("slider", { name: "What’s your annual mileage?" });
  1056 |     await mileage_slider.scrollIntoViewIfNeeded();
  1057 |     await mileage_slider.fill("14000");
  1058 |   });
  1059 |   await allure.step("Fill Deposit amount", async () => {
  1060 |     await page.getByRole("textbox", { name: "Deposit" }).fill("4000");
  1061 |   });
  1062 |   await allure.step("Click Calculate financing", async () => {
  1063 |     await page.getByRole("button", { name: "Calculate financing" }).click();
  1064 |   });
  1065 |   await allure.step("Click Send to dealer", async () => {
  1066 |     await page.getByRole("button", { name: "Send to dealer" }).click();
  1067 |   });
  1068 |   await allure.step("Enter postcode or location", async () => {
  1069 |     await page
  1070 |       .getByRole("searchbox", { name: "Postcode or location" })
  1071 |       .fill("mk4 4ae");
  1072 |   });
  1073 |   await allure.step("Click search", async () => {
  1074 |     await page
  1075 |       .getByRole("button", { name: "Search postcode or location" })
  1076 |       .click();
  1077 |   });
  1078 |   await allure.step("Click Your details", async () => {
  1079 |     await page.getByRole("button", { name: "Your details" }).nth(1).click();
  1080 |   });
  1081 |   await allure.step("Select title", async () => {
  1082 |     await page.getByRole("combobox", { name: "Select Title" }).click();
  1083 |     await page.getByRole("option", { name: "Mr", exact: true }).click();
  1084 |   });
  1085 |   await allure.step("Fill First name and Last name fields", async () => {
  1086 |     await page
  1087 |       .getByRole("textbox", { name: "First name (required)" })
  1088 |       .fill("Test");
  1089 |     await page
  1090 |       .getByRole("textbox", { name: "Last name (required)" })
  1091 |       .fill("Data");
  1092 |   });
  1093 |   await allure.step("Fill Email", async () => {
  1094 |     await page
  1095 |       .getByRole("textbox", { name: "Email (required)" })
  1096 |       .fill("hello@suzuki.co.uk");
  1097 |   });
  1098 |   await allure.step("Fill Phone number", async () => {
  1099 |     await page
  1100 |       .getByRole("textbox", { name: "Phone (required)" })
  1101 |       .fill("022636565");
  1102 |   });
  1103 |   await allure.step("Click Review details", async () => {
  1104 |     await page.getByRole("button", { name: "Review details" }).first().click();
  1105 |   });
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
  1119 |     "https://staging-cars.test-suzuki.co.uk/offers-finance/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  1120 |   );
  1121 |   await acceptCookiesIfPresent(page);
  1122 | 
  1123 |   await allure.step("Select dealer option", async () => {
> 1124 |   await page.getByRole("radio", { name: "Up to 24 cars Your nearest" }).check();
       |                                                                         ^ Error: locator.check: Test timeout of 30000ms exceeded.
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
```