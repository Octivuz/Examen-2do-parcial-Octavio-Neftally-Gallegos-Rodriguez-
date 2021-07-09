const modeloCoca = require('../configuracion/modelos/modelo_cocacola');



function index(req,res){
console.log("OK BOOMER");
modeloCoca.find({})
.then(coca =>{
    if(coca.length) return res.status(200).send({coca});
    return res.status(204).send({message: 'NO DATOS'})
}).catch(error=>res.status(500).send({error}));
}

function crear(req,res){
    new modeloCoca(req.body).save()
    .then(coca => res.status(200).send({coca}))
    .catch(error=>res.status(500).send({error}))
}

function buscar(req,res,next){
    let consulta={};
    consulta[req.params.key]=req.params.value;
    modeloCoca.find(consulta).then(coca =>{
        if(!coca.length) return next();
        req.body.coca = coca;
        return next();
    }).catch(error => {req.body.error=error;
        next();
    })

}

function mostrar(req,res){
if(req.body.error) return res.status(500).send({error});
if(!req.body.coca) return res.status(404).send({message: 'No se encontro el producto'});
let coca=req.body.coca;
return res.status(200).send({coca});
}

function actualizar(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.coca) return res.status(404).send({message: 'No se puede actualizar'});
    let cocaObj=req.body.coca[0];
    cocaObj=Object.assign(cocaObj,req.body);
    cocaObj.save().then(cocaUpdate=>{
        res.status(200).send({message:'El registro se actualizo correctamente',cocaUpdate});
    } ).catch(error=> res.status(500).send({error}));

}


function eliminar(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.coca) return res.status(404).send({message:'No se puede eliminar'});
    req.body.coca[0].remove().then(cocaDelete=>{
        res.status(200).send({message:'El registro fue eliminado correctamente',cocaDelete});
    }).catch(error=>res.status(500).send({error}));
}

module.exports={
    index,
    crear,
    buscar,
    mostrar,
    actualizar,
    eliminar
}