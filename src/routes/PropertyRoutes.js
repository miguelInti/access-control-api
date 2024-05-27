const express = require('express');
const router = express.Router();
const PropertyController = require('../controllers/PropertyController');
const PropertyValidationMiddleware = require('../middlewares/PropertyValidationMiddleware');

router.post('/', PropertyValidationMiddleware, PropertyController.create);
router.get('/', PropertyController.findAll);
router.get('/:id', PropertyController.findOne);
router.put('/:id', PropertyValidationMiddleware, PropertyController.update);
router.delete('/:id', PropertyController.delete);

module.exports = router;
