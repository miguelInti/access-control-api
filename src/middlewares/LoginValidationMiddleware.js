const { body, validationResult } = require('express-validator');

const UserValidationMiddleware = [
  body('email').isEmail().withMessage('Por favor, introduce un correo electrónico válido.'),
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = UserValidationMiddleware;
