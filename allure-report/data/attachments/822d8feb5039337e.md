# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 2W.spec.ts >> Config - SV-7GX
- Location: tests\2W.spec.ts:226:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Thank You!' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Thank You!' })

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
        - /url: /send-to-dealer/?itemId=cb21346b-6233-49f0-ba5a-e10716362ebd&price=6999&name=&accessories=Touring%20Screen%20(Clear)%20%3B%20Grip%20Heater%20%3B%20Frame%20Slider&isRedirectFromFinance=false&category=Sport&dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpIFNWLTdHWCB8IFN1enVraSBCaWtlcyBVSyZuYXZpZ2F0aW9uX2VsZW1lbnQ9U2VuZCB0byBkZWFsZXI#
        - text: BIKES
      - link "OFFERS & FINANCE":
        - /url: https://staging-bikes.test-suzuki.co.uk/offers-and-finance/
      - link "OWNERS, 3 of 4":
        - /url: /send-to-dealer/?itemId=cb21346b-6233-49f0-ba5a-e10716362ebd&price=6999&name=&accessories=Touring%20Screen%20(Clear)%20%3B%20Grip%20Heater%20%3B%20Frame%20Slider&isRedirectFromFinance=false&category=Sport&dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpIFNWLTdHWCB8IFN1enVraSBCaWtlcyBVSyZuYXZpZ2F0aW9uX2VsZW1lbnQ9U2VuZCB0byBkZWFsZXI#
        - text: OWNERS
      - link "NEWS & EVENTS":
        - /url: https://staging-bikes.test-suzuki.co.uk/news-events/
    - status
    - button "Search Suzuki website. Focus moves to search field when activated."
- main:
  - img "car"
  - paragraph: Send to dealer
  - heading "Your new" [level=2]
  - text: Find a dealer
  - img "circle"
  - text: Your details
  - img "circle"
  - text: Confirmation
  - img "circle"
  - heading "your details" [level=3]
  - paragraph: Please leave you number here and we will call you with all the information you need.
  - text: Title * Mr
  - img "arrow"
  - text: First Name *
  - textbox: Test
  - text: Last Name *
  - textbox: Data
  - text: Email *
  - textbox: test@gmail.com
  - text: Phone number *
  - textbox: "022212134"
  - text: Suzuki GB PLC and our
  - link "authorised Dealer network":
    - /url: https://bikes.suzuki.co.uk/find-a-dealer/
  - text: value your privacy and are committed to protecting your data. If you’d like to receive updates on news, offers, and services, simply OPT IN by checking the boxes below.
  - checkbox
  - text: Phone
  - checkbox [checked]
  - img "checkmark"
  - text: Email
  - checkbox
  - text: SMS To find out more, please see
  - link "SGB’s Privacy Policy":
    - /url: https://bikes.suzuki.co.uk/privacy/
  - text: . You can withdraw your consent to receiving communications at any time by emailing
  - link "customerservices@suzuki.co.uk":
    - /url: mailto:customerservices@suzuki.co.uk
  - text: .
  - iframe
  - paragraph: Recaptcha is required
  - separator
  - button "arrow Find a dealer":
    - img "arrow"
    - text: Find a dealer
  - button "Send request arrow":
    - text: Send request
    - img "arrow"
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
        - /url: /send-to-dealer/?itemId=cb21346b-6233-49f0-ba5a-e10716362ebd&price=6999&name=&accessories=Touring%20Screen%20(Clear)%20%3B%20Grip%20Heater%20%3B%20Frame%20Slider&isRedirectFromFinance=false&category=Sport&dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpIFNWLTdHWCB8IFN1enVraSBCaWtlcyBVSyZuYXZpZ2F0aW9uX2VsZW1lbnQ9U2VuZCB0byBkZWFsZXI#
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
- alert: Send to Dealer | Suzuki Bikes UK
```

# Test source

```ts
  188 |     await page.getByRole("button", { name: "Search for dealers" }).click();
  189 |   });
  190 |   await allure.step("Open dealer page", async () => {
  191 |     await page.getByRole("link", { name: "View Dealer Page" }).click();
  192 |   });
  193 |   await allure.step("Click Send an Enquiry", async () => {
  194 |     await page.getByRole("link", { name: "tag-icon Send an Enquiry" }).click();
  195 |   });
  196 |   await allure.step("Select title", async () => {
  197 |     await page.getByText("Please select").click();
  198 |     await page.getByText("Mr", { exact: true }).click();
  199 |   });
  200 |   await allure.step("Fill in first name", async () => {
  201 |     await page.locator("#firstName").fill("Test");
  202 |   });
  203 |   await allure.step("Fill in surname", async () => {
  204 |     await page.locator("#surname").fill("Data");
  205 |   });
  206 |   await allure.step("Fill in email address", async () => {
  207 |     await page.locator("#emailAddress").fill("testdata@gmail.com");
  208 |   });
  209 |   await allure.step("Fill in phone number", async () => {
  210 |     await page.locator("#phoneNumber").fill("022222222");
  211 |   });
  212 |   await allure.step("Fill in enquiry message", async () => {
  213 |     await page.getByRole("textbox", { name: "Enquiry" }).fill("test enquiry");
  214 |   });
  215 |   await allure.step("Submit the enquiry form", async () => {
  216 |     await page.getByRole("button", { name: "Submit" }).click();
  217 |   });
  218 | 
  219 |   await allure.step("Verify Thank You message is displayed", async () => {
  220 |     await expect(
  221 |       page.getByRole("heading", { name: "Thank You!" }),
  222 |     ).toBeVisible();
  223 |   });
  224 | });
  225 | 
  226 | test("Config - SV-7GX", async ({ page }) => {
  227 |   await allure.epic("Config");
  228 |   await allure.feature("Bike configuration");
  229 |   await allure.severity(Severity.CRITICAL);
  230 |   await allure.description(
  231 |     "User is able to configure a bike send an enquiry to a dealer",
  232 |   );
  233 |   await allure.owner("QA Team");
  234 |   await allure.tag("smoke");
  235 |   await page.goto(
  236 |     "https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  237 |   );
  238 | 
  239 |   await acceptCookiesIfPresent(page);
  240 |   await allure.step("Open Colours & Accessories", async () => {
  241 |     await page.getByRole("link", { name: "Colours & Accessories" }).click();
  242 |   });
  243 |   await allure.step("Select Touring Screen (Clear)", async () => {
  244 |     await page
  245 |       .locator('iframe[title="Configurator Form"]')
  246 |       .contentFrame()
  247 |       .getByRole("button", { name: "Touring Screen (Clear)" })
  248 |       .click();
  249 |   });
  250 |   await allure.step("Select Grip Heater", async () => {
  251 |     await page
  252 |       .locator('iframe[title="Configurator Form"]')
  253 |       .contentFrame()
  254 |       .getByRole("button", { name: "Grip Heater Grip Heater" })
  255 |       .click();
  256 |   });
  257 |   await allure.step("Select Frame Slider", async () => {
  258 |     await page
  259 |       .locator('iframe[title="Configurator Form"]')
  260 |       .contentFrame()
  261 |       .getByRole("button", { name: "Frame Slider Frame Slider" })
  262 |       .click();
  263 |   });
  264 |   await allure.step("Click Send to dealer", async () => {
  265 |     await page.getByRole("button", { name: "Send to dealer" }).click();
  266 |   });
  267 |   await allure.step("Enter postcode", async () => {
  268 |     await page
  269 |       .getByRole("textbox", { name: "Postcode or town" })
  270 |       .fill("sw1w 0ny");
  271 |   });
  272 |   await allure.step("Click search", async () => {
  273 |     await page.getByRole("button", { name: "magnify glass" }).click();
  274 |   });
  275 |   await allure.step("Click Next", async () => {
  276 |     await page.getByRole("button", { name: "Next arrow" }).click();
  277 |   });
  278 |   await allure.step("Fill Contact Details", async () => {
  279 |     const contactForm = new ContactForm(page);
  280 |     await contactForm.fillContactDetails();
  281 |   });
  282 |   await allure.step("Send request", async () => {
  283 |     await page.getByRole("button", { name: "Send request arrow" }).click();
  284 |   });
  285 |   await allure.step("Verify Thank You message is displayed", async () => {
  286 |     await expect(
  287 |       page.getByRole("heading", { name: "Thank You!" }),
> 288 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  289 |   });
  290 | });
  291 | 
  292 | // test("Book a Service - Service, MOT, Recall", async ({ page }) => {
  293 | //   await allure.epic("Book a Service");
  294 | //   await allure.feature("Service booking");
  295 | //   await allure.story("Booking a service");
  296 | //   await allure.severity(Severity.CRITICAL);
  297 | //   await allure.description(
  298 | //     "User is able to book a service",
  299 | //   );
  300 | //   await allure.owner("QA Team");
  301 | //   await allure.tag("smoke");
  302 | //   await page.goto(
  303 | //     "https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  304 | //   );
  305 | 
  306 | //   await acceptCookiesIfPresent(page);
  307 | // await allure.step("Open Colours & Accessories", async () => {
  308 | //   await page.getByRole('link', { name: 'Colours & Accessories' }).click();
  309 | // });
  310 | // await allure.step("Select Touring Screen (Clear)", async () => {
  311 | //   await page.locator('iframe[title="Configurator Form"]').contentFrame().getByRole('button', { name: 'Touring Screen (Clear)' }).click();
  312 | // });
  313 | // await allure.step("Select Grip Heater", async () => {
  314 | //   await page.locator('iframe[title="Configurator Form"]').contentFrame().getByRole('button', { name: 'Grip Heater Grip Heater' }).click();
  315 | // });
  316 | // await allure.step("Select Frame Slider", async () => {
  317 | //   await page.locator('iframe[title="Configurator Form"]').contentFrame().getByRole('button', { name: 'Frame Slider Frame Slider' }).click();
  318 | // });
  319 | // await allure.step("Click Send to dealer", async () => {
  320 | //   await page.getByRole('button', { name: 'Send to dealer' }).click();
  321 | // });
  322 | // await allure.step("Enter postcode", async () => {
  323 | //   await page.getByRole('textbox', { name: 'Postcode or town' }).fill('sw1w 0ny');
  324 | // });
  325 | // await allure.step("Click search", async () => {
  326 | //   await page.getByRole('button', { name: 'magnify glass' }).click();
  327 | // });
  328 | // await allure.step("Click Next", async () => {
  329 | //   await page.getByRole('button', { name: 'Next arrow' }).click();
  330 | // });
  331 | // await allure.step("Fill Contact Details", async () => {
  332 | //   const contactForm = new ContactForm(page);
  333 | //   await contactForm.fillContactDetails();
  334 | // });
  335 | // await allure.step("Send request", async () => {
  336 | //   await page.getByRole('button', { name: 'Send request arrow' }).click();
  337 | // });
  338 | // await allure.step("Verify Thank You message is displayed", async () => {
  339 | //   await expect(page.getByRole('heading', { name: 'Thank You!' })).toBeVisible();
  340 | // });
  341 | // });
  342 | test("Reserve now - SV-7GX", async ({ page }) => {
  343 |   await allure.epic("Reserve now");
  344 |   await allure.feature("Reserving a bike");
  345 |   await allure.story("Booking a service");
  346 |   await allure.severity(Severity.CRITICAL);
  347 |   await allure.description("User is able to reserve a bike");
  348 |   await allure.owner("QA Team");
  349 |   await allure.tag("smoke");
  350 |   await page.goto(
  351 |     "https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/#RESERVENOW/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  352 |   );
  353 | 
  354 |   await acceptCookiesIfPresent(page);
  355 |   await allure.step("Fill Contact Details", async () => {
  356 |     const contactForm = new ContactForm(page);
  357 |     await contactForm.fillContactDetails();
  358 |   });
  359 |   await allure.step("Fill Postcode field", async () => {
  360 |     await page.locator("#postcode").fill("SW1W 0NY");
  361 |   });
  362 |   await allure.step("Fill Building number field", async () => {
  363 |     await page.locator("#buildingNumber").fill("7E");
  364 |   });
  365 |   await allure.step("Accept Reserve checkbox", async () => {
  366 |     await page.getByRole("checkbox").first().check();
  367 |   });
  368 |   await allure.step("Email opt in", async () => {
  369 |     await page.getByRole("checkbox").nth(2).check();
  370 |   });
  371 |   await allure.step("Send request", async () => {
  372 |     await page.getByRole("button", { name: "Submit arrow" }).click();
  373 |   });
  374 |   await allure.step("Verify Thank You message is displayed", async () => {
  375 |     await expect(
  376 |       page.getByRole("heading", { name: "THANK YOU FOR RESERVING YOUR" }),
  377 |     ).toBeVisible();
  378 |   });
  379 | });
  380 | 
```