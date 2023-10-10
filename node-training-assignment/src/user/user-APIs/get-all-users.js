const express = require('express');
const getAllUsersController = require('../user-controller/get-all-users');

const router = express.Router();

router.get('/', getAllUsersController.getAllUsers);

module.exports = router;
