# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 2W.spec.ts >> Reserve now - SV-7GX
- Location: tests\2W.spec.ts:342:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'SV-7S, Reserve now' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - alert [ref=e3]
    - status [ref=e4]
    - generic [ref=e5]:
      - link "Skip to main content" [ref=e6] [cursor=pointer]:
        - /url: "#main-content"
      - banner [ref=e7]:
        - generic [ref=e8]:
          - generic [ref=e9]:
            - navigation "Quick links" [ref=e10]:
              - list [ref=e11]:
                - listitem [ref=e12]:
                  - link "Book a test ride" [ref=e13] [cursor=pointer]:
                    - /url: https://staging-bikes.test-suzuki.co.uk/book-a-test-ride/
                - listitem [ref=e16]:
                  - link "Find a Dealer" [ref=e17] [cursor=pointer]:
                    - /url: https://staging-bikes.test-suzuki.co.uk/find-a-dealer/
                - listitem [ref=e20]:
                  - link "Download a brochure" [ref=e21] [cursor=pointer]:
                    - /url: https://staging-bikes.test-suzuki.co.uk/order-a-brochure/
                - listitem [ref=e24]:
                  - link "Offers and Finance" [ref=e25] [cursor=pointer]:
                    - /url: https://staging-bikes.test-suzuki.co.uk/offers-and-finance/
            - img "Serious. Fun" [ref=e29]
          - link "Suzuki homepage" [ref=e30] [cursor=pointer]:
            - /url: /
          - navigation "Main navigation" [ref=e32]:
            - list [ref=e36]:
              - link "BIKES, 1 of 4" [ref=e37] [cursor=pointer]:
                - /url: /bikes/sport/sv-7gx/#
                - text: BIKES
              - link "OFFERS & FINANCE" [ref=e38] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/offers-and-finance/
              - link "OWNERS, 3 of 4" [ref=e39] [cursor=pointer]:
                - /url: /bikes/sport/sv-7gx/#
                - text: OWNERS
              - link "NEWS & EVENTS" [ref=e40] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/news-events/
            - status [ref=e41]
            - button "Search Suzuki website. Focus moves to search field when activated." [ref=e42] [cursor=pointer]
      - main [ref=e46]:
        - navigation "Secondary site navigation" [ref=e48]:
          - generic [ref=e49]:
            - generic [ref=e50]: SV-7GX
            - list [ref=e51]:
              - listitem [ref=e52]:
                - link "Overview" [ref=e53] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/?dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpIFNWLTdHWCB8IFN1enVraSBCaWtlcyBVSyZuYXZpZ2F0aW9uX2VsZW1lbnQ9T3ZlcnZpZXc
              - listitem [ref=e54]:
                - link "Performance & Tech" [ref=e55] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/performance-tech/?dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpIFNWLTdHWCB8IFN1enVraSBCaWtlcyBVSyZuYXZpZ2F0aW9uX2VsZW1lbnQ9UGVyZm9ybWFuY2UgJiBUZWNo
              - listitem [ref=e56]:
                - link "Specs" [ref=e57] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/specs/?dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpIFNWLTdHWCB8IFN1enVraSBCaWtlcyBVSyZuYXZpZ2F0aW9uX2VsZW1lbnQ9U3BlY3M
              - listitem [ref=e58]:
                - link "Colours & Accessories" [ref=e59] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/colours-accessories/?dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpIFNWLTdHWCB8IFN1enVraSBCaWtlcyBVSyZuYXZpZ2F0aW9uX2VsZW1lbnQ9Q29sb3VycyAmIEFjY2Vzc29yaWVz
              - listitem [ref=e60]:
                - link "Finance & Offers" [ref=e61] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/finance-offers/?dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpIFNWLTdHWCB8IFN1enVraSBCaWtlcyBVSyZuYXZpZ2F0aW9uX2VsZW1lbnQ9RmluYW5jZSAmIE9mZmVycw
            - link "Book a test ride" [ref=e63] [cursor=pointer]:
              - /url: https://staging-bikes.test-suzuki.co.uk/book-a-test-ride/?v=U1YtN0dY
        - banner "Main banner" [ref=e66]:
          - group "EXPERIENCE MORE. SV-7GX&nbsp; Developed to establish a new midweight crossover motorcycle that blends comfort and everyday usability with the versatility and presence of a full-blown sport adventure bike, to broaden every riding experience with each pulse of its V-twin heartbeat. &nbsp; &nbsp;" [ref=e68]:
            - generic [ref=e70]:
              - 'heading "Product label: EXPERIENCE MORE" [level=2] [ref=e71]': EXPERIENCE MORE
              - 'heading "Main heading: SV-7GX&nbsp; Developed to establish a new midweight crossover motorcycle that blends comfort and everyday usability with the versatility and presence of a full-blown sport adventure bike, to broaden every riding experience with each pulse of its V-twin heartbeat. &nbsp; &nbsp;" [level=1] [ref=e73]':
                - generic [ref=e74]:
                  - heading "SV-7GX" [level=1] [ref=e75]
                  - paragraph [ref=e76]: Developed to establish a new midweight crossover motorcycle that blends comfort and everyday usability with the versatility and presence of a full-blown sport adventure bike, to broaden every riding experience with each pulse of its V-twin heartbeat.
                  - paragraph [ref=e77]
                  - paragraph [ref=e78]
              - paragraph [ref=e79]: FROM £6,999
              - 'generic "Legal information: OTR**" [ref=e80]': OTR**
            - generic:
              - group "Call to action links"
            - img "Suzuki SV-7GX blue, moving along a ridge with a guardrail and the sea behind" [ref=e85]
        - generic [ref=e90]:
          - generic [ref=e92]:
            - heading "SPORTY GX STYLING" [level=3] [ref=e95]
            - paragraph [ref=e96]: Inspired by the 1000GX+, the 7GX carries a sharp sporty look.
            - link "Learn More" [ref=e98] [cursor=pointer]:
              - /url: https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/colours-accessories/#styling
          - generic [ref=e103]:
            - heading "PUNCHY MIDDLEWEIGHT PERFORMANCE" [level=3] [ref=e106]
            - paragraph [ref=e107]: V-Twin character, performance and that great unique sound await.
            - link "Learn More" [ref=e109] [cursor=pointer]:
              - /url: https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/performance-tech/#Engine
          - generic [ref=e114]:
            - heading "ALL THE TECH YOU NEED" [level=3] [ref=e117]
            - paragraph [ref=e118]: Strong standard spec electronics compliment an excellent mechanical package.
            - link "Learn More" [ref=e120] [cursor=pointer]:
              - /url: https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/performance-tech/#electronics
          - generic [ref=e125]:
            - heading "A BLEND OF COMFORT & PRACTICALITY" [level=3] [ref=e128]
            - paragraph [ref=e129]: A great balance of comfort, sporty performance and everyday usability.
            - link "Learn More" [ref=e131] [cursor=pointer]:
              - /url: https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/performance-tech/#chassis
        - generic [ref=e138]:
          - heading "GALLERY" [level=2] [ref=e140]
          - region "GALLERY carousel" [ref=e142]:
            - generic [ref=e143]:
              - button "Previous slide" [disabled]: ←
              - img "Suzuki SV-7GX blue close up of the headlights and right hand side with Suzuki and 7GX logos" [ref=e150]
              - button "Next slide" [ref=e181] [cursor=pointer]: →
              - tablist "Carousel navigation" [ref=e182]:
                - listitem [ref=e183] [cursor=pointer]:
                  - tab "Go to slide 1 of 7" [selected] [ref=e184]
                - listitem [ref=e185] [cursor=pointer]:
                  - tab "Go to slide 2 of 7" [ref=e186]
                - listitem [ref=e187] [cursor=pointer]:
                  - tab "Go to slide 3 of 7" [ref=e188]
                - listitem [ref=e189] [cursor=pointer]:
                  - tab "Go to slide 4 of 7" [ref=e190]
                - listitem [ref=e191] [cursor=pointer]:
                  - tab "Go to slide 5 of 7" [ref=e192]
                - listitem [ref=e193] [cursor=pointer]:
                  - tab "Go to slide 6 of 7" [ref=e194]
                - listitem [ref=e195] [cursor=pointer]:
                  - tab "Go to slide 7 of 7" [ref=e196]
        - region "Carousel" [ref=e202]:
          - generic [ref=e205]:
            - link "Book a test ride" [ref=e208] [cursor=pointer]:
              - generic [ref=e211]:
                - heading "TEST RIDE" [level=4] [ref=e212]
                - paragraph [ref=e213]: We're here to help you book a test ride - find your local dealer now!
                - generic: Book a test ride
            - link "Find a dealer" [ref=e216] [cursor=pointer]:
              - generic [ref=e219]:
                - heading "FIND A DEALER" [level=4] [ref=e220]
                - paragraph [ref=e221]: Locate your nearest Suzuki dealer and start your journey today.
                - generic: Find a dealer
            - link "Download a brochure" [ref=e224] [cursor=pointer]:
              - generic [ref=e227]:
                - heading "BROCHURES" [level=4] [ref=e228]
                - paragraph [ref=e229]: Explore models, feature and specs - download your brochure now.
                - generic: Download a brochure
            - link "Find out more" [ref=e232] [cursor=pointer]:
              - generic [ref=e233]:
                - img "Insurance and Accident Aftercare" [ref=e235]
                - generic [ref=e236]:
                  - heading "OFFERS & FINANCE" [level=4] [ref=e237]
                  - paragraph [ref=e238]: The current offers and flexible finance to help you get on the road.
                  - generic: Find out more
        - generic [ref=e240]:
          - heading "SV-7GX COLOURS" [level=2] [ref=e243]
          - generic [ref=e246]:
            - img "Pearl Brilliant White (YUH) £6,999 Suzuki SV-7GX" [ref=e248]
            - generic [ref=e249]:
              - generic [ref=e251]:
                - button "Pearl Brilliant White (YUH) £6,999" [ref=e252] [cursor=pointer]
                - button "Pearl Brilliant White / Metallic Triton Blue (BQJ) £7,399" [ref=e253] [cursor=pointer]
                - button "Pearl Matt Greige (Q2A) £7,399" [ref=e254] [cursor=pointer]
                - button "Glass Sparkle Black (YVB) £7,399" [ref=e255] [cursor=pointer]
              - paragraph [ref=e257]: Pearl Brilliant White (YUH) £6,999
              - link "Explore Colours & Styling" [ref=e259] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/colours-accessories/
        - generic [ref=e262]:
          - heading "TAKE A CLOSER LOOK" [level=3] [ref=e265]
          - generic [ref=e268]:
            - generic [ref=e270]:
              - heading "Performance & Tech" [level=3] [ref=e273]
              - link "Learn More" [ref=e275] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/performance-tech/
            - generic [ref=e280]:
              - heading "SPECIFICATIONS" [level=3] [ref=e283]
              - link "Learn More" [ref=e285] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/specs/
            - generic [ref=e290]:
              - heading "Colours & Accessories" [level=3] [ref=e293]
              - link "Learn More" [ref=e295] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/colours-accessories/
            - generic [ref=e300]:
              - heading "Finance & Offers" [level=3] [ref=e303]
              - link "Learn More" [ref=e305] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/finance-offers/
        - generic [ref=e310]:
          - generic [ref=e312]:
            - heading "MORE REASONS TO PURCHASE" [level=3] [ref=e313]
            - paragraph [ref=e317]:
              - text: Suzuki bike owners also benefit from our
              - link "up-to-10-year warranty" [ref=e318] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/owners/warranty/
              - text: ","
              - link "AA Roadside assistance" [ref=e319] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/owners/service-maintenance/aa-roadside-assistance/
              - text: in the first year and personalised
              - link "insurance" [ref=e320] [cursor=pointer]:
                - /url: https://staging-bikes.test-suzuki.co.uk/owners/suzuki-insurance/
              - text: coverage.
          - region "Carousel" [ref=e324]:
            - generic [ref=e325]:
              - button "Previous slide" [disabled]: ←
              - img "Suzuki GSX-8TT front three quarters moving around a corner" [ref=e332]
              - button "Next slide" [ref=e343] [cursor=pointer]: →
              - list [ref=e344]:
                - listitem [ref=e345] [cursor=pointer]:
                  - tab "Go to slide 1 of 3" [ref=e346]
                - listitem [ref=e347] [cursor=pointer]:
                  - tab "Go to slide 2 of 3" [ref=e348]
                - listitem [ref=e349] [cursor=pointer]:
                  - tab "Go to slide 3 of 3" [ref=e350]
        - generic [ref=e356]:
          - strong [ref=e358]: Terms and Conditions
          - generic [ref=e359]:
            - generic [ref=e360]: "* Fuel economy was measured by Suzuki in the Worldwide Motorcycle Test Cycle (WMTC). Exhaust emissions measuring conditions measured by Suzuki. Actual fuel economy and riding range may differ owing to differences in conditions such as the weather, road, rider behavior and maintenance.† Torque conversions to imperial units (in brackets) are approximate and included as a guide only.¹ ABS is not designed to shorten the braking distance. Please always ride at a safe speed for road and weather conditions, including while cornering.² Traction control system is not a substitute for rider’s throttle control under the various conditions, and traction control cannot prevent loss of traction due to excessive speed when entering turns, or while braking, and it does not control front wheel traction."
            - generic [ref=e361]: Specifications, appearance, colours (including body colour), equipment, materials and other aspects of the “SUZUKI” products shown on this website differ by market and are subject to change by Suzuki at any time without notice. Each model may be discontinued without notice. Please enquire at your local dealer for details of any such differences or changes. Images contain computer-generated composites and may include optional accessories. All images are of professional riders under closed road conditions. Always wear a helmet, eye protection and protective clothing. Read your Owner’s Manual carefully. Enjoy riding safely. Never ride under the influence of alcohol or other drugs.
            - generic [ref=e362]: "** The OTR price shown includes First Registration charges and Vehicle Excise Duty."
            - generic [ref=e363]: "All new Suzuki On-Road motorcycles officially imported into the United Kingdom by Suzuki GB PLC and first registered in the UK between 01-01-2026 and 31-12-2026 will benefit from an additional one year extension to the normal Two-Year Suzuki Warranty, such one year Warranty extension to apply subject to the following conditions:"
            - generic [ref=e364]: If you are a consumer, this extended Warranty is in addition to, and does not affect, your legal rights in relation to products that are faulty or not as described.
      - contentinfo [ref=e365]:
        - generic [ref=e367]:
          - button "Search for results" [ref=e368] [cursor=pointer]:
            - img "Search icon" [ref=e369]
          - searchbox "Search input" [ref=e370]
        - generic [ref=e372]:
          - generic [ref=e373]:
            - generic [ref=e374]: Categories
            - list [ref=e375]:
              - listitem [ref=e376]:
                - link "Sport" [ref=e377] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/bikes/sport/
              - listitem [ref=e378]:
                - link "Street" [ref=e379] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/bikes/street/
              - listitem [ref=e380]:
                - link "Adventure & Dual Sport" [ref=e381] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/bikes/adventure-dual-sport/
              - listitem [ref=e382]:
                - link "Scooter" [ref=e383] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/bikes/scooter/
              - listitem [ref=e384]:
                - link "MX" [ref=e385] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/bikes/mx/
              - listitem [ref=e386]:
                - link "Suzuki Vault" [ref=e387] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/suzuki-vault/
          - generic [ref=e388]:
            - generic [ref=e389]: Owners
            - list [ref=e390]:
              - listitem [ref=e391]:
                - link "Warranty, opens in new tab" [ref=e392] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/owners/warranty/
                  - text: Warranty
              - listitem [ref=e393]:
                - link "Suzuki Insurance" [ref=e394] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/owners/suzuki-insurance/
              - listitem [ref=e395]:
                - link "Parts & Accessories" [ref=e396] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/shop/
              - listitem [ref=e397]:
                - link "Handbooks" [ref=e398] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/owners/service-maintenance/owners-manuals/
          - generic [ref=e399]:
            - generic [ref=e400]: About Suzuki
            - list [ref=e401]:
              - listitem [ref=e402]:
                - link "About Us" [ref=e403] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/about-us/
              - listitem [ref=e404]:
                - link "Contact Us" [ref=e405] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/contact-us/
              - listitem [ref=e406]:
                - link "Careers" [ref=e407] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/careers/
              - listitem [ref=e408]:
                - link "Apprenticeships" [ref=e409] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/careers/apprenticeships/
          - generic [ref=e410]:
            - generic [ref=e411]: Useful Information
            - list [ref=e412]:
              - listitem [ref=e413]:
                - link "Privacy" [ref=e414] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/privacy/
              - listitem [ref=e415]:
                - link "Cookie Policy" [ref=e416] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/privacy/cookie-policy/
              - listitem [ref=e417]:
                - link "Quality Policy" [ref=e418] [cursor=pointer]:
                  - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
              - listitem [ref=e419]:
                - link "Legal" [ref=e420] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/legal/
              - listitem [ref=e421]:
                - link "Section 172 Statement" [ref=e422] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/section-172-statement/
              - listitem [ref=e423]:
                - link "Tax Strategy" [ref=e424] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/about-us/uk-tax-strategy/
              - listitem [ref=e425]:
                - link "Human Trafficking Statement" [ref=e426] [cursor=pointer]:
                  - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
              - listitem [ref=e427]:
                - link "Certificate of Conformity" [ref=e428] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/contact-us/certificate-of-conformity/
              - listitem [ref=e429]:
                - link "Cyber Essentials Certificate" [ref=e430] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/cyber-essentials-certificate/
              - listitem [ref=e431]:
                - link "Sitemap" [ref=e432] [cursor=pointer]:
                  - /url: https://staging-bikes.test-suzuki.co.uk/sitemap/
              - listitem [ref=e433]:
                - link "Manage Cookies" [ref=e434] [cursor=pointer]:
                  - /url: /bikes/sport/sv-7gx/#
          - generic [ref=e435]:
            - generic [ref=e436]: Suzuki Global
            - list [ref=e437]:
              - listitem [ref=e438]:
                - link "Suzuki Cars" [ref=e439] [cursor=pointer]:
                  - /url: https://staging-cars.test-suzuki.co.uk/
              - listitem [ref=e440]:
                - link "Suzuki Marine" [ref=e441] [cursor=pointer]:
                  - /url: https://staging-marine.test-suzuki.co.uk/
              - listitem [ref=e442]:
                - link "Suzuki ATV" [ref=e443] [cursor=pointer]:
                  - /url: https://staging-atv.test-suzuki.co.uk/
              - listitem [ref=e444]:
                - link "Global Suzuki" [ref=e445] [cursor=pointer]:
                  - /url: https://www.globalsuzuki.com/
          - generic [ref=e446]:
            - generic [ref=e447]: Suzuki on social media
            - generic [ref=e448]:
              - link "Visit our Facebook page" [ref=e449] [cursor=pointer]:
                - /url: https://www.facebook.com/suzukibikesuk
              - link "Visit our X (formerly Twitter) page" [ref=e450] [cursor=pointer]:
                - /url: https://www.twitter.com/suzukibikesuk
              - link "Visit our Instagram page" [ref=e451] [cursor=pointer]:
                - /url: https://www.instagram.com/suzukibikesuk
              - link "Visit our YouTube page" [ref=e452] [cursor=pointer]:
                - /url: https://www.youtube.com/suzukibikesuk
        - list "Legal and policy links" [ref=e453]:
          - link "Cyber Essentials Certified" [ref=e454] [cursor=pointer]:
            - /url: /cyber-essentials-certificate/
            - img "Suzuki Cyber Essentials Certified" [ref=e455]
  - alert [ref=e456]
```

# Test source

```ts
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
  288 |     ).toBeVisible();
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
> 355 |   await page.getByRole('link', { name: 'SV-7S, Reserve now' }).click();
      |                                                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  356 |   await allure.step("Fill Contact Details", async () => {
  357 |     const contactForm = new ContactForm(page);
  358 |     await contactForm.fillContactDetails();
  359 |   });
  360 |   await allure.step("Fill Postcode field", async () => {
  361 |     await page.locator("#postcode").fill("SW1W 0NY");
  362 |   });
  363 |   await allure.step("Fill Building number field", async () => {
  364 |     await page.locator("#buildingNumber").fill("7E");
  365 |   });
  366 |   await allure.step("Accept Reserve checkbox", async () => {
  367 |     await page.getByRole("checkbox").first().check();
  368 |   });
  369 |   await allure.step("Email opt in", async () => {
  370 |     await page.getByRole("checkbox").nth(2).check();
  371 |   });
  372 |   await allure.step("Send request", async () => {
  373 |     await page.getByRole("button", { name: "Submit arrow" }).click();
  374 |   });
  375 |   await allure.step("Verify Thank You message is displayed", async () => {
  376 |     await expect(
  377 |       page.getByRole("heading", { name: "THANK YOU FOR RESERVING YOUR" }),
  378 |     ).toBeVisible();
  379 |   });
  380 | });
  381 | 
```