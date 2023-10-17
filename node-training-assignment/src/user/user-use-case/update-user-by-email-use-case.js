const userMongo = require('../user-mongo');

exports.execute = async (req) => {
    const userEmail = req.params.userEmail;
    const updatedUser = await userMongo.updateUserByEmail(userEmail, req.body);
    return updatedUser;
};