const Sequelize = require('sequelize');
const dbConfig  = require('../config/dataBase');
const usuarios = require('../model/usuarios');
const quizes = require('../model/quizes');
const quizperguntas = require('../model/quizperguntas');

const connection = new Sequelize(dbConfig);

//Inicialização dos dados
usuarios.init(connection);
quizes.init(connection);
quizperguntas.init(connection);

module.exports = connection;