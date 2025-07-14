const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

// בדיקת API בסיסית - פתוח לכולם
router.get('/test', (req, res) => {
  res.send('User API is working');
});

// ראוט מוגן עם JWT - דוגמה
router.get('/protected', authenticateToken, (req, res) => {
  res.json({
    message: 'This is a protected route',
    user: req.user
  });
});

module.exports = router;

