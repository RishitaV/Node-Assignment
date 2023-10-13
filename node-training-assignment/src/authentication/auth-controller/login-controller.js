const {findUser} = require('../../user/user-mongo');

exports.loginCintroller = async (req, res) => {
    const { userName, userPassword } = req.body;
    const user = await findUser({ userName, userPassword });
    if (user) {
        req.session.user = user;
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
}