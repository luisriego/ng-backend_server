// Reuires
var express = require('express');
var mongoose = require('mongoose');


// Inicializar variables
var app = express();


// Conexión a la Base de Datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;

    console.log('Base de Datos online');

});


// Rutas
app.get('/', (req, res, next) => {
    res.status(200).jsonp({
        ok: true,
        mensaje: 'petición realizada correctamente'
    });
});


// Escuchar peticiones en el puerto
app.listen(3000, () => {
    console.log('Servidor express corriendo en el puerto 3000')
});