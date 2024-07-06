const assert = require('assert');
const { BeforeAll, AfterAll, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, Key, Builder, until } = require('selenium-webdriver');
const { faker } = require('@faker-js/faker');

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


//  faker ------------------------------------------


When('I enter username', async function () {
    const username = `testops+${faker.string.alphanumeric(10)}@7edge.com`; // Correct method for alphanumeric string
    const usernameInput = await driver.wait(until.elementLocated(By.id('user_name')));
    await usernameInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await usernameInput.sendKeys(username);
});

When('I enter first name', async function () {
    const firstName = faker.person.firstName();
    const firstNameInput = await driver.wait(until.elementLocated(By.id('first_name')));
    await firstNameInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await firstNameInput.sendKeys(firstName);
});

When('I enter last name', async function () {
    const lastName = faker.person.lastName();
    const lastNameInput = await driver.wait(until.elementLocated(By.id('last_name')));
    await lastNameInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await lastNameInput.sendKeys(lastName);
});

When('I enter mobile number', async function () {
    const mobileNumber = faker.string.numeric(10);
    const mobileNumberInput = await driver.wait(until.elementLocated(By.id('mobile_number')));
    await mobileNumberInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await mobileNumberInput.sendKeys(mobileNumber);
});

When('I enter main number', async function () {
    const mainNumber = faker.string.numeric(10);
    const mainNumberInput = await driver.wait(until.elementLocated(By.id('main_number')));
    await mainNumberInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await mainNumberInput.sendKeys(mainNumber);
});