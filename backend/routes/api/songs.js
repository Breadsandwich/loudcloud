const express = require("express");
const asyncHandler = require("express-async-handler");

const SongRepository = require('../../db/song-repository')

const { requireAuth } = require('../../utils/auth')
const { Song } = require('../../db/models')

const router = express.Router();


router.get('/', asyncHandler(async function(_req, res) {
    const songs = await SongRepository.allSongs();
    return res.json(songs);
  }));


module.exports = router;
