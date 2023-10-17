const deleteUserUseCase = require('../user-use-case/delete-user-use-case');

exports.deleteUserByEmail = async (req, res) => {
  try {
    const deletedUser = await deleteUserUseCase.execute(req);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).send();
  } catch (error) {
    res.status(500).json({ error: 'Could not delete the user' });
  }
};