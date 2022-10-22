const quizperguntas = require('../model/quizperguntas');
const Sequelize = require('sequelize');

module.exports = {
    async insereQuizPeruntas(req, res) {
        const { idquizes,
                nome,
                nivel,
                pergunta,
                resposta_certa,
                resposta_errada1,
                resposta_errada2,
                resposta_errada3,
                imagem,
                tipo} = req.body;

        const aux = await quizperguntas.create({    idquizes,
                                                    nome,
                                                    nivel,
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

        const { idquizes, nivel, nome } = req.params;

        const aux = await quizperguntas.count({
            where:{
                idquizes: idquizes,
                nivel: nivel,
                nome: nome
            }
        });
        return res.json(aux);
    },
    async buscaQuizPerguntasAgrupado(req, res) {

        const { nivel, nome } = req.params;

        const aux = await quizperguntas.findAll({
            attributes: [
                'nivel', 
                'nome',
                [Sequelize.fn('COUNT', Sequelize.col('pergunta')), 'count'] 
            ],
            where: {
                nivel: nivel,
                nome: nome
            },
            group:['nome','nivel']
        });
        return res.json(aux);
    }
}