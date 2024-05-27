const express = require('express');
const router = express.Router();
const %%ControllerName%% = require('../controllers/%%ControllerName%%');
const %%ValidationMiddlewareName%% = require('../middlewares/%%ValidationMiddlewareName%%');

router.post('/', %%ValidationMiddlewareName%%, %%ControllerName%%.create);
router.get('/', %%ControllerName%%.findAll);
router.get('/:id', %%ControllerName%%.findOne);
router.put('/:id', %%ValidationMiddlewareName%%, %%ControllerName%%.update);
router.delete('/:id', %%ControllerName%%.delete);

module.exports = router;
