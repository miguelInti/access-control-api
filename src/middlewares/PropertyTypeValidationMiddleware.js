const { body, validationResult } = require('express-validator');

const PropertyTypeValidationMiddleware = [
  body('name').notEmpty().withMessage('Name is required'),
  body('description').isString().withMessage('Description must be a string'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = PropertyTypeValidationMiddleware;
