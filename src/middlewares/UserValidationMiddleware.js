const { body, validationResult } = require('express-validator');

const UserValidationMiddleware = [
  body('first_name')
    .notEmpty().withMessage('First name is required')
    .isString().withMessage('First name must be a string'),
  body('last_name')
    .notEmpty().withMessage('Last name is required')
    .isString().withMessage('Last name must be a string'),
  body('document_type')
    .notEmpty().withMessage('Document type is required')
    .isString().withMessage('Document type must be a string'),
  body('document_number')
    .notEmpty().withMessage('Document number is required')
    .isString().withMessage('Document number must be a string')
    .custom(value => {
      if (/\s/.test(value)) {
        throw new Error('Document number cannot contain spaces');
      }
      return true;
    }),
  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Email must be valid'),
  body('phone')
    .notEmpty().withMessage('Phone is required')
    .isString().withMessage('Phone must be a string'),
  body('status')
    .notEmpty().withMessage('Status is required')
    .isString().withMessage('Status must be a string'),
  body('username')
    .notEmpty().withMessage('Username is required')
    .isString().withMessage('Username must be a string'),
  body('password')
    .notEmpty().withMessage('Password is required')
    .isString().withMessage('Password must be a string'),
  body('roles').optional().isArray().withMessage('Roles must be an array of strings'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = UserValidationMiddleware;
