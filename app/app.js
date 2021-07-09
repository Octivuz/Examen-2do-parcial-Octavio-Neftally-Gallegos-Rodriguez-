const express = require('express');
const rutasVinos = require('./rutas/rutasVino');
const rutasCocacola=require('./rutas/rutasCoca');


const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/vinos',rutasVinos);

app.use('/coca_cola',rutasCocacola)


module.exports= app;

