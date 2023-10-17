const connectMongoDBSession = require('connect-mongodb-session');
const session = require('express-session');
const MongoDBStore = connectMongoDBSession(session);

var store = new MongoDBStore({
  uri: process.env.DB_URL,
  collection: 'mySessions'
});

const sessionMiddleware = session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  store: store,
  cookie: { secure: false },
});

module.exports = sessionMiddleware;