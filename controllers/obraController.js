const Obra = require('../models/Obra');
const Fiscalizacao = require('../models/Fiscalizacao');
const emailService = require('../services/emailService');

exports.createObra = async (req, res) => {
  try {
    const obra = await Obra.create(req.body);
    res.status(201).json(obra);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getObras = async (req, res) => {
  try {
    const obras = await Obra.find();
    res.json(obras);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getObraById = async (req, res) => {
  try {
    const obra = await Obra.findById(req.params.id);
    res.json(obra);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateObra = async (req, res) => {
  try {
    const obra = await Obra.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(obra);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteObra = async (req, res) => {
  try {
    await Obra.findByIdAndDelete(req.params.id);
    res.json({ message: 'Obra deletada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listarFiscalizacoesPorObra = async (req, res) => {
  try {
    const fiscalizacoes = await Fiscalizacao.find({ obra: req.params.id });
    res.json(fiscalizacoes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.enviarDetalhesPorEmail = async (req, res) => {
  try {
    const obra = await Obra.findById(req.params.id);
    await emailService.sendEmailSimulado(obra);
    res.json({ message: 'Email simulado enviado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Código do controlador de obras (igual ao exemplo da resposta anterior)
