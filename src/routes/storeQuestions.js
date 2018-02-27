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
          const promiseArr = [];
          result.allQuestions.forEach((que) => {
            const optionsPerQues = {
              uri: `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById/${que.questionId}`,
              headers: {
                'User-Agent': 'Request-Promise',
              },
              json: true, // Automatically parses the JSON string in the response
            };
            const filteredKeys = (obj, filter) => {
              const keys = [];
              Object.keys(obj).forEach((key) => {
                if (obj.hasOwnProperty(key) && filter.test(key)) {
                  keys.push(`${key}+${obj[key]}`);
                }
              });
              return keys;
            };
            const optionsArr = filteredKeys(que, /option/);
            promiseArr.push(rp(optionsPerQues)
              .then(answer => Models.QuesAndAns.create({
                quesID: que.questionId,
                question: que.question,
                options: optionsArr,
                answer: answer.answer,
              })).then(singleResult => singleResult.dataValues));
          });
          Promise.all(promiseArr).then((resultBulkCreate) => {
            response({
              resultBulkCreate,
              statusCode: 201,
            });
          }).catch((err) => {
            response({
              err,
              statusCode: 500,
            });
          });
        });
    },
  },
];
