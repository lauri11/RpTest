exports.config = {
    directConnect: true,

    seleniumAddress: 'http://localhost:4444/wd/hub',

    baseUrl: 'https://www.booking.com',

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--disable-infobars'
            ],
            prefs: {
                // disable chrome's annoying password manager
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    },

    framework: 'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        './../features/*.feature'
    ],

    cucumberOpts: {
        require: ['./../step_definitions/*.js'],
        tags: [],
        format: 'pretty'
    },

    params: {
        cucumberStepTimeout: 50 * 1000,
    },

    onPrepare: function () {
        let GLOBALS = require('./GLOBALS');
        GLOBALS();
        browser.manage().window().maximize(); // maximize the browser before executing the feature files
        browser.ignoreSynchronization = true;
    }
};