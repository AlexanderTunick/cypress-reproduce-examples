const { get } = require('lodash');

// const marketplace = require('klickly/utils/marketplace');
const dashboard = require('./dashboard');
// const admin = require('klickly/utils/admin');
// const store = require('klickly/utils/shopify');
// const widget = require('klickly/utils/widget');
// const common = require('klickly/utils/common');
// const dataShopify = require('klickly/utils/shopifyData');
// const dataApp = require('klickly/utils/appData');

const getConfigValue = (path, cfgPath, byDefault = null) => {
    return get(Cypress.env(path), cfgPath, byDefault);
};

module.exports = { getConfigValue, dashboard };
