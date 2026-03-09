// LINE 1: Import express - this brings in the express library
const express = require('express');

// LINE 2: Create our app - this creates our web server
const app = express();

// LINE 3: Import dotenv - this reads our .env file
require('dotenv').config();

// LINE 4: Define port - use from .env or default to 5000
const PORT = process.env.PORT || 5000; //direct Port = 5000 dileo somossa cilona

// LINE 5: Create a test route - when someone visits /test
app.get('/test', (req, res) => {
  // Send back a JSON response
  res.json({ 
    message: 'MAAL server is running!',
    timestamp: new Date().toISOString()
  });
});

// LINE 6: Start the server
app.listen(PORT, () => {
  console.log(`🚀 MAAL server running on http://localhost:${PORT}`);
  console.log(`📝 Test the API: http://localhost:${PORT}/test`);
});