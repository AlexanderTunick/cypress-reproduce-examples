/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const dotenv = require('../dotenv');
const { ioc } = require('@adonisjs/fold');
require('../connections/ioc');
const MongoCampaign = require('./mongo/campaign');

// promisified fs module
const fs = require('fs-extra');
const path = require('path');
const { merge } = require('lodash');

function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve(__dirname, '..', 'configs', `${file}.json`);
    return fs.readJson(pathToConfigFile);
}

module.exports = async (on, config) => {
    const file = config.env.cfg || 'dev';
    const neededConfig = await getConfigurationByFile(file);

    dotenv.apply(file);

    // const mongoURI = process.env.MONGODB_URI;
    // const mongoContentURI = process.env.MONGODB_URI_CONTENT;
    //
    // if (mongoURI) {
    //     try {
    //         await mongo.connect(mongoURI);
    //     } catch (error) {
    //         console.log(error); // eslint-disable-line
    //     }
    // }
    // if (mongoContentURI) {
    //     try {
    //         await mongo.getContentConnect(mongoContentURI);
    //     } catch (error) {
    //         console.log(error); // eslint-disable-line
    //     }
    // }

    // on('task', MongoCampaign);
    // on('task', require('./mongoContent/offer'));
    on('task', {
        log (message) {
            console.log(message); // eslint-disable-line
            return null;
        }
    });

    return merge({ env: config.env }, neededConfig);
};
debugger;