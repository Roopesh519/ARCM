const assert = require('assert');
const { BeforeAll, AfterAll, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, Key, Builder, until } = require('selenium-webdriver');

setDefaultTimeout(60 * 1000);

