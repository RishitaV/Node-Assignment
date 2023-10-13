const express = require('express');
const logoutController = require('./auth-controller/logout-controller')
const router = express.Router();

router.post('/logout', logoutController.logoutController);

module.exports = router;
