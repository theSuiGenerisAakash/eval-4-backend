const Server = require('../../src/server');
const Models = require('../../models');

beforeEach(() => Models.UserScore.destroy({ truncate: true }));
afterEach(() => Models.UserScore.destroy({ truncate: true }));
afterAll(() => Models.close());

describe('Testing /user for POST', () => {
  it('Testing when entry isnt already there', (done) => {
    const userObj = {
      username: 'Aakash',
      choices: ['hello'],
      score: 3,
    };
    const request = {
      method: 'POST',
      url: '/user',
      payload: JSON.stringify(userObj),
    };
    Server.inject(request, (response) => {
      expect(response.result.statusCode).toBe(201);
      done();
    });
  });
  it('Testing when entry is already there', (done) => {
    const userObj = {
      username: 'Aakash',
      choices: ['hello'],
      score: 2,
    };
    const request = {
      method: 'POST',
      url: '/user',
      payload: JSON.stringify(userObj),
    };
    Models.UserScore.upsert({ username: 'Aakash' }).then(() => {
      Server.inject(request, (response) => {
        Models.UserScore.find({ where: { username: 'Aakash' } })
          .then((resultFind) => {
            expect(resultFind.score).toBe(2);
            done();
          });
      });
    });
  });
});
