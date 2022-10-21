const Sequelize = require('sequelize');
const dbConfig  = require('../config/dataBase');
const usuarios = require('../model/usuarios');
const quizes = require('../model/quizes');

const connection = new Sequelize(dbConfig);

//Inicializa��o dos dados
usuarios.init(connection);
quizes.init(connection);

module.exports = connection;