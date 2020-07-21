const express = require('express');
const userRoute = require('./user');
const loginRoute = require('./login');
const registerRoute = require('./register');

const router = express.Router();

router.use('/user', userRoute);
router.use('/register', registerRoute);
router.use('/login', loginRoute);

module.exports = router;
