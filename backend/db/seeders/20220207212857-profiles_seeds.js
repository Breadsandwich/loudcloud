'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Profiles', [
     { userId: 1, profilePicUrl: 'https://lh3.googleusercontent.com/8G2r77Vej8p3CglkaCFZCKIscdkLwy1l9lK1l-ThxgPEDp4dKvSfElgMxIAUNiM0-tlyxOjL4iTifX4JzbUeN2-X2zKAYWLC7i4AMw=w600', name: 'Demo-Disco-User', location: 'internet', bio: 'I demostrate.'},
     { userId: 2, profilePicUrl: 'https://i1.sndcdn.com/avatars-RlfMMGT1fVV0p017-EAzBcg-t200x200.jpg', name: 'anatu', location: 'Sao Paulo', bio: 'Making cool stuff lol.'},
     { userId: 3, profilePicUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Nujabes_performing_live.jpg/220px-Nujabes_performing_live.jpg', name: 'nujabes', location: 'Tokyo', bio: 'I am a DJ who likes to mix hip hop and jazz'},

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
