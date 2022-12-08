const db = require('../database/models');
const sequelize = db.sequelize;


const cancionesController = {
    'list': (req, res) => {
        db.Cancion.findAll({
            include : ["generos","albumes","artistas"]
        })
            .then(canciones => {
                res.json({
                    meta : {
                        status: 200,
                        length: canciones.length,
                        url : req.url,
                    },
                    data: canciones,
                   
                })
            })
    },

    'detail': (req, res) => {
        db.Cancion.findByPk(req.params.id,{
            include: ["generos","albumes","artistas"]
        })
            .then(canciones => {
                res.json({
                    data: canciones, 
                    meta : { 
                    status: 200,
                    url: req.url
                }
                });
            });
    },
    'create': (req, res) => {
        db.Cancion.create({
                titulo: req.body.titulo,
                duracion: parseInt(req.body.duracion),
                created_at: req.body.created_at,
                updated_at: req.body.updated_at,
                genero_id: parseInt(req.body.genero_id),
                album_id: parseInt(req.body.album_id),
                artista_id: parseInt(req.body.artista_id)
                }).then(()=> {
                    return res.json({
                        titulo: req.body.titulo,
                        duracion: req.body.duracion,
                        created_at: req.body.created_at,
                        updated_at: req.body.updated_at,
                        genero_id: req.body.genero_id,
                        album_id: req.body.album_id,
                        artista_id: req.body.artista_id   
                    })
                }).catch(error => res.send(error))
        
        },
        
        
    'update': (req, res) => {
        let cancionId = req.params.id;
        db.Cancion.update(
                {
                        titulo: req.body.titulo,
                        duracion: req.body.duracion,
                        created_at: req.body.created_at,
                        updated_at: req.body.updated_at,
                        genero_id: req.body.genero_id,
                        album_id: req.body.album_id,
                        artista_id: req.body.artista_id   
                    },
                {
                    where: {id: cancionId}
                }).then(respuesta =>{
                    return res.json(respuesta)
                }).catch(error => res.send(error))
            },
        
            destroy: (req, res) => {
                let cancionId = req.params.id;
                db.Cancion.destroy({where: {id: cancionId}, force: true})
                .then(respuesta =>{
                    return res.json(respuesta)
                }).catch(error => res.send(error))
                    }
                }



module.exports = cancionesController;