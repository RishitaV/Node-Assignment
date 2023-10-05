const mongoose = require('mongoose');
const express = require('express');
const userRoutes = require('./user/userRoutes');

const dbConnectionString = 'mongodb://localhost:27017/Users';
const app = express();
const port = 3000;

mongoose.connect(dbConnectionString, {
    useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
db.once('open', async () => {
    console.log('Connected to MongoDB', await mongoose.connection.db.listCollections().toArray());
});

app.use(express.json());

app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
