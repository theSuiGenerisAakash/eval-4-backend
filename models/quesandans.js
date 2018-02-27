
module.exports = (sequelize, DataTypes) => {
  const QuesAndAns = sequelize.define('QuesAndAns', {
    quesID: DataTypes.INTEGER,
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    options: DataTypes.ARRAY(DataTypes.STRING),
  }, {});
  QuesAndAns.associate = function (models) {
    // associations can be defined here
  };
  return QuesAndAns;
};
