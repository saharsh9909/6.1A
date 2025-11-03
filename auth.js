function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];

  // Check if Authorization header exists and follows Bearer token format
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header missing or incorrect' });
  }

  const token = authHeader.split(' ')[1];

  // Validate token
  if (token === 'mysecrettoken') {
    next();
  } else {
    res.status(403).json({ message: 'Invalid or expired token' });
  }
}

module.exports = authenticateToken;