# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 2W.spec.ts >> Book a test ride - Hayabusa
- Location: tests\2W.spec.ts:99:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Thank you for requesting a' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Thank you for requesting a' })

```

```yaml
- alert
- status
- link "Skip to main content":
  - /url: "#main-content"
- banner:
  - navigation "Quick links":
    - list:
      - listitem:
        - link "Book a test ride":
          - /url: https://staging-bikes.test-suzuki.co.uk/book-a-test-ride/
      - listitem:
        - link "Find a Dealer":
          - /url: https://staging-bikes.test-suzuki.co.uk/find-a-dealer/
      - listitem:
        - link "Download a brochure":
          - /url: https://staging-bikes.test-suzuki.co.uk/order-a-brochure/
      - listitem:
        - link "Offers and Finance":
          - /url: https://staging-bikes.test-suzuki.co.uk/offers-and-finance/
  - img "Serious. Fun"
  - link "Suzuki homepage":
    - /url: /
  - navigation "Main navigation":
    - list:
      - link "BIKES, 1 of 4":
        - /url: /book-a-test-ride/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy#
        - text: BIKES
      - link "OFFERS & FINANCE":
        - /url: https://staging-bikes.test-suzuki.co.uk/offers-and-finance/
      - link "OWNERS, 3 of 4":
        - /url: /book-a-test-ride/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy#
        - text: OWNERS
      - link "NEWS & EVENTS":
        - /url: https://staging-bikes.test-suzuki.co.uk/news-events/
    - status
    - button "Search Suzuki website. Focus moves to search field when activated."
- main:
  - heading "BOOK A TEST RIDE" [level=1]
  - paragraph:
    - text: Don't just take our word for how good our bikes are, experience them for yourself!
    - strong: Scroll down to book a test ride today at your local Suzuki Dealer.
  - text: Choose your Suzuki
  - img "circle"
  - text: Find a dealer
  - img "circle"
  - text: Your details
  - img "circle"
  - text: Confirmation
  - img "circle"
  - heading "Thank you!" [level=3]
  - text: Laguna Motorcycles Ltd
  - img "location"
  - paragraph: Hart Street
  - paragraph: Maidstone
  - paragraph: Kent
  - paragraph: ME16 8RA
  - img "call"
  - link "01622 681765":
    - /url: tel:01622 681765
    - paragraph: 01622 681765
  - text: "Your details Name:"
  - strong: Test Data
  - text: "Email:"
  - strong: test@gmail.com
  - text: "Phone:"
  - strong: "022212134"
  - text: "Contact method:"
  - strong: Email
  - img "HAYABUSA"
  - heading "HAYABUSA" [level=3]
  - paragraph:
    - text: "Required Licence:"
    - strong: A
  - strong: Terms and Conditions
  - paragraph: 3.9% Finance Terms and Conditions
  - paragraph: 3.9% APR Representative finance available on HP and PCP. £1,000 minimum deposit required. Offer applies to the purchase of a new Hayabusa, Hayabusa SE, Katana, GSX-S1000GX+, GSX-S1000GT+, GSX-S1000, GSX-8R, GSX-8S, GSX-8TT, GSX-8T, V-Strom 1050DE, V-Strom 1050RE, V-Strom 800DE and V-Strom 800RE from a participating Suzuki Dealership. The motorcycle must be purchased and registered between 01/10/2026 and 31/12/2026 to qualify for the offer. Credit subject to status, UK residents aged 18+. Suzuki Financial Services Ltd, No. 1 John Street, Callaghan Square, Cardiff, CF10 5PE. Offer is valid in the UK only from a participating Suzuki Dealership and may be extended or withdrawn at any time.
  - paragraph: GSX-8T Accessory Pack Terms and Conditions
  - paragraph: Free Suzuki genuine parts Accessory Pack offer only applies to the purchase of a new 2026 Candy Burnt Orange GSX-8T from a participating Suzuki Dealership. The motorcycle must be purchased and registered between 01/10/2026 and 31/12/2026. The offer includes Suzuki genuine accessory Brake Lever (57400-25830-000), Clutch Lever (57620-25830-000), Rear Seat Cowl (45041-47L0-YKV), Stylish Seat (45021-47L00-C5F), Fuel Tank Pad (99180-25L01-000), Tank Side Protection (44041-47L00-000) and Fly screen (51015-47L00-000). The offer does not include fitment of accessories – this may be an additional cost. Offer is valid in the UK only and may be extended or withdrawn at any time. There is no cash offer, credit or other alternative offered.
  - paragraph: Free ABR Tickets Terms and Conditions
  - paragraph: This offer applies to the purchase of a new V-Strom 800DE, V-Strom 800RE, V-Strom 1050DE and V-Strom 1050RE only from participating Suzuki Dealerships. The motorcycle must be purchased and registered between 01/10/2026 and 31/12/2026 to qualify for this offer. The 2 adult day tickets (valued at £89 per ticket) for The ABR Festival 2027 can only be claimed by the purchasing customer and must be claimed by 31st January 2027. The tickets are for Saturday 26th June 2027 only and include parking. You will be given a code by the dealer which you (the customer) needs to email to ABR to be validated and then the ticket will be emailed to the qualifying customer. There is no cash offer, credit or other alternative offered.
  - paragraph: RM-Z250 and RM-Z450 Terms and Conditions
  - paragraph: £1,000 dealer contribution applies to the purchase of a new RM-Z450 and RM-Z250 M6 models only from a participating Suzuki Dealership. This offer includes a £1,000 saving off the RRP price. The purchase of the motorcycle must take place between 04/09/2026 and 31/12/2026. Offer is valid in the UK only and may be extended or withdrawn at any time. There is no cash offer, credit or other alternative offered.
  - paragraph: Burgman 400 Commuter Pack Terms and Conditions
  - paragraph: Free Suzuki heated grips (P/N 57100-19812-000), hand guards (P/N 57300-19840-000) and top box (P/N 990D0-V4700-000) plus carrier (P/N 990D0-19K00-060) offer applies to the purchase of a new Burgman 400 only from participating Suzuki Dealerships. The purchase and registration of the motorcycle must take place between 01/11/26 and 31/12/26. Offer is valid in the UK only and may be extended or withdrawn at any time. There is no cash offer, credit or other alternative offered. Model shown equipped with additional accessories not included with the Commuter Pack.
  - paragraph: "Promoter: Suzuki GB PLC, Steinbeck Crescent, Snelshall West, Milton Keynes, MK4 4AE."
  - paragraph: Specifications, appearance, colours (including body colour), equipment, materials and other aspects of the “SUZUKI” products shown on this advert differ by market and are subject to change by Suzuki at any time without notice.
  - button "Back to Top":
    - img "Back to Top"
- contentinfo:
  - button "Search for results":
    - img "Search icon"
  - searchbox "Search input"
  - text: Categories
  - list:
    - listitem:
      - link "Sport":
        - /url: https://staging-bikes.test-suzuki.co.uk/bikes/sport/
    - listitem:
      - link "Street":
        - /url: https://staging-bikes.test-suzuki.co.uk/bikes/street/
    - listitem:
      - link "Adventure & Dual Sport":
        - /url: https://staging-bikes.test-suzuki.co.uk/bikes/adventure-dual-sport/
    - listitem:
      - link "Scooter":
        - /url: https://staging-bikes.test-suzuki.co.uk/bikes/scooter/
    - listitem:
      - link "MX":
        - /url: https://staging-bikes.test-suzuki.co.uk/bikes/mx/
    - listitem:
      - link "Suzuki Vault":
        - /url: https://staging-bikes.test-suzuki.co.uk/suzuki-vault/
  - text: Owners
  - list:
    - listitem:
      - link "Warranty, opens in new tab":
        - /url: https://staging-bikes.test-suzuki.co.uk/owners/warranty/
        - text: Warranty
    - listitem:
      - link "Suzuki Insurance":
        - /url: https://staging-bikes.test-suzuki.co.uk/owners/suzuki-insurance/
    - listitem:
      - link "Parts & Accessories":
        - /url: https://staging-bikes.test-suzuki.co.uk/shop/
    - listitem:
      - link "Handbooks":
        - /url: https://staging-bikes.test-suzuki.co.uk/owners/service-maintenance/owners-manuals/
  - text: About Suzuki
  - list:
    - listitem:
      - link "About Us":
        - /url: https://staging-bikes.test-suzuki.co.uk/about-us/
    - listitem:
      - link "Contact Us":
        - /url: https://staging-bikes.test-suzuki.co.uk/contact-us/
    - listitem:
      - link "Careers":
        - /url: https://staging-bikes.test-suzuki.co.uk/careers/
    - listitem:
      - link "Apprenticeships":
        - /url: https://staging-bikes.test-suzuki.co.uk/careers/apprenticeships/
  - text: Useful Information
  - list:
    - listitem:
      - link "Privacy":
        - /url: https://staging-bikes.test-suzuki.co.uk/privacy/
    - listitem:
      - link "Cookie Policy":
        - /url: https://staging-bikes.test-suzuki.co.uk/privacy/cookie-policy/
    - listitem:
      - link "Quality Policy":
        - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
    - listitem:
      - link "Legal":
        - /url: https://staging-bikes.test-suzuki.co.uk/legal/
    - listitem:
      - link "Section 172 Statement":
        - /url: https://staging-bikes.test-suzuki.co.uk/section-172-statement/
    - listitem:
      - link "Tax Strategy":
        - /url: https://staging-bikes.test-suzuki.co.uk/about-us/uk-tax-strategy/
    - listitem:
      - link "Human Trafficking Statement":
        - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
    - listitem:
      - link "Certificate of Conformity":
        - /url: https://staging-bikes.test-suzuki.co.uk/contact-us/certificate-of-conformity/
    - listitem:
      - link "Cyber Essentials Certificate":
        - /url: https://staging-bikes.test-suzuki.co.uk/cyber-essentials-certificate/
    - listitem:
      - link "Sitemap":
        - /url: https://staging-bikes.test-suzuki.co.uk/sitemap/
    - listitem:
      - link "Manage Cookies":
        - /url: /book-a-test-ride/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy#
  - text: Suzuki Global
  - list:
    - listitem:
      - link "Suzuki Cars":
        - /url: https://staging-cars.test-suzuki.co.uk/
    - listitem:
      - link "Suzuki Marine":
        - /url: https://staging-marine.test-suzuki.co.uk/
    - listitem:
      - link "Suzuki ATV":
        - /url: https://staging-atv.test-suzuki.co.uk/
    - listitem:
      - link "Global Suzuki":
        - /url: https://www.globalsuzuki.com/
  - text: Suzuki on social media
  - link "Visit our Facebook page":
    - /url: https://www.facebook.com/suzukibikesuk
  - link "Visit our X (formerly Twitter) page":
    - /url: https://www.twitter.com/suzukibikesuk
  - link "Visit our Instagram page":
    - /url: https://www.instagram.com/suzukibikesuk
  - link "Visit our YouTube page":
    - /url: https://www.youtube.com/suzukibikesuk
  - list "Legal and policy links":
    - link "Cyber Essentials Certified":
      - /url: /cyber-essentials-certificate/
      - img "Suzuki Cyber Essentials Certified"
- alert
```

# Test source

```ts
  52  | 
  53  | test("Download a brochure by email - Hayabusa", async ({ page }) => {
  54  |   await allure.epic("Brochures");
  55  |   await allure.feature("Brochures download");
  56  |   await allure.severity(Severity.CRITICAL);
  57  |   await allure.description(
  58  |     "User is able to succesfully request a brochure to email - Hayabusa",
  59  |   );
  60  |   await allure.owner("QA Team");
  61  |   await allure.tag("smoke");
  62  |   await page.goto(
  63  |     "https://staging-bikes.test-suzuki.co.uk/order-a-brochure/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  64  |   );
  65  | 
  66  |   await acceptCookiesIfPresent(page);
  67  |   await allure.step("Choose range", async () => {
  68  |     await page.getByRole("img", { name: "Sport-image", exact: true }).click();
  69  |   });
  70  |   await allure.step("Select Hayabusa from dropdown", async () => {
  71  |     await page.getByText("Please select").first().click();
  72  |     await page.locator("form").getByText("Hayabusa").click();
  73  |   });
  74  |   await allure.step("Fill e-mail address field", async () => {
  75  |     await page.locator("#emailAddress").fill("hello@suzuki.co.uk");
  76  |   });
  77  |   await allure.step("Select Title from dropdown", async () => {
  78  |     await page.getByText("Please select").click();
  79  |     await page.getByText("Mr", { exact: true }).click();
  80  |   });
  81  |   await allure.step("Fill First name and Last name fields", async () => {
  82  |     await page.locator("#firstName").fill("Test");
  83  |     await page.locator("#surname").fill("Test");
  84  |   });
  85  |   await allure.step("Email opt in", async () => {
  86  |     await page.getByRole("checkbox").check();
  87  |   });
  88  |   await allure.step("Send a request", async () => {
  89  |     await page.getByRole("button", { name: "Send request" }).click();
  90  |   });
  91  | 
  92  |   await allure.step("Assert test", async () => {
  93  |     await expect(
  94  |       page.getByRole("heading", { name: "Thank you for requesting a" }),
  95  |     ).toBeVisible();
  96  |   });
  97  | });
  98  | 
  99  | test("Book a test ride - Hayabusa", async ({ page }) => {
  100 |   await allure.epic("Test Rides");
  101 |   await allure.feature("Booking");
  102 |   await allure.severity(Severity.CRITICAL);
  103 |   await allure.description(
  104 |     "User is able to succesfully book a test ride - Hayabusa",
  105 |   );
  106 |   await allure.owner("QA Team");
  107 |   await allure.tag("smoke");
  108 |   await page.goto(
  109 |     "https://staging-bikes.test-suzuki.co.uk/book-a-test-ride/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  110 |   );
  111 | 
  112 |   await acceptCookiesIfPresent(page);
  113 |   await allure.step("Choose model", async () => {
  114 |     await page
  115 |       .getByRole("button", { name: "TEST RIDE ME arrow" })
  116 |       .first()
  117 |       .click();
  118 |   });
  119 |   await allure.step("Provide postcode", async () => {
  120 |     await page
  121 |       .getByRole("textbox", { name: "Postcode or town" })
  122 |       .fill("SW1W 0NY");
  123 |     await page.getByRole("button", { name: "magnify glass" }).click();
  124 |   });
  125 |   await allure.step("Fill e-mail address field", async () => {
  126 |     await page.getByRole("button", { name: "Next arrow" }).click();
  127 |   });
  128 |   await allure.step("Select Title from dropdown", async () => {
  129 |     await page.getByText("Please select").click();
  130 |     await page.getByText("Mr", { exact: true }).click();
  131 |   });
  132 |   await allure.step("Fill First name and Last name fields", async () => {
  133 |     await page.locator("#firstName").fill("Test");
  134 |     await page.locator("#surname").fill("Data");
  135 |   });
  136 |   await allure.step("Fill Phone Number field", async () => {
  137 |     await page.locator("#phoneNumber").fill("022212134");
  138 |   });
  139 |   await allure.step("Fill E-mail field", async () => {
  140 |     await page.locator("#emailAddress").fill("test@gmail.com");
  141 |   });
  142 |   await allure.step("Email opt in", async () => {
  143 |     await page.getByRole("checkbox").nth(1).check();
  144 |   });
  145 |   await allure.step("Send a request", async () => {
  146 |     await page.getByRole("button", { name: "SEND REQUEST arrow" }).click();
  147 |   });
  148 | 
  149 |   await allure.step("Assert test", async () => {
  150 |     await expect(
  151 |       page.getByRole("heading", { name: "Thank you for requesting a" }),
> 152 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  153 |   });
  154 | });
  155 | 
  156 | test("Find a Dealer - Send an Enquiry", async ({ page }) => {
  157 |   await allure.epic("Find A dealer");
  158 |   await allure.feature("Enquiry Send");
  159 |   await allure.severity(Severity.CRITICAL);
  160 |   await allure.description("User is able to send an enquiry to a dealer");
  161 |   await allure.owner("QA Team");
  162 |   await allure.tag("smoke");
  163 |   await page.goto(
  164 |     "https://staging-bikes.test-suzuki.co.uk/find-a-dealer/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  165 |   );
  166 | 
  167 |   await acceptCookiesIfPresent(page);
  168 |   await allure.step("Enter location in search box", async () => {
  169 |     await page
  170 |       .getByRole("searchbox", { name: "Postcode or location" })
  171 |       .fill("London");
  172 |   });
  173 |   await allure.step("Click Search for dealers", async () => {
  174 |     await page.getByRole("button", { name: "Search for dealers" }).click();
  175 |   });
  176 |   await allure.step("Open dealer page", async () => {
  177 |     await page.getByRole("link", { name: "View Dealer Page" }).click();
  178 |   });
  179 |   await allure.step("Click Send an Enquiry", async () => {
  180 |     await page.getByRole("link", { name: "tag-icon Send an Enquiry" }).click();
  181 |   });
  182 |   await allure.step("Select title", async () => {
  183 |     await page.getByText("Please select").click();
  184 |     await page.getByText("Mr", { exact: true }).click();
  185 |   });
  186 |   await allure.step("Fill in first name", async () => {
  187 |     await page.locator("#firstName").fill("Test");
  188 |   });
  189 |   await allure.step("Fill in surname", async () => {
  190 |     await page.locator("#surname").fill("Data");
  191 |   });
  192 |   await allure.step("Fill in email address", async () => {
  193 |     await page.locator("#emailAddress").fill("testdata@gmail.com");
  194 |   });
  195 |   await allure.step("Fill in phone number", async () => {
  196 |     await page.locator("#phoneNumber").fill("022222222");
  197 |   });
  198 |   await allure.step("Fill in enquiry message", async () => {
  199 |     await page.getByRole("textbox", { name: "Enquiry" }).fill("test enquiry");
  200 |   });
  201 |   await allure.step("Submit the enquiry form", async () => {
  202 |     await page.getByRole("button", { name: "Submit" }).click();
  203 |   });
  204 | 
  205 |   await allure.step("Verify Thank You message is displayed", async () => {
  206 |     await expect(
  207 |       page.getByRole("heading", { name: "Thank You!" }),
  208 |     ).toBeVisible();
  209 |   });
  210 | });
  211 | 
  212 | test("Config - SV-7GX", async ({ page }) => {
  213 |   await allure.epic("Config");
  214 |   await allure.feature("Bike configuration");
  215 |   await allure.severity(Severity.CRITICAL);
  216 |   await allure.description(
  217 |     "User is able to configure a bike send an enquiry to a dealer",
  218 |   );
  219 |   await allure.owner("QA Team");
  220 |   await allure.tag("smoke");
  221 |   await page.goto(
  222 |     "https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  223 |   );
  224 | 
  225 |   await acceptCookiesIfPresent(page);
  226 |   await allure.step("Open Colours & Accessories", async () => {
  227 |     await page.getByRole("link", { name: "Colours & Accessories" }).click();
  228 |   });
  229 |   await allure.step("Select Touring Screen (Clear)", async () => {
  230 |     await page
  231 |       .locator('iframe[title="Configurator Form"]')
  232 |       .contentFrame()
  233 |       .getByRole("button", { name: "Touring Screen (Clear)" })
  234 |       .click();
  235 |   });
  236 |   await allure.step("Select Grip Heater", async () => {
  237 |     await page
  238 |       .locator('iframe[title="Configurator Form"]')
  239 |       .contentFrame()
  240 |       .getByRole("button", { name: "Grip Heater Grip Heater" })
  241 |       .click();
  242 |   });
  243 |   await allure.step("Select Frame Slider", async () => {
  244 |     await page
  245 |       .locator('iframe[title="Configurator Form"]')
  246 |       .contentFrame()
  247 |       .getByRole("button", { name: "Frame Slider Frame Slider" })
  248 |       .click();
  249 |   });
  250 |   await allure.step("Click Send to dealer", async () => {
  251 |     await page.getByRole("button", { name: "Send to dealer" }).click();
  252 |   });
```