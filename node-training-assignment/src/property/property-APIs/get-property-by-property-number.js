const express = require('express');
const getPropertyByPropertyNumberController = require('../property-controller/get-property-by-property-number');

const router = express.Router();
router.get('/:userId/:propertyNumber', getPropertyByPropertyNumberController.getPropertyByPropertyNumber);

module.exports = router;