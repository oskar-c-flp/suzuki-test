import { Page } from "@playwright/test";
import * as allure from "allure-js-commons";

export async function acceptCookiesIfPresent(page: Page): Promise<void> {
  const acceptBtn = page.getByRole("button", { name: "Accept All Cookies" });
  try {
    await acceptBtn.waitFor({ state: "visible", timeout: 5000 });
  } catch {
    return;
  }
  await allure.step("Accept cookie banner", async () => {
    await acceptBtn.click();
    await acceptBtn.waitFor({ state: "hidden" });
  });
}
export class ContactForm {
  constructor(private page: Page) {}

  async fillContactDetails() {
    await allure.step("Select title", async () => {
      await this.page.getByText("Please select").click();
      await this.page.getByText("Mr", { exact: true }).click();
    });
    await allure.step("Fill First name and Last name fields", async () => {
      await this.page.locator("#firstName").fill("Test");
      await this.page.locator("#surname").fill("Data");
    });
    await allure.step("Fill Phone Number field", async () => {
      await this.page.locator("#phoneNumber").fill("022212134");
    });
    await allure.step("Fill E-mail field", async () => {
      await this.page.locator("#emailAddress").fill("test@gmail.com");
    });
  }
}
export class PersonalDetailsForm {
  constructor(private page: Page) {}

  async fillPersonalDetails() {
    await allure.step("Select title", async () => {
      await this.page.getByRole("combobox", { name: "Select Title" }).click();
      await this.page.getByRole("option", { name: "Mr", exact: true }).click();
    });
    await allure.step("Fill First name and last name", async () => {
      await this.page.getByRole("textbox", { name: "First Name (required)" }).fill("Test");
      await this.page.getByRole("textbox", { name: "Last Name (required)" }).fill("Data");
    });
    await allure.step("Fill Email", async () => {
      await this.page.getByRole("textbox", { name: "Email (required)" }).fill("hello@suzuki.co.uk");
    });
  }
}
export class MotabilityDetailsForm {
  constructor(private page: Page) {}

  async fillMotabilityDetails() {
    await allure.step("Select title", async () => {
      await this.page.getByRole("combobox", { name: "Select Title" }).click();
      await this.page.getByRole("option", { name: "Mr", exact: true }).click();
    });
    await allure.step("Fill First name and Last name fields", async () => {
      await this.page.getByRole("textbox", { name: "First name (required)" }).fill("Test");
      await this.page.getByRole("textbox", { name: "Last name (required)" }).fill("Data");
    });
    await allure.step("Fill Postcode", async () => {
      await this.page.getByRole("textbox", { name: "Postcode (required)" }).fill("SW1W 0NY");
    });
    await allure.step("Fill Building number / name", async () => {
      await this.page.getByRole("textbox", { name: "Building number / name (" }).fill("7E");
    });
    await allure.step("Fill Email", async () => {
      await this.page.getByRole("textbox", { name: "Email (required)" }).fill("test@gmail.com");
    });
    await allure.step("Fill Phone number", async () => {
      await this.page.getByRole("textbox", { name: "Phone Number (required)" }).fill("022845456");
    });
  }
}
export class BusinessDetailsForm {
  constructor(private page: Page) {}

  async fillBusinessDetails() {
    await allure.step("Select title", async () => {
      await this.page.getByRole("combobox", { name: "Select Title" }).click();
      await this.page.getByRole("option", { name: "Mr", exact: true }).click();
    });
    await allure.step("Fill First name and Last name fields", async () => {
      await this.page.getByRole("textbox", { name: "First Name (required)" }).fill("Test");
      await this.page.getByRole("textbox", { name: "Last Name (required)" }).fill("Data");
    });
    await allure.step("Fill Job title", async () => {
      await this.page.getByRole("textbox", { name: "Job Title (required)" }).fill("Test");
    });
    await allure.step("Fill Business email", async () => {
      await this.page.getByRole("textbox", { name: "Business email (required)" }).fill("hello@suzuki.co.uk");
    });
    await allure.step("Fill Business phone", async () => {
      await this.page.getByRole("textbox", { name: "Business Phone (required)" }).fill("022634646");
    });
    await allure.step("Fill Business name", async () => {
      await this.page.getByRole("textbox", { name: "Business name (required)" }).fill("Test");
    });
    await allure.step("Fill Business postcode", async () => {
      await this.page.getByRole("textbox", { name: "Business Postcode (required)" }).fill("MK4 4AE");
    });
    await allure.step("Fill Building number / name", async () => {
      await this.page.getByRole("textbox", { name: "Building number / name (" }).fill("7e");
    });
    await allure.step("Fill Street name", async () => {
      await this.page.getByRole("textbox", { name: "Street name (required)" }).fill("Street");
    });
    await allure.step("Fill Town", async () => {
      await this.page.getByRole("textbox", { name: "Town (required)" }).fill("Town");
    });
    await allure.step("Fill County", async () => {
      await this.page.getByRole("textbox", { name: "County (required)" }).fill("County");
    });
  }
}
