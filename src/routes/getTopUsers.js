const Models = require('../../models');

module.exports = [
  {
    method: 'GET',
    path: '/topusers/{howmany}',
    handler: (request, response) => {
      Models.UserScore.findAll({
        limit: request.params.howmany,
        order: [['score', 'DESC']],
        attributes: ['username', 'score'],
      }).then((result) => {
        if (result.length === 0) {
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
