const mongo = require('../property-mongo');

exports.createProperty = async (req, res) => {
    try {
        const newProperty = await mongo.createProperty(req.body);
        res.status(200).json(newProperty);
    } catch (error) {
        res.status(500).json({ error: 'Could not create the user' });
    }
}