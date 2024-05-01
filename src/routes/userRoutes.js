const express = require('express');
const router = express.Router();

// Rota para obter todos os usuários
router.get('/', (req, res) => {
  res.send('Lista de usuários');
});

// Rota para obter um usuário por ID
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Detalhes do usuário com o ID ${userId}`);
});

// Rota para criar um novo usuário
router.post('/', (req, res) => {
  // Lógica para criar um novo usuário
  res.send('Novo usuário criado com sucesso');
});

// Exporte o router para ser usado no arquivo principal do aplicativo
module.exports = router;

const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

// Rota para obter todos os usuários
router.get('/', (req, res) => {
  const allUsers = userService.getAllUsers();
  res.json(allUsers);
});

// Rota para obter um usuário por ID
router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = userService.getUserById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('Usuário não encontrado');
  }
});

// Rota para criar um novo usuário
router.post('/', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400).send('Nome e e-mail são obrigatórios');
    return;
  }
  const newUser = userService.createUser(name, email);
  res.status(201).json(newUser);
});

module.exports = router;

const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const { authenticateToken } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/authorizationMiddleware');

// Rota protegida que requer autenticação e autorização
router.get('/profile', authenticateToken, authorize('user'), (req, res) => {
  // A partir daqui, você tem acesso ao usuário autenticado através de req.user
  res.json({ message: 'Perfil do usuário autenticado' });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const { loggingMiddleware } = require('../middleware/loggingMiddleware');
const { errorHandlingMiddleware } = require('../middleware/errorHandlingMiddleware');

// Middleware de logging para todas as rotas
router.use(loggingMiddleware);

// Rota de exemplo
router.get('/', (req, res) => {
  res.send('Rota de exemplo');
});

// Middleware de tratamento de erros
router.use(errorHandlingMiddleware);

module.exports = router;