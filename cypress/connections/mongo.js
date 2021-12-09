
const { ioc } = require('@adonisjs/fold');
const mongoose = ioc.use('Lib/Mongoose');

let contentConnection;

ioc.singleton('Model/Job', () => {
    const JobsSchema = new mongoose.Schema({
        delay: { type: Date },
        enqueued: { type: Date },
        'params.campaign.account': { type: mongoose.Schema.Types.ObjectId }
    }, { strict: false });
    return mongoose.model('Job', JobsSchema);
});

ioc.singleton('Model/PromotionStats', () => {
    return mongoose.model('PromotionStats', {});
});

// returns connection instance
ioc.singleton('ModelContent/Offer', () => {
    return contentConnection.model('Offer', {});
});


// returns connection instance
const connect = (uri) => {
    return mongoose.connect(uri, {
        autoReconnect: true,
        useNewUrlParser: true,
        useMongoClient: true
    });
};

const getContentConnect = async(uri) => {
    if (contentConnection) {
        return contentConnection;
    }

    contentConnection = await mongoose.createConnection(uri, {
        autoReconnect: true,
        useNewUrlParser: true,
        useMongoClient: true
    });

    return contentConnection;
};

module.exports = {
    connect,
    getContentConnect
};
