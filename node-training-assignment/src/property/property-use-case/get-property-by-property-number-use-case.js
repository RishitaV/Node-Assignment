const mongo = require('../property-mongo');

exports.execute = async (req) => {
    const property = await mongo.getPropertyByPropertyNumber(req);
    return property;
}