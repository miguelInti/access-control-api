const express = require('express');
const router = express.Router();
const CommonAreaController = require('../controllers/CommonAreaController');
const CommonAreaValidationMiddleware = require('../middlewares/CommonAreaValidationMiddleware');

router.post('/', CommonAreaValidationMiddleware, CommonAreaController.create);
router.get('/', CommonAreaController.findAll);
router.get('/:id', CommonAreaController.findOne);
router.put('/:id', CommonAreaValidationMiddleware, CommonAreaController.update);
router.delete('/:id', CommonAreaController.delete);

module.exports = router;
