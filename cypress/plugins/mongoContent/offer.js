
const { ioc } = require('@adonisjs/fold');
const Offer = ioc.use('ModelContent/Offer');
const { get } = require('lodash');

module.exports = {
    mongoOfferObject(offerName) {
        return Offer.findOne({name: offerName}).lean().exec();
    },
    async mongoGetRandomUuid() {
        const offer = await Offer.findOne({}).lean().exec();
        return get(offer, 'uuid');
    },
    mongoGetOfferObjectByUuid(uuid) {
        return Offer.findOne({uuid}).lean().exec();
    },
    async mongoDeleteAllAutotestsOffers( ) {
        await Offer.deleteMany({ name: /Autotests/} );
        return null;
    }
};
