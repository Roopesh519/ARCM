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
        case 'Manage Organization Users':
            buttonElement = await this.driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Manage Organization Users")]')));
            break;
        default:
            console.log('Invalid button string');
            return; 
    }
    await buttonElement.click();
});


When('I am on the Manage Organization Users page', async function () {
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


// Then('I should see a total number of records displayed at the bottom', async function () {
//     // Verify the total number of records
//     const totalRecordsElement = await this.driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Total Number of Records')]")));
//     expect(await totalRecordsElement.isDisplayed()).to.be.true;
//     const totalRecordsText = await totalRecordsElement.getText();
//     expect(totalRecordsText).to.match(/Total Number of Records:\d+/);
// });

//SORT
When('I click on {string} button', async function(button) {
    let buttonId;
    switch (button) {
        case 'ID':
            buttonId = 'id';
            break;
        case 'Username':
            buttonId = 'username';
            break;
        case 'First Name':
            buttonId = 'first';
            break;
        case 'Status':
            buttonId = 'status';
            break;
        default:
            throw new Error(`Unknown button: ${button}`);
    }
    const buttonElement = await driver.findElement(By.id(buttonId));
    await buttonElement.click();
    this.extractedData = []; // Initialize extracted data array

    do {
        // Extract table data
        let rows = await driver.findElements(By.xpath('//table/tbody/tr'));
        for (let row of rows) {
            let cells = await row.findElements(By.xpath('td'));
            let rowData = {
                ID: await cells[0].getText(),
                Username: await cells[1].getText(),
                FirstName: await cells[2].getText(),
                Status: await cells[5].getText()  // Adjust index based on your table structure
            };
            this.extractedData.push(rowData);
        }

        // Find and click the next page button
        let nextPageButton = await driver.findElement(By.xpath('//button[@class="px-1 py-0.5 border-2 border-[#687182] rounded-md"]'));
        await nextPageButton.click();
        await driver.wait(until.stalenessOf(nextPageButton), 10000);

        // Add a delay to allow the next page to load fully (optional, adjust as needed)
        await driver.sleep(2000);  // Wait for 2 seconds

        // Check if there are more pages to process
        let isNextPageAvailable = await isElementPresent(driver, By.xpath('//button[@class="px-1 py-0.5 border-2 border-[#687182] rounded-md"]'));
        if (!isNextPageAvailable) {
            break;
        }
    } while (true);
});

async function isElementPresent(driver, locator) {
    try {
        await driver.findElement(locator);
        return true;
    } catch (error) {
        return false;
    }
}

Then('The {string} column must be in ascending order', async function(button) {
    const column = mapButtonToColumn(button);
    let extractedColumnValues = this.extractedData.map(row => row[column]);

    // Check if the extracted data is in ascending order
    let manuallySortedValues = [...extractedColumnValues].sort();
    assert.deepStrictEqual(extractedColumnValues, manuallySortedValues, `The ${button} column is not in ascending order`);
});

Then('The {string} column must be in descending order', async function(button) {
    const column = mapButtonToColumn(button);
    let extractedColumnValues = this.extractedData.map(row => row[column]);

    // Check if the extracted data is in descending order
    let manuallySortedValues = [...extractedColumnValues].sort().reverse();
    assert.deepStrictEqual(extractedColumnValues, manuallySortedValues, `The ${button} column is not in descending order`);
});

function mapButtonToColumn(button) {
    switch (button) {
        case 'ID':
            return 'ID';
        case 'Username':
            return 'Username';
        case 'First Name':
            return 'FirstName';
        case 'Status':
            return 'Status';
        default:
            throw new Error(`Unknown column: ${button}`);
    }
}

//PAGE
When('I check for the pagination element', async function() {
    this.paginationExists = await driver.executeScript(function() {
        return document.querySelector('#rows_per_page') !== null;
    });
});

Then('I perform pagination if the element exists and verify navigation', async function() {
    if (this.paginationExists) {
        console.log('Pagination element exists, performing pagination...');

        // Locate and click the button to go to the next page
        const nextButton = await driver.findElement(By.className('px-1 py-0.5 border-2 border-[#687182] rounded-md'));
        const prevPageNumberElement = await driver.findElement(By.css('.current-page'));
        const prevPageNumber = await prevPageNumberElement.getText();
        const nextPageNumber = parseInt(prevPageNumber) + 1;

        await nextButton.click();

        // Wait for the next page to load (adjust as necessary)
        await driver.sleep(1000);

        // Verify that the navigation to the next page was successful
        const currentPageNumberElement = await driver.findElement(By.css('.current-page'));
        const currentPageNumber = await currentPageNumberElement.getText();

        if (parseInt(currentPageNumber) === nextPageNumber) {
            console.log(`Successfully navigated to page ${nextPageNumber}`);
        } else {
            throw new Error('Failed to navigate to the next page');
        }
    } else {
        console.log('Pagination element does not exist, skipping pagination...');
    }
});

When('I click on the {string} button', async function (button) {
    let buttonElement;
    switch(button) {
        case 'icon-export':
            buttonElement = await this.driver.wait(until.elementLocated(By.id('icon-export')));
            break;
        case 'Export':
            buttonElement = await this.driver.wait(until.elementLocated(By.id('Export')));
            break;
            
        default:
            console.log('Invalid button string');
            return; 
    }
    await buttonElement.click();
  });

  Then('I should see a Popup box "Select columns to export"', async function () {
    const messageXPath = '//*[contains(text(), "Select columns to export")]';
    const messageElement = await this.driver.wait(until.elementLocated(By.xpath(messageXPath)), 10000);
    const messageText = await messageElement.getText();
    if (messageText !== "Select columns to export") {
        throw new Error('Message "Select columns to export" not found');
    }
});

// Verify message text
Then('I should see a message {string}', async function (message) {
  for (let loop = 100; loop > 0; loop--) {
      await driver.manage().setTimeouts({ pageLoad: 300 });
      let pageSource = await driver.getPageSource();
      let check = pageSource.includes(message); 
      assert.ok(check, 'passed');
    }
});

// Verify message text
Then('I should see a message {string}', async function (message) {
    for (let loop = 100; loop > 0; loop--) {
        await driver.manage().setTimeouts({ pageLoad: 300 });
        let pageSource = await driver.getPageSource();
        let check = pageSource.includes(message); 
        assert.ok(check, 'passed');
      }
  });

  //Search  
When('I click on the "Search" bar', async function () {
    this.searchBar = await this.driver.findElement(By.id('search-value'));
    await this.searchBar.click();
});

When('I enter text as {string}', async function (details) {
    if (!this.searchBar) {
        this.searchBar = await this.driver.findElement(By.id('search-value'));
    }
    await this.searchBar.sendKeys(details);
});

Then('I should see the search detail {string}', async function (details) {
    const searchResult = await driver.findElement(By.xpath(`//*[contains(text(), '${details}')]`));
    const text = await searchResult.getText();
    if (text !== details) {
        throw new Error(`Expected to see text "${details}", but saw "${text}"`);
    }
});