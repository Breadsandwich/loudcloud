const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth } = require('../../utils/auth')
const { Song, User } = require('../../db/models')

const router = express.Router();



router.get('/', asyncHandler(async (req, res) => {
    const allSongs = await Song.findAll()
    console.log(allSongs)

}))


module.exports = router;
