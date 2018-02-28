
module.exports = (sequelize, DataTypes) => {
  const UserScore = sequelize.define('UserScore', {
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    choices: DataTypes.ARRAY(DataTypes.STRING),
    score: DataTypes.INTEGER,
  }, {});
  UserScore.associate = function (models) {
    // associations can be defined here
  };
  return UserScore;
};
