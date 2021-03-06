const Server = require('../../src/server');
const Models = require('../../models');

beforeEach(() => Models.UserScore.destroy({ truncate: true }));
afterEach(() => Models.UserScore.destroy({ truncate: true }));
afterAll(() => Models.close());

describe('Testing /topusers route', () => {
  it('Testing with no user objects inside the table', (done) => {
    const request = {
      method: 'GET',
      url: '/topusers/1',
    };
    Server.inject(request, (response) => {
      expect(response.result.statusCode).toBe(204);
      done();
    });
  });
});
