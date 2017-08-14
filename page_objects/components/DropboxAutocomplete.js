const Element = require('./../BaseElement');

class DropboxAutocomplete extends Element {
    constructor(rootElement) {
        super(rootElement);

        this.searchInput = this.rootElement.$('#ss');
        this.searchListItem = this.rootElement.$('li[class~="c-autocomplete__item"]');
    }

    setDestination(destination) {
        return protractor.promise.consume(function *() {
            yield this.searchInput.sendKeys(destination);
            yield browser.wait(EC.visibilityOf(this.searchListItem), 5000, 'Search list item is not present and visible');
            yield this.searchListItem.click();
        }, this);
    };
}

module.exports = DropboxAutocomplete;