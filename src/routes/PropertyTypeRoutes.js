const express = require('express');
const router = express.Router();
const PropertyTypeController = require('../controllers/PropertyTypeController');
const PropertyTypeValidationMiddleware = require('../middlewares/PropertyTypeValidationMiddleware');

router.post('/', PropertyTypeValidationMiddleware, PropertyTypeController.create);
router.get('/', PropertyTypeController.findAll);
router.get('/:id', PropertyTypeController.findOne);
router.put('/:id', PropertyTypeValidationMiddleware, PropertyTypeController.update);
router.delete('/:id', PropertyTypeController.delete);

module.exports = router;
