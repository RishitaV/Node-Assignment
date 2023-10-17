const {findUser} = require('../../user/user-mongo');

exports.execute = async (userData) => {
    const { userName, userPassword } = userData;
    const user = await findUser({ userName, userPassword });
    return user;
}