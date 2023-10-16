const createPropertyUseCase = require('../property-use-case/create-property-use-case');

exports.createProperty = async (req, res) => {
    try {
        const newProperty = await createPropertyUseCase.execute(req);
        res.status(200).json(newProperty);
    } catch (error) {
        res.status(500).json({ error: 'Could not create the user' });
    }
}