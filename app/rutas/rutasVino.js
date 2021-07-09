const express= require('express');
const controladorvinos=require('../controlador_modelos/controlador_vinos');

const Router=express.Router();

Router.get('/',controladorvinos.index)
.post('/',controladorvinos.crear)
.get('/:key/:value',controladorvinos.buscar,controladorvinos.mostrar)
.put('/:key/:value',controladorvinos.buscar,controladorvinos.actualizar)
.delete('/:key/:value',controladorvinos.buscar,controladorvinos.eliminar);

module.exports=Router;