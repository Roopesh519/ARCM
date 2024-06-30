const assert = require('assert'); 
const { Before, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, Key, Builder, until, Select} = require('selenium-webdriver')
const { faker } = require('@faker-js/faker');


// Navigate to the login page
Given('I am on the login page', async function () {
  await this.driver.get('https://cs0275-dev-organization.accessibleremotecaremanagement.net/');
  await new Promise(resolve => setTimeout(resolve, 500));
  await this.driver.wait(until.elementLocated(By.xpath('//*[text()="Login"]')));

});

// Enter email
When('I enter my email as {string}', async function (email) {
  const emailInput = await this.driver.wait(until.elementLocated(By.id('userName')));
  await emailInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
  await emailInput.sendKeys(email);
});

// Enter password
When('I enter my password as {string}', async function (password) {
  const passwordInput = await this.driver.wait(until.elementLocated(By.id('passWord')));
  await passwordInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
  await passwordInput.sendKeys(password);
});

// Click on the specified button
When('I click on the {string} button', async function (button) {
  const buttonElement = await this.driver.wait(until.elementLocated(By.id(button)));
  await buttonElement.click();
});

// Verify navigation to profile page
Then('I navigate to profile page', async function () {
  await this.driver.wait(until.urlContains('profile'), 5000);
  const currentUrl = await this.driver.getCurrentUrl();
  expect(currentUrl).to.include('profile');
});

// Verify message text
Then('I should see a message {string}', async function (message) {
  const successMessage = await this.driver.wait(until.elementLocated(By.xpath(`//*[contains(text(), "${message}")]`)));
  const text = await successMessage.getText();
  expect(text).to.equal(message);
});
