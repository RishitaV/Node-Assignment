const express = require('express');
const createUserCntroller = require('../user-controller/create-user');

const router = express.Router();

router.post('/', createUserCntroller.createUser);

module.exports = router;
