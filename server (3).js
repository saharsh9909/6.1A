// server.js
const express = require('express');
const logger = require('./middleware/logger');
const authenticateToken = require('./middleware/auth');

const app = express();

// Apply logging middleware globally
app.use(logger);

// Public Route — No authentication required
app.get('/public', (req, res) => {
  res.status(200).send('This is a public route. No authentication required.');
});

// Protected Route — Requires Bearer token
app.get('/protected', authenticateToken, (req, res) => {
  res.status(200).send('You have accessed a protected route with a valid Bearer token!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
