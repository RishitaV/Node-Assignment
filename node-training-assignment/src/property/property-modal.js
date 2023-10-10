const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    propertyName: String,
    propertyType: String,
    propertyDescription: String,
    propertyAddress: String,
    propertyNumber: String,
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User,'
    },
});

module.exports = mongoose.model('Property', propertySchema);