const express = require('express');
const router = express.Router();
const EstablishmentController = require('../controllers/EstablishmentController');
const EstablishmentValidationMiddleware = require('../middlewares/EstablishmentValidationMiddleware');

router.post('/', EstablishmentValidationMiddleware, EstablishmentController.create);
router.get('/', EstablishmentController.findAll);
router.get('/:id', EstablishmentController.findOne);
router.put('/:id', EstablishmentValidationMiddleware, EstablishmentController.update);
router.delete('/:id', EstablishmentController.delete);

module.exports = router;
