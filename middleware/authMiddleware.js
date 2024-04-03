const jwt = require('jsonwebtoken');
const config = require('../config/default.json');
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
  // Get token from request headers
  const token = req.header('Authorization');

  // Check if token is missing
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  try {
    // Verify token
    const tokenWithoutBearer = token.replace('Bearer ', '');
    const decoded = jwt.verify(tokenWithoutBearer, config.jwtSecret);

    // Check if token belongs to the user
    const user = await User.findOne({ _id: decoded.userId, token: tokenWithoutBearer });
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    // Attach user object to request for further use
    req.user = user;
    // Proceed to the next middleware
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

module.exports = authMiddleware;
