const express = require('express');
const authController = require('../controllers/AuthController');
const UserValidationMiddleware = require('../middlewares/UserValidationMiddleware');
const LoginValidationMiddleware = require('../middlewares/LoginValidationMiddleware');
const authMiddleware = require('../middlewares/AuthMiddleware');
const router = express.Router();

router.post('/register', UserValidationMiddleware, authController.register);
router.post('/login', LoginValidationMiddleware, authController.login);
router.get('/me', authMiddleware(), authController.getMe);

module.exports = router;
