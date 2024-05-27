const express = require('express');
const router = express.Router();
const RoleController = require('../controllers/RoleController');
const RoleValidationMiddleware = require('../middlewares/RoleValidationMiddleware');

router.post('/', RoleValidationMiddleware, RoleController.create);
router.get('/', RoleController.findAll);
router.get('/:id', RoleController.findOne);
router.put('/:id', RoleValidationMiddleware, RoleController.update);
router.delete('/:id', RoleController.delete);

module.exports = router;
