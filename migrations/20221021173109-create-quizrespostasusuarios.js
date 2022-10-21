'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('quizrespostasusuarios', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      idquizes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'quizes',
          key: 'id'
        }
      },
      idquizperguntas:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'quizperguntas',
          key: 'id'
        }
      },
      resposta:{
        type: Sequelize.STRING,
        allowNull: false
      },
      nivel:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdat:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedat:{
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
