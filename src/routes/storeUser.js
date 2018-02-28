const Models = require('../../models');

module.exports = [
  {
    method: 'POST',
    path: '/user',
    handler: (request, response) => {
      Models.UserScore.upsert({
        choices: request.payload.choices,
        score: request.payload.score,
        username: request.payload.username,
      }).then((result) => {
        response({
          result,
          statusCode: 201,
        });
      }).catch(err => console.log(err));
    },
  },
];
