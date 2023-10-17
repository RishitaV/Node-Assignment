const mongo = require('../property-mongo');

exports.updatePropertyByPropertyNumber = async (req, res) => {
    try {
        const property = await mongo.updatePropertyByPropertyNumber(req);
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the properties' });
    }
}