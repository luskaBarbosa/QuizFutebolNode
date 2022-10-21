const express = require('express');
const routes = express.Router();
const usuariosController = require('./controllers/usuariosController');
const quizesController = require('./controllers/quizesController');
const quizperguntasController = require('./controllers/quizperguntasControllers');

// ROTAS GET
routes.get('/', (req,res) => {
    return res.json('Hello World !!!');
})

routes.post('/insereUsuarios', usuariosController.insereUsuarios);
routes.post('/insereQuizes', quizesController.insereQuizes);
routes.post('/insereQuizPeruntas', quizperguntasController.insereQuizPeruntas);

routes.get('/buscaUsuarios/:nome_usuario', usuariosController.buscaUsuarios);
routes.get('/buscaQuizes', quizesController.buscaQuizes);
routes.get('/buscaQuizPeruntas', quizperguntasController.buscaQuizPeruntas);


module.exports = routes;