const assert = require('assert');
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, Key, until } = require('selenium-webdriver');

setDefaultTimeout(60 * 1000);


When('I store the details of the user', async function () {
    // Define an object to store the data of the first row
    this.firstRowData = {};

    // Array of column names corresponding to the data
    const columnNames = [
        'ID', 'Username', 'First Name', 'Last Name', 'Permission', 
        'Status', 'Email Address','Main Number'
        ,'Mobile Number', 'Created Date'
    ];

    // Iterate over each column in the first row and store the data in the object
    for (let i = 2; i <= columnNames.length; i++) {
        const cellElement = await driver.wait(until.elementLocated(By.xpath(`//tbody/tr[1]/td[${i}]`)));
        const cellText = await cellElement.getText();
        this.firstRowData[columnNames[i - 2]] = cellText;
    }

    console.log('First row data:', this.firstRowData);
});

Then('I should be redirected to view page', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await global.driver.wait(until.elementLocated(By.xpath(`//h1[text()="View Organization User"]`)))
});


Then('I validate the details of the user', async function(){
    await new Promise(resolve => setTimeout(resolve, 2000));
    const pageSource = await driver.getPageSource();

    // Array of keys in the order they are stored
    const keys = Object.keys(this.firstRowData);

    // Iterate over each key-value pair in the stored data, skipping the 7th field
    for (let i = 0; i < keys.length; i++) {
        //if (i === 5) continue; 
        if (i === 7) continue;
        if (i === 8) continue; 
        const key = keys[i];
        const value = this.firstRowData[key];
        
        const isPresent = pageSource.includes(value);
        assert(isPresent, `The value ${value} for ${key} was not found in the page source`);
    }
});

When('I see a confirmation window for activation', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await global.driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Activate')]")));
});

When('I enter the comment', async function () {
    const commentInput = await global.driver.wait(until.elementLocated(By.id('Comment_here')));
    await commentInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await commentInput.sendKeys('test');
});

When('I see a confirmation window for deactivation', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await global.driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Deactivate')]")));
});


When('I click on "Checkbox" button for ID = ORG000005907', async function() {
    await driver.wait(until.elementLocated(By.id('ORG000005907')), 30000);
        
    await driver.executeScript("document.querySelector('#ORG000005907').click()");
    
    console.log('Clicked the checkbox');
});


Then('I am still on manage Organization User page', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await global.driver.wait(until.elementLocated(By.xpath(`//h1[text()="Manage Organization Users"]`)))
});