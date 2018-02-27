
module.exports = (sequelize, DataTypes) => {
  const UserScore = sequelize.define('UserScore', {
    username: DataTypes.STRING,
    choices: DataTypes.ARRAY(DataTypes.STRING),
    score: DataTypes.INTEGER,
  }, {});
  UserScore.associate = function (models) {
    // associations can be defined here
  };
  return UserScore;
};
