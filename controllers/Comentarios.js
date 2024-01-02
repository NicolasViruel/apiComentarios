const Comentario = require('../models/Comentario');

exports.crearComentario = async (req, res) => {
    try {
        // Create a new comment
        const comentario = new Comentario(req.body);
        await comentario.save();
        res.send(comentario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.obtenerComentario = async (req, res) => {
    try {
        const comentarios = await Comentario.find();
        res.json(comentarios);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener los comentarios');
    }
};

exports.eliminarrComentario = async (req, res) => {
    try {
        let comentario = await Comentario.findById(req.params.id);
        console.log(comentario);
        if (!comentario) {
            res.status(404).json({ msg: 'No existe el comentario' });
        }
        await Comentario.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: 'Comentario eliminado' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar el comentario');
    }
};

