const Models = require('../../models');
const rp = require('request-promise');

module.exports = [
  {
    method: 'GET',
    path: '/store',
    handler: (request, response) => {
      const options = {
        uri: 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions',
        headers: {
          'User-Agent': 'Request-Promise',
        },
        json: true, // Automatically parses the JSON string in the response
      };

      rp(options)
        .then((result) => {
          console.log(result);
          response({
            quesArray: result.allQuestions,
            statusCode: 201,
          });
        });
    },
  },
];
