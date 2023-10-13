const express = require('express');
const User = require('../user/user-model');
const Session = require('./middleware/session-model');
const router = express.Router();

router.delete('/logout/:sessionId', async (req, res) => {
    try {
        const session = await Session.findByIdAndDelete(req.params.sessionId);
        res.status(200).json(session);
    } catch (err) {
        res.status(500).json({ error: 'Could not delete the session' });
    }
});

module.exports = router;
