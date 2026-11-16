import { test, expect, Page } from "@playwright/test";
import * as allure from "allure-js-commons";
import { Severity } from "allure-js-commons";
import { BusinessDetailsForm, ContactForm, MotabilityDetailsForm, PersonalDetailsForm, acceptCookiesIfPresent } from "../helpers/form-helper";

test("Download a brochure by email - Swift", async ({ page }) => {
  await allure.epic("Brochures");
  await allure.feature("Brochures download");
  await allure.severity(Severity.CRITICAL);
  await allure.description(
    "User is able to succesfully request a brochure to email - Swift",
  );
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-cars.test-suzuki.co.uk/request-a-brochure/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );
  await acceptCookiesIfPresent(page);

  await allure.step("Select brochure", async () => {
    await page
      .locator(
        "label:nth-child(2) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img",
      )
      .click();
  });
  await allure.step("Click Next", async () => {
    await page.getByRole("button", { name: "Next" }).nth(1).click();
  });
  await allure.step("Select customer type Personal", async () => {
    await page.getByRole("radio", { name: "Customer type Personal" }).check();
  });
  //Personal details
  const personalDetailsForm = new PersonalDetailsForm(page);
  await personalDetailsForm.fillPersonalDetails();

  await allure.step("Accept Email opt in", async () => {
    await page.getByRole("checkbox", { name: "Email" }).check();
  });
  await allure.step("Click Access your downloads", async () => {
    await page.getByRole("button", { name: "Access your downloads" }).click();
  });
  await allure.step(
    "Verify Download your brochures heading is displayed",
    async () => {
      await expect(
        page.getByRole("heading", { name: "Download your brochures" }),
      ).toBeVisible();
    },
  );
});

test("Download a brochure by email - e Vitara", async ({ page }) => {
  await allure.epic("Brochures");
  await allure.feature("Brochures download");
  await allure.severity(Severity.CRITICAL);
  await allure.description(
    "User is able to succesfully request a brochure to email - Swift",
  );
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-cars.test-suzuki.co.uk/request-a-brochure/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );
  await acceptCookiesIfPresent(page);

  await allure.step("Select brochure", async () => {
    await page.locator(".styles_toggle__e0m3u > img").first().click();
  });
  await allure.step("Click Next", async () => {
    await page.getByRole("button", { name: "Next" }).nth(1).click();
  });
  await allure.step("Select customer type Personal", async () => {
    await page.getByRole("radio", { name: "Customer type Personal" }).check();
  });
  //Personal details
  const personalDetailsForm = new PersonalDetailsForm(page);
  await personalDetailsForm.fillPersonalDetails();

  await allure.step("Accept Email opt in", async () => {
    await page.getByRole("checkbox", { name: "Email" }).check();
  });
  await allure.step("Click Access your downloads", async () => {
    await page.getByRole("button", { name: "Access your downloads" }).click();
  });
  await allure.step(
    "Verify Download your brochures heading is displayed",
    async () => {
      await expect(
        page.getByRole("heading", { name: "Download your brochures" }),
      ).toBeVisible();
    },
  );
});

test("Download a brochure by email - 3 brochures", async ({ page }) => {
  await allure.epic("Brochures");
  await allure.feature("Brochures download");
  await allure.severity(Severity.CRITICAL);
  await allure.description(
    "User is able to succesfully request a brochure to email - Swift",
  );
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-cars.test-suzuki.co.uk/request-a-brochure/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );
  await acceptCookiesIfPresent(page);

  await allure.step("Select 3 brochures", async () => {
    await page
      .locator(
        "label:nth-child(2) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img",
      )
      .click();
    await page
      .locator(
        "label:nth-child(3) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img",
      )
      .click();
    await page
      .locator(
        "label:nth-child(4) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img",
      )
      .click();
  });
  await allure.step("Click Next", async () => {
    await page.getByRole("button", { name: "Next" }).click();
  });
  await allure.step("Select customer type Personal", async () => {
    await page.getByRole("radio", { name: "Customer type Personal" }).check();
  });
  //Personal details
  const personalDetailsForm = new PersonalDetailsForm(page);
  await personalDetailsForm.fillPersonalDetails();

  await allure.step("Accept Email opt in", async () => {
    await page.getByRole("checkbox", { name: "Email" }).check();
  });
  await allure.step("Click Access your downloads", async () => {
    await page.getByRole("button", { name: "Access your downloads" }).click();
  });
  await allure.step(
    "Verify Download your brochures heading is displayed",
    async () => {
      await expect(
        page.getByText(
          "SWIFTDownload pdfDownload pdf for SWIFT (opens in a new tab)S-CROSSDownload",
        ),
      ).toBeVisible();
    },
  );
});

test("Request a test drive - Swift", async ({ page }) => {
  await allure.epic("Test Drive");
  await allure.feature("Requesting test drive");
  await allure.severity(Severity.CRITICAL);
  await allure.description(
    "User is able to succesfully request a test drive - Swift",
  );
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-cars.test-suzuki.co.uk/request-a-test-drive/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );
  await acceptCookiesIfPresent(page);

  await allure.step("Select customer type Motability", async () => {
    await page.getByRole("radio", { name: "Customer type Motability" }).check();
  });
  await allure.step("Select model - Swift", async () => {
    await page
      .locator(
        "label:nth-child(3) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img",
      )
      .click();
  });
  await allure.step("Click Choose a Dealer", async () => {
    await page.getByRole("button", { name: "Choose a Dealer" }).click();
  });
  await allure.step("Enter postcode or location", async () => {
    await page
      .getByRole("searchbox", { name: "Postcode or location" })
      .fill("sw1w 0ny");
  });
  await allure.step("Click search", async () => {
    await page
      .getByRole("button", { name: "Search postcode or location" })
      .click();
  });
  await allure.step("Click Your Details", async () => {
    await page.getByRole("button", { name: "Your Details" }).nth(1).click();
  });

  //Motability details
  const motabilityDetailsForm = new MotabilityDetailsForm(page);
  await motabilityDetailsForm.fillMotabilityDetails();

  await allure.step("Email opt in", async () => {
    await page.getByRole("checkbox", { name: "Email" }).check();
  });
  await allure.step("Click Review booking", async () => {
    await page.getByRole("button", { name: "Review booking" }).first().click();
  });
  await allure.step("Click Confirm booking", async () => {
    await page.getByRole("button", { name: "Confirm booking" }).nth(1).click();
  });
  await allure.step(
    "Verify Booking confirmed heading is displayed",
    async () => {
      await expect(
        page.getByRole("heading", { name: "Booking confirmed" }),
      ).toBeVisible();
    },
  );
});

test("Request a test drive - S-Cross", async ({ page }) => {
  await allure.epic("Test Drive");
  await allure.feature("Requesting test drive");
  await allure.severity(Severity.CRITICAL);
  await allure.description(
    "User is able to succesfully request a test drive - S-Cross",
  );
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-cars.test-suzuki.co.uk/request-a-test-drive/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );
  await acceptCookiesIfPresent(page);

  await allure.step("Select customer type Motability", async () => {
    await page.getByRole("radio", { name: "Customer type Motability" }).check();
  });
  await allure.step("Select model - S-Cross", async () => {
    await page
      .locator(
        "label:nth-child(4) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img",
      )
      .click();
  });
  await allure.step("Click Choose a Dealer", async () => {
    await page.getByRole("button", { name: "Choose a Dealer" }).click();
  });
  await allure.step("Enter postcode or location", async () => {
    await page
      .getByRole("searchbox", { name: "Postcode or location" })
      .fill("sw1w 0ny");
  });
  await allure.step("Click search", async () => {
    await page
      .getByRole("button", { name: "Search postcode or location" })
      .click();
  });
  await allure.step("Click Your Details", async () => {
    await page.getByRole("button", { name: "Your Details" }).nth(1).click();
  });
  
  //Motability details
  const motabilityDetailsForm = new MotabilityDetailsForm(page);
  await motabilityDetailsForm.fillMotabilityDetails();

  await allure.step("Click Review booking", async () => {
    await page.getByRole("button", { name: "Review booking" }).first().click();
  });
  await allure.step("Click Confirm booking", async () => {
    await page.getByRole("button", { name: "Confirm booking" }).nth(1).click();
  });
  await allure.step(
    "Verify Booking confirmed heading is displayed",
    async () => {
      await expect(
        page.getByRole("heading", { name: "Booking confirmed" }),
      ).toBeVisible();
    },
  );
});

test("Request a test drive - e Vitara", async ({ page }) => {
  await allure.epic("Test Drive");
  await allure.feature("Requesting test drive");
  await allure.severity(Severity.CRITICAL);
  await allure.description(
    "User is able to succesfully request a test drive - e Vitara",
  );
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-cars.test-suzuki.co.uk/request-a-test-drive/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );
  await acceptCookiesIfPresent(page);

  await allure.step("Select customer type Motability", async () => {
    await page.getByRole("radio", { name: "Customer type Motability" }).check();
  });
  await allure.step("Select model - e Vitara", async () => {
    await page.locator(".styles_toggle__e0m3u > img").first().click();
  });
  await allure.step("Click Choose a Dealer", async () => {
    await page.getByRole("button", { name: "Choose a Dealer" }).click();
  });
  await allure.step("Enter postcode or location", async () => {
    await page
      .getByRole("searchbox", { name: "Postcode or location" })
      .fill("sw1w 0ny");
  });
  await allure.step("Click search", async () => {
    await page
      .getByRole("button", { name: "Search postcode or location" })
      .click();
  });
  await allure.step("Click Your Details", async () => {
    await page.getByRole("button", { name: "Your Details" }).nth(1).click();
  });
  
  //Motability details
  const motabilityDetailsForm = new MotabilityDetailsForm(page);
  await motabilityDetailsForm.fillMotabilityDetails();

  await allure.step("Email opt in", async () => {
    await page.getByRole("checkbox", { name: "Email" }).check();
  });
  await allure.step("Click Review booking", async () => {
    await page.getByRole("button", { name: "Review booking" }).first().click();
  });
  await allure.step("Click Confirm booking", async () => {
    await page.getByRole("button", { name: "Confirm booking" }).nth(1).click();
  });
  await allure.step(
    "Verify Booking confirmed heading is displayed",
    async () => {
      await expect(
        page.getByRole("heading", { name: "Booking confirmed" }),
      ).toBeVisible();
    },
  );
});

test("Request a test drive - Vitara", async ({ page }) => {
  await allure.epic("Test Drive");
  await allure.feature("Requesting test drive");
  await allure.severity(Severity.CRITICAL);
  await allure.description(
    "User is able to succesfully request a test drive - Vitara",
  );
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-cars.test-suzuki.co.uk/request-a-test-drive/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );
  await acceptCookiesIfPresent(page);

  await allure.step("Select customer type Motability", async () => {
    await page.getByRole("radio", { name: "Customer type Motability" }).check();
  });
  await allure.step("Select model - Vitara", async () => {
    await page
      .locator(
        "label:nth-child(5) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img",
      )
      .click();
  });
  await allure.step("Click Choose a Dealer", async () => {
    await page.getByRole("button", { name: "Choose a Dealer" }).click();
  });
  await allure.step("Enter postcode or location", async () => {
    await page
      .getByRole("searchbox", { name: "Postcode or location" })
      .fill("sw1w 0ny");
  });
  await allure.step("Click search", async () => {
    await page
      .getByRole("button", { name: "Search postcode or location" })
      .click();
  });
  await allure.step("Click Your Details", async () => {
    await page.getByRole("button", { name: "Your Details" }).nth(1).click();
  });

  //Motability details
  const motabilityDetailsForm = new MotabilityDetailsForm(page);
  await motabilityDetailsForm.fillMotabilityDetails();

  await allure.step("Click Review booking", async () => {
    await page.getByRole("button", { name: "Review booking" }).first().click();
  });
  await allure.step("Click Confirm booking", async () => {
    await page.getByRole("button", { name: "Confirm booking" }).nth(1).click();
  });
  await allure.step(
    "Verify Booking confirmed heading is displayed",
    async () => {
      await expect(
        page.getByRole("heading", { name: "Booking confirmed" }),
      ).toBeVisible();
    },
  );
});
test("Request a test drive - 3 products", async ({ page }) => {
  await allure.epic("Test Drive");
  await allure.feature("Requesting test drive");
  await allure.severity(Severity.CRITICAL);
  await allure.description(
    "User is able to succesfully request a test drive - 3 products",
  );
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-cars.test-suzuki.co.uk/request-a-test-drive/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );
  await acceptCookiesIfPresent(page);

  await allure.step("Select customer type Motability", async () => {
    await page.getByRole("radio", { name: "Customer type Motability" }).check();
  });
  await allure.step("Select 3 models", async () => {
    await page
      .locator(
        "label:nth-child(5) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img",
      )
      .click();
    await page.locator(".styles_toggle__e0m3u > img").first().click();
    await page
      .locator(
        "label:nth-child(3) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img",
      )
      .click();
  });
  await allure.step("Click Choose a Dealer", async () => {
    await page.getByRole("button", { name: "Choose a Dealer" }).click();
  });
  await allure.step("Enter postcode or location", async () => {
    await page
      .getByRole("searchbox", { name: "Postcode or location" })
      .fill("sw1w 0ny");
  });
  await allure.step("Click search", async () => {
    await page
      .getByRole("button", { name: "Search postcode or location" })
      .click();
  });
  await allure.step("Click Your Details", async () => {
    await page.getByRole("button", { name: "Your Details" }).nth(1).click();
  });

    //Motability details
  const motabilityDetailsForm = new MotabilityDetailsForm(page);
  await motabilityDetailsForm.fillMotabilityDetails();

  await allure.step("Email opt in", async () => {
    await page.getByRole("checkbox", { name: "Email" }).check();
  });
  await allure.step("Click Review booking", async () => {
    await page.getByRole("button", { name: "Review booking" }).first().click();
  });
  await allure.step("Click Confirm booking", async () => {
    await page.getByRole("button", { name: "Confirm booking" }).nth(1).click();
  });
  await allure.step(
    "Verify Booking confirmed heading is displayed",
    async () => {
      await expect(
        page.getByRole("heading", { name: "Booking confirmed" }),
      ).toBeVisible();
    },
  );
});

test("Find a dealer - Request a callback", async ({ page }) => {
  await allure.epic("Dealer");
  await allure.feature("Request a callback");
  await allure.severity(Severity.CRITICAL);
  await allure.description(
    "User is able to find a dealer and request a callback",
  );
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-cars.test-suzuki.co.uk/find-a-dealer/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );
  await acceptCookiesIfPresent(page);

  await allure.step("Enter postcode", async () => {
    await page
      .getByRole("searchbox", { name: "Postcode or location" })
      .fill("mk4 4ae");
  });
  await allure.step("Click Search", async () => {
    await page.getByRole("button", { name: "Search for dealers" }).click();
  });
  await allure.step("Click Request A Callback", async () => {
    await page
      .getByRole("link", { name: "Request A Callback", exact: true })
      .click();
  });
  await allure.step("Select Personal", async () => {
    await page.getByRole("radio", { name: "Customer type Personal" }).check();
  });

  //Motability details
  const motabilityDetailsForm = new MotabilityDetailsForm(page);
  await motabilityDetailsForm.fillMotabilityDetails();

  await allure.step("Accept Email opt in", async () => {
    await page.getByRole("checkbox", { name: "Email" }).check();
  });
  await allure.step("Click Review details", async () => {
    await page.getByRole("button", { name: "Review details" }).click();
  });
  await allure.step(
    "Verify Review your details heading is displayed",
    async () => {
      await expect(
        page.getByRole("heading", { name: "Review your details" }),
      ).toBeVisible();
    },
  );
});

test("Find a dealer - Request a test drive", async ({ page }) => {
  await allure.epic("Test Drive");
  await allure.feature("Requesting test drive");
  await allure.severity(Severity.CRITICAL);
  await allure.description(
    "User is able to find a dealer and request a test drive",
  );
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-cars.test-suzuki.co.uk/find-a-dealer/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );
  await acceptCookiesIfPresent(page);

  await allure.step("Enter postcode", async () => {
    await page
      .getByRole("searchbox", { name: "Postcode or location" })
      .fill("mk4 4ae");
  });
  await allure.step("Click Search", async () => {
    await page.getByRole("button", { name: "Search for dealers" }).click();
  });
  await allure.step("Click Request A Test Drive", async () => {
    await page
      .locator("#main-content")
      .getByRole("link", { name: "Request A Test Drive" })
      .click();
  });
  await allure.step("Select Business type", async () => {
    await page.getByRole("radio", { name: "Customer type Business" }).check();
  });
  await allure.step("Select model", async () => {
    await page
      .locator(
        "label:nth-child(4) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img",
      )
      .click();
  });
  await allure.step("Click Review your booking", async () => {
    await page.getByRole("button", { name: "Review your booking" }).click();
  });
  
  //Business details
  const businessDetailsForm = new BusinessDetailsForm(page);
  await businessDetailsForm.fillBusinessDetails();

  await allure.step("Accept Email opt in", async () => {
    await page.getByRole("checkbox", { name: "Email" }).check();
  });
  await allure.step("Click Review booking", async () => {
    await page.getByRole("button", { name: "Review booking" }).click();
  });
  await allure.step("Click Review booking again", async () => {
    await page.getByRole("button", { name: "Review booking" }).click();
  });
});

test("Finance - Vitara", async ({ page }) => {
  await allure.epic("Finance");
  await allure.feature("Calculating financing options");
  await allure.severity(Severity.CRITICAL);
  await allure.description("User is able to calculate financing - Vitara");
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-cars.test-suzuki.co.uk/offers-finance/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );
  await acceptCookiesIfPresent(page);

  await allure.step("Click Explore Vitara offers", async () => {
    await page.getByRole('link', { name: 'Explore Vitara offers' }).click();
  });
  
  await allure.step("Click Finance Calculator", async () => {
    await expect(page).toHaveURL(/vitara-offers-and-finance\//);
    await page.getByLabel('Main banner').getByRole('link', { name: 'Finance Calculator' }).click();
  });
  await allure.step("Select customer type Personal", async () => {
    await expect(page).toHaveURL(new RegExp("model=Vitara&grade=Motion%20Mild%20Hybrid"));
    await expect(async () => {
      await page.locator("label").filter({ hasText: "Personal" }).click();
      await expect(page.getByRole("radio", { name: /Personal/ })).toBeChecked();
}).toPass();
  });
  await allure.step("Set deposit percentage slider", async () => {
    await page.getByRole('slider', { name: 'A larger deposit could reduce' }).fill('30');
  });
  await allure.step("Set annual mileage slider", async () => {
    const mileage_slider = page.getByRole("slider", { name: "What’s your annual mileage?" });
    await mileage_slider.scrollIntoViewIfNeeded();
    await mileage_slider.fill("14000");
  });
  await allure.step("Fill Deposit amount", async () => {
    await page.getByRole("textbox", { name: "Deposit" }).fill("4000");
  });
  await allure.step("Click Calculate financing", async () => {
    await page.getByRole("button", { name: "Calculate financing" }).click();
  });
  await allure.step("Click Send to dealer", async () => {
    await page.getByRole("button", { name: "Send to dealer" }).click();
  });
  await allure.step("Enter postcode or location", async () => {
    await page
      .getByRole("searchbox", { name: "Postcode or location" })
      .fill("mk4 4ae");
  });
  await allure.step("Click search", async () => {
    await page
      .getByRole("button", { name: "Search postcode or location" })
      .click();
  });
  await allure.step("Click Your details", async () => {
    await page.getByRole("button", { name: "Your details" }).nth(1).click();
  });

  //Personal details
  const personalDetailsForm = new PersonalDetailsForm(page);
  await personalDetailsForm.fillPersonalDetails();

  await allure.step("Fill Phone number", async () => {
    await page
      .getByRole("textbox", { name: "Phone (required)" })
      .fill("022636565");
  });
  await allure.step("Click Review details", async () => {
    await page.getByRole("button", { name: "Review details" }).first().click();
  });
  await allure.step("Verify Thank you message is displayed", async () => {
    await expect(page.getByRole("heading", { name: "Thank you!" })).toBeVisible();
  });
});

test("Finance - e Vitara", async ({ page }) => {
  await allure.epic("Finance");
  await allure.feature("Calculating financing options");
  await allure.severity(Severity.CRITICAL);
  await allure.description("User is able to calculate financing - e Vitara");
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-cars.test-suzuki.co.uk/offers-finance/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );
  await acceptCookiesIfPresent(page);

  await allure.step("Click Explore Vitara offers", async () => {
    await page.getByRole('link', { name: 'Explore e Vitara offers' }).click();
  });
  
  await allure.step("Click Finance Calculator", async () => {
    await expect(page).toHaveURL(/vitara-offers-and-finance\//);
    await page.getByLabel('Main banner').getByRole('link', { name: 'Finance Calculator' }).click();
  });
  await allure.step("Select customer type Business", async () => {
    await expect(page).toHaveURL(/grade=MOTION/);
    await expect(async () => {
      await page.locator("label").filter({ hasText: "Business" }).click();
      await expect(page.getByRole("radio", { name: /Business/ })).toBeChecked();
}).toPass();
  });
  await allure.step("Set deposit percentage slider", async () => {
    await page.getByRole('slider', { name: 'A larger deposit could reduce' }).fill('30');
  });
  await allure.step("Set annual mileage slider", async () => {
    const mileage_slider = page.getByRole("slider", { name: "What’s your annual mileage?" });
    await mileage_slider.scrollIntoViewIfNeeded();
    await mileage_slider.fill("14000");
  });
  await allure.step("Fill Deposit amount", async () => {
    await page.getByRole("textbox", { name: "Deposit" }).fill("4000");
  });
  await allure.step("Click Calculate financing", async () => {
    await page.getByRole("button", { name: "Calculate financing" }).click();
  });
  await allure.step("Click Send to dealer", async () => {
    await page.getByRole("button", { name: "Send to dealer" }).click();
  });
  await allure.step("Enter postcode or location", async () => {
    await page
      .getByRole("searchbox", { name: "Postcode or location" })
      .fill("mk4 4ae");
  });
  await allure.step("Click search", async () => {
    await page
      .getByRole("button", { name: "Search postcode or location" })
      .click();
  });
  await allure.step("Click Your details", async () => {
    await page.getByRole("button", { name: "Your details" }).nth(1).click();
  });
  
  //Business details
  const businessDetailsForm = new BusinessDetailsForm(page);
  await businessDetailsForm.fillBusinessDetails();
  
  await allure.step("Click Review details", async () => {
    await page.getByRole("button", { name: "Review details" }).first().click();
  });
  await allure.step("Verify Thank you message is displayed", async () => {
    await expect(page.getByRole("heading", { name: "Thank you!" })).toBeVisible();
  });
});

test("Finance - Swift", async ({ page }) => {
  await allure.epic("Finance");
  await allure.feature("Calculating financing options");
  await allure.severity(Severity.CRITICAL);
  await allure.description("User is able to calculate financing - Swift");
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-cars.test-suzuki.co.uk/offers-finance/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );
  await acceptCookiesIfPresent(page);

  await allure.step("Click Explore Swift offers", async () => {
    await page.getByRole('link', { name: 'Explore Swift offers' }).click();
  });
  
  await allure.step("Click Finance Calculator", async () => {
    await expect(page).toHaveURL(/swift-offers-and-finance\//);
    await page.getByLabel('Main banner').getByRole('link', { name: 'Finance Calculator' }).click();
  });
  await allure.step("Select customer type Personal", async () => {
    await expect(page).toHaveURL(new RegExp("model=Swift&grade=Motion%20Mild%20Hybrid"));
    await expect(async () => {
      await page.locator("label").filter({ hasText: "Personal" }).click();
      await expect(page.getByRole("radio", { name: /Personal/ })).toBeChecked();
}).toPass();
  });
  await allure.step("Set deposit percentage slider", async () => {
    await page.getByRole('slider', { name: 'A larger deposit could reduce' }).fill('30');
  });
  await allure.step("Set annual mileage slider", async () => {
    const mileage_slider = page.getByRole("slider", { name: "What’s your annual mileage?" });
    await mileage_slider.scrollIntoViewIfNeeded();
    await mileage_slider.fill("14000");
  });
  await allure.step("Fill Deposit amount", async () => {
    await page.getByRole("textbox", { name: "Deposit" }).fill("4000");
  });
  await allure.step("Click Calculate financing", async () => {
    await page.getByRole("button", { name: "Calculate financing" }).click();
  });
  await allure.step("Click Send to dealer", async () => {
    await page.getByRole("button", { name: "Send to dealer" }).click();
  });
  await allure.step("Enter postcode or location", async () => {
    await page
      .getByRole("searchbox", { name: "Postcode or location" })
      .fill("mk4 4ae");
  });
  await allure.step("Click search", async () => {
    await page
      .getByRole("button", { name: "Search postcode or location" })
      .click();
  });
  await allure.step("Click Your details", async () => {
    await page.getByRole("button", { name: "Your details" }).nth(1).click();
  });

  //Personal details
  const personalDetailsForm = new PersonalDetailsForm(page);
  await personalDetailsForm.fillPersonalDetails();

  await allure.step("Fill Phone number", async () => {
    await page
      .getByRole("textbox", { name: "Phone (required)" })
      .fill("022636565");
  });
  await allure.step("Click Review details", async () => {
    await page.getByRole("button", { name: "Review details" }).first().click();
  });
  await allure.step("Verify Thank you message is displayed", async () => {
    await expect(page.getByRole("heading", { name: "Thank you!" })).toBeVisible();
  });
});

test("Business Enquiry - 24 cars", async ({ page }) => {
  await allure.epic("Business Enquiry");
  await allure.feature("Sending business enquiry for 24 cars");
  await allure.severity(Severity.CRITICAL);
  await allure.description("User is able to send a business enquiry for 24 cars");
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-cars.test-suzuki.co.uk/business/enquiry/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );
  await acceptCookiesIfPresent(page);

  await allure.step("Select dealer option", async () => {
  await page.getByRole("radio", { name: "Up to 24 cars Your nearest" }).check();
});
await allure.step("Click Choose a Dealer", async () => {
  await page.getByRole("button", { name: "Choose a Dealer" }).click();
});
await allure.step("Enter postcode or location", async () => {
  await page.getByRole("searchbox", { name: "Postcode or location" }).fill("MK4 4AE");
});
await allure.step("Click search", async () => {
  await page.getByRole("button", { name: "Search postcode or location" }).click();
});
await allure.step("Click Your details", async () => {
  await page.getByRole("button", { name: "Your details" }).nth(1).click();
});

//Business details
const businessDetailsForm = new BusinessDetailsForm(page);
await businessDetailsForm.fillBusinessDetails();

await allure.step("Accept Email opt in", async () => {
  await page.getByRole("checkbox", { name: "Email" }).check();
});
await allure.step("Click Review your enquiry", async () => {
  await page.getByRole("button", { name: "Review your enquiry" }).click();
});
await allure.step("Click Send enquiry", async () => {
  await page.getByRole("button", { name: "Send enquiry" }).click();
});
await allure.step("Verify Thank you message is displayed", async () => {
  await expect(page.getByRole("heading", { name: "Thank you!" })).toBeVisible();
});
});

test("Business Enquiry - 25+ cars", async ({ page }) => {
  await allure.epic("Business Enquiry");
  await allure.feature("Sending business enquiry for 25+ cars");
  await allure.severity(Severity.CRITICAL);
  await allure.description("User is able to send a business enquiry for 25+ cars");
  await allure.owner("QA Team");
  await allure.tag("smoke");
  await page.goto(
    "https://staging-cars.test-suzuki.co.uk/business/enquiry/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  );
  await acceptCookiesIfPresent(page);

  await allure.step("Select dealer option", async () => {
  await page.getByRole('radio', { name: '25+ cars The Suzuki buiness' }).check();
});
await allure.step("Click Choose a Dealer", async () => {
  await page.getByRole("button", { name: "Choose a Dealer" }).click();
});
await allure.step("Enter postcode or location", async () => {
  await page.getByRole("searchbox", { name: "Postcode or location" }).fill("MK4 4AE");
});
await allure.step("Click search", async () => {
  await page.getByRole("button", { name: "Search postcode or location" }).click();
});
await allure.step("Click Your details", async () => {
  await page.getByRole("button", { name: "Your details" }).nth(1).click();
});

//Business details
const businessDetailsForm = new BusinessDetailsForm(page);
await businessDetailsForm.fillBusinessDetails();

await allure.step("Accept Email opt in", async () => {
  await page.getByRole("checkbox", { name: "Email" }).check();
});
await allure.step("Click Review your enquiry", async () => {
  await page.getByRole("button", { name: "Review your enquiry" }).click();
});
await allure.step("Click Send enquiry", async () => {
  await page.getByRole("button", { name: "Send enquiry" }).click();
});
await allure.step("Verify Thank you message is displayed", async () => {
  await expect(page.getByRole("heading", { name: "Thank you!" })).toBeVisible();
});
});