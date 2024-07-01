const assert = require('assert'); 
const { Before, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, Key, Builder, until, Select} = require('selenium-webdriver')
const { faker } = require('@faker-js/faker');


// Navigate to the login page
Given('I am on the login page', async function () {
  await this.driver.get('https://cs0275-dev-organization.accessibleremotecaremanagement.net/');
  await new Promise(resolve => setTimeout(resolve, 500));
  await this.driver.wait(until.elementLocated(By.xpath('//*[text()="Login"]')));
});


// Enter username
When('I enter my username as {string}', async function (email) {
  const emailInput = await driver.wait(until.elementLocated(By.id('userName')));
  await emailInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
  await emailInput.sendKeys(email);
});


// Enter password
When('I enter my password as {string}', async function (password) {
  const passwordInput = await driver.wait(until.elementLocated(By.id('passWord')));
  await passwordInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
  await passwordInput.sendKeys(password);
});


// Click on the specified button
When('I click on the {string} button', async function (button) {
  let buttonElement;
  switch(button) {
      case 'login':
          buttonElement = await this.driver.wait(until.elementLocated(By.id('login')));
          break;
      case 'Select Preference':
          buttonElement = await this.driver.wait(until.elementLocated(By.css('[data-testid="select-device-btn"]')));
          break;
      case 'send':
          buttonElement = await this.driver.wait(until.elementLocated(By.id('add_admin')));
          break;
      case 'verify otp':
          buttonElement = await this.driver.wait(until.elementLocated(By.id('otp-form')));
          break;
      case 'No, I dont':
          buttonElement = await this.driver.wait(until.elementLocated(By.id('cancel')));
          break;
      case 'Cancel':
          buttonElement = await this.driver.wait(until.elementLocated(By.id('Cancel')));        
          break;
      case 'Resend OTP':
          buttonElement = await this.driver.wait(until.elementLocated(By.xpath('//*[(contains(text(), "Resend OTP")]')));        
          break;
      case 'Forgot password':
        buttonElement = await this.driver.wait(until.elementLocated(By.id('forgot')));  
          break;      
      case 'Request Reset Link':
        buttonElement = await this.driver.wait(until.elementLocated(By.id('reset_link')));        
          break;
          
      default:
          console.log('Invalid button string');
          return; 
  }
  await buttonElement.click();
});


Then('I navigate to login page', async function () {
  await this.driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Login")]')));
});


Then('I should see a a dialog box to select preference for otp verification ', async function () {
  const dialog = await this.driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Verify your Identity")]')));
});


When('I select my Preference', async function () {
  const selectElement = await this.driver.wait(until.elementLocated(By.css('[data-testid="device_template"]'))).click();
});


Then('I see otp verification page', async function () {
  const window = await this.driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "OTP Verification")]')));
});


When('I enter otp as {string}', async function (otp) {
  const otpDigits = otp.split('');
  for (let i = 0; i < otpDigits.length; i++) {
    const otpInput = await this.driver.wait(until.elementLocated(By.id(i.toString())));
    await otpInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await otpInput.sendKeys(otpDigits[i]);
  }
});


Then('I see a message Do you want to trust this browser', async function () {
  const trustMessage = await this.driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Do you want to trust this browser")]')));
  assert(trustMessage !== null);
});


// Verify navigation to profile page
Then('I navigate to profile page', async function () {
  await this.driver.wait(until.urlContains('profile'), 5000);
  const currentUrl = await this.driver.getCurrentUrl();
  expect(currentUrl).to.include('profile');
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


Then('I see Verify OTP button disabled', async function () {
  const button = await driver.findElement(By.id('otp-form'));
  const isDisabled = await button.getAttribute('disabled');
  assert.strictEqual(isDisabled, 'true', `Expected button with id ${buttonId} to be disabled`);
});


When('I click the button with text {string}', async function (buttonText) {
  const button = await driver.findElement(By.xpath(`//button[span[text()='${buttonText}']]`));
  await button.click();
});

Then('I am on the forgot password page', async function () {
  await this.driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Forgot Password")]')));
});

Then('The Request Reset Link button is disabled', async function () {
  const button = await driver.findElement(By.id('reset_link'));
  const isDisabled = await button.getAttribute('disabled');
  assert.strictEqual(isDisabled, 'true', `Expected button with id ${buttonId} to be disabled`);
});

When('I enter my username as', async function () {
  const userNameInput = await driver.wait(until.elementLocated(By.id('userName')));
  await userNameInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE); 
  await userNameInput.sendKeys('roopesh.yadava'); 
});

Then('I see a message {string}', async function (message) {
  let messageElement;
  switch(message) {
      case 'Do you want to trust this browser':
          messageElement = await this.driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Do you want to trust this browser")]')));
          break;
      case 'Password reset link has been sent to your registered email address':
          messageElement = await this.driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Password reset link has been sent to your registered email address")]')));
          break;
      default:
          console.log('Invalid message string');
          return;
  }
  assert(messageElement !== null, `Message "${message}" not found on the page`);
});

//Then('I see a message "Invalid username"', async function () {
//  const errorMessage = await this.driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Invalid username")]')));
//  assert(errorMessage !== null, 'Expected "Invalid username" message not found on the page');
//});

//Then('I see a message "Password reset link has been sent to your registered email address"', async function () {
// const resetMessage = await this.driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Password reset link has been sent to your registered email address")]')));
//  assert(resetMessage !== null, 'Expected "Password reset link has been sent to your registered email address" message not found on the page');
//});


When('I enter my username as "roopesh.yadava@7edge.com"', async function () {
  const userNameInput = await driver.wait(until.elementLocated(By.id('userName')));
  await userNameInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE); 
  await userNameInput.sendKeys('roopesh.yadava@7edge.com'); 
});

 



