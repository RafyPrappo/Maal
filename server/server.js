const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dns = require('dns');
const { default: mongoose } = require('mongoose');
require('dotenv').config();

dns.setServers(['8.8.8.8', '1.1.1.1']);

// Connect to MongoDB
connectDB();

const app = express();



// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});


//user
app.get('/test-user', async (req, res) => {
  try {
    const User = require('./models/User');
    const userCount = await User.countDocuments();

    res.json({
      success: true,
      message: 'User model is working!',
      userCount: userCount,
      database: mongoose.connection.name
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message
    });
  }
});


const PORT = process.env.PORT || 5000;

// Test route
app.get('/test', (req, res) => {
  res.json({ 
    message: 'MAAL server is running with middleware!',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 MAAL server running on http://localhost:${PORT}`);
  console.log(`📝 Test the API: http://localhost:${PORT}/test`);
});