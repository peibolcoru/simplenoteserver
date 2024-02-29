// Importamos las variables de entorno
require ('dotenv').config();

// Dependencias

const express = require('express');
const morgan= require('morgan');
const cors=require('cors');
const fileUpload = require('express-fileupload');

//Importamos las rutas
const routes= require('./src/routes');

// Creacion del servidor
const app=express();

// Middleware que pasa raw formato body en json
app.use(express.json());
app.use(fileUpload())

// Middleware de CORS
app.use(cors());

// Información de la petición entrante
app.use(morgan('dev'));

//Midellware donde se encuentran las rutas

app.use(routes);

// Middelware de ruta no encontrada
app.use((req,res)=>{
    res.status(404).send({
        status: 'error',
        message: 'Route not found',
   });
});

// Middelware errores

app.use((err,req,res,next)=>{
    console.error(err);
    res.status(err.httpStatus || 500).send({
        status: 'error',
        message: err.message,
    });
});
    
app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server listening at http://localhost:${process.env.PORT}`)
})


