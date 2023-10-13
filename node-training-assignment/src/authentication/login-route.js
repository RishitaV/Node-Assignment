const express = require('express');
const loginController = require('./auth-controller/login-controller');
const router = express.Router();

router.post('/login', loginController.loginCintroller);

module.exports = router;
