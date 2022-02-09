const express = require("express");
const asyncHandler = require("express-async-handler");

const { Song, User } = require('../../db/models')

const router = express.Router();


router.get('/', asyncHandler(async function(req, res) {
    const songs = await Song.findAll();

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

    return res.json(newSong)

}))

router.put('/:id', asyncHandler(async function(req, res) {
  const { userId, title, imageUrl } = req.body
  let user  = parseInt(userId, 10)

  const editSong = await Song.update({
    userId: user,
    imageUrl,
    title
  });

  return res.json(editSong)
}));


module.exports = router;
