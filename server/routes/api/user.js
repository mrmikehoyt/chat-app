/* eslint-disable no-shadow */
const express = require('express');
const db = require('../../models');
const auth = require('../../middleware/auth');


const router = express.Router();

// /api/user/
router
  .route('/')
  .get(auth, (req, res) => {
    db.User.findById(req.user.id)
      .select('-password')
      .then((user) => res.json(user));
  })

module.exports = router;
