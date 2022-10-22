'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('quizperguntas', 'nome', 
    { 
      type: Sequelize.STRING,
      allowNull: false
    });

    queryInterface.addColumn('quizperguntas', 'nivel', 
    { 
      type: Sequelize.INTEGER,
      allowNull: false
    });
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
