const express = require('express');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songsRouter = require('./songs');

const router = express.Router();


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/songs', songsRouter);

module.exports = router;
