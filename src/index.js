'use strict'

const mongoose = require('mongoose');
const application = require('./app');

const user = 'adminBackMobile';
const password = 'qRppXZvkA4oApI5o';
const dbname = 'back-movil'
const uri = `mongodb+srv://${user}:${password}@backmovil.ckhsl.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(uri, (err, res) =>{

    if(err){
        console.log('Se ha presentado un error al conectarse a la BBDD');
        console.log(err);
    }
    else{
        console.log('Se ha conectado con la BBDD correctamente');

        application.listen(8888, function(){
            console.log("El servidor web se ha iniciado correctamente");
        });
    }
});