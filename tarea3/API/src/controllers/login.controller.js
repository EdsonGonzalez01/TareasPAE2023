const model = require('./../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      // Look for the user based on the email
      const user = await model.findOne({ email });
      // Verify the user exists and the password is correct
      if (user && bcrypt.compareSync(password, user.password)) {
        // Generate the JWT 
        const token = jwt.sign(
          { id: user._id, email: user.email, roles: user.roles }, // Include 'roles' here
          process.env.SECRET_KEY,
          {
            expiresIn: '1h',
          }
        );

        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  },
  admin: (req, res) => {
    res.json({ message: 'Admin authorized' });
  },
  user: (req, res) => {
    res.json({ message: 'User authorized' });
  }
};
