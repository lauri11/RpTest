const Element = require('./../BaseElement');
const MonthTable = require('./MonthTable');

class DatePicker extends Element {
    constructor(rootElement) {
        super(rootElement);
        this.monthTableSelector = '.c2-month-table';
    }

    setDate(date) {
        return protractor.promise.consume(function *() {
            let visibleMonths = this.visibleMonths;
            let leftMonthHeaderDate = yield visibleMonths.leftMonth.headerMonthAndYearDate;
            let rightMonthHeaderDate = yield visibleMonths.rightMonth.headerMonthAndYearDate;

            if (date.isSame(leftMonthHeaderDate, 'month')) {
                return visibleMonths.leftMonth.setDay(date.date());
            } else if (date.isSame(rightMonthHeaderDate, 'month')) {
                return visibleMonths.rightMonth.setDay(date.date());
            } else {
                throw `Given date ${date} is not displayed`;
            }
        }, this);
    }

    get visibleMonths() {
        let visibleMontsElements = this.rootElement.$$(this.monthTableSelector)
            .filter(element => {
                return element.isDisplayed();
            });

        return {
            leftMonth: new MonthTable(visibleMontsElements.get(0)),
            rightMonth: new MonthTable(visibleMontsElements.get(1))
        }
    }
}

module.exports = DatePicker;