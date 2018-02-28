const Models = require('../../models');

module.exports = [
  {
    method: 'POST',
    path: '/calculate',
    handler: (request, response) => {
      let score = 0;
      const resJSON = JSON.parse(request.payload);
      Models.QuesAndAns.findAll({
        attributes: ['quesID', 'answer'],
      }).then((results) => {
        const answers = resJSON.choices;
        answers.forEach((ans) => {
          const id = ans.split('+')[0];
          const choice = ans.split('+')[1];
          console.log(id, choice);
          results.forEach((result) => {
            if (result.dataValues.quesID == id.toString() && result.dataValues.answer === choice) {
              score += 1;
            }
          });
        });
      }).then(() => {
        Models.UserScore.upsert({
          username: resJSON.username.split(' ')[1],
          choices: resJSON.choices,
          score,
        }).then(res => response({
          score,
          statusCode: 201,
        }));
      });
    },
  },
];
