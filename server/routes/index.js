const path = require('path');
const express = require('express');
const userRoute = require('./api/user');
const loginRoute = require('./api/login');
const registerRoute = require('./api/register');
const noteRoute = require('./api/note');

const router = express.Router();

router.use('/api/note', noteRoute);
router.use('/api/user', userRoute);
router.use('/api/register', registerRoute);
router.use('/api/login', loginRoute);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
