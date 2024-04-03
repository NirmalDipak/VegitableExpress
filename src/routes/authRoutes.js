const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/login', authController.login);
router.post('/sendOtp', authController.sendOtp);
router.get('/getUsers',authMiddleware.verifyToken,authController.getUser)


module.exports = router;
