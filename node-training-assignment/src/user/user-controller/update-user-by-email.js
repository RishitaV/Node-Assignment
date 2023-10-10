const userMongo = require('../user-mongo');

exports.updateUserByEmail = async (req, res) => {
  const userEmail = req.params.userEmail;

  try {
    const updatedUser = await userMongo.updateUserByEmail(userEmail , req.body);
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Could not update the user' });
  }
};