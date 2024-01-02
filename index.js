const express = require('express');
const connectDB = require('./databases/db');

const app = express();

connectDB();

//llamamos a las rutas
app.use('/api/comentarios', require('./routes/comentario'));

app.listen(5000, () => {
    console.log('Server listening on port 5000 🌈');
});