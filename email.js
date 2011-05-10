// To use this, create a config.js that exports mailchimpApiKey.

var MailChimpAPI = require('mailchimp').MailChimpAPI;
var apiKey = require('./config').mailchimpApiKey;

var api;
try { 
    api = new MailChimpAPI(apiKey, { version : '1.3', secure : false });
} catch (error) {
    console.log('Error: ' + error);
}

