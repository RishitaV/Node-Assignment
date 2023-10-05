const express = require('express');
const userController = require('../user/controller');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/:userEmail', userController.getUserByEmail);
router.get('/', userController.getAllUsers);
router.put('/:userEmail', userController.updateUserByEmail);
router.delete('/:userEmail', userController.deleteUserByEmail);

module.exports = router;
