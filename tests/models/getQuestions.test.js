const Server = require('../../src/server');

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
});
