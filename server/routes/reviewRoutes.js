const express = require('express');
const router = express.Router();

// בדיקה בסיסית
router.get('/', (req, res) => {
  res.send('Review API is working');
});

module.exports = router;
