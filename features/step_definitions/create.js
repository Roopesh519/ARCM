const assert = require('assert'); 
const { Before, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, Key, Builder, until, Select } = require('selenium-webdriver');
const { faker } = require('@faker-js/faker');


setDefaultTimeout(60 * 1000);



