/* eslint-disable no-shadow */
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../../models');

const router = express.Router();

// /api/register/
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Invalid fields' });
  }

  const user = await db.User.findOne({ email });

  if (user) {
    return res.status(400).json({ error: 'User already exist' });
  }

  const newUser = new db.User({
    name,
    email,
    password,
  });

  bcrypt.genSalt(10, (error, salt) => {
    if (error) throw error;
    bcrypt.hash(newUser.password, salt, (error, hash) => {
      if (error) throw error;

      newUser.password = hash;
      newUser
        .save()
        .then((user) => {
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
  });
});

module.exports = router;
