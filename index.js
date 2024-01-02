const express = require('express');
const connectDB = require('./databases/db');
const cors = require('cors');
const app = express();

connectDB();

app.use(express.json({ extended: true }));
app.use(cors());
//llamamos a las rutas
app.use('/api/comentarios', require('./routes/comentario'));

app.listen(5000, () => {
    console.log('Server listening on port 5000 🌈');
});