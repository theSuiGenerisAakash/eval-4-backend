
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UserScores', {
    username: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true,
    },
    choices: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    score: {
      allowNull: true,
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('UserScores'),
};
