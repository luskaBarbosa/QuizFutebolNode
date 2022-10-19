const express = require('express');
const routes = express.Router();
const usuariosController = require('./controllers/usuariosController');

// ROTAS GET
routes.get('/', (req,res) => {
    return res.json('Hello World !!!');
})

routes.post('/insereUsuarios', usuariosController.insereUsuarios);


routes.get('/buscaUsuarios/:nome_usuario', usuariosController.buscaUsuarios);


module.exports = routes;