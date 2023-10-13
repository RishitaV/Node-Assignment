const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userPassword: { type: String, required: true },
});

const Session = mongoose.model('session', sessionSchema);

module.exports = Session;
