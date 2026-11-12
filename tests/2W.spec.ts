import { test, expect, Page } from "@playwright/test";
import * as allure from "allure-js-commons";
import { Severity } from "allure-js-commons";
import { ContactForm, acceptCookiesIfPresent } from "../helpers/form-helper";


test("Download a brochure by email - Katana", async ({ page }) => {
  await allure.epic("Brochures");
  await allure.feature("Brochures download");
  await allure.severity(Severity.CRITICAL);
  await allure.description(
    "User is able to succesfully request a brochure to email - Katana",
  );
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-bikes.test-suzuki.co.uk/order-a-brochure/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );

  await acceptCookiesIfPresent(page);
  await allure.step("Choose range", async () => {
    await page.getByRole("img", { name: "Street-image" }).click();
  });
  await allure.step("Select Katana from dropdown", async () => {
    await page.getByText("Please select").first().click();
    await page.locator("form").getByText("KATANA").click();
  });
  await allure.step("Fill e-mail address field", async () => {
    await page.locator("#emailAddress").fill("hello@suzuki.co.uk");
  });
  await allure.step("Select Title from dropdown", async () => {
    await page.getByText("Please select").click();
    await page.getByText("Mr", { exact: true }).click();
  });
  await allure.step("Fill First name and Last name fields", async () => {
    await page.locator("#firstName").fill("Test");
    await page.locator("#surname").fill("Test");
  });
  await allure.step("Email opt in", async () => {
    await page.getByRole("checkbox").check();
  });
  await allure.step("Send a request", async () => {
    await page.getByRole("button", { name: "Send request" }).click();
  });

  await allure.step("Assert test", async () => {
    await expect(
      page.getByRole("heading", { name: "Thank you for requesting a" }),
    ).toBeVisible();
  });
});

test("Download a brochure by email - Hayabusa", async ({ page }) => {
  await allure.epic("Brochures");
  await allure.feature("Brochures download");
  await allure.severity(Severity.CRITICAL);
  await allure.description(
    "User is able to succesfully request a brochure to email - Hayabusa",
  );
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-bikes.test-suzuki.co.uk/order-a-brochure/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );

  await acceptCookiesIfPresent(page);
  await allure.step("Choose range", async () => {
    await page.getByRole("img", { name: "Sport-image", exact: true }).click();
  });
  await allure.step("Select Hayabusa from dropdown", async () => {
    await page.getByText("Please select").first().click();
    await page.locator("form").getByText("Hayabusa").click();
  });
  await allure.step("Fill e-mail address field", async () => {
    await page.locator("#emailAddress").fill("hello@suzuki.co.uk");
  });
  await allure.step("Select Title from dropdown", async () => {
    await page.getByText("Please select").click();
    await page.getByText("Mr", { exact: true }).click();
  });
  await allure.step("Fill First name and Last name fields", async () => {
    await page.locator("#firstName").fill("Test");
    await page.locator("#surname").fill("Test");
  });
  await allure.step("Email opt in", async () => {
    await page.getByRole("checkbox").check();
  });
  await allure.step("Send a request", async () => {
    await page.getByRole("button", { name: "Send request" }).click();
  });
  await allure.step("Assert test", async () => {
    await expect(
      page.getByRole("heading", { name: "Thank you for requesting a" }),
    ).toBeVisible();
  });
});

test("Book a test ride - Hayabusa", async ({ page }) => {
  await allure.epic("Test Rides");
  await allure.feature("Booking - Hayabusa");
  await allure.severity(Severity.CRITICAL);
  await allure.description(
    "User is able to succesfully book a test ride - Hayabusa",
  );
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-bikes.test-suzuki.co.uk/book-a-test-ride/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );

  await acceptCookiesIfPresent(page);
  await allure.step("Choose model - Hayabusa", async () => {
    await page
      .getByRole("button", { name: "TEST RIDE ME arrow" })
      .first()
      .click();
  });
  await allure.step("Provide postcode", async () => {
    await page
      .getByRole("textbox", { name: "Postcode or town" })
      .fill("SW1W 0NY");
    await page.getByRole("button", { name: "magnify glass" }).click();
  });
  await allure.step("Click Next button", async () => {
    await page.getByRole("button", { name: "Next arrow" }).click();
  });
  await allure.step("Fill Contact Details", async () => {
    const contactForm = new ContactForm(page);
    await contactForm.fillContactDetails();
  });
  await allure.step("Send a request", async () => {
    await page.getByRole("button", { name: "SEND REQUEST arrow" }).click();
  });
  await allure.step("Assert test", async () => {
    await expect(
      page.getByRole("heading", { name: "Thank you!" }),
    ).toBeVisible();
  });
});

test("Book a test ride - GSX-8TT", async ({ page }) => {
  await allure.epic("Test Rides");
  await allure.feature("Booking - GSX-8TT");
  await allure.severity(Severity.CRITICAL);
  await allure.description(
    "User is able to succesfully book a test ride - GSX-8TT",
  );
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-bikes.test-suzuki.co.uk/book-a-test-ride/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );

  await acceptCookiesIfPresent(page);
  await allure.step("Choose model - GSX-8TT", async () => {
    await page.locator('div:nth-child(10) > .styles_bike_card_info__DrytD > .styles_bike_card_link__5Qd8B > .styles_white_btn___Mgd5').click();
  });
  await allure.step("Provide postcode", async () => {
    await page
      .getByRole("textbox", { name: "Postcode or town" })
      .fill("SW1W 0NY");
    await page.getByRole("button", { name: "magnify glass" }).click();
  });
  await allure.step("Click Next button", async () => {
    await page.getByRole("button", { name: "Next arrow" }).click();
  });
  await allure.step("Fill Contact Details", async () => {
    const contactForm = new ContactForm(page);
    await contactForm.fillContactDetails();
  });
  await allure.step("Email opt in", async () => {
    await page.getByRole("checkbox").nth(1).check();
  });
  await allure.step("Send a request", async () => {
    await page.getByRole("button", { name: "SEND REQUEST arrow" }).click();
  });

  await allure.step("Assert test", async () => {
    await expect(
      page.getByRole("heading", { name: "Thank you!" }),
    ).toBeVisible();
  });
});

test("Book a test ride - GSX-S1000GT+", async ({ page }) => {
  await allure.epic("Test Rides");
  await allure.feature("Booking - GSX-S1000GT+");
  await allure.severity(Severity.CRITICAL);
  await allure.description(
    "User is able to succesfully book a test ride - GSX-S1000GT+",
  );
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-bikes.test-suzuki.co.uk/book-a-test-ride/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );

  await acceptCookiesIfPresent(page);
  await allure.step("Choose model - GSX-8TT", async () => {
    await page.getByRole('button', { name: 'TEST RIDE ME arrow' }).nth(3).click();
  });
  await allure.step("Provide postcode", async () => {
    await page
      .getByRole("textbox", { name: "Postcode or town" })
      .fill("SW1W 0NY");
    await page.getByRole("button", { name: "magnify glass" }).click();
  });
  await allure.step("Click Next button", async () => {
    await page.getByRole("button", { name: "Next arrow" }).click();
  });
  await allure.step("Fill Contact Details", async () => {
    const contactForm = new ContactForm(page);
    await contactForm.fillContactDetails();
  });
  await allure.step("Send a request", async () => {
    await page.getByRole("button", { name: "SEND REQUEST arrow" }).click();
  });

  await allure.step("Assert test", async () => {
    await expect(
      page.getByRole("heading", { name: "Thank you!" }),
    ).toBeVisible();
  });
});

test("Book a test ride - SV-7GX", async ({ page }) => {
  await allure.epic("Test Rides");
  await allure.feature("Booking - SV-7GX");
  await allure.severity(Severity.CRITICAL);
  await allure.description(
    "User is able to succesfully book a test ride - SV-7GX",
  );
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-bikes.test-suzuki.co.uk/book-a-test-ride/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );

  await acceptCookiesIfPresent(page);
  await allure.step("Choose model - SV-7GX", async () => {
    await page.getByRole('button', { name: 'TEST RIDE ME arrow' }).nth(5).click();
  });
  await allure.step("Provide postcode", async () => {
    await page
      .getByRole("textbox", { name: "Postcode or town" })
      .fill("SW1W 0NY");
    await page.getByRole("button", { name: "magnify glass" }).click();
  });
  await allure.step("Click Next button", async () => {
    await page.getByRole("button", { name: "Next arrow" }).click();
  });
  await allure.step("Fill Contact Details", async () => {
    const contactForm = new ContactForm(page);
    await contactForm.fillContactDetails();
  });
  await allure.step("Send a request", async () => {
    await page.getByRole("button", { name: "SEND REQUEST arrow" }).click();
  });

  await allure.step("Assert test", async () => {
    await expect(
      page.getByRole("heading", { name: "Thank you!" }),
    ).toBeVisible();
  });
});

test("Book a test ride - DR-Z4S", async ({ page }) => {
  await allure.epic("Test Rides");
  await allure.feature("Booking - DR-Z4S");
  await allure.severity(Severity.CRITICAL);
  await allure.description(
    "User is able to succesfully book a test ride - DR-Z4S",
  );
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-bikes.test-suzuki.co.uk/book-a-test-ride/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );

  await acceptCookiesIfPresent(page);
  await allure.step("Choose model - DR-Z4S", async () => {
    await page.locator('div:nth-child(19) > .styles_bike_card_info__DrytD > .styles_bike_card_link__5Qd8B > .styles_white_btn___Mgd5').click();
  });
  await allure.step("Provide postcode", async () => {
    await page
      .getByRole("textbox", { name: "Postcode or town" })
      .fill("SW1W 0NY");
    await page.getByRole("button", { name: "magnify glass" }).click();
  });
  await allure.step("Click Next button", async () => {
    await page.getByRole("button", { name: "Next arrow" }).click();
  });
  await allure.step("Fill Contact Details", async () => {
    const contactForm = new ContactForm(page);
    await contactForm.fillContactDetails();
  });
  await allure.step("Send a request", async () => {
    await page.getByRole("button", { name: "SEND REQUEST arrow" }).click();
  });

  await allure.step("Assert test", async () => {
    await expect(
      page.getByRole("heading", { name: "Thank you!" }),
    ).toBeVisible();
  });
});

test("Find a Dealer - Send an Enquiry", async ({ page }) => {
  await allure.epic("Find A dealer");
  await allure.feature("Enquiry Send");
  await allure.severity(Severity.CRITICAL);
  await allure.description("User is able to send an enquiry to a dealer");
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-bikes.test-suzuki.co.uk/find-a-dealer/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );

  await acceptCookiesIfPresent(page);
  await allure.step("Enter location in search box", async () => {
    await page
      .getByRole("searchbox", { name: "Postcode or location" })
      .fill("London");
  });
  await allure.step("Click Search for dealers", async () => {
    await page.getByRole("button", { name: "Search for dealers" }).click();
  });
  await allure.step("Open dealer page", async () => {
    await page.getByRole("link", { name: "View Dealer Page" }).click();
  });
  await allure.step("Click Send an Enquiry", async () => {
    await page.getByRole("link", { name: "tag-icon Send an Enquiry" }).click();
  });
    await allure.step("Fill Contact Details", async () => {
    const contactForm = new ContactForm(page);
    await contactForm.fillContactDetails();
  });
  await allure.step("Fill in enquiry message", async () => {
    await page.getByRole("textbox", { name: "Enquiry" }).fill("test enquiry");
  });
  await allure.step("Email opt in", async () => {
    await page.getByRole("checkbox").nth(1).check();
  });
  await allure.step("Submit the enquiry form", async () => {
    await page.getByRole("button", { name: "Submit" }).click();
  });

  await allure.step("Verify Thank You message is displayed", async () => {
    await expect(
      page.getByRole("heading", { name: "Thank You!" }),
    ).toBeVisible();
  });
});

test("Config - SV-7GX", async ({ page }) => {
  await allure.epic("Config");
  await allure.feature("Bike configuration");
  await allure.severity(Severity.CRITICAL);
  await allure.description(
    "User is able to configure a bike send an enquiry to a dealer",
  );
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );

  await acceptCookiesIfPresent(page);
  await allure.step("Open Colours & Accessories", async () => {
    await page.getByRole("link", { name: "Colours & Accessories" }).click();
  });
  await allure.step("Select Touring Screen (Clear)", async () => {
    await page
      .locator('iframe[title="Configurator Form"]')
      .contentFrame()
      .getByRole("button", { name: "Touring Screen (Clear)" })
      .click();
  });
  await allure.step("Select Grip Heater", async () => {
    await page
      .locator('iframe[title="Configurator Form"]')
      .contentFrame()
      .getByRole("button", { name: "Grip Heater Grip Heater" })
      .click();
  });
  await allure.step("Select Frame Slider", async () => {
    await page
      .locator('iframe[title="Configurator Form"]')
      .contentFrame()
      .getByRole("button", { name: "Frame Slider Frame Slider" })
      .click();
  });
  await allure.step("Click Send to dealer", async () => {
    await page.getByRole("button", { name: "Send to dealer" }).click();
  });
  await allure.step("Enter postcode", async () => {
    await page
      .getByRole("textbox", { name: "Postcode or town" })
      .fill("sw1w 0ny");
  });
  await allure.step("Click search", async () => {
    await page.getByRole("button", { name: "magnify glass" }).click();
  });
  await allure.step("Click Next", async () => {
    await page.getByRole("button", { name: "Next arrow" }).click();
  });
  await allure.step("Fill Contact Details", async () => {
    const contactForm = new ContactForm(page);
    await contactForm.fillContactDetails();
  });
  await allure.step("Email opt in", async () => {
    await page.getByRole("checkbox").nth(1).check();
  });
  await allure.step("Send request", async () => {
    await page.getByRole("button", { name: "Send request arrow" }).click();
  });
  await allure.step("Verify Thank You message is displayed", async () => {
    await expect(
      page.getByRole("heading", { name: "Thank You!" }),
    ).toBeVisible();
  });
});

// test("Book a Service - Service, MOT, Recall", async ({ page }) => {
//   await allure.epic("Book a Service");
//   await allure.feature("Service booking");
//   await allure.story("Booking a service");
//   await allure.severity(Severity.CRITICAL);
//   await allure.description(
//     "User is able to book a service",
//   );
//   await allure.owner("QA Team");
//   await allure.tag("smoke");
//   await page.goto(
//     "https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
//   );

//   await acceptCookiesIfPresent(page);
// await allure.step("Open Colours & Accessories", async () => {
//   await page.getByRole('link', { name: 'Colours & Accessories' }).click();
// });
// await allure.step("Select Touring Screen (Clear)", async () => {
//   await page.locator('iframe[title="Configurator Form"]').contentFrame().getByRole('button', { name: 'Touring Screen (Clear)' }).click();
// });
// await allure.step("Select Grip Heater", async () => {
//   await page.locator('iframe[title="Configurator Form"]').contentFrame().getByRole('button', { name: 'Grip Heater Grip Heater' }).click();
// });
// await allure.step("Select Frame Slider", async () => {
//   await page.locator('iframe[title="Configurator Form"]').contentFrame().getByRole('button', { name: 'Frame Slider Frame Slider' }).click();
// });
// await allure.step("Click Send to dealer", async () => {
//   await page.getByRole('button', { name: 'Send to dealer' }).click();
// });
// await allure.step("Enter postcode", async () => {
//   await page.getByRole('textbox', { name: 'Postcode or town' }).fill('sw1w 0ny');
// });
// await allure.step("Click search", async () => {
//   await page.getByRole('button', { name: 'magnify glass' }).click();
// });
// await allure.step("Click Next", async () => {
//   await page.getByRole('button', { name: 'Next arrow' }).click();
// });
// await allure.step("Fill Contact Details", async () => {
//   const contactForm = new ContactForm(page);
//   await contactForm.fillContactDetails();
// });
// await allure.step("Send request", async () => {
//   await page.getByRole('button', { name: 'Send request arrow' }).click();
// });
// await allure.step("Verify Thank You message is displayed", async () => {
//   await expect(page.getByRole('heading', { name: 'Thank You!' })).toBeVisible();
// });
// });
test("Reserve now - SV-7GX", async ({ page }) => {
  await allure.epic("Reserve now");
  await allure.feature("Reserving a bike");
  await allure.severity(Severity.CRITICAL);
  await allure.description("User is able to reserve a bike");
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-bikes.test-suzuki.co.uk/bikes/sport/sv-7gx/#RESERVENOW/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );

  await acceptCookiesIfPresent(page);
  await allure.step("Open navigation", async () => {
  await page.getByRole('link', { name: 'BIKES, 1 of' }).click();
  });
  await allure.step("Click Reserve Now", async () => {
  await page.getByRole('link', { name: 'SV-7S, Reserve now' }).click();
  });
  await allure.step("Fill Contact Details", async () => {
    const contactForm = new ContactForm(page);
    await contactForm.fillContactDetails();
  });
  await allure.step("Fill Postcode field", async () => {
    await page.locator("#postcode").fill("SW1W 0NY");
  });
  await allure.step("Fill Building number field", async () => {
    await page.locator("#buildingNumber").fill("7E");
  });
  await allure.step("Accept Reserve checkbox", async () => {
    await page.getByRole("checkbox").first().check();
  });
  await allure.step("Email opt in", async () => {
    await page.getByRole("checkbox").nth(2).check();
  });
  await allure.step("Send request", async () => {
    await page.getByRole("button", { name: "Submit arrow" }).click();
  });
  await allure.step("Verify Thank You message is displayed", async () => {
    await expect(
      page.getByRole("heading", { name: "THANK YOU FOR RESERVING YOUR" }),
    ).toBeVisible();
  });
});
test("Register interest - GSX-10R", async ({ page }) => {
  await allure.epic("Register interest");
  await allure.feature("Registering interest in a bike");
  await allure.severity(Severity.CRITICAL);
  await allure.description("User is able to register interest in a bike");
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-bikes.test-suzuki.co.uk/bikes/sport/gsx-10r/#RESERVENOW/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );
  const preRegForm = page.locator('iframe[title="Pre-Registration Form"]').contentFrame();
  await acceptCookiesIfPresent(page);
  await allure.step("Select title", async () => {
  await preRegForm.getByLabel('Title').selectOption('3');
  });
  await allure.step("Fill First name", async () => {
    await preRegForm.getByRole('textbox', { name: 'First Name' }).fill('Test');
  });
  await allure.step("Fill Last name", async () => {
    await preRegForm.getByRole('textbox', { name: 'Last Name' }).fill('Data');
  });
  await allure.step("Fill Postcode", async () => {
    await preRegForm.getByRole('textbox', { name: 'Postcode' }).fill('Sw1w 0ny');
  });
  await allure.step("Fill Contact email", async () => {
    await preRegForm.getByRole('textbox', { name: 'Contact Email' }).fill('test@gmail.com');
  });
  await allure.step("Email opt in", async () => {
    await preRegForm.getByRole('checkbox', { name: 'Email OPT IN' }).check();
  });
  await allure.step("Click Submit", async () => {
    await preRegForm.getByRole('button', { name: 'Submit' }).click();
  });
  await allure.step("Verify confirmation message is displayed", async () => {
    await expect(preRegForm.getByText('We’ll be in touch with')).toBeVisible();
  });
});