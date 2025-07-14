const express = require('express');
const router = express.Router();
const externalApiController = require('../controllers/externalApiController');

// ראוט לקבלת רשימת ערים
router.get('/cities', externalApiController.getCities);

module.exports = router;
