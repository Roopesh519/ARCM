const assert = require('assert');
const { BeforeAll, AfterAll, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, Key, Builder, until } = require('selenium-webdriver');
const { faker } = require('@faker-js/faker');
setDefaultTimeout(60 * 1000);


Given('I am on the add Organization Users page', async function () {
    await global.driver.get('https://cs0275-dev-organization.accessibleremotecaremanagement.net/manage-organization-users/addOrganizationUser');
    await new Promise(resolve => setTimeout(resolve, 1000));
    await global.driver.wait(until.elementLocated(By.xpath('//*[text()="Add Organization User"]')));
});

Given('I am on the Add Organization User page', async function () {
    await global.driver.get('https://cs0275-dev-organization.accessibleremotecaremanagement.net/manage-organization-users/addOrganizationUser');

    // Wait for the page to be completely loaded
    await global.driver.wait(async () => {
        const readyState = await global.driver.executeScript('return document.readyState');
        return readyState === 'complete';
    }, 10000); // Adjust timeout as necessary
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

Then('I should see a pop up box for confirmation', async function () {
    await global.driver.wait(until.elementLocated(By.xpath('//*[text()="Associate Patient"]')));
});

When('I enter username', async function () {
    const username = `testops+${faker.string.numeric(10)}@7edge.com`; // Correct method for alphanumeric string
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
    const mobileNumber = `99456${faker.string.numeric(5)}`; 
    // const mobileNumber = faker.string.numeric(10);
    const mobileNumberInput = await driver.wait(until.elementLocated(By.id('mobile_number')));
    await mobileNumberInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await mobileNumberInput.sendKeys(mobileNumber);
});

When('I enter main number', async function () {
    const mainNumber = `99456${faker.string.numeric(5)}`; 
    // const mainNumber = faker.string.numeric(10);
    const mainNumberInput = await driver.wait(until.elementLocated(By.id('main_number')));
    await mainNumberInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await mainNumberInput.sendKeys(mainNumber);
});


When('I click on User button', async function () {
    const buttonElement = await global.driver.executeScript(`return document.querySelector('#user_true')`);
    await global.driver.executeScript('arguments[0].click()', buttonElement);
});

When('I click on SUBS button', async function () {
    const elements = await driver.findElements(By.tagName('label'));
    for (let element of elements) {
    const title = await element.getAttribute('title');
    if (title === 'SUB000000039-Sub - 1') {
        await element.click();
        break;
    }
}
});