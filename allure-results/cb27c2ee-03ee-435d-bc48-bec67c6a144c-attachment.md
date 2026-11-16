# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 4W.spec.ts >> Find a dealer - Request a test drive
- Location: tests\4W.spec.ts:514:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Review booking' })

```

# Test source

```ts
  523 |   await page.goto(
  524 |     "https://staging-cars.test-suzuki.co.uk/find-a-dealer/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  525 |   );
  526 |   await acceptCookiesIfPresent(page);
  527 | 
  528 |   await allure.step("Enter postcode", async () => {
  529 |     await page
  530 |       .getByRole("searchbox", { name: "Postcode or location" })
  531 |       .fill("mk4 4ae");
  532 |   });
  533 |   await allure.step("Click Search", async () => {
  534 |     await page.getByRole("button", { name: "Search for dealers" }).click();
  535 |   });
  536 |   await allure.step("Click Request A Test Drive", async () => {
  537 |     await page
  538 |       .locator("#main-content")
  539 |       .getByRole("link", { name: "Request A Test Drive" })
  540 |       .click();
  541 |   });
  542 |   await allure.step("Select Business type", async () => {
  543 |     await page.getByRole("radio", { name: "Customer type Business" }).check();
  544 |   });
  545 |   await allure.step("Select model", async () => {
  546 |     await page
  547 |       .locator(
  548 |         "label:nth-child(4) > .styles_bottom_bar__l6SXK > .styles_toggle__e0m3u > img",
  549 |       )
  550 |       .click();
  551 |   });
  552 |   await allure.step("Click Review your booking", async () => {
  553 |     await page.getByRole("button", { name: "Review your booking" }).click();
  554 |   });
  555 |   await allure.step("Select title", async () => {
  556 |     await page.getByRole("combobox", { name: "Select Title" }).click();
  557 |     await page.getByRole("option", { name: "Mr", exact: true }).click();
  558 |   });
  559 |   await allure.step("Fill First name and Last name fields", async () => {
  560 |     await page
  561 |       .getByRole("textbox", { name: "First Name (required)" })
  562 |       .fill("Test");
  563 |     await page
  564 |       .getByRole("textbox", { name: "Last Name (required)" })
  565 |       .fill("Data");
  566 |   });
  567 |   await allure.step("Fill Job title", async () => {
  568 |     await page
  569 |       .getByRole("textbox", { name: "Job Title (required)" })
  570 |       .fill("Test");
  571 |   });
  572 |   await allure.step("Fill Business email", async () => {
  573 |     await page
  574 |       .getByRole("textbox", { name: "Business email (required)" })
  575 |       .fill("hello@suzuki.co.uk");
  576 |   });
  577 |   await allure.step("Fill Business phone", async () => {
  578 |     await page
  579 |       .getByRole("textbox", { name: "Business Phone (required)" })
  580 |       .fill("022634646");
  581 |   });
  582 |   await allure.step("Fill Business name", async () => {
  583 |     await page
  584 |       .getByRole("textbox", { name: "Business name (required)" })
  585 |       .fill("Test");
  586 |   });
  587 |   await allure.step("Fill Business postcode", async () => {
  588 |     await page
  589 |       .getByRole("textbox", { name: "Business Postcode (required)" })
  590 |       .fill("MK4 4AE");
  591 |   });
  592 |   // await allure.step("Select vehicle registration option", async () => {
  593 |   //   await page
  594 |   //     .locator(".styles_vrn_label__G3cbO.false > span:nth-child(2)")
  595 |   //     .first()
  596 |   //     .click();
  597 |   // });
  598 |   await allure.step("Fill Building number / name", async () => {
  599 |     await page
  600 |       .getByRole("textbox", { name: "Building number / name (" })
  601 |       .fill("7e");
  602 |   });
  603 |   await allure.step("Fill Street name", async () => {
  604 |     await page
  605 |       .getByRole("textbox", { name: "Street name (required)" })
  606 |       .fill("Street");
  607 |   });
  608 |   await allure.step("Fill Town", async () => {
  609 |     await page.getByRole("textbox", { name: "Town (required)" }).fill("Town");
  610 |   });
  611 |   await allure.step("Fill County", async () => {
  612 |     await page
  613 |       .getByRole("textbox", { name: "County (required)" })
  614 |       .fill("County");
  615 |   });
  616 |   await allure.step("Accept Email opt in", async () => {
  617 |     await page.getByRole("checkbox", { name: "Email" }).check();
  618 |   });
  619 |   await allure.step("Click Review booking", async () => {
  620 |     await page.getByRole("button", { name: "Review booking" }).click();
  621 |   });
  622 |   await allure.step("Click Review booking again", async () => {
> 623 |     await page.getByRole("button", { name: "Review booking" }).click();
      |                                                                ^ Error: locator.click: Target page, context or browser has been closed
  624 |   });
  625 | });
  626 | 
  627 | test("Finance - Vitara", async ({ page }) => {
  628 |   await allure.epic("Finance");
  629 |   await allure.feature("Calculating financing options");
  630 |   await allure.severity(Severity.CRITICAL);
  631 |   await allure.description("User is able to calculate financing - Vitara");
  632 |   await allure.owner("QA Team");
  633 |   await allure.tag("smoke");
  634 |   await page.goto(
  635 |     "https://staging-cars.test-suzuki.co.uk/offers-finance/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  636 |   );
  637 |   await acceptCookiesIfPresent(page);
  638 | 
  639 |   await allure.step("Click Explore Vitara offers", async () => {
  640 |     await page.getByRole('link', { name: 'Explore Vitara offers' }).click();
  641 |   });
  642 |   
  643 |   await allure.step("Click Finance Calculator", async () => {
  644 |     await expect(page).toHaveURL(/vitara-offers-and-finance\//);
  645 |     await page.getByLabel('Main banner').getByRole('link', { name: 'Finance Calculator' }).click();
  646 |   });
  647 |   await allure.step("Select customer type Personal", async () => {
  648 |     await expect(page).toHaveURL(new RegExp("model=Vitara&grade=Motion%20Mild%20Hybrid"));
  649 |     await expect(async () => {
  650 |       await page.locator("label").filter({ hasText: "Personal" }).click();
  651 |       await expect(page.getByRole("radio", { name: /Personal/ })).toBeChecked();
  652 | }).toPass();
  653 |   });
  654 |   await allure.step("Set deposit percentage slider", async () => {
  655 |     await page.getByRole('slider', { name: 'A larger deposit could reduce' }).fill('30');
  656 |   });
  657 |   await allure.step("Set annual mileage slider", async () => {
  658 |     const mileage_slider = page.getByRole("slider", { name: "What’s your annual mileage?" });
  659 |     await mileage_slider.scrollIntoViewIfNeeded();
  660 |     await mileage_slider.fill("14000");
  661 |   });
  662 |   await allure.step("Fill Deposit amount", async () => {
  663 |     await page.getByRole("textbox", { name: "Deposit" }).fill("4000");
  664 |   });
  665 |   await allure.step("Click Calculate financing", async () => {
  666 |     await page.getByRole("button", { name: "Calculate financing" }).click();
  667 |   });
  668 |   await allure.step("Click Send to dealer", async () => {
  669 |     await page.getByRole("button", { name: "Send to dealer" }).click();
  670 |   });
  671 |   await allure.step("Enter postcode or location", async () => {
  672 |     await page
  673 |       .getByRole("searchbox", { name: "Postcode or location" })
  674 |       .fill("mk4 4ae");
  675 |   });
  676 |   await allure.step("Click search", async () => {
  677 |     await page
  678 |       .getByRole("button", { name: "Search postcode or location" })
  679 |       .click();
  680 |   });
  681 |   await allure.step("Click Your details", async () => {
  682 |     await page.getByRole("button", { name: "Your details" }).nth(1).click();
  683 |   });
  684 |   await allure.step("Select title", async () => {
  685 |     await page.getByRole("combobox", { name: "Select Title" }).click();
  686 |     await page.getByRole("option", { name: "Mr", exact: true }).click();
  687 |   });
  688 |   await allure.step("Fill First name and Last name fields", async () => {
  689 |     await page
  690 |       .getByRole("textbox", { name: "First name (required)" })
  691 |       .fill("Test");
  692 |     await page
  693 |       .getByRole("textbox", { name: "Last name (required)" })
  694 |       .fill("Data");
  695 |   });
  696 |   await allure.step("Fill Email", async () => {
  697 |     await page
  698 |       .getByRole("textbox", { name: "Email (required)" })
  699 |       .fill("hello@suzuki.co.uk");
  700 |   });
  701 |   await allure.step("Fill Phone number", async () => {
  702 |     await page
  703 |       .getByRole("textbox", { name: "Phone (required)" })
  704 |       .fill("022636565");
  705 |   });
  706 |   await allure.step("Click Review details", async () => {
  707 |     await page.getByRole("button", { name: "Review details" }).first().click();
  708 |   });
  709 |   await allure.step("Verify Thank you message is displayed", async () => {
  710 |     await expect(page.getByRole("heading", { name: "Thank you!" })).toBeVisible();
  711 |   });
  712 | });
  713 | 
  714 | test("Finance - e Vitara", async ({ page }) => {
  715 |   await allure.epic("Finance");
  716 |   await allure.feature("Calculating financing options");
  717 |   await allure.severity(Severity.CRITICAL);
  718 |   await allure.description("User is able to calculate financing - e Vitara");
  719 |   await allure.owner("QA Team");
  720 |   await allure.tag("smoke");
  721 |   await page.goto(
  722 |     "https://staging-cars.test-suzuki.co.uk/offers-finance/?cOut=bm9DYXB0Y2hhOkFTZGtqeUcqT0AkIVlVQDRoa3VxandoYmkmXlkhQFVnaHZxc2tkamF3eXJlODEy",
  723 |   );
```