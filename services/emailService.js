const nodemailer = require('nodemailer');

exports.sendEmailSimulado = async (obra) => {
  console.log(`📨 Simulando envio de email com detalhes da obra: ${obra.nome}`);
  console.log(`✅ Conteúdo do email:\nNome: ${obra.nome}\nResponsável: ${obra.responsavel}\nDescrição: ${obra.descricao}`);

};


