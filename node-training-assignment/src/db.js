require('dotenv').config();
const mongoose = require('mongoose');

const dbConnectionString = process.env.DB_URL;

mongoose.connect(dbConnectionString, {
    useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.once('open', async () => {
    console.log('Connected to MongoDB');
});

module.exports = mongoose;
