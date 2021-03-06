const Server = require('../../src/server');
const Models = require('../../models');

beforeEach(() => Models.UserScore.destroy({ truncate: true }));
afterEach(() => Models.UserScore.destroy({ truncate: true }));
afterAll(() => Models.close());

describe('Testing /user route', () => {
  it('Testing with no user objects inside the table', (done) => {
    const request = {
      method: 'GET',
      url: '/user/Aakash',
    };
    Server.inject(request, (response) => {
      expect(response.result.statusCode).toBe(204);
      done();
    });
  });
  it('Testing with a valid user objects inside the table', (done) => {
    Models.UserScore.upsert({
      username: 'Aakash',
    }).then(() => {
      const request = {
        method: 'GET',
        url: '/user/Aakash',
      };
      Server.inject(request, (response) => {
        expect(response.result.result.dataValues.username).toBe('Aakash');
        expect(response.result.statusCode).toBe(200);
        done();
      });
    });
  });
});
