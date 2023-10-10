const express = require('express');
const deleteUserByEmailController = require('../user-controller/delete-user-by-email');

const router = express.Router();

router.delete('/:userEmail', deleteUserByEmailController.deleteUserByEmail);

module.exports = router;
