const jwt = require('jsonwebtoken');
const { getSecret } = require('../config/authConfig');

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send('Token de autenticação não fornecido');
  }

  jwt.verify(token, getSecret(), (err, user) => {
    if (err) {
      return res.status(403).send('Token inválido');
    }
    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };