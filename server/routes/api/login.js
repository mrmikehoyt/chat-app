/* eslint-disable no-shadow */
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../../models');

const router = express.Router();

// /api/login
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Invalid fields' });
  }

  const user = await db.User.findOne({ email });

  if (!user) {
    return res.status(400).json({ error: 'User does not exist' });
  }

  // Validate password
  bcrypt.compare(password, user.password)
    .then((isMatch) => {
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }

      jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        (error, token) => {
          if (error) throw error;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          });
        },
      );
    });
});

module.exports = router;
