const assert = require('assert'); 
const { Before, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, Key, Builder, until, Select } = require('selenium-webdriver');
const { faker } = require('@faker-js/faker');
const { expect } = require('chai');

setDefaultTimeout(60 * 1000);


Given('I am on the profile page', async function () {
    await this.driver.get('https://cs0275-dev-organization.accessibleremotecaremanagement.net/profile');
    await new Promise(resolve => setTimeout(resolve, 500));
    await this.driver.wait(until.elementLocated(By.xpath('//*[text()="My Profile"]')));
});


When('I click on {string} button', async function(button) {
    let buttonElement;
    switch(button) {
        case 'Manage Organization Users':
            buttonElement = await this.driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Manage Organization Users")]')));
            break;
        default:
            console.log('Invalid button string');
            return; 
    }
    await buttonElement.click();
});


When('I navigate to Manage Organization Users page', async function () {
    await this.driver.wait(until.urlContains('manage-organization-users'));
    await this.driver.wait(until.elementLocated(By.xpath('//*[text()="Manage Organization Users"]')));
    await this.driver.wait(until.elementLocated(By.css('table.table-auto')), 5000); // Adjust as necessary
});


Then('I should see a table with the following rows:', async function (dataTable) {
    // Verify the table rows
    const rows = dataTable.raw().flat();
    for (const row of rows) {
        const rowElement = await this.driver.findElement(By.xpath(`//tr[contains(text(), '${row}')]`));
        expect(await rowElement.isDisplayed()).to.be.true;
    }
});


Then('The table should display a list of Organization Users', async function () {
    // Verify the table rows
    const rows = await this.driver.wait(until.elementsLocated(By.css('table.table-auto tbody tr')));
    expect(rows.length).to.be.greaterThan(0);
});


Then('I should see a total number of records displayed at the bottom', async function () {
    // Verify the total number of records
    const totalRecordsElement = await this.driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Total Number of Records')]")));
    expect(await totalRecordsElement.isDisplayed()).to.be.true;
    const totalRecordsText = await totalRecordsElement.getText();
    expect(totalRecordsText).to.match(/Total Number of Records:\d+/);
});