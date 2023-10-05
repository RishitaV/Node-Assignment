const express = require('express');
const app = express();

app.use(express.json());

const userRoutes = require('./userRoutes');
app.use('/users', userRoutes);

module.exports = app;

