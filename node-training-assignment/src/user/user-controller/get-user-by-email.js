const getUserByUserEmailUseCase = require('../user-use-case/get-user-by-email-use-case');

exports.getUserByEmail = async (req, res) => {
  try {
    const user = await getUserByUserEmailUseCase.execute(req);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching the user' });
  }
};