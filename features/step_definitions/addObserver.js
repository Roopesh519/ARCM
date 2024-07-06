const assert = require('assert');
const { BeforeAll, AfterAll, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, Key, Builder, until } = require('selenium-webdriver');

setDefaultTimeout(60 * 1000);


Given('I am on the manager observer page', async function(){
    await global.driver.get('https://cs0275-dev-organization.accessibleremotecaremanagement.net/manage-observer');
    await new Promise(resolve => setTimeout(resolve, 1000));
    await global.driver.wait(until.elementLocated(By.xpath('//*[text()="Manage Observers"]')));
});

Given('I am on the add observer page', async function(){
    await new Promise(resolve => setTimeout(resolve, 1000));
    await global.driver.wait(until.elementLocated(By.xpath('//*[text()="Add  Observer"]')));
});


When('I enter username as {string}', async function (userName) {
    const userNameInput = await global.driver.wait(until.elementLocated(By.id('user_name')));
    await userNameInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await userNameInput.sendKeys(userName);
});

When('I enter first name as {string}', async function (firstName) {
    const firstNameInput = await global.driver.wait(until.elementLocated(By.id('first_name')));
    await firstNameInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await firstNameInput.sendKeys(firstName);
});

When('I enter last name as {string}', async function (lastName) {
    const lastNameInput = await global.driver.wait(until.elementLocated(By.id('last_name')));
    await lastNameInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await lastNameInput.sendKeys(lastName);
});

When('I enter mobile number as {string}', async function (mobileNumber) {
    const mobileNumberInput = await global.driver.wait(until.elementLocated(By.id('mobile_number')));
    await mobileNumberInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await mobileNumberInput.sendKeys(mobileNumber);
});

When('I enter main number as {string}', async function (mainNumber) {
    const mainNumberInput = await global.driver.wait(until.elementLocated(By.id('main_number')));
    await mainNumberInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await mainNumberInput.sendKeys(mainNumber);
});

When('I enter address as {string}', async function (address) {
    const addressInput = await global.driver.wait(until.elementLocated(By.id('address')));
    await addressInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await addressInput.sendKeys(address);
});

Then('I should see a pop up box for confirmation', async function () {
    await global.driver.wait(until.elementLocated(By.xpath('//*[text()="Associate Patient"]')));
});
