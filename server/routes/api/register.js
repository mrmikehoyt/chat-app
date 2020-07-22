/* eslint-disable no-shadow */
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');

const router = express.Router();

// /api/register/
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Invalid fields' });
  }

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'User already exist' });
    }

    const salt = await bcrypt.genSalt(10);
    if (!salt) {
      throw Error('BCRYPT ERROR: Unable to create salt');
    }

    const hash = await bcrypt.hash(password, salt)
    if (!hash) {
      throw Error('BCRYPT ERROR: Unable to hash password');
    }

    const newUser = new User({
      name,
      email,
      password: hash,
    });

    const savedUser = await newUser.save()
    const token = jwt.sign({id: savedUser.id}, process.env.JWT_SECRET );

    res.status(200).json({
      token,
      user: {
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email
      }
    })

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
});

module.exports = router;
