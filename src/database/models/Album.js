const model = function(sequelize, DataTypes){
    let alias = "Album";
    let columnas ={
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        }, 
        duracion:{
            type: DataTypes.INTEGER,
            allowNull: false
        },   
    }

    let config = {
        tableName : "albumes",
        timestamps : false
    }
    const Album = sequelize.define(alias,columnas,config)

    Album.associate = function(models) {
        Album.hasMany(models.Cancion,{
            as: "canciones",
            foreignKey: "album_id"
        })
    }
    return Album
}


module.exports = model