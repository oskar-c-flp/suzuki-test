# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 4W.spec.ts >> Finance - e Vitara
- Location: tests\4W.spec.ts:924:5

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
  - text: Your new e VITARA MOTION
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
  - definition: "02234234"
  - button "Edit your details section"
  - term: Business details
  - definition: Name
  - definition: Street, Town, MK4 4AE
  - button "Edit business details section"
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
        - /url: /send-to-dealer/?itemID=SIEV00MOT5EE%20A&name=e%20VITARA%20MOTION&model=e%20VITARA&price=24999&categ=SUV%20Styling%3APractical%3AAutomatic%3A4x4&gtm=eyJkcml2ZXRyYWluVGl0bGUiOiIyIFdoZWVsLURyaXZlIiwibXBnVmFsdWUiOiIyMzgiLCJnYU1vZGVsWWVhciI6IjIwMjYifQ==&doorType=&fuelType=Electric&exteriorColour=Arctic%20White%20Pearl&transmission=Single-speed%20auto&vmff=ZSBWSVRBUkEgNDlrV2ggTU9USU9O&mffq=ZSBWaXRhcmE=&mileage=14000&firstPayment=406.52&monthlyPayment=406.66&noOfPayments=30&finalOptionalPayment=9206&cashPrice=24999.00&cashDeposit=4000&totalCredit=20999&totalPayable=24999&duration=30&apr=0&financeType=PCP&fixedRateInterest=0&excessMileageRate=9.6&purchaseFee=0&customerType=Business&capcode=U0lFVjAwTU9UNUVFIEE=&capid=&isRedirectFromFinance=true&grIm=aHR0cHM6Ly9tZWRpYS51bWJyYWNvLmlvL3N0YWdlLXN1enVraS1nYi9hM2lib3Biei9zdXp1a2ktZS12aXRhcmEtbW90aW9uLWNlbGVzdGlhbC1ibHVlLXBlYXJsLW1ldGFsbGljLnBuZw==&dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpJTIwZSUyMFZpdGFyYSUyMENhciUyMEZpbmFuY2UlMjBDYWxjdWxhdG9yJTIwJTdDJTIwU3V6dWtpJTIwQ2FycyUyMFVLJm5hdmlnYXRpb25fZWxlbWVudD1TZW5kJTIwdG8lMjBkZWFsZXI#
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
        - /url: /send-to-dealer/?itemID=SIEV00MOT5EE%20A&name=e%20VITARA%20MOTION&model=e%20VITARA&price=24999&categ=SUV%20Styling%3APractical%3AAutomatic%3A4x4&gtm=eyJkcml2ZXRyYWluVGl0bGUiOiIyIFdoZWVsLURyaXZlIiwibXBnVmFsdWUiOiIyMzgiLCJnYU1vZGVsWWVhciI6IjIwMjYifQ==&doorType=&fuelType=Electric&exteriorColour=Arctic%20White%20Pearl&transmission=Single-speed%20auto&vmff=ZSBWSVRBUkEgNDlrV2ggTU9USU9O&mffq=ZSBWaXRhcmE=&mileage=14000&firstPayment=406.52&monthlyPayment=406.66&noOfPayments=30&finalOptionalPayment=9206&cashPrice=24999.00&cashDeposit=4000&totalCredit=20999&totalPayable=24999&duration=30&apr=0&financeType=PCP&fixedRateInterest=0&excessMileageRate=9.6&purchaseFee=0&customerType=Business&capcode=U0lFVjAwTU9UNUVFIEE=&capid=&isRedirectFromFinance=true&grIm=aHR0cHM6Ly9tZWRpYS51bWJyYWNvLmlvL3N0YWdlLXN1enVraS1nYi9hM2lib3Biei9zdXp1a2ktZS12aXRhcmEtbW90aW9uLWNlbGVzdGlhbC1ibHVlLXBlYXJsLW1ldGFsbGljLnBuZw==&dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpJTIwZSUyMFZpdGFyYSUyMENhciUyMEZpbmFuY2UlMjBDYWxjdWxhdG9yJTIwJTdDJTIwU3V6dWtpJTIwQ2FycyUyMFVLJm5hdmlnYXRpb25fZWxlbWVudD1TZW5kJTIwdG8lMjBkZWFsZXI#
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
  920  |     await expect(page.getByRole("heading", { name: "Thank you!" })).toBeVisible();
  921  |   });
  922  | });
  923  | 
  924  | test("Finance - e Vitara", async ({ page }) => {
  925  |   await allure.epic("Finance");
  926  |   await allure.feature("Calculating financing options");
  927  |   await allure.severity(Severity.CRITICAL);
  928  |   await allure.description("User is able to calculate financing - e Vitara");
  929  |   await allure.owner("QA Team");
  930  |   await allure.tag("smoke");
  931  |   await page.goto(
  932  |     "https://staging-cars.test-suzuki.co.uk/offers-finance/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  933  |   );
  934  |   await acceptCookiesIfPresent(page);
  935  | 
  936  |   await allure.step("Click Explore Vitara offers", async () => {
  937  |     await page.getByRole('link', { name: 'Explore e Vitara offers' }).click();
  938  |   });
  939  |   
  940  |   await allure.step("Click Finance Calculator", async () => {
  941  |     await expect(page).toHaveURL(/vitara-offers-and-finance\//);
  942  |     await page.getByLabel('Main banner').getByRole('link', { name: 'Finance Calculator' }).click();
  943  |   });
  944  |   await allure.step("Select customer type Business", async () => {
  945  |     await expect(page).toHaveURL(/grade=MOTION/);
  946  |     await expect(async () => {
  947  |       await page.locator("label").filter({ hasText: "Business" }).click();
  948  |       await expect(page.getByRole("radio", { name: /Business/ })).toBeChecked();
  949  | }).toPass();
  950  |   });
  951  |   await allure.step("Set deposit percentage slider", async () => {
  952  |     await page.getByRole('slider', { name: 'A larger deposit could reduce' }).fill('30');
  953  |   });
  954  |   await allure.step("Set annual mileage slider", async () => {
  955  |     const mileage_slider = page.getByRole("slider", { name: "What’s your annual mileage?" });
  956  |     await mileage_slider.scrollIntoViewIfNeeded();
  957  |     await mileage_slider.fill("14000");
  958  |   });
  959  |   await allure.step("Fill Deposit amount", async () => {
  960  |     await page.getByRole("textbox", { name: "Deposit" }).fill("4000");
  961  |   });
  962  |   await allure.step("Click Calculate financing", async () => {
  963  |     await page.getByRole("button", { name: "Calculate financing" }).click();
  964  |   });
  965  |   await allure.step("Click Send to dealer", async () => {
  966  |     await page.getByRole("button", { name: "Send to dealer" }).click();
  967  |   });
  968  |   await allure.step("Enter postcode or location", async () => {
  969  |     await page
  970  |       .getByRole("searchbox", { name: "Postcode or location" })
  971  |       .fill("mk4 4ae");
  972  |   });
  973  |   await allure.step("Click search", async () => {
  974  |     await page
  975  |       .getByRole("button", { name: "Search postcode or location" })
  976  |       .click();
  977  |   });
  978  |   await allure.step("Click Your details", async () => {
  979  |     await page.getByRole("button", { name: "Your details" }).nth(1).click();
  980  |   });
  981  |   await allure.step("Select title", async () => {
  982  |   await page.getByRole("combobox", { name: "Select Title" }).click();
  983  |   await page.getByRole("option", { name: "Mr", exact: true }).click();
  984  | });
  985  | await allure.step("Fill First name and Last name fields", async () => {
  986  |   await page.getByRole("textbox", { name: "First name (required)" }).fill("Test");
  987  |   await page.getByRole("textbox", { name: "Last name (required)" }).fill("Data");
  988  | });
  989  | await allure.step("Fill Job title", async () => {
  990  |   await page.getByRole("textbox", { name: "Job Title (required)" }).fill("Job");
  991  | });
  992  | await allure.step("Fill Business email", async () => {
  993  |   await page.getByRole("textbox", { name: "Business email (required)" }).fill("hello@suzuki.co.uk");
  994  | });
  995  | await allure.step("Fill Business phone", async () => {
  996  |   await page.getByRole("textbox", { name: "Business Phone (required)" }).fill("02234234");
  997  | });
  998  | await allure.step("Fill Business name", async () => {
  999  |   await page.getByRole("textbox", { name: "Business name (required)" }).fill("Name");
  1000 | });
  1001 | await allure.step("Fill Business postcode", async () => {
  1002 |   await page.getByRole("textbox", { name: "Business Postcode (required)" }).fill("MK4 4AE");
  1003 | });
  1004 | await allure.step("Fill Building number / name", async () => {
  1005 |   await page.getByRole("textbox", { name: "Building number / name (" }).fill("7E");
  1006 | });
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
> 1020 |     await expect(page.getByRole("heading", { name: "Thank you!" })).toBeVisible();
       |                                                                     ^ Error: expect(locator).toBeVisible() failed
  1021 |   });
  1022 | });
```