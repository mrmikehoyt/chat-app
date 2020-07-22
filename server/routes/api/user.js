/* eslint-disable no-shadow */
const express = require('express');
const { User } = require('../../models');
const auth = require('../../middleware/auth');

const router = express.Router();

// /api/user/
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      throw Error('User does not exist')
    }

    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

module.exports = router;
