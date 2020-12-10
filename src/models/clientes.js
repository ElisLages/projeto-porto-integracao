const mongoose = require('mongoose')

const clientesSchema = new mongoose.Schema({
    id: {type : Number},
    nome : { type : String },
    email: { type: String },
    cpf: { type: Number },
    dataNascimento: { type: String },
    estadoCivil: { type: String },
    telefone: { type: Number },
    comprou: { type: Boolean }
},{
    versionKey: false
})

const clientes = mongoose.model('clientes', clientesSchema)

module.exports = clientes 