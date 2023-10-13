const userMongo = require('../user-mongo');

exports.getAllUsers = async (req, res) => {
  try {
    const user = await userMongo.findAllUser();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (req.session && req.session.user) {
      res.status(200).json(user);
    } else {
      res.send('Unauthorized access. Please log in.');
    }
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching the user' });
  }
};