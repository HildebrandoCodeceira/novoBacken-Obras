const express = require('express');
const app = express();
const obrasRoutes = require('./routes/obraRoutes');
const fiscalizacaoRoutes = require('./routes/fiscalizacaoRoutes');
require('./config/db');

app.use(express.json());

app.use('/obras', obrasRoutes);
app.use('/fiscalizacoes', fiscalizacaoRoutes);

app.listen(3000, () => console.log('🚀 Servidor rodando na porta 3000'));

// App principal (igual ao exemplo da resposta anterior)
