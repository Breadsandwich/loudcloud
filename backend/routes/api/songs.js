const express = require("express");
const asyncHandler = require("express-async-handler");

const { Song, User } = require('../../db/models')

const router = express.Router();


router.get('/', asyncHandler(async function(req, res) {
    const songs = await Song.findAll();
    console.log('songs from get router@@@@@:',songs)
    return res.json(songs);
  }));

router.post('/', asyncHandler(async function(req, res){
    const {  userId, title, songUrl, imageUrl } = req.body
    let user = parseInt(userId, 10)
    console.log(user)

    const newSong = await Song.create({
      userId: user,
      songUrl,
      imageUrl,
      title
    })
    console.log('Song from post router@@@@@@@@@', Song)

    console.log('newSong @@@@@@@',newSong)
    return res.json(newSong)

}))


module.exports = router;
