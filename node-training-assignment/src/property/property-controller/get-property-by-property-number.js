const getPropertyByPropertyNumberUseCase = require('../property-use-case/get-property-by-property-number-use-case');

exports.getPropertyByPropertyNumber = async (req, res) => {
    try {
        const property = await getPropertyByPropertyNumberUseCase.execute(req);
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the properties' });
    }
}