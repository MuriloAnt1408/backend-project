const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware para analisar corpos de requisição JSON
app.use(express.json());

// Use as rotas de usuário
app.use('/users', userRoutes);

// Porta em que o servidor irá ouvir
const PORT = process.env.PORT || 3000;

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});