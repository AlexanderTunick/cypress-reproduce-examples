const {getConfigValue} = require('../klickly/utils');
const email = getConfigValue('dashboard', 'klicklyEmail');
const pass = getConfigValue('dashboard', 'klicklyPassword');
const shopifyStore = `${Cypress.env('shopify').store}`;

describe('my first test', function () {
    beforeEach(() => {
        // cy.login(email, pass)
    });

    it('Reproducible case', () => {
        /*
        Run this url in the context of Cypress and separately in Chrome incognito
        In Chrome incognito:
        1) https://analytics-api.klickly-dev.com/hash is fired
        2) console.log output from application
        In Cypress:
        1) is not fired
        2) console.log is absent
        * */
        cy.visit('https://widget.klickly-dev.com/?updateCache=true&brandId=6113d4c4339e433301679bae');
    });

})
