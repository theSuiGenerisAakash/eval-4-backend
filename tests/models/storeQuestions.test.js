const Server = require('../../src/server');
const Models = require('../../models');

afterEach(() => Models.QuesAndAns.destroy({ truncate: true }));
afterAll(() => Models.close());

describe('Testing /store', () => {
  it('testing with external api', (done) => {
    const request = {
      method: 'GET',
      url: '/store',
    };
    Server.inject(request, (response) => {
      console.log(response.result.quesArray);
      expect(response.result.statusCode).toBe(201);
      done();
    });
  });
});
