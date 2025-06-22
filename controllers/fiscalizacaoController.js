const Fiscalizacao = require('../models/Fiscalizacao');

exports.createFiscalizacao = async (req, res) => {
  try {
    const fiscalizacao = await Fiscalizacao.create(req.body);
    res.status(201).json(fiscalizacao);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFiscalizacoes = async (req, res) => {
  try {
    const fiscalizacoes = await Fiscalizacao.find().populate('obra');
    res.json(fiscalizacoes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFiscalizacaoById = async (req, res) => {
  try {
    const fiscalizacao = await Fiscalizacao.findById(req.params.id).populate('obra');
    res.json(fiscalizacao);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateFiscalizacao = async (req, res) => {
  try {
    const fiscalizacao = await Fiscalizacao.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(fiscalizacao);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteFiscalizacao = async (req, res) => {
  try {
    await Fiscalizacao.findByIdAndDelete(req.params.id);
    res.json({ message: 'Fiscalização deletada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Código do controlador de fiscalizações (igual ao exemplo da resposta anterior)
