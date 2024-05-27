const { body, validationResult } = require('express-validator');

const RolePermissionValidationMiddleware = [
  body('roleId')
    .notEmpty().withMessage('Role ID is required')
    .isInt({ gt: 0 }).withMessage('Role ID must be a positive integer'),
  body('permissionId')
    .notEmpty().withMessage('Permission ID is required')
    .isInt({ gt: 0 }).withMessage('Permission ID must be a positive integer'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = RolePermissionValidationMiddleware;
