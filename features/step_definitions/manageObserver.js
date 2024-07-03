const assert = require('assert');
const { BeforeAll, AfterAll, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, Key, Builder, until } = require('selenium-webdriver');

setDefaultTimeout(60 * 1000);


BeforeAll(async function () {
    driver = await new Builder().forBrowser('chrome').build();
});

AfterAll(async function () {
    await driver.quit();
});

Given('I am in my profile page', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    // await driver.get('https://cs0275-dev-organization.accessibleremotecaremanagement.net/profile')
    await driver.wait(until.elementLocated(By.xpath(`//h1[text()="My Profile"]`)))
});

When('I click on manage observer', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await driver.get('https://cs0275-dev-organization.accessibleremotecaremanagement.net/manage-observer');
});



Then('I should see a table with the following columns:', async function (dataTable) {
    // Verify the table headers
    const headers = dataTable.raw().flat();
    for (const header of headers) {
        const headerElement = await driver.findElement(By.xpath(`//th[contains(text(), '${header}')]`));
        expect(await headerElement.isDisplayed()).to.be.true;
    }
});


Then('the table should display a list of observers', async function () {
    // Verify the table rows
    const rows = await driver.wait(until.elementsLocated(By.css('table.table-auto tbody tr')));
    expect(rows.length).to.be.greaterThan(0);
});


Then('I should see a total number of records displayed at the bottom', async function () {
    // Verify the total number of records
    const totalRecordsElement = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Total Number of Records')]")));
    expect(await totalRecordsElement.isDisplayed()).to.be.true;
    const totalRecordsText = await totalRecordsElement.getText();
    expect(totalRecordsText).to.match(/Total Number of Records:\d+/);
});



When('I enter text as {string}', function (string) {
    return 'pending';
});