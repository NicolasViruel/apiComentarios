const mongoose = require('mongoose');

const ComentarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    comentario: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Comentario', ComentarioSchema);