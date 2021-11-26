'use strict'

var moongose = require('mongoose');

var Schema = moongose.Schema;

var Ubicacion = {
    longitud: String,
    latitud: String,
    altitud: String,
}

var DescripcionSchema = Schema({
    imagen: String,
    descripcion: String,
    ubicacion: Ubicacion,
    tipoRed: String
});

module.exports = moongose.model('descripcion', DescripcionSchema);
