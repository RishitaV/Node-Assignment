const getAllUsersUseCase = require('../user-use-case/get-all-users-use-case');

exports.getAllUsers = async (req, res) => {
  try {
    const { users, isAuthenticated } = await getAllUsersUseCase.execute(req);
    if (!users) {
      return res.status(404).json({ error: 'Users not found' });
    }
    if (isAuthenticated) {
      res.status(200).json(users);
    } else {
      res.send('Unauthorized access. Please log in.');
    }
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching the users' });
  }
};