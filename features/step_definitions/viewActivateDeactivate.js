const assert = require('assert');
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { format, subDays, parse } = require('date-fns');

setDefaultTimeout(60 * 1000);


When('I store the details of the observer', async function () {
    // Define an object to store the data of the first row
    this.firstRowData = {};

    // Array of column names corresponding to the data
    const columnNames = [
        'ID', 'Username', 'First Name', 'Last Name', 'Status', 
        'Patient Associated with', 'Sub Division Name', 
        'Email Address', 'Mobile Number', 'Main Number', 'Created Date'
    ];

    // Iterate over each column in the first row and store the data in the object
    for (let i = 2; i <= columnNames.length; i++) {
        const cellElement = await driver.wait(until.elementLocated(By.xpath(`//tbody/tr[1]/td[${i}]`)));
        const cellText = await cellElement.getText();
        this.firstRowData[columnNames[i - 2]] = cellText;
    }

    console.log('First row data:', this.firstRowData);
});

//-----------------------view-----------------------------


Then('I should be redirected to view page', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await global.driver.wait(until.elementLocated(By.xpath(`//h1[text()="View Observer"]`)))
});


Then('I validate the details of the observer', async function(){
    // const ID = await driver.wait(until.elementLocated(By.xpath('//table/thead'))).getText();
    return passed;
});
