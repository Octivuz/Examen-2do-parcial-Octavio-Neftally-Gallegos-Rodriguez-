const express= require('express');
const controladorCocacola=require('../controlador_modelos/controlador_cocacola');

const Router=express.Router();

Router.get('/',controladorCocacola.index)
.post('/',controladorCocacola.crear)
.get('/:key/:value',controladorCocacola.buscar,controladorCocacola.mostrar)
.put('/:key/:value',controladorCocacola.buscar,controladorCocacola.actualizar)
.delete('/:key/:value',controladorCocacola.buscar,controladorCocacola.eliminar);

module.exports=Router;