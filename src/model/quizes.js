const { Model, DataTypes } = require('sequelize');

class quizes extends Model {
    static init(sequelize){
        super.init({
            id_quizes: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            nivel: DataTypes.INTEGER,
            quantidade: DataTypes.INTEGER,
            tipo: DataTypes.STRING
        }, 
        {
            sequelize
        })
    }
}

module.exports = quizes;