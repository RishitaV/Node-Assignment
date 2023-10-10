const express = require('express');
const createPropertyController = require('../property-controller/create-property');
const router = express.Router();
router.post('/:userId/:pName', createPropertyController.createProperty);

module.exports = router;