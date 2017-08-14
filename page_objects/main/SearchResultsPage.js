const MainPage = require('./MainPage');
const SearchResultItem = require('./../components/SearchResultItem');

class SearchResultsPage extends MainPage {
    constructor() {
        super();

        this.searchResultsElementsList = () => $$('.sr_item');
    }

    get searchResultsNumber() {
        return this.searchResultsElementsList().count();
    }

    allSearchResultsContainGivenLocation(location) {
        return this.searchResultsElementsList()
            .map((element) => {
                return new SearchResultItem(element).locationText;
            })
            .then(locationValArr => {
                return locationValArr.every(locationText => locationText.includes(location));
            });
    }
}

module.exports = SearchResultsPage;