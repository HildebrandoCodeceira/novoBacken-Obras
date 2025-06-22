const mongoose = require('mongoose');

const ObraSchema = new mongoose.Schema({
  nome: String,
  responsavel: String,
  dataInicio: Date,
  dataFim: Date,
  localizacao: {
    lat: Number,
    long: Number
  },
  descricao: String,
  foto: String, // Base64 ou URL
});

module.exports = mongoose.model('Obra', ObraSchema);

// Modelo da obra (igual ao exemplo da resposta anterior)
