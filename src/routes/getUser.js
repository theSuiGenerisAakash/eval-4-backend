const Models = require('../../models');

module.exports = [
  {
    method: 'GET',
    path: '/user/{username}',
    handler: (request, response) => {
      Models.UserScore.find({
        where: {
          username: request.params.username,
        },
      }).then((result) => {
        if (result === null) {
          response({
            statusCode: 204,
          });
        } else {
          response({
            result,
            statusCode: 200,
          });
        }
      }).catch(err => console.log(err));
    },
  },
];
