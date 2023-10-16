const findUserUseCase = require('../../authentication/use-case/find-user-use-case');

exports.loginController = async (req, res) => {
    const registeredUser = await findUserUseCase.execute(req.body);
    if (registeredUser) {
        req.session.user = registeredUser;
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
}