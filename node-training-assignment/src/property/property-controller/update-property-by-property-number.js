const updatePropertyByPropertyNumberUseCase = require('../property-use-case/update-property-by-property-number-use-case');

exports.updatePropertyByPropertyNumber = async (req, res) => {
    try {
        const property = await updatePropertyByPropertyNumberUseCase.execute(req);
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the properties' });
    }
}