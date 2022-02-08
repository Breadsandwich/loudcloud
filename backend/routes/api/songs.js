const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth } = require('../../utils/auth')
const { Song } = require('../../db/models')

const router = express.Router();


router.get('/', asyncHandler(async function(req, res) {
    const songs = await Song.findAll();

    return res.json(songs);
  }));

// router.post('/', asyncHandler(async function(req, res){
//     const { userId, title, songUrl, imageUrl } = req.body
//     const song = await Song.create({
//       userId,
//       songUrl,
//       imageUrl,
//       title
//     })
//     return res.json(song)

// }))


module.exports = router;
