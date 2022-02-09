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

router.put('/:id(\\d+)', asyncHandler(async function(req, res) {
  const songId = req.params.id;
  const song = await Song.findByPk(songId, {include: User });
  const editSong = await song.update(req.body)

  res.json(editSong)
}));


module.exports = router;
