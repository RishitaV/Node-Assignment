const getAllPropertyUseCase = require('../property-use-case/get-all-property-use-case');

exports.getAllProperty = async (req, res) => {
    try {
        const newProperty = await getAllPropertyUseCase.execute(req);
        res.status(200).json(newProperty);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the properties' });
    }
}