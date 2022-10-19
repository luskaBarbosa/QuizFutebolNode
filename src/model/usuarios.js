const { Model, DataTypes } = require('sequelize');

class usuarios extends Model {
    static init(sequelize){
        super.init({
            id_usuarios: DataTypes.INTEGER,
            nome_usuario: DataTypes.STRING,
            moedas: DataTypes.INTEGER,
            valor: DataTypes.FLOAT,
            vidas: DataTypes.INTEGER
        }, 
        {
            sequelize
        })
    }
}

module.exports = usuarios;