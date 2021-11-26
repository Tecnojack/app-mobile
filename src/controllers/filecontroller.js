'use strict'
const e = require('express');
const Descripcion = require('../models/descripcion');

function subirImagen(req, resp){

    var nuevaDescripcion = new Descripcion();

    var parametros = req.body;

    console.log(req.body);
    resp.status(200).send(
        {fileUploaded: req.file.filename, 
            longitud: req.body.longitud, 
            latitud: req.body.latitud, 
            altitud: req.body.altitud
        }
    );  
    console.log(`longitud: ${req.body.longitud}`)
    nuevaDescripcion.imagen = req.file.filename;
    nuevaDescripcion.descripcion = parametros.descripcion;
    nuevaDescripcion.ubicacion = {
        longitud: req.body.longitud, 
        latitud: req.body.latitud, 
        altitud: req.body.altitud 
    }
    nuevaDescripcion.tipoRed = parametros.tipoRed;

    nuevaDescripcion.save(
        (err, descriptionGuardado) => {
            if(err) {
                resp.status(500).send({message: "No se pudo crear el description"});
                console.log(err)
            }
            else {
                resp.status(200).send();
            }
        }
    );
}

function retornarImagen(req, resp){
    resp.sendFile('src/uploads/'+req.params.imagename, {root:'.'});
}

module.exports = {
    subirImagen,
    retornarImagen
};