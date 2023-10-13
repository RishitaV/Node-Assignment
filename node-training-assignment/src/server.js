
require('dotenv').config();
const express = require('express');
const userRoutes = require('./user/index');
const propertyRoutes = require('./property/index');
const sessionMiddleware = require('./authentication/middleware/session');
const loginRoutes = require('./authentication/login-route');
const logoutRoutes = require('./authentication/logout-route');

const app = express();
console.log('express');
app.use(express.json());

app.use('/users', userRoutes);
app.use('/users', propertyRoutes);
app.use(sessionMiddleware);
app.use(loginRoutes)
app.use(logoutRoutes)


module.exports = app;
