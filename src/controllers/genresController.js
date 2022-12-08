const db = require('../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genero.findAll({
            include: ["canciones"]
        })
            .then(generos => {
                res.json({
                    meta : {
                        status: 200,
                        length: generos.length,
                        url : req.url,
                    },
                    data: generos,
                   
                })
            })
    },

    'detail': (req, res) => {
        db.Genero.findByPk({
            include: ["canciones"]
        })
            .then(genres => {
                res.json({
                    data: genres, 
                    meta : { 
                    status: 200,
                    url: req.url
                }
                });
            });
    }

}

module.exports = genresController;