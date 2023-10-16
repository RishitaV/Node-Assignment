const createUserUseCase = require('../user-use-case/create-user-use-case');

exports.createUser = async (req, res) => {
  try {
    const { userName, newUser } = await createUserUseCase.execute(req.body);
    console.log(userName, newUser);

    if (!userName) {
        return res.status(400).json({ error: 'userName is required field' });
    }
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Could not create the user' });
  }
};