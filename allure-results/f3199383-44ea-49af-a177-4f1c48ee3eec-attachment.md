# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 4W.spec.ts >> Finance - Swift
- Location: tests\4W.spec.ts:1024:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Thank you!' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Thank you!' })

```

```yaml
- alert
- status
- link "Skip to main content":
  - /url: "#main-content"
- banner:
  - button "Close notification banner"
  - navigation "Quick links":
    - list:
      - listitem:
        - link "Find us":
          - /url: https://staging-cars.test-suzuki.co.uk/find-a-dealer/
      - listitem:
        - link "Book a Test Drive":
          - /url: https://staging-cars.test-suzuki.co.uk/request-a-test-drive/
      - listitem:
        - link "Book a Service":
          - /url: https://staging-cars.test-suzuki.co.uk/owners/request-a-service/
      - listitem:
        - link "Request a callback":
          - /url: https://staging-cars.test-suzuki.co.uk/request-a-call-back/
          - text: Request a Callback
      - listitem:
        - link "Request a brochure":
          - /url: https://staging-cars.test-suzuki.co.uk/request-a-brochure/
      - listitem:
        - link "Finance Calculator":
          - /url: https://staging-cars.test-suzuki.co.uk/finance-calculator/
  - link "Suzuki homepage":
    - /url: /
  - navigation "Main navigation":
    - list:
      - link "NEW CARS, 1 of 6":
        - /url: "#"
        - text: NEW CARS
      - link "USED CARS, 2 of 6":
        - /url: "#"
        - text: USED CARS
      - link "MOTABILITY, 3 of 6":
        - /url: "#"
        - text: MOTABILITY
      - link "BUSINESS, 4 of 6":
        - /url: "#"
        - text: BUSINESS
      - link "OFFERS & FINANCE, 5 of 6":
        - /url: "#"
        - text: OFFERS & FINANCE
      - link "OWNERS, 6 of 6":
        - /url: "#"
        - text: OWNERS
    - status
    - button "Search Suzuki website. Focus moves to search field when activated."
- main:
  - img "car"
  - text: Your new SWIFT MOTION MILD HYBRID
  - button "Back"
  - heading "Send to dealer" [level=2]
  - paragraph: Step 3 of 3
  - heading "review your Enquiry" [level=1]
  - paragraph: Please check the information you have provided before confirming your booking.
  - term: Dealer
  - definition: Brayley Milton Keynes, 27 Barnsdale Drive, Westcroft, Milton Keynes, Buckinghamshire, MK4 4DD
  - button "Edit dealer section"
  - term: Your details
  - definition: Test Data
  - definition: MK4 4AE
  - definition: hello@suzuki.co.uk
  - definition: "022636565"
  - button "Edit your details section"
  - iframe
  - paragraph: Recaptcha is required
  - button "Send enquiry" [disabled]
  - status: 6 locations found. Brayley Milton Keynes selected.
  - button "Send enquiry" [disabled]
  - button "Back to Top":
    - img "Back to Top"
- contentinfo:
  - paragraph: Not finished? It's all here...
  - button "Search for results":
    - img "Search icon"
  - searchbox "Search"
  - text: "Popular searches:"
  - list:
    - listitem:
      - link "Vitara":
        - /url: /search/?search=Vitara&pageCount=1
    - listitem:
      - link "Motability":
        - /url: /search/?search=Motability&pageCount=1
    - listitem:
      - link "Dealers":
        - /url: /search/?search=Dealers&pageCount=1
    - listitem:
      - link "Hybrid":
        - /url: /search/?search=Hybrid&pageCount=1
    - listitem:
      - link "Contact":
        - /url: /search/?search=Contact&pageCount=1
    - listitem:
      - link "Swift":
        - /url: /search/?search=Swift&pageCount=1
    - listitem:
      - link "0% Car Finance":
        - /url: /search/?search=0%25%20Car%20Finance&pageCount=1
    - listitem:
      - link "Electric":
        - /url: /search/?search=Electric&pageCount=1
  - text: Models
  - list:
    - listitem:
      - link "e Vitara":
        - /url: https://staging-cars.test-suzuki.co.uk/new-cars/e-vitara/
    - listitem:
      - link "Swift":
        - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift/
    - listitem:
      - link "S-Cross":
        - /url: https://staging-cars.test-suzuki.co.uk/new-cars/s-cross/
    - listitem:
      - link "Vitara":
        - /url: https://staging-cars.test-suzuki.co.uk/new-cars/vitara/
    - listitem:
      - link "Across":
        - /url: https://staging-cars.test-suzuki.co.uk/new-cars/across/
    - listitem:
      - link "Ignis":
        - /url: https://staging-cars.test-suzuki.co.uk/new-cars/ignis/
    - listitem:
      - link "Swace":
        - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swace/
    - listitem:
      - link "Swift Sport":
        - /url: https://staging-cars.test-suzuki.co.uk/new-cars/swift-sport/
    - listitem:
      - link "Jimny":
        - /url: https://staging-cars.test-suzuki.co.uk/new-cars/jimny/
  - text: About Suzuki
  - list:
    - listitem:
      - link "About Us":
        - /url: https://staging-cars.test-suzuki.co.uk/about-us/
    - listitem:
      - link "Awards":
        - /url: https://staging-cars.test-suzuki.co.uk/awards/
    - listitem:
      - link "Contact Us":
        - /url: https://staging-cars.test-suzuki.co.uk/contact-us/
    - listitem:
      - link "Careers":
        - /url: https://staging-cars.test-suzuki.co.uk/careers/
    - listitem:
      - link "Apprenticeships":
        - /url: https://staging-cars.test-suzuki.co.uk/apprenticeships/
  - text: Business
  - list:
    - listitem:
      - link "Company Car Driver":
        - /url: https://staging-cars.test-suzuki.co.uk/business/company-car/
    - listitem:
      - link "Fleet Managers":
        - /url: https://staging-cars.test-suzuki.co.uk/business/fleet-manager/
    - listitem:
      - link "Driving Instructors":
        - /url: https://staging-cars.test-suzuki.co.uk/business/driving-school-programme/
    - listitem:
      - link "Suzuki Dealer Franchise":
        - /url: https://staging-cars.test-suzuki.co.uk/franchised-suzuki-dealer/
  - text: Owners
  - list:
    - listitem:
      - link "Book a Service":
        - /url: https://staging-cars.test-suzuki.co.uk/owners/request-a-service/
    - listitem:
      - link "Suzuki Servicing":
        - /url: https://staging-cars.test-suzuki.co.uk/owners/servicing/
    - listitem:
      - link "Handbooks":
        - /url: https://staging-cars.test-suzuki.co.uk/owners/using-your-car/owners-handbooks/
  - text: Suzuki Global
  - list:
    - listitem:
      - link "Bikes":
        - /url: https://staging-bikes.test-suzuki.co.uk/
    - listitem:
      - link "ATV":
        - /url: https://staging-atv.test-suzuki.co.uk/
    - listitem:
      - link "Marine":
        - /url: https://staging-marine.test-suzuki.co.uk/
  - text: Useful Information
  - list:
    - listitem:
      - link "Privacy Policy":
        - /url: https://staging-cars.test-suzuki.co.uk/privacy/
    - listitem:
      - link "Cookie Policy":
        - /url: https://staging-cars.test-suzuki.co.uk/privacy/cookie-policy/
    - listitem:
      - link "Quality Policy":
        - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
    - listitem:
      - link "Legal":
        - /url: https://staging-cars.test-suzuki.co.uk/terms-of-use/
    - listitem:
      - link "Section 172 Statement":
        - /url: https://staging-cars.test-suzuki.co.uk/section-172-statement/
    - listitem:
      - link "Tax Strategy":
        - /url: https://staging-cars.test-suzuki.co.uk/uk-tax-strategy/
    - listitem:
      - link "Human Trafficking Statement, opens in new tab":
        - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
        - text: Human Trafficking Statement
    - listitem:
      - link "Certificate of Conformity":
        - /url: https://staging-cars.test-suzuki.co.uk/contact-us/certificate-of-conformity/
    - listitem:
      - link "Sitemap":
        - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
    - listitem:
      - link "Manage Cookies":
        - /url: /send-to-dealer/?itemID=SISW12MOT5HPIM%20%206&name=SWIFT%20MOTION%20MILD%20HYBRID&model=SWIFT&price=16499&categ=City%20Living%3ACompact%20%26%20Stylish%3AAutomatic%3APractical%3A4x4&gtm=eyJkcml2ZXRyYWluVGl0bGUiOiIyLXdoZWVsIERyaXZlIiwiZW5naW5lRGlzcGxhY2VtZW50IjoxMTk3LCJtcGdWYWx1ZSI6IjY0LjIiLCJnYU1vZGVsWWVhciI6IjIwMjQifQ==&doorType=&fuelType=Petrol&exteriorColour=Flame%20Orange%20Pearl%20Metallic&transmission=5-Speed%20Manual&vmff=U3dpZnQgMS4yIE1pbGQgSHlicmlkIE1vdGlvbg%3D%3D&mffq=U3dpZnQgMS4yIE1pbGQgSHlicmlkIE1vdGlvbg==&mileage=14000&monthlyPayment=206.03&noOfPayments=30&finalOptionalPayment=8191&cashPrice=16499.00&cashDeposit=4000&fDA=500&deposit=4500&totalCredit=11999&totalPayable=18665.87&duration=30&apr=8.9&financeType=PCP&fixedRateInterest=8.52&excessMileageRate=4.8&purchaseFee=10&customerType=Personal&capcode=U0lTVzEyTU9UNUhQSU0gIDY=&capid=&isRedirectFromFinance=true&grIm=aHR0cHM6Ly9tZWRpYS51bWJyYWNvLmlvL3N0YWdlLXN1enVraS1nYi9wYm9uNDV5Zy9zd2lmdC1tb2R1bGUtNTAtYWxwaGEtbW90aW9uLW1vYmlsZV92MngyLnBuZw==&dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpJTIwU3dpZnQlMjBDYXIlMjBGaW5hbmNlJTIwQ2FsY3VsYXRvciUyMCU3QyUyMFN1enVraSUyMENhcnMlMjBVSyZuYXZpZ2F0aW9uX2VsZW1lbnQ9U2VuZCUyMHRvJTIwZGVhbGVy#
  - text: Motability
  - list:
    - listitem:
      - link "What is Motability":
        - /url: https://staging-cars.test-suzuki.co.uk/motability/what-is-motability/
    - listitem:
      - link "Motability Offers":
        - /url: https://staging-cars.test-suzuki.co.uk/motability/
  - text: Categories
  - list:
    - listitem:
      - link "Electric Cars":
        - /url: https://staging-cars.test-suzuki.co.uk/new-cars/electric-cars/
    - listitem:
      - link "SUV Cars":
        - /url: https://staging-cars.test-suzuki.co.uk/new-cars/suv-crossovers/
    - listitem:
      - link "Small Cars":
        - /url: https://staging-cars.test-suzuki.co.uk/new-cars/small-hatchbacks/
    - listitem:
      - link "Hybrid Cars":
        - /url: https://staging-cars.test-suzuki.co.uk/hybrid/
    - listitem:
      - link "City Cars":
        - /url: https://staging-cars.test-suzuki.co.uk/new-cars/city-cars/
    - listitem:
      - link "Automatic Cars":
        - /url: https://staging-cars.test-suzuki.co.uk/automatic-cars/
    - listitem:
      - link "Family Cars":
        - /url: https://staging-cars.test-suzuki.co.uk/new-cars/family-cars/
    - listitem:
      - link "Plug-In Hybrid Cars":
        - /url: https://staging-cars.test-suzuki.co.uk/hybrid/plug-in-hybrid-electric-vehicles/
    - listitem:
      - link "AllGrip":
        - /url: https://staging-cars.test-suzuki.co.uk/allgrip/
  - text: Get your Suzuki
  - list:
    - listitem:
      - link "Request a Brochure":
        - /url: https://staging-cars.test-suzuki.co.uk/request-a-brochure/
    - listitem:
      - link "Find us":
        - /url: https://staging-cars.test-suzuki.co.uk/find-a-dealer/
    - listitem:
      - link "Request A Test Drive":
        - /url: https://staging-cars.test-suzuki.co.uk/request-a-test-drive/
    - listitem:
      - link "Car Configurator":
        - /url: https://staging-cars.test-suzuki.co.uk/new-cars/configure/
    - listitem:
      - link "Finance Calculator":
        - /url: https://staging-cars.test-suzuki.co.uk/finance-calculator/
  - text: Suzuki on social media
  - link "Visit our Facebook page (opens in new tab)":
    - /url: http://facebook.com/suzukicarsuk/
  - link "Visit our X (formerly Twitter) page (opens in new tab)":
    - /url: http://twitter.com/SuzukiCarsUK
  - link "Visit our Instagram page (opens in new tab)":
    - /url: https://instagram.com/suzukicarsuk
  - link "Visit our YouTube page (opens in new tab)":
    - /url: https://www.youtube.com/user/SuzukiCarsUK
  - list "Legal and policy links":
    - listitem:
      - link "Quality Policy":
        - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-quality-policy.pdf
    - listitem:
      - link "Human Trafficking Statement":
        - /url: https://cars-services.suzuki.co.uk/api/Asset/GetAsset/suzuki-modern-slavery-and-human-trafficking-statement.pdf
    - listitem:
      - link "Manage Cookies":
        - /url: /send-to-dealer/?itemID=SISW12MOT5HPIM%20%206&name=SWIFT%20MOTION%20MILD%20HYBRID&model=SWIFT&price=16499&categ=City%20Living%3ACompact%20%26%20Stylish%3AAutomatic%3APractical%3A4x4&gtm=eyJkcml2ZXRyYWluVGl0bGUiOiIyLXdoZWVsIERyaXZlIiwiZW5naW5lRGlzcGxhY2VtZW50IjoxMTk3LCJtcGdWYWx1ZSI6IjY0LjIiLCJnYU1vZGVsWWVhciI6IjIwMjQifQ==&doorType=&fuelType=Petrol&exteriorColour=Flame%20Orange%20Pearl%20Metallic&transmission=5-Speed%20Manual&vmff=U3dpZnQgMS4yIE1pbGQgSHlicmlkIE1vdGlvbg%3D%3D&mffq=U3dpZnQgMS4yIE1pbGQgSHlicmlkIE1vdGlvbg==&mileage=14000&monthlyPayment=206.03&noOfPayments=30&finalOptionalPayment=8191&cashPrice=16499.00&cashDeposit=4000&fDA=500&deposit=4500&totalCredit=11999&totalPayable=18665.87&duration=30&apr=8.9&financeType=PCP&fixedRateInterest=8.52&excessMileageRate=4.8&purchaseFee=10&customerType=Personal&capcode=U0lTVzEyTU9UNUhQSU0gIDY=&capid=&isRedirectFromFinance=true&grIm=aHR0cHM6Ly9tZWRpYS51bWJyYWNvLmlvL3N0YWdlLXN1enVraS1nYi9wYm9uNDV5Zy9zd2lmdC1tb2R1bGUtNTAtYWxwaGEtbW90aW9uLW1vYmlsZV92MngyLnBuZw==&dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpJTIwU3dpZnQlMjBDYXIlMjBGaW5hbmNlJTIwQ2FsY3VsYXRvciUyMCU3QyUyMFN1enVraSUyMENhcnMlMjBVSyZuYXZpZ2F0aW9uX2VsZW1lbnQ9U2VuZCUyMHRvJTIwZGVhbGVy#
    - listitem:
      - link "Sitemap":
        - /url: https://staging-cars.test-suzuki.co.uk/sitemap/
    - link "Cyber Essentials Certified":
      - /url: /cyber-essentials-certificate/
      - img "Suzuki Cyber Essentials Certified"
- alert: Send to Dealer | Suzuki Cars UK
- img
- img
- img
- img
- img
- img
- img
```

# Test source

```ts
  1007 | await allure.step("Fill Street name", async () => {
  1008 |   await page.getByRole("textbox", { name: "Street name (required)" }).fill("Street");
  1009 | });
  1010 | await allure.step("Fill Town", async () => {
  1011 |   await page.getByRole("textbox", { name: "Town (required)" }).fill("Town");
  1012 | });
  1013 | await allure.step("Fill County", async () => {
  1014 |   await page.getByRole("textbox", { name: "County (required)" }).fill("County");
  1015 | });
  1016 |   await allure.step("Click Review details", async () => {
  1017 |     await page.getByRole("button", { name: "Review details" }).first().click();
  1018 |   });
  1019 |   await allure.step("Verify Thank you message is displayed", async () => {
  1020 |     await expect(page.getByRole("heading", { name: "Thank you!" })).toBeVisible();
  1021 |   });
  1022 | });
  1023 | 
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
> 1107 |     await expect(page.getByRole("heading", { name: "Thank you!" })).toBeVisible();
       |                                                                     ^ Error: expect(locator).toBeVisible() failed
  1108 |   });
  1109 | });
```