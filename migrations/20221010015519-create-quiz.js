'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('quizes', {
      id_quizes: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false
      },
      nivel:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      quantidade:{
        type: Sequelize.INTEGER,
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
