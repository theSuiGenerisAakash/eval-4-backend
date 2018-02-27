const Server = require('../../src/server');
const Models = require('../../models');

beforeEach(() => Models.QuesAndAns.destroy({ truncate: true }));
afterEach(() => Models.QuesAndAns.destroy({ truncate: true }));
afterAll(() => Models.close());

describe('Testing /questions', () => {
  it('testing with no questions in the table', (done) => {
    const request = {
      method: 'GET',
      url: '/questions',
    };
    Server.inject(request, (response) => {
      expect(response.result.statusCode).toBe(204);
      done();
    });
  });
  it('testing with questions in the table', (done) => {
    const request = {
      method: 'GET',
      url: '/store',
    };
    Server.inject(request, (response) => {
      expect(response.result.statusCode).toBe(201);
      Models.QuesAndAns.findAll().then((resultOnFind) => {
        expect(response.result.resultBulkCreate.length).toBe(resultOnFind.length);
        done();
      });
    });
  });
});
