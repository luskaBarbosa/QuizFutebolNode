const Sequelize = require('sequelize');
const dbConfig  = require('../config/dataBase');
const usuarios = require('../model/usuarios');

const connection = new Sequelize(dbConfig);

//Inicialização dos dados
usuarios.init(connection);

module.exports = connection;