const SearchReultsPage = require('./../main/SearchResultsPage');

let searchResultsPage = new SearchReultsPage();

let SearchResultsSteps = {
    * iSeeAtLeastOneSearchResultReturned(){
        let actualSearchResultsNumber = yield searchResultsPage.searchResultsNumber;
        expect(actualSearchResultsNumber > 0).to.be.equal(true);
    },

    * iSeeEachResultContainGivenLocation(location){
        let allSearchResultsContainGivenLocation = yield searchResultsPage.allSearchResultsContainGivenLocation(location);
        expect(allSearchResultsContainGivenLocation).to.be.equal(true);
    }
};

module.exports = SearchResultsSteps;