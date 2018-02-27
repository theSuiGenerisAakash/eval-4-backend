const serverPing = require('./serverPing');
const getQuestions = require('./getQuestions');
const storeQuestions = require('./storeQuestions');
const getUser = require('./getUser');
const getTopUsers = require('./getTopUsers');

module.exports = [].concat(serverPing, getQuestions, storeQuestions, getUser, getTopUsers);
