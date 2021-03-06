const serverPing = require('./serverPing');
const getQuestions = require('./getQuestions');
const storeQuestions = require('./storeQuestions');
const getUser = require('./getUser');
const getTopUsers = require('./getTopUsers');
const storeUser = require('./storeUser');
const calculateScore = require('./calculateScore');

module.exports = [].concat(
  serverPing, getQuestions,
  storeQuestions, getUser, getTopUsers, storeUser,
  calculateScore,
);
