
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UserScores', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    username: {
      type: Sequelize.STRING,
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
