const express = require('express');
const updateUserByEmailController = require('../user-controller/update-user-by-email');

const router = express.Router();

router.put('/:userEmail', updateUserByEmailController.updateUserByEmail);

module.exports = router;
