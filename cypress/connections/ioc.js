const { ioc } = require('@adonisjs/fold');
const mongoose = require('mongoose');

ioc.singleton('Lib/Mongoose', () => {
    return mongoose;
});
debugger;
ioc.use('Lib/Mongoose') === ioc.use('Lib/Mongoose')