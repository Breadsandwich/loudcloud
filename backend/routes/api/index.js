const express = require('express');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songsRouter = require('./songs');
const profilesRouter = require('./profiles')

const router = express.Router();


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/songs', songsRouter);
router.use('/profiles', profilesRouter);

module.exports = router;
