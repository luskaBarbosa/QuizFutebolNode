const { Model, DataTypes } = require('sequelize');

class quizrespostasusuarios extends Model {
    static init(sequelize){
        super.init({
            idquizes: DataTypes.INTEGER,
            idquizperguntas: DataTypes.INTEGER,
            resposta: DataTypes.STRING,
            nivel: DataTypes.INTEGER,
            usuario: DataTypes.INTEGER
        }, 
        {
            sequelize
        })
    }
}

module.exports = quizrespostasusuarios;