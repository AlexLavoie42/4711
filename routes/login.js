const express = require('express');
let loginController = require('../controllers/loginController');
const router = express.Router();

router.post('/login', loginController.login);

router.get('/logout', loginController.logout);

module.exports = router;