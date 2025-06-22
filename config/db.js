
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://hcodeceira:PS4G0h7NgvZaUuQB@users.cpb7m.mongodb.net/users?retryWrites=true&w=majority&appName=users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado ao MongoDB'))
.catch((err) => console.error('❌ Erro ao conectar MongoDB:', err));
//"684eea4b37947152a404b319"