'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id_usuarios: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome_usuario:{
        type: Sequelize.STRING,
        allowNull: false
      },
      moedas:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      valor:{
        type: Sequelize.FLOAT,
        allowNull: false
      },
      vidas:{
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
