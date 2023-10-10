const express = require('express');
const deletePropertyByPropertyNumberController = require('../property-controller/delete-property-by-property-number');

const router = express.Router();
router.delete('/:userId/:propertyNumber', deletePropertyByPropertyNumberController.deletePropertyByPropertyNumber);

module.exports = router;