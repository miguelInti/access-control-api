const { body, validationResult } = require('express-validator');

const EstablishmentValidationMiddleware = [
  body('rut')
    .notEmpty().withMessage('RUT is required')
    .isString().withMessage('RUT must be a string'),
  body('name')
    .notEmpty().withMessage('Name is required')
    .isString().withMessage('Name must be a string'),
  body('typeId')
    .notEmpty().withMessage('Type ID is required')
    .isInt({ gt: 0 }).withMessage('Type ID must be a positive integer'),
  body('legalRepresentative')
    .notEmpty().withMessage('Legal Representative is required')
    .isString().withMessage('Legal Representative must be a string'),
  body('towerCount')
    .notEmpty().withMessage('Tower Count is required')
    .isInt({ gt: 0 }).withMessage('Tower Count must be a positive integer'),
  body('apartmentCount')
    .notEmpty().withMessage('Apartment Count is required')
    .isInt({ gt: 0 }).withMessage('Apartment Count must be a positive integer'),
  body('address')
    .notEmpty().withMessage('Address is required')
    .isString().withMessage('Address must be a string'),
  body('region')
    .notEmpty().withMessage('Region is required')
    .isString().withMessage('Region must be a string'),
  body('commune')
    .notEmpty().withMessage('Commune is required')
    .isString().withMessage('Commune must be a string'),
  body('phone')
    .notEmpty().withMessage('Phone is required')
    .isString().withMessage('Phone must be a string'),
  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Email must be valid'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = EstablishmentValidationMiddleware;
