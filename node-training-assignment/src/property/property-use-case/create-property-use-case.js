const mongo = require('../property-mongo');

exports.execute = async (req) => {
    const newProperty = await mongo.createProperty(req.body);
    return newProperty;
}