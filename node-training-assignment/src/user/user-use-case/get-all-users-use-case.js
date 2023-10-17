const userMongo = require('../user-mongo');

exports.execute = async (req) => {
    const users = await userMongo.findAllUser();
    const isAuthenticated = req.session && req.session.user;
    return { users, isAuthenticated };
};