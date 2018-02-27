const serverPing = require('./serverPing');
const getQuestions = require('./getQuestions');
const storeQuestions = require('./storeQuestions');

module.exports = [].concat(serverPing, getQuestions, storeQuestions);
