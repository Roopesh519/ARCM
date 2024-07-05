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
        case 'Add Observer':
            buttonElement = await global.driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Add Observer")]')));
            break;
        case 'Sub Division Name':
            buttonElement = await global.driver.wait(until.elementLocated(By.id('sub_division_name')));
            break;
        case 'Subdivision':
            buttonElement = await global.driver.wait(until.elementLocated(By.id('0subdivision')));
            break;
        case 'Select patient':
            buttonElement = await global.driver.wait(until.elementLocated(By.id('patient_name')));
            break;
        case 'Patient':
            buttonElement = await global.driver.wait(until.elementLocated(By.id('0patient')));
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

//----------------------listing-------------------------

Then('I should see table header containing:', { timeout: 10 * 1000 }, async function (dataTable) {
    await new Promise(resolve => setTimeout(resolve, 5000));

    const expectedColumns = dataTable.raw().flat(); // Extracts column names from the table and flattens them into a single array

    const tableHeaderElement = await driver.wait(until.elementLocated(By.xpath('//table/thead')));
    const tableHeaderText = await tableHeaderElement.getText();

    expectedColumns.forEach(column => {
        assert(tableHeaderText.includes(column.trim()), `Table header does not contain column: ${column}`);
    });
});


// Step definition for searching observer by ID
When('I search for a particular observer with ID', async function () {
    const idElement = await driver.wait(until.elementLocated(By.xpath(`//tbody/tr[1]/td[2]`)));
    const observerID = await idElement.getText();
    this.ID = observerID;

    const searchField = await driver.findElement(By.id(`search-value`));
    await searchField.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await searchField.sendKeys(observerID);
    await new Promise(resolve => setTimeout(resolve, 1500)); // wait for 1.5 seconds
});

Then('I should see the list of observer with the searched ID', async function () {
    const idElement = await driver.wait(until.elementLocated(By.xpath(`//tbody/tr[1]/td[2]`)));
    const searchedID = await idElement.getText();

    console.log('Original ID:', this.ID, 'Searched ID:', searchedID);
    assert.strictEqual(searchedID, this.ID, 'The searched ID does not match the expected ID.');
});

// Step definition for searching observer by username
When('I search for a particular observer with username', async function () {
    const usernameElement = await driver.wait(until.elementLocated(By.xpath(`//tbody/tr[1]/td[3]`)));
    const observerUsername = await usernameElement.getText();
    this.username = observerUsername;

    const searchField = await driver.findElement(By.id(`search-value`));
    await searchField.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await searchField.sendKeys(observerUsername);
    await new Promise(resolve => setTimeout(resolve, 1500)); // wait for 1.5 seconds
});

Then('I should see the list of observer with the searched username', async function () {
    const usernameElement = await driver.wait(until.elementLocated(By.xpath(`//tbody/tr[1]/td[3]`)));
    const searchedUsername = await usernameElement.getText();

    console.log('Original Username:', this.username, 'Searched Username:', searchedUsername);
    assert.strictEqual(searchedUsername, this.username, 'The searched username does not match the expected username.');
});

// Step definition for searching observer by first name
When('I search for a particular observer with the first name', async function () {
    const firstNameElement = await driver.wait(until.elementLocated(By.xpath(`//tbody/tr[1]/td[4]`)));
    const observerFirstName = await firstNameElement.getText();
    this.firstname = observerFirstName;

    const searchField = await driver.findElement(By.id(`search-value`));
    await searchField.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await searchField.sendKeys(observerFirstName);
    await new Promise(resolve => setTimeout(resolve, 1500)); // wait for 1.5 seconds
});

Then('I should see the list of observer with the searched firstname', async function () {
    const firstNameElement = await driver.wait(until.elementLocated(By.xpath(`//tbody/tr[1]/td[4]`)));
    const searchedFirstName = await firstNameElement.getText();

    console.log('Original First Name:', this.firstname, 'Searched First Name:', searchedFirstName);
    assert.strictEqual(searchedFirstName, this.firstname, 'The searched first name does not match the expected first name.');
});


//----------------------listing ends--------------------

When('I enter text as {string}', async function (text) {
    const searchInput = await global.driver.wait(until.elementLocated(By.id('search-value')));
    await searchInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await searchInput.sendKeys(text);
});



Then('I should see a pop up window for Filter', async function () {
    await new Promise(resolve => setTimeout(resolve, 5000));
    await global.driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Filter by:')]")));
});

When('I click on the filter by the {string}', async function (status) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    switch (status) {
        case 'Active':
            await new Promise(resolve => setTimeout(resolve, 1500));
            await driver.executeScript(`document.querySelector("#active").click()`)
            await new Promise(resolve => setTimeout(resolve, 1000));
            break;
        case 'Inactive':
            await new Promise(resolve => setTimeout(resolve, 1500));
            await driver.executeScript(`document.querySelector("#inactive").click()`)
            await new Promise(resolve => setTimeout(resolve, 1000));
            break;

    }
});


Then('I should see the list of observer with status as {string}', async function (string) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    let items;
    let item_texts;
    switch (string) {
        case 'Active':
            items = await driver.wait(until.elementsLocated(By.css(`tbody > tr > td:nth-child(6) > div > span`)));
            item_texts = await Promise.all(items.map((item) => item.getText()));
            console.log('item_texts', item_texts);
            item_texts.map((data) => {
                assert.equal(string, data);
            });
            break;
        case 'Inactive':
            items = await driver.wait(until.elementsLocated(By.css(`tbody > tr > td:nth-child(6)`)));
            item_texts = await Promise.all(items.map((item) => item.getText()));
            item_texts.map((data) => {
                assert.equal(string, data);
            });
            break;
        default:
            break;
    }
});

When('I click on filter', async function () {
    await driver.wait(until.elementLocated(By.id('filter')), 3000).click()
});

When('I enter start date as {string} and end date as {string}', async function (startdate, enddate) {
    const startDateElement = await global.driver.wait(until.elementLocated(By.id('filter_start_date')), 3000);
    await startDateElement.sendKeys(startdate, Key.ENTER);
    const endDateElement = await global.driver.wait(until.elementLocated(By.id('filter_end_date')), 3000);
    await endDateElement.sendKeys(enddate, Key.ENTER);

});

When('I apply the filter for observer', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await driver.wait(until.elementLocated(By.id(`apply-filter`))).click();
    await new Promise(resolve => setTimeout(resolve, 1500));
});


// Step to enter start and end dates
When('I enter start date and end date', async function () {
    const today = new Date();
    this.yesterday = subDays(today, 1);
    this.filter_date = format(this.yesterday, 'MMM dd, yyyy');
    console.log("date", this.yesterday);

    const startDateElement = await driver.wait(until.elementLocated(By.id('filter_start_date')), 3000);
    await startDateElement.sendKeys(this.filter_date, Key.ENTER);

    const endDateElement = await driver.wait(until.elementLocated(By.id('filter_end_date')), 3000);
    await endDateElement.sendKeys(this.filter_date, Key.ENTER);
});

// Step to check filtered data
When("I should see the date filter applied", async function () {
    const items = await driver.wait(until.elementsLocated(By.css('tbody > tr > td:nth-child(2)')));
    const item_texts = await Promise.all(items.map((item) => item.getText()));
    console.log("items", item_texts);

    // Convert each text to a JavaScript Date object
    const dates = item_texts.map((text) => {
        const parsedDate = parse(text, 'MMM dd, yyyy', new Date());
        return isNaN(parsedDate) ? null : parsedDate;
    }).filter(date => date !== null);  // Filter out invalid dates
    console.log("dates", dates);

    // Format the date using date-fns
    const date_compare = dates.map((date) => format(date, 'MMM dd, yyyy'));
    console.log("date_compare", date_compare);

    // Assuming this.filter_date is a date string in the same format
    const expected_date = format(this.yesterday, 'MMM dd, yyyy');
    console.log("expected", expected_date);

    // Compare each formatted date with the expected date
    date_compare.forEach((date) => assert.equal(expected_date, date));
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


Then('I should see the observer sorted in ascending order based on {string}', async function (sort_by) {
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


Then('I should see the observer sorted in descending order based on {string}', async function (sort_by) {
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