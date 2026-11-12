import { Page } from "@playwright/test";
import * as allure from "allure-js-commons";

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
