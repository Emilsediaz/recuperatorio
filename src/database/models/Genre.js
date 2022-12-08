const model = function(sequelize, DataTypes){
    let alias = "Genero";
    let columnas ={
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },  
    }

    let config = {
        tableName : "generos",
        timestamps : false
    }
    const Genero = sequelize.define(alias,columnas,config)

    Genero.associate = function(models) {
        Genero.hasMany(models.Cancion,{
            as: "canciones",
            foreignKey: "genero_id"
        })
    }
    return Genero
}


module.exports = model