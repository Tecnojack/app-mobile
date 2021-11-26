'use strict'

var express = require('express');
var multer = require('multer');
var filecontroller = require('../controllers/filecontroller');

var app = express.Router();

var storageConfig = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'src/uploads/');
    },
    filename: function(req, file, cb){
        var prefijo = Date.now() + '-' + Math.round(Math.random() * 1E10);
        cb(null, prefijo + '-' + file.originalname);
    }
});

var upload = multer({storage: storageConfig});

app.post('/subirimagen', upload.single('imagen'), filecontroller.subirImagen);

app.get('/obtenerimagen/:imagename', filecontroller.retornarImagen);

module.exports = app;