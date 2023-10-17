const createUser = require('./user-apis/create-user');
const getAllUsers = require('./user-apis/get-all-users');
const getUserByEmail = require('./user-apis/get-user-by-email');
const updateUser = require('./user-apis/update-user-by-email');
const deleteUser = require('./user-apis/delete-user-by-email');

module.exports = [
    createUser,
    getAllUsers,
    getUserByEmail,
    updateUser,
    deleteUser,
];