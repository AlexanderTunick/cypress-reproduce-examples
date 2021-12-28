const {getConfigValue} = require('../klickly/utils');
const email = getConfigValue('dashboard', 'klicklyEmail');
const pass = getConfigValue('dashboard', 'klicklyPassword');
const shopifyStore = `${Cypress.env('shopify').store}`;

describe.only('Example of rerunning tests and hooks with multi-domain', function () {
    let count = 1
    before(function () {
        cy.log(`before run times ${count++}`);
        cy.log(this);
    });

    it('Part 1 of the multi-domain test', function () {
        cy.visit('https://widget.klickly-dev.com/?updateCache=true');
        cy.log(`test 1 times ${count++}`);
        cy.log(this.test);
        this.parentValueToShare = 'valueToPass'; // value to pass to part 2
        cy.log(this.parentValueToShare);
    });

    it('Part 2 of the multi-domain test', function () {
        cy.visit('dev-may18-store.myshopify.com');
        cy.log(`test 2 times ${count++}`);
        cy.log(this.test);
        cy.log(this.parentValueToShare); // value to pass to part 2
    });
});
