'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('quizperguntas', {
      id_quiz_perguntas: {
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
          key: 'id_quizes'
        }
      },
      pergunta:{
        type: Sequelize.STRING,
        allowNull: false
      },
      resposta_certa:{
        type: Sequelize.STRING,
        allowNull: false
      },
      resposta_errada1:{
        type: Sequelize.STRING,
        allowNull: false
      },
      resposta_errada2:{
        type: Sequelize.STRING,
        allowNull: false
      },
      resposta_errada3:{
        type: Sequelize.STRING,
        allowNull: false
      },
      imagem:{
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo:{
        type: Sequelize.STRING,
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
