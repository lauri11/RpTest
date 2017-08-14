const generalSteps = require('./../page_objects/steps/general.steps.js');

module.exports = function () {
    this.Given(/^I navigate to Booking main page$/, generalSteps.navigateToMainPage);
};