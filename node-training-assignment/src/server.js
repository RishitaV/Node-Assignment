
require('dotenv').config();
const express = require('express');
const userRoutes = require('./user/index');
const propertyRoutes = require('./property/index');
const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/users', propertyRoutes);

module.exports = app;
