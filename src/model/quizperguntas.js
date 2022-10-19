const { Model, DataTypes } = require('sequelize');

class quizperguntas extends Model {
    static init(sequelize){
        super.init({
            id_quiz_perguntas: DataTypes.INTEGER,
            idquizes: DataTypes.INTEGER,
            pergunta: DataTypes.STRING,
            resposta_certa: DataTypes.STRING,
            resposta_errada1: DataTypes.STRING,
            resposta_errada2: DataTypes.STRING,
            resposta_errada3: DataTypes.STRING,
            imagem: DataTypes.STRING,
            tipo: DataTypes.STRING
        }, 
        {
            sequelize
        })
    }
}

module.exports = quizperguntas;