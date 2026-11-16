# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 4W.spec.ts >> Finance - Vitara
- Location: tests\4W.spec.ts:837:5

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
  - text: Your new VITARA MOTION MILD HYBRID
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
        - /url: /send-to-dealer/?itemID=SIVI14MT15EPTM%20%203&name=VITARA%20MOTION%20MILD%20HYBRID&model=VITARA&price=21999&categ=SUV%20Styling%3APractical%3AAutomatic%3A4x4&gtm=eyJkcml2ZXRyYWluVGl0bGUiOiIyLXdoZWVsIERyaXZlIiwiZW5naW5lRGlzcGxhY2VtZW50IjoxMzczLCJtcGdWYWx1ZSI6IjQ3LjgifQ==&doorType=&fuelType=Petrol&exteriorColour=White&transmission=6-Speed%20Manual%20&vmff=Vml0YXJhIE1vdGlvbiBNaWxk&mffq=Vml0YXJhIE1vdGlvbiBNaWxk&mileage=14000&monthlyPayment=379.91&noOfPayments=30&finalOptionalPayment=9997&cashPrice=21999.00&cashDeposit=4000&totalCredit=17999&totalPayable=25014.39&duration=30&apr=8.9&financeType=PCP&fixedRateInterest=8.53&excessMileageRate=4.8&purchaseFee=10&customerType=Personal&capcode=U0lWSTE0TVQxNUVQVE0gIDM=&capid=&isRedirectFromFinance=true&grIm=aHR0cHM6Ly9tZWRpYS51bWJyYWNvLmlvL3N0YWdlLXN1enVraS1nYi9kZ3RuNGZ3NS9fMDAyMF8xMTE1NF9zdXp1a2lfdml0YXJhX3VsdHJhX3RvX21vdGlvbl9yMl9pZ2IucG5n&dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpJTIwVml0YXJhJTIwQ2FyJTIwRmluYW5jZSUyMENhbGN1bGF0b3IlMjAlN0MlMjBTdXp1a2klMjBDYXJzJTIwVUsmbmF2aWdhdGlvbl9lbGVtZW50PVNlbmQlMjB0byUyMGRlYWxlcg#
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
        - /url: /send-to-dealer/?itemID=SIVI14MT15EPTM%20%203&name=VITARA%20MOTION%20MILD%20HYBRID&model=VITARA&price=21999&categ=SUV%20Styling%3APractical%3AAutomatic%3A4x4&gtm=eyJkcml2ZXRyYWluVGl0bGUiOiIyLXdoZWVsIERyaXZlIiwiZW5naW5lRGlzcGxhY2VtZW50IjoxMzczLCJtcGdWYWx1ZSI6IjQ3LjgifQ==&doorType=&fuelType=Petrol&exteriorColour=White&transmission=6-Speed%20Manual%20&vmff=Vml0YXJhIE1vdGlvbiBNaWxk&mffq=Vml0YXJhIE1vdGlvbiBNaWxk&mileage=14000&monthlyPayment=379.91&noOfPayments=30&finalOptionalPayment=9997&cashPrice=21999.00&cashDeposit=4000&totalCredit=17999&totalPayable=25014.39&duration=30&apr=8.9&financeType=PCP&fixedRateInterest=8.53&excessMileageRate=4.8&purchaseFee=10&customerType=Personal&capcode=U0lWSTE0TVQxNUVQVE0gIDM=&capid=&isRedirectFromFinance=true&grIm=aHR0cHM6Ly9tZWRpYS51bWJyYWNvLmlvL3N0YWdlLXN1enVraS1nYi9kZ3RuNGZ3NS9fMDAyMF8xMTE1NF9zdXp1a2lfdml0YXJhX3VsdHJhX3RvX21vdGlvbl9yMl9pZ2IucG5n&dataLayer=bmF2aWdhdGlvbl9tZXRob2Q9U3V6dWtpJTIwVml0YXJhJTIwQ2FyJTIwRmluYW5jZSUyMENhbGN1bGF0b3IlMjAlN0MlMjBTdXp1a2klMjBDYXJzJTIwVUsmbmF2aWdhdGlvbl9lbGVtZW50PVNlbmQlMjB0byUyMGRlYWxlcg#
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
  917 |     await page.getByRole("button", { name: "Review details" }).first().click();
  918 |   });
  919 |   await allure.step("Verify Thank you message is displayed", async () => {
> 920 |     await expect(page.getByRole("heading", { name: "Thank you!" })).toBeVisible();
      |                                                                     ^ Error: expect(locator).toBeVisible() failed
  921 |   });
  922 | });
  923 | 
```