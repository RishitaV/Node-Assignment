exports.logoutController = async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(500).json({ error: 'Error logging out' });
        } else {
            res.status(200).json({ message: 'Logout successful' });
        }
    });
}