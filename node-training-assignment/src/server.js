
require('dotenv').config();
const express = require('express');
const userRoutes = require('./user/index');
const propertyRoutes = require('./property/index');
const loginRoutes = require('./authentication/login-route');
const logoutRoutes = require('./authentication/logout-route');
const sessionMiddleware = require('./authentication/middleware/session')
const app = express();
app.use(express.json());
app.use(sessionMiddleware);
app.use('/users', userRoutes);
app.use('/users', propertyRoutes);
app.use(loginRoutes);
app.use(logoutRoutes);

module.exports = app;
