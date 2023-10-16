const userMongo = require('../user-mongo');

exports.execute = async (req) => {
    const user = await userMongo.findUserByEmail(req.params.userEmail);
    return user;
};