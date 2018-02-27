const Models = require('../../models');

module.exports = [
  {
    method: 'GET',
    path: '/questions',
    handler: (request, response) => {
      Models.QuesAndAns.findAll({
        attributes: ['quesID', 'question', 'options'],
      }).then((results) => {
        if (results.length === 0) {
          response({
            results,
            statusCode: 204,
          });
        } else {
          response({
            results,
            statusCode: 200,
          });
        }
      });
    },
  },
];
