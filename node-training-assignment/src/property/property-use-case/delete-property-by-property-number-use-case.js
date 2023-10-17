const mongo = require('../property-mongo');
const { getEmailAndSendEmail } = require('../../services/email-service');

exports.execute = async (req) => {
    await getEmailAndSendEmail();
    const property = await mongo.deletePropertyByPropertyNumber(req);
    return property;
}