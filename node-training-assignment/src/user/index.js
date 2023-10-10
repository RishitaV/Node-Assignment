const createUser = require('./user-APIs/create-property');
const getAllUsers = require('./user-APIs/get-all-users');
const getUserByEmail = require('./user-APIs/get-user-by-email');
const updateUser = require('./user-APIs/update-user-by-email');
const deleteUser = require('./user-APIs/delete-user-by-email');

module.exports = [
    createUser,
    getAllUsers,
    getUserByEmail,
    updateUser,
    deleteUser,
];