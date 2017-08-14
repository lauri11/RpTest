const BaseElement = require('./../BaseElement');
const SearchForm = require('./../components/SearchForm');

class MainPage extends BaseElement {
    constructor(){
        super($('#bodyconstraint'));

        this.searchFormId = $('#frm');
    }

    get searchFormComponent (){
        return new SearchForm(this.searchFormId);
    }
}

module.exports = MainPage;