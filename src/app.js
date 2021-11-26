'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var routesfiles = require('./routes/file');


var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(routesfiles);

app.get('/', function(req, resp){
    resp.status(200).send({mensaje:"OK"});
});






module.exports = app;