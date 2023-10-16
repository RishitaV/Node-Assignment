const mongo = require('../property-mongo');

exports.execute = async (req) => {
    const newProperty = await mongo.getAllProperty(req);
    return newProperty
}