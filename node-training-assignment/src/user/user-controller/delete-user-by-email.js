const userMongo = require('../user-mongo');

exports.deleteUserByEmail = async (req, res) => {
  const userEmail = req.params.userEmail;
  try {
    const deletedUser = await userMongo.deleteUserByEmail(userEmail);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).send();
  } catch (error) {
    res.status(500).json({ error: 'Could not delete the user' });
  }
};