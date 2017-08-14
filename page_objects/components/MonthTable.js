const Element = require('./../BaseElement');
const moment = require('moment');

class MonthTable extends Element {
    constructor(rootElement) {
        super(rootElement);
        this.monthAndYearHeader = this.rootElement.$('tr[class="c2-month-header"]>th');
        this.daySpan = this.rootElement.$$('.c2-day-inner');
    }

    setDay(dayNumber) {
        return this.daySpan.filter(el => {
            return el.getText()
                .then(text => {
                    return text == dayNumber;
                });
        }).first().click();
    }

    get headerMonthAndYearDate() {
        return this.monthAndYearHeader.getText()
            .then(text => {
                return moment(text, 'MMMM YYYY');
            });
    }

}

module.exports = MonthTable;