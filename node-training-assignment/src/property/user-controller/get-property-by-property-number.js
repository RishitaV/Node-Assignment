const mongo = require('../property-mongo');

exports.getPropertyByPropertyNumber = async (req, res) => {
    try {
        const property = await mongo.getPropertyByPropertyNumber(req);
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the properties' });
    }
}