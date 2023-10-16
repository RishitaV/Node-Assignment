let chai = require('chai');
const expect = chai.expect;
let server = require('../../server');
let mongoDB = require('../../db');

const findUserUseCase = require('./find-user-use-case');

describe('FindUserUseCase', () => {
    let user = {
        userName: "RV",
        userPassword: "rishita.valechha@intimetec.com",
    }
    it('should successfully find user', async () => {
        const registeredUser = await findUserUseCase.execute(user);
        expect(registeredUser).to.be.an('object');
    });
});
