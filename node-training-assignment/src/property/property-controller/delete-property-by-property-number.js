const deletePropertyByPropertyNumberUseCase = require('../property-use-case/delete-property-by-property-number-use-case');

exports.deletePropertyByPropertyNumber = async (req, res) => {
    try {
        const property = await deletePropertyByPropertyNumberUseCase.execute(req);
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the properties' });
    }
}