const mongo = require('../property-mongo');
const { getEmailAndSendEmail } = require('../../services/email-service');

exports.deletePropertyByPropertyNumber = async (req, res) => {
    try {
        const property = await mongo.deletePropertyByPropertyNumber(req);
        getEmailAndSendEmail();
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the properties' });
    }
}