const mongo = require('../property-mongo');

exports.deletePropertyByPropertyNumber = async (req, res) => {
    try {
        const property = await mongo.deletePropertyByPropertyNumber(req);
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the properties' });
    }
}