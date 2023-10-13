let mongoose = require("mongoose");
let Book = require('../user-model');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');
let mongoDB = require('../../db');

let should = chai.should();

chai.use(chaiHttp);

describe('Books', () => {

    describe('/POST book', () => {
        it('it should not POST a book without pages field', (done) => {
            let book = {
                userName: "The Lord of the Rings",
                userEmail: "J.R.R. Tolkien",
            }
            chai.request(server)
                .post('/users')
                .send(book)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        it('it should not POST a book without pages field', (done) => {
            let book = {
                userEmail: "J.R.R. Tolkien",
            };
            chai.request(server)
                .post('/users')
                .send(book)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });
        });

    });
});