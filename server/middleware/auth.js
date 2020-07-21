const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token');

  // Check for the token
  if (!token) {
    res.status(401).json({ error: 'Authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Token invalid' });
  }
}

module.exports = auth;
