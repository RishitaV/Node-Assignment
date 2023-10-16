const request = require('supertest');
const mongoose = require('../../db');
const app = require('../../server');

const response = app.get('/users', function (req, res) {
  res.status(200);
});

request(app)
  .get('/users')
  .expect(200)
  .end((error, response) => {
    if (error) throw error;
  });

request(app)
  .get('/users/all')
  .expect(404)
  .end((error, response) => {
    if (error) throw error;
  });