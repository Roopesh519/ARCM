const assert = require('assert');
const { BeforeAll, AfterAll, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, Key, Keys, Builder, until } = require('selenium-webdriver');
const moment = require("moment")
const { format, subDays, parse } = require('date-fns');

setDefaultTimeout(60 * 1000);


Given('I am in my profile page', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await global.driver.wait(until.elementLocated(By.xpath(`//h1[text()="My Profile"]`)))
});


When('I click on manage Organization Users', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await global.driver.get('https://cs0275-dev-organization.accessibleremotecaremanagement.net/manage-organization-users');
});


Given('I am on the manage Organization Users page', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await global.driver.get('https://cs0275-dev-organization.accessibleremotecaremanagement.net/manage-organization-users')
    await global.driver.wait(until.elementLocated(By.xpath(`//h1[text()="Manage Organization Users"]`)))
});


When('I click on {string} button', async function (button) {
    let buttonElement;
    switch (button) {
        case 'Search':
            buttonElement = await driver.wait(until.elementLocated(By.id('search-value')));
            break;
        case 'Add Organization Users':
            buttonElement = await global.driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Add Organization Users")]')));
            break;
        case 'Sub Division Name':
            buttonElement = await global.driver.wait(until.elementLocated(By.id('sub_division_name')));
            break;
        case 'Subdivision':
            buttonElement = await global.driver.wait(until.elementLocated(By.id('0subdivision')));
            break;
        case 'Yes':
            buttonElement = await global.driver.wait(until.elementLocated(By.id('add_admin')));
            break;
        case 'submit':
            buttonElement = await global.driver.wait(until.elementLocated(By.id('update')));
            break;
        case 'Clear All':
            buttonElement = await global.driver.wait(until.elementLocated(By.id('Cancel')));
            break;
        case 'Clear-all':
            buttonElement = await global.driver.wait(until.elementLocated(By.id('id1')));
            break;
        case 'icon-export':
            buttonElement = await global.driver.wait(until.elementLocated(By.id('icon-export')));
            break;
        case 'Export':
            buttonElement = await global.driver.wait(until.elementLocated(By.id('Export')));
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


Then('the table should display a list of Organization User', async function () {
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


// sort

When('I click on sort {string}', async function (sort_by) {
    // Write code here that turns the phrase above into concrete actions
    await new Promise(resolve => setTimeout(resolve, 2000));
    switch (sort_by) {
        case 'ID':
            // Write code here that turns the phrase above into concrete actions
            await new Promise(resolve => setTimeout(resolve, 1000));
            await driver.wait(until.elementLocated(By.id(`id`))).click()
            await new Promise(resolve => setTimeout(resolve, 1000));
            break;
        case 'Username':
            // Write code here that turns the phrase above into concrete actions
            await new Promise(resolve => setTimeout(resolve, 1000));
            await driver.wait(until.elementLocated(By.id(`username`))).click()
            await new Promise(resolve => setTimeout(resolve, 1000));
            break;
        default:
            break;
    }
});

Then('I should see the Organization Users sorted in ascending order based on {string}', async function (sort_by) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    let items;
    let item_texts;
    let sorted_item_texts;
    switch (sort_by) {
        case 'ID':
            items = await driver.wait(until.elementsLocated(By.css(`tbody > tr > td:nth-child(2)`)));
            item_texts = await Promise.all(items.map((item) => item.getText()));
            sorted_item_texts = [...item_texts].sort();
            assert.deepStrictEqual(item_texts, sorted_item_texts, 'Items are not sorted in ascending order');
            await new Promise(resolve => setTimeout(resolve, 500));
            break;
        case 'Username':
            items = await driver.wait(until.elementsLocated(By.css(`tbody > tr > td:nth-child(3)`)));
            item_texts = await Promise.all(items.map((item) => item.getText()));
            sorted_item_texts = [...item_texts].sort();
            assert.deepStrictEqual(item_texts, sorted_item_texts, 'Items are not sorted in ascending order');
            await new Promise(resolve => setTimeout(resolve, 500));
            break;
        default:
            break;
    }
});

Then('I should see the Organization Users sorted in descending order based on {string}', async function (sort_by) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    let items;
    let item_texts;
    let sorted_item_texts;
    switch (sort_by) {
        case 'ID':
            items = await driver.wait(until.elementsLocated(By.css(`tbody > tr > td:nth-child(2)`)));
            item_texts = await Promise.all(items.map((item) => item.getText()));
            sorted_item_texts = [...item_texts].sort().reverse();
            assert.deepStrictEqual(item_texts, sorted_item_texts, 'Items are not sorted in descending order');
            await new Promise(resolve => setTimeout(resolve, 500));
            break;
        case 'Username':
            items = await driver.wait(until.elementsLocated(By.css(`tbody > tr > td:nth-child(3)`)));
            item_texts = await Promise.all(items.map((item) => item.getText()));
            sorted_item_texts = [...item_texts].sort().reverse();
            assert.deepStrictEqual(item_texts, sorted_item_texts, 'Items are not sorted in descending order');
            await new Promise(resolve => setTimeout(resolve, 500));
            break;
        default:
            break;
    }
});


Then('The Export button is disabled', async function () {
    const button = await driver.wait(until.elementLocated(By.id('Export')));
    const isDisabled = await button.getAttribute('disabled');
    assert.strictEqual(isDisabled, 'true', 'Expected button with id Export to be disabled');
});