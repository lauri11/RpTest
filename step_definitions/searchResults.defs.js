const searchResultsSteps = require('./../page_objects/steps/searchResults.steps');

module.exports = function () {
    this.Then(/^I see results returned from the search and displayed on the page$/,
        searchResultsSteps.iSeeAtLeastOneSearchResultReturned);
    this.Then(/^I see each result contain (.*) as location$/,
        searchResultsSteps.iSeeEachResultContainGivenLocation);
};