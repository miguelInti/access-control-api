const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const UserValidationMiddleware = require('../middlewares/UserValidationMiddleware');
const authMiddleware = require('../middlewares/AuthMiddleware');
const checkPermission = require('../middlewares/checkPermission');

// Rutas protegidas por permisos
// router.get('/', authMiddleware(['Administrator', 'PropertyAdministrator']), checkPermission('read_user'), UserController.findAll);
// router.post('/', authMiddleware(['Administrator', 'PropertyAdministrator']), checkPermission('write_user'), UserController.create);
router.get('/', UserController.findAll);
router.post('/', UserValidationMiddleware, UserController.create);
router.post('/Admin', UserValidationMiddleware, UserController.createAdmin);
// router.put('/Admin', UserValidationMiddleware, UserController.updateAdmin);
router.get('/:id', UserController.findOne);
router.put('/:id', UserValidationMiddleware, UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router;
