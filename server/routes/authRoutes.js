const express = require('express');
const router = express.Router();

// בדיקה בסיסית
router.get('/', (req, res) => {
  res.send('Auth API is working');
});

module.exports = router;
