import {Given, When, Then} from "@cucumber/cucumber";
import {expect} from '@playwright/test';
import { pageFixtures } from "../../hooks/pageFixtures";

Given('I have navigated to the site', async function () {
    await pageFixtures.page.waitForLoadState("networkidle");
    pageFixtures.logger.info("Navigated to the site");
    
  });

  When('I enter username {string}', async function (username) {
    // Write code here that turns the phrase above into concrete actions
    await pageFixtures.page.locator("//input[@id='userEmail']").type(username);
    pageFixtures.logger.info("Enter username");
  });

  When('I enter password {string}', async function (password) {
    // Write code here that turns the phrase above into concrete actions
    await pageFixtures.page.locator("//input[@id='userPassword']").type(password);
    pageFixtures.logger.info("Enter password");
  });

  When('I click submit', async function () {
    // Write code here that turns the phrase above into concrete actions
    await pageFixtures.page.locator("//input[@id='login']").click();
    pageFixtures.logger.info("Clicked submit");
  });

  Then('login should be successful', async function () {
    // Write code here that turns the phrase above into concrete actions
    expect(pageFixtures.page.locator("//*[text()=' Login Successfully ']").isDisabled).toBeTruthy();
    pageFixtures.logger.info("Validating success");
  });