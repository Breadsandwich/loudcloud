const { Song } = require('./models');

async function allSongs() {
    return await Song.findAll();
}

module.exports = { allSongs }
