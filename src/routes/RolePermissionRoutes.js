const express = require('express');
const router = express.Router();
const RolePermissionController = require('../controllers/RolePermissionController');
const RolePermissionValidationMiddleware = require('../middlewares/RolePermissionValidationMiddleware');

router.post('/', RolePermissionValidationMiddleware, RolePermissionController.create);
router.get('/', RolePermissionController.findAll);
router.get('/:id', RolePermissionController.findOne);
router.put('/:id', RolePermissionValidationMiddleware, RolePermissionController.update);
router.delete('/:id', RolePermissionController.delete);

module.exports = router;
