const mongo = require('../property-mongo');

exports.getAllProperty = async (req, res) => {
    try {
        const newProperty = await mongo.getAllProperty(req);
        res.status(200).json(newProperty);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the properties' });
    }
}