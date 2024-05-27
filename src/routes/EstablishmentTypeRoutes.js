const express = require('express');
const router = express.Router();
const EstablishmentTypeController = require('../controllers/EstablishmentTypeController');
const EstablishmentTypeValidationMiddleware = require('../middlewares/EstablishmentTypeValidationMiddleware');

router.post('/', EstablishmentTypeValidationMiddleware, EstablishmentTypeController.create);
router.get('/', EstablishmentTypeController.findAll);
router.get('/:id', EstablishmentTypeController.findOne);
router.put('/:id', EstablishmentTypeValidationMiddleware, EstablishmentTypeController.update);
router.delete('/:id', EstablishmentTypeController.delete);

module.exports = router;
