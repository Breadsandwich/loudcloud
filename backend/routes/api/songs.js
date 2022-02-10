const express = require("express");
const asyncHandler = require("express-async-handler");

const { Song, User } = require('../../db/models')

const router = express.Router();


router.get('/', asyncHandler(async function(req, res) {
    const songs = await Song.findAll({
      include: User
    });

    return res.json(songs);
  }));

router.post('/', asyncHandler(async function(req, res){
  const {  userId, title, songUrl, imageUrl } = req.body
  let user = parseInt(userId, 10)

  const newSong = await Song.create({
    userId: user,
    songUrl,
    imageUrl,
    title
  })

  return res.json(newSong)

}))



router.put('/:id', asyncHandler(async function(req, res){
  const id = req.params.id;
  const { title, imageUrl, songUrl } = req.body;
  const song = await Song.findByPk(id, { include: User });
  const updatedSong = await song.update({
    title,
    imageUrl,
    songUrl
  });
  res.json(updatedSong);
}))



router.delete('/:id', asyncHandler(async function(req, res) {

  const deleteSong = await Song.destroy({
    where: {
      id: req.params.id
    }
  })

  return res.json(deleteSong);
}));


module.exports = router;
