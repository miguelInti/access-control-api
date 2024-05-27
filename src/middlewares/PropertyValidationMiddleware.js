const { body, validationResult } = require('express-validator');

const PropertyValidationMiddleware = [
  body('establishmentId')
    .notEmpty().withMessage('Establishment ID is required')
    .isInt({ gt: 0 }).withMessage('Establishment ID must be a positive integer'),
  body('tower')
    .notEmpty().withMessage('Tower is required')
    .isString().withMessage('Tower must be a string'),
  body('number')
    .notEmpty().withMessage('Number is required')
    .isString().withMessage('Number must be a string'),
  body('state')
    .notEmpty().withMessage('State is required')
    .isString().withMessage('State must be a string'),
  body('typeId')
    .notEmpty().withMessage('Type ID is required')
    .isInt({ gt: 0 }).withMessage('Type ID must be a positive integer'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = PropertyValidationMiddleware;
