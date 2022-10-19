const usuarios = require('../model/usuarios');

module.exports = {
    async insereUsuarios(req, res) {
        const { nome_usuario,
                moedas,
                valor,
                vidas} = req.body;

        const aux = await usuarios.create({ nome_usuario,
                                            moedas,
                                            valor,
                                            vidas});

        return res.json(aux);
    },
    async buscaUsuarios(req, res) {

        const { nome_usuario } = req.params;

        const aux = await usuarios.findAll({
            where:{
                nome_usuario: nome_usuario
            }
        });

        return res.json(aux);
    }
}