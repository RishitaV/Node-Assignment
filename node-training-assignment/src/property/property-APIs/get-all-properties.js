const express = require('express');
const getAllPropertyController = require('../property-controller/get-all-property');
const router = express.Router();
router.get('/:userId/properties', getAllPropertyController.getAllProperty);

module.exports = router;