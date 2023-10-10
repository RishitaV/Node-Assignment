const express = require('express');
const updatePropertyByPropertyNumberController = require('../property-controller/update-property-by-property-number');

const router = express.Router();
router.put('/:userId/:propertyNumber', updatePropertyByPropertyNumberController.updatePropertyByPropertyNumber);

module.exports = router;