const quizes = require('../model/quizes');

module.exports = {
    async insereQuizes(req, res) {
        const { nome,
                nivel,
                quantidade,
                tipo} = req.body;

        const aux = await quizes.create({   nome,
                                            nivel,
                                            quantidade,
                                            tipo});

        return res.json(aux);
    },
    async buscaQuizes(req, res) {

        const aux = await quizes.findAll();

        return res.json(aux);
    }
}