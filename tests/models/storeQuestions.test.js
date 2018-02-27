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
      expect(typeof response.result.resultBulkCreate[0].id).toBe('number');
      expect(typeof response.result.resultBulkCreate[0].question).toBe('string');
      expect(typeof response.result.resultBulkCreate[0].answer).toBe('string');
      expect(response.result.resultBulkCreate[0].options instanceof Array).toBe(true);
      expect(response.result.statusCode).toBe(201);
      done();
    });
  });
});
