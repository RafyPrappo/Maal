const express = require('express');
const cors = require('cors');
require('dotenv').config();

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