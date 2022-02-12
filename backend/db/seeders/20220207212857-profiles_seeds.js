'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Profiles', [
     { userId: 1, profilePicUrl: 'https://www.robives.com/wp-content/uploads/2016/10/boombox-a600-600x600.jpg', name: 'Demo-Disco-User', location: 'internet', bio: 'I demonstrate.'},
     { userId: 2, profilePicUrl: 'https://i1.sndcdn.com/avatars-RlfMMGT1fVV0p017-EAzBcg-t200x200.jpg', name: 'pablo', location: 'Sao Paulo', bio: 'Making cool stuff lol.'},
     { userId: 3, profilePicUrl: 'https://i1.sndcdn.com/artworks-000038345409-0q8tnk-t500x500.jpg', name: 'nujabes', location: 'Tokyo', bio: 'I am a DJ who likes to mix hip hop and jazz'},
     { userId: 4, profilePicUrl: 'https://www.robives.com/wp-content/uploads/2016/10/boombox-a600-600x600.jpg', name: 'cola', location: 'New York', bio: 'I just listen to music.'},
     { userId: 5, profilePicUrl: 'https://www.robives.com/wp-content/uploads/2016/10/boombox-a600-600x600.jpg', name: 'bread', location: 'walmart', bio: 'I bread bake.'},

   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Profiles', null, {});
  }
};
