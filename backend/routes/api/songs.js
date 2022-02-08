const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth } = require('../../utils/auth')
const { Song } = require('../../db/models')

const router = express.Router();



router.get('/', async (req, res) => {
    const songs = await Song.findall()
    console.log('@@@@@@@',songs)
    res.json(songs)

})


module.exports = router;
