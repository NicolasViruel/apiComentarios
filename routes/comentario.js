const express = require('express');
const comentarioController = require('../controllers/Comentarios');
const router = express.Router();

router.post('/', comentarioController.crearComentario);
router.get('/', comentarioController.obtenerComentario);
router.delete('/:id', comentarioController.eliminarrComentario);

module.exports = router;