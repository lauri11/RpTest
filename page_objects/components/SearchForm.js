const Element = require('./../BaseElement');
const DatePicker = require('./DatePicker');
const DropboxAutocomplete = require('./DropboxAutocomplete');

class SearchForm extends Element {
    constructor(rootElement){
        super(rootElement);

        this.searchAutocompleteContainer = this.rootElement.$('div[class~="c-autocomplete"]');
        this.checkinDateInput = this.rootElement.$('div[data-mode="checkin"]');
        this.checkoutDateInput = this.rootElement.$('div[data-mode="checkout"]');
        this.checkinDatePickerDiv = this.rootElement.$('.--checkin-field .c2-calendar');
        this.checkoutDatePickerDiv = this.rootElement.$('.--checkout-field .c2-calendar');
        this.submitButton = this.rootElement.$('[class~="sb-searchbox__footer"] button[type="submit"]');
    }

    get searchAutocomplete(){
        return new DropboxAutocomplete(this.searchAutocompleteContainer);
    }

    get checkinCalendar(){
        return this.getGivenCalendar(this.checkinDatePickerDiv, this.checkinDateInput);
    }

    get checkoutCalendar(){
        return this.getGivenCalendar(this.checkoutDatePickerDiv, this.checkoutDateInput);
    }

    getGivenCalendar(datePickerElement, dateInput){
        return protractor.promise.consume(function *() {
            if(!(yield datePickerElement.isPresent())) {
                yield dateInput.click();
            }

            yield browser.wait(EC.visibilityOf(datePickerElement), 5000);
            return new DatePicker(datePickerElement);
        }, this);
    }

    submitForm(){
        return this.submitButton.click().then(() => browser.sleep(2000));
    }
}

module.exports = SearchForm;