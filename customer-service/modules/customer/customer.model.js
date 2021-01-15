(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;
    /*hola estoy modificando bobadas para subirlas al repo*/
    var CustomerSchema = new Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        address: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    });

    module.exports = mongoose.model('customers', CustomerSchema);
})();