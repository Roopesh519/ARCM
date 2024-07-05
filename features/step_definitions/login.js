const assert = require('assert');
const { BeforeAll, AfterAll, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, Key, Builder, until } = require('selenium-webdriver');

setDefaultTimeout(60 * 1000);

let driver;

BeforeAll(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    global.driver = driver;
});


AfterAll(async function () {
    await driver.sleep(5000);
    await driver.quit();
});

Given('I am on the login page', async function () {
    await driver.get('https://cs0275-dev-organization.accessibleremotecaremanagement.net/');
    await new Promise(resolve => setTimeout(resolve, 500));
    await driver.wait(until.elementLocated(By.xpath('//*[text()="Login"]')));
});


When('I enter my username as {string}', async function (email) {
    const emailInput = await driver.wait(until.elementLocated(By.id('userName')));
    await emailInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await emailInput.sendKeys(email);
});

When('I enter my password as {string}', async function (password) {
    const passwordInput = await driver.wait(until.elementLocated(By.id('passWord')));
    await passwordInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await passwordInput.sendKeys(password);
});

When('I click on the {string} button', async function (button) {
    let buttonElement;
    switch (button) {
        case 'login':
            buttonElement = await driver.wait(until.elementLocated(By.id('login')));
            break;
        case 'Select Preference':
            buttonElement = await driver.wait(until.elementLocated(By.css('[data-testid="select-device-btn"]')));
            break;
        case 'send':
            buttonElement = await driver.wait(until.elementLocated(By.id('add_admin')));
            break;
        case 'verify otp':
            buttonElement = await driver.wait(until.elementLocated(By.id('otp-form')));
            break;
        case "No, I Don't":
            buttonElement = await driver.wait(until.elementLocated(By.id('Cancel')));
            break;
        case 'Cancel':
            buttonElement = await driver.wait(until.elementLocated(By.id('Cancel')));
            break;
        case 'Resend OTP':
            await driver.sleep(11000);
            buttonElement = await driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Resend OTP")]')));
            break;
        case 'Forgot password':
            await new Promise(resolve => setTimeout(resolve, 1000));
            buttonElement = await driver.wait(until.elementLocated(By.id('forgot')));
            break;
        case 'Request Reset Link':
            buttonElement = await driver.wait(until.elementLocated(By.id('reset_link')));
            break;
        case 'Back to Login':
            await new Promise(resolve => setTimeout(resolve, 1000));
            buttonElement = await driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Back to Login")]')));
            break;
        default:
            console.log('Invalid button string');
            return;
    }
    await buttonElement.click();
});

Then('I should see a dialog box to select preference for otp verification', async function () {
    const dialog = await driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Verify your Identity")]')));
    assert(dialog !== null);
});

When('I select my Preference', async function () {
    const selectElement = await driver.wait(until.elementLocated(By.css('[data-testid="device_template"]')));
    await selectElement.click();
});

Then('I see otp verification page', async function () {
    const window = await driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "OTP Verification")]')));
    assert(window !== null);
});

When('I enter otp as {string}', async function (otp) {
    const otpDigits = otp.split('');
    for (let i = 0; i < otpDigits.length; i++) {
        const otpInput = await driver.wait(until.elementLocated(By.id(i.toString())));
        await otpInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
        await otpInput.sendKeys(otpDigits[i]);
    }
});

Then('I should see a message Do you want to trust this browser', async function () {
    const trustMessage = await driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Do You Want to Trust This Browser?")]')));
    assert(trustMessage !== null);
});

Then('I navigate to profile page', async function () {
    await driver.wait(until.urlContains('profile'), 5000);
    const currentUrl = await driver.getCurrentUrl();
    assert(currentUrl.includes('profile'));
});

Then('I should see a message {string}', async function (message) {
    let check = false;
    let retries = 70;
    
    while (retries > 0) {
        let pageSource = await driver.getPageSource();
        check = pageSource.includes(message);
    
        if (check) {
            console.log("checked");
            return "passed";
        } else {
            console.log("else block");
            await new Promise((resolve) => setTimeout(resolve, 300));
            retries--;
        }
    }
    throw new Error("Failed");
});


Then('I navigate to login page', async function () {
    await driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Login")]')));
  });


  Then('I must navigate to Forgot Password page', async function () {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Forgot Password")]')));
  });


  Given('I am on the forgot password page', async function () {
    await driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Forgot Password")]')));
  });


  Then('The Request Reset Link button is disabled', async function() {
    const button = await driver.wait(until.elementLocated(By.id('reset_link')));
    const isDisabled = await button.getAttribute('disabled');
    assert.strictEqual(isDisabled, 'true', 'Expected button with id reset_link to be disabled');
});

  

  When('I enter wrong username', async function () {
    const userName = 'random@7edge.com';
    const userNameInput = await driver.wait(until.elementLocated(By.id('userName')));
    await userNameInput.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.DELETE);
    await userNameInput.sendKeys(userName);
  });


  Then('I see Verify OTP button disabled', async function () {
    const button = await driver.wait(until.elementLocated(By.id('otp-form')));
    const isDisabled = await button.getAttribute('disabled');
    assert.strictEqual(isDisabled, 'true', `Expected button with id ot-form to be disabled`);
  });


  // ------------------------------------------------------------------------------------------- //
