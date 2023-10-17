const userMongo = require('../user-mongo');

exports.execute = async (req) => {
    const userEmail = req.params.userEmail;
    const deletedUser = await userMongo.deleteUserByEmail(userEmail);
    return deletedUser;
};