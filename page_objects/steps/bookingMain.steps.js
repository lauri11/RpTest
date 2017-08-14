'use strict';
let MainPage = require('./../main/MainPage'),
    moment = require('moment');

let mainPage = new MainPage();

let BookingMainSteps = {
    iSetGivenDestination (destination) {
        return mainPage.searchFormComponent.searchAutocomplete.setDestination(destination);
    },

    * setCheckinDate (checkinDate) {
        if(checkinDate.toLowerCase() === 'today'){
            let checkinCalendar = yield mainPage.searchFormComponent.checkinCalendar;
            yield checkinCalendar.setDate(moment());
        }
    },

    * setCheckoutDate (checkoutDate, daysToAdd) {
        if(checkoutDate.toLowerCase() === 'today'){
            let checkoutCalendar = yield mainPage.searchFormComponent.checkoutCalendar;
            yield checkoutCalendar.setDate(moment().add(parseInt(daysToAdd), 'days'));
        }
    },

    iSubmitSearchForm (){
        return mainPage.searchFormComponent.submitForm();
    }
};

module.exports = BookingMainSteps;