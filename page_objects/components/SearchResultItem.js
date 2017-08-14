const Element = require('./../BaseElement');

class SearchResultItem extends Element {
    constructor(rootElement) {
        super(rootElement);

        this.locationLink = rootElement.$('div[class="address"] > a[class~="district_link"]');
    }

    get locationText() {
        return browser.wait(EC.presenceOf(this.locationLink), 5000)
            .then(() => this.locationLink.getText());
    }
}

module.exports = SearchResultItem;