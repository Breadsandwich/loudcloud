const express = require("express");
const asyncHandler = require("express-async-handler");

const { Profile, User } = require('../../db/models')

const router = express.Router();


router.get('/:id', asyncHandler(async function (req, res) {
    const id = req.params.id;
    const profile = await Profile.findByPk(id)
    return res.json(profile)
}))


router.put('/:id', asyncHandler(async function (req, res) {
    const id = req.params.id;
    const { profilePicUrl, name, location, bio} = req.body;
    const profile = await Profile.findByPk(id, { include: User});
    const updatedProfile = await profile.update({
        profilePicUrl,
        name,
        location,
        bio
    });

     res.json(updatedProfile)
}))


module.exports = router
