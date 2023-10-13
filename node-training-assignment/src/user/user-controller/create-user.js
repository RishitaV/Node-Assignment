const userMongo = require('../user-mongo');
exports.createUser = async (req, res) => {
  try {
    const { userName } = req.body;
    if (!userName) {
        return res.status(400).json({ error: 'userName is required field' });
    }
    const newUser = await userMongo.createUser(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Could not create the user' });
  }
};