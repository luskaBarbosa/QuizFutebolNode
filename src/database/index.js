const Sequelize = require('sequelize');
const dbConfig  = require('../config/dataBase');

const connection = new Sequelize(dbConfig);

module.exports = connection;