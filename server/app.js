const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // כאן טוענים את ה-.env
const connectDB = require('./config/db');

// יצירת אפליקציה
const app = express();

// חיבור למסד הנתונים
connectDB();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// ייבוא הראוטים
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const externalApiRoutes = require('./routes/externalApiRoutes'); // הוספנו כאן

// שימוש בראוטים
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/external', externalApiRoutes); // הוספנו כאן

// הרצת השרת
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
