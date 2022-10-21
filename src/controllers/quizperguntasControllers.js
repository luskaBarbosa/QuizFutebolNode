const quizperguntas = require('../model/quizperguntas');

module.exports = {
    async insereQuizPeruntas(req, res) {
        const { idquizes,
                pergunta,
                resposta_certa,
                resposta_errada1,
                resposta_errada2,
                resposta_errada3,
                imagem,
                tipo} = req.body;

        const aux = await quizperguntas.create({    idquizes,
                                                    pergunta,
                                                    resposta_certa,
                                                    resposta_errada1,
                                                    resposta_errada2,
                                                    resposta_errada3,
                                                    imagem,
                                                    tipo});

        return res.json(aux);
    },
    async buscaQuizPerguntas(req, res) {

        const { idquizes } = req.params;

        const aux = await quizperguntas.findAll({
            where:{
                idquizes: idquizes
            }
        });
        return res.json(aux);
    },
    async somaQuizPerguntas(req, res) {

        const { idquizes } = req.params;

        const aux = await quizperguntas.count({
            where:{
                status: idquizes
            }
        });
        return res.json(aux);
    }
}