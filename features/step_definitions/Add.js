const assert = require('assert');
const { BeforeAll, AfterAll, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, Key, Builder, until } = require('selenium-webdriver');

setDefaultTimeout(60 * 1000);


// Given('I am on the manager observer page', async function(){
//     await global.driver.get('https://cs0275-dev-organization.accessibleremotecaremanagement.net/manage-organization-users');
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     await global.driver.wait(until.elementLocated(By.xpath('//*[text()="Manage Organization Users"]')));
// });

// Given('I am on the Add Organization User page', async function(){
//     await global.driver.get('https://cs0275-dev-organization.accessibleremotecaremanagement.net/manage-organization-users/addOrganizationUser');
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     await global.driver.wait(until.elementLocated(By.xpath('//*[text()="Add Organization User"]')));
// });

// Then('I should navigate to the Add Organization User page', async function (){
//     // await global.driver.get('https://cs0275-dev-organization.accessibleremotecaremanagement.net/manage-organization-users/addOrganizationUser');
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     await global.driver.wait(until.elementLocated(By.xpath('//*[text()="Add Organization User"]')));
// });

Given('I am on the add Organization Users page', async function(){
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
