const express = require('express');
const getUserByEmailController = require('../user-controller/get-user-by-email');

const router = express.Router();

router.get('/:userEmail', getUserByEmailController.getUserByEmail);

module.exports = router;
