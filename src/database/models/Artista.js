const model = function(sequelize, DataTypes){
    let alias = "Artista";
    let columnas ={
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        }, 
        apellido:{
            type: DataTypes.STRING,
            allowNull: false
        },   
    }

    let config = {
        tableName : "artistas",
        timestamps : false
    }
    const Artista = sequelize.define(alias,columnas,config)

    Artista.associate = function(models) {
        Artista.hasMany(models.Cancion,{
            as: "canciones",
            foreignKey: "artista_id"
        })
    }
    return Artista
}


module.exports = model