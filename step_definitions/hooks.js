const hooks = function () {
    this.setDefaultTimeout(browser.params.cucumberStepTimeout);
};

module.exports = hooks;