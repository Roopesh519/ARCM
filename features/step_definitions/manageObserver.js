const assert = require('assert'); 
const { Before, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, Key, Builder, until, Select} = require('selenium-webdriver')
const { faker } = require('@faker-js/faker');


When('I navigate to manage observer page', async function () {
  // Navigate to the observers list page
  await this.driver.get('URL_OF_OBSERVERS_LIST_PAGE'); // Replace with your actual observers list page URL
  await this.driver.wait(until.elementLocated(By.css('.table')), 5000); // Adjust as necessary
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
  const rows = await this.driver.findElements(By.css('.table tbody tr'));
  expect(rows.length).to.be.greaterThan(0);
});

Then('I should see a total number of records displayed at the bottom', async function () {
  // Verify the total number of records
  const totalRecordsElement = await this.driver.findElement(By.xpath("//*[contains(text(), 'Total Number of Records')]"));
  expect(await totalRecordsElement.isDisplayed()).to.be.true;
  const totalRecordsText = await totalRecordsElement.getText();
  expect(totalRecordsText).to.match(/Total Number of Records:\d+/);
});
