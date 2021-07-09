const mongoose=require('mongoose');

const CocaSchema = new mongoose.Schema({

    codigo:{
        type:Number,
        required:true,
        unique:true
        
    },
    nombre: {
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    fecha:{
        type:Date,
        required:true,
        default:Date.now
    }

})

const Coca_cola = mongoose.model('Coca_cola',CocaSchema);

module.exports = Coca_cola;