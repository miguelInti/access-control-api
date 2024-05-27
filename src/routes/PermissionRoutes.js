const express = require('express');
const router = express.Router();
const PermissionController = require('../controllers/PermissionController');
const PermissionValidationMiddleware = require('../middlewares/PermissionValidationMiddleware');

router.post('/', PermissionValidationMiddleware, PermissionController.create);
router.get('/', PermissionController.findAll);
router.get('/:id', PermissionController.findOne);
router.put('/:id', PermissionValidationMiddleware, PermissionController.update);
router.delete('/:id', PermissionController.delete);

module.exports = router;
