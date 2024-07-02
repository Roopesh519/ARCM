const assert = require('assert'); 
const { Before, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, Key, Builder, until, Select } = require('selenium-webdriver');
const { faker } = require('@faker-js/faker');

setDefaultTimeout(60 * 1000);


Given('I am on the profile page', async function () {
    await this.driver.get('https://cs0275-dev-organization.accessibleremotecaremanagement.net/profile');
    await new Promise(resolve => setTimeout(resolve, 500));
    await this.driver.wait(until.elementLocated(By.xpath('//*[text()="My Profile"]')));
});


When('I click on {string} button', async function(button) {
    let buttonElement;
    switch(button) {
        case 'Manage Observer':
            buttonElement = await this.driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Manage Observer")]')));
            break;
        default:
            console.log('Invalid button string');
            return; 
    }
    await buttonElement.click();
});


When('I navigate to manage observer page', async function () {
    await this.driver.wait(until.urlContains('manage-observer'));
    await this.driver.wait(until.elementLocated(By.xpath('//*[text()="Manage Observers"]')));
    await this.driver.wait(until.elementLocated(By.css('table.table-auto')), 5000); // Adjust as necessary
});


Then('I should see a table with the following columns:', async function (dataTable) {
    // Verify the table headers
    const headers = dataTable.raw().flat();
    for (const header of headers) {
        const headerElement = await this.driver.findElement(By.xpath(`//th[contains(text(), '${header}')]`));
        expect(await headerElement.isDisplayed()).to.be.true;
    }
});


Then('the table should display a list of observers', async function () {
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
