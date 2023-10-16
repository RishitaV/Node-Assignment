const updateUserUseCase = require('../user-use-case/update-user-by-email-use-case');

exports.updateUserByEmail = async (req, res) => {
  try {
    const updatedUser = await updateUserUseCase.execute(req);
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Could not update the user' });
  }
};