const express = require('express');
const routes = express.Router();
const usuariosController = require('./controllers/usuariosController');
const quizesController = require('./controllers/quizesController');

// ROTAS GET
routes.get('/', (req,res) => {
    return res.json('Hello World !!!');
})

routes.post('/insereUsuarios', usuariosController.insereUsuarios);
routes.post('/insereQuizes', quizesController.insereQuizes);


routes.get('/buscaUsuarios/:nome_usuario', usuariosController.buscaUsuarios);
routes.get('/buscaQuizes', quizesController.buscaQuizes);


module.exports = routes;