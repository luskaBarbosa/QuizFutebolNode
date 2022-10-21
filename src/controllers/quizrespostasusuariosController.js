const quizrespostasusuarios = require('../model/quizrespostasusuarios');

module.exports = {
    async insereQuizRespostasUsuarios(req, res) {
        const { idquizes,
                idquizperguntas,
                resposta,
                nivel,
                usuario} = req.body;

        const aux = await quizrespostasusuarios.create({    idquizes,
                                                            idquizperguntas,
                                                            resposta,
                                                            nivel,
                                                            usuario});

        return res.json(aux);
    },
    async buscaQuizRespostasUsuarios(req, res) {

        const { idquizes, idquizperguntas, nivel, usuario } = req.params;

        const aux = await quizrespostasusuarios.findAll({
            where:{
                idquizes: idquizes,
                idquizperguntas: idquizperguntas,
                nivel: nivel,
                usuario: usuario
            }
        });
        return res.json(aux);
    }
}