const express = require('express');
const router = express.Router();
const cancionesController = require('../controllers/cancionesController');

router.get('/canciones', cancionesController.list);
router.get('/canciones/:id', cancionesController.detail);
router.post('/canciones/create', cancionesController.create);
router.put('/canciones/edit/:id', cancionesController.update);
router.delete('/canciones/destroy/:id', cancionesController.destroy)



module.exports = router;