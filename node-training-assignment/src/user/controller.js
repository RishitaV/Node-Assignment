const userMongo = require('./mongo');

exports.createUser = async (req, res) => {
  try {
    const newUser = await userMongo.createUser(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Could not create the user' });
  }
};

exports.getUserByEmail = async (req, res) => {
  try {
    const user = await userMongo.findUserByEmail(req.params.userEmail);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching the user' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const user = await userMongo.findAllUser();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching the user' });
  }
};

exports.updateUserByEmail = async (req, res) => {
  const userEmail = req.params.userEmail;

  try {
    const updatedUser = await userMongo.updateUserByEmail(userEmail , req.body);
      console.log(updatedUser);
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Could not update the user' });
  }
};

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