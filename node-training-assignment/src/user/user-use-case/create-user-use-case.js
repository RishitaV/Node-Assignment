const userMongo = require('../user-mongo');

exports.execute = async (userData) => {
    const { userName } = userData;
    const newUser = await userMongo.createUser(userData);
    return {userName, newUser};
};