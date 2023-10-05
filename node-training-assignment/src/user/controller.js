const User = require('../user/userModel');

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Could not create the user' });
  }
};

exports.getUserByEmail = async (req, res) => {
  try {
    const user = await User.findOne({ userEmail: req.params.userEmail });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching the user' });
  }
};