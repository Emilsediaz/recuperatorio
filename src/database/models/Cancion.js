const model = function(sequelize, DataTypes){
    let alias = "Cancion";
    let columnas ={
        id:{
            type: DataTypes.BIGINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        titulo:{
            type: DataTypes.STRING(500),
            allowNull: false
        },
        duracion:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at :{
            type : DataTypes.DATE,
            allowNull: true
        },
        updated_at :{
            type: DataTypes.DATE,
            allowNull: true
        },
        
        genero_id :{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        album_id :{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        artista_id :{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
    }
    let config = {
        tableName : "canciones",
        timestamps : false
    }
    const Cancion = sequelize.define(alias,columnas,config)

    Cancion.associate = function(models) {
        Cancion.belongsTo(models.Genero,{
            as: "generos",
            foreignKey: "genero_id"
        })
        Cancion.belongsTo(models.Album,{
            as: "albumes",
            foreignKey: "album_id"
        })
        Cancion.belongsTo(models.Artista,{
            as: "artistas",
            foreignKey: "artista_id"
        })
    }   
    return Cancion
    }


module.exports = model