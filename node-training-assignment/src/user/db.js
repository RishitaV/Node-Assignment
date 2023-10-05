const mongoose = require('mongoose');

const dbConnectionString = 'mongodb://localhost:27017/Users';

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
