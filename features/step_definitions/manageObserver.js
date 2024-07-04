const assert = require('assert');
const { BeforeAll, AfterAll, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, Key, Builder, until } = require('selenium-webdriver');

setDefaultTimeout(60 * 1000);


Given('I am in my profile page', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await global.driver.wait(until.elementLocated(By.xpath(`//h1[text()="My Profile"]`)))
});


When('I click on manage observer', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await global.driver.get('https://cs0275-dev-organization.accessibleremotecaremanagement.net/manage-observer');
});


Given('I am on the manage observer page', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await global.driver.get('https://cs0275-dev-organization.accessibleremotecaremanagement.net/manage-observer')
    await global.driver.wait(until.elementLocated(By.xpath(`//h1[text()="Manage Observers"]`)))
});


When('I click on {string} button', async function (button) {
    let buttonElement;
    switch (button) {
        case 'Search':
            buttonElement = await driver.wait(until.elementLocated(By.id('search-value')));
            break;
        case 'Filter':
            buttonElement = await global.driver.wait(until.elementLocated(By.id('filter')));
            break;
        default:
            console.log('Invalid button string');
            return;
    }
    await buttonElement.click();
});


Then('I should see a table with the following columns:', async function (dataTable) {
    // Verify the table headers
    const headers = dataTable.raw().flat();
    for (const header of headers) {
        const headerElement = await global.driver.findElement(By.xpath(`//th[contains(text(), '${header}')]`));
        expect(await headerElement.isDisplayed()).to.be.true;
    }
});


Then('the table should display a list of observers', async function () {
    // Verify the table rows
    const rows = await global.driver.wait(until.elementsLocated(By.css('table.table-auto tbody tr')));
    expect(rows.length).to.be.greaterThan(0);
});


Then('I should see a total number of records displayed at the bottom', async function () {
    // Verify the total number of records
    const totalRecordsElement = await global.driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Total Number of Records')]")));
    expect(await totalRecordsElement.isDisplayed()).to.be.true;
    const totalRecordsText = await totalRecordsElement.getText();
    expect(totalRecordsText).to.match(/Total Number of Records:\d+/);
});



When('I enter text as {string}', async function (text) {
    const searchInput = await global.driver.wait(until.elementLocated(By.id('search-value')));
    await searchInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await searchInput.sendKeys(text);
});



Then('I should see a pop up window for Filter', async function () {
    await new Promise(resolve => setTimeout(resolve, 5000));
    await global.driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Filter by:')]")));
});


When('I enter start date as {string}', async function (date) {
    const dateFilter = await global.driver.wait(until.elementLocated(By.id('filter_start_date')));
    await dateFilter.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await dateFilter.sendKeys(date);
});


When('I enter end date as {string}', async function (date) {
    const dateFilter = await global.driver.wait(until.elementLocated(By.id('filter_end_date')));
    await dateFilter.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await dateFilter.sendKeys(date);
});


Then('I should see the filter applied', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


When('I select status as {string}', async function (status) {
    let buttonElement;
    switch (status) {
        case 'Active':
            buttonElement = await global.driver.wait(until.elementLocated(By.xpath("//label[text()='Active']")));
            break;
        case 'Inactive':
            buttonElement = await global.driver.wait(until.elementLocated(By.xpath("//label[text()='Inactive']")));
            break;
        default:
            console.log('Invalid button string');
            return;
    }
    await buttonElement.click();
});