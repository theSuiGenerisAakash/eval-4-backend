const serverPing = require('./serverPing');
const getQuestions = require('./getQuestions');

module.exports = [].concat(serverPing, getQuestions);
