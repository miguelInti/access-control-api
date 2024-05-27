const express = require('express');
const router = express.Router();
const SystemConfigController = require('../controllers/SystemConfigController');
const SystemConfigValidationMiddleware = require('../middlewares/SystemConfigValidationMiddleware');

router.post('/', SystemConfigValidationMiddleware, SystemConfigController.create);
router.get('/', SystemConfigController.findAll);
router.get('/:id', SystemConfigController.findOne);
router.put('/:id', SystemConfigValidationMiddleware, SystemConfigController.update);
router.delete('/:id', SystemConfigController.delete);

module.exports = router;
