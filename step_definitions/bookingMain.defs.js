let bookingMainSteps = require('./../page_objects/steps/bookingMain.steps.js');

module.exports = function () {
    this.Given(/^I set (.*) as destination in the Search form of Booking main page$/, bookingMainSteps.iSetGivenDestination);
    this.Given(/^I set (.*) as check\-in date$/, bookingMainSteps.setCheckinDate);
    this.Given(/^I set (.*) plus (.*) days as check\-out date$/, bookingMainSteps.setCheckoutDate);
    this.When(/^I submit the Search form$/, bookingMainSteps.iSubmitSearchForm);
};