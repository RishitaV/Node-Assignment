const mongo = require('../property-mongo');

exports.execute = async (req, res) => {
    const property = await mongo.updatePropertyByPropertyNumber(req);
    return property;
}