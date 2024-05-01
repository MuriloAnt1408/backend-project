function authorize(role) {
    return (req, res, next) => {
      const userRole = req.user.role; // Supondo que o papel do usuário seja armazenado no token JWT
  
      if (userRole !== role) {
        return res.status(403).send('Sem permissão para acessar este recurso');
      }
      next();
    };
  }
  
  module.exports = { authorize };