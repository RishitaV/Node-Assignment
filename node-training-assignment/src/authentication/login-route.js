const express = require('express');
const User = require('../user/user-model');
const Session = require('./middleware/session-model');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { userName, userPassword } = req.body;
  const user = await User.findOne({ userName, userPassword });
  if (user) {
    const user = await Session.create({ userName, userPassword });
    req.session.user = user;
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;
