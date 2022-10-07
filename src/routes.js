const express = require('express');
const routes = express.Router();

// ROTAS GET
routes.get('/', (req,res) => {
    return res.json('Hello World !!!');
})

module.exports = routes;  git commit -m "first commit"