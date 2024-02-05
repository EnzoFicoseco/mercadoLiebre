const path = require('node:path');
const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeControllers');

router.get('/', homeController.renderHome);
router.get('/registro', homeController.renderRegister);
router.get('/login', homeController.renderLogin);

module.exports = router;