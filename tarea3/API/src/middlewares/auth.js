const jwt = require('jsonwebtoken');
const middleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
  
      req.user = decoded;
      next();
    });
}

module.exports = middleware;

