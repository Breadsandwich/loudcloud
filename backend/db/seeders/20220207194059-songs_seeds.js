'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Songs', [
     {userId: 2, songUrl: 'https://loudcloudbucket.s3.us-west-1.amazonaws.com/seed+song/anatu+-+baleh.mp3', imageUrl: 'https://i1.sndcdn.com/artworks-000177716102-rthurp-t500x500.jpg', title: 'baleh' },
     {userId: 2, songUrl: 'https://loudcloudbucket.s3.us-west-1.amazonaws.com/seed+song/anatu+-+bleach.mp3', imageUrl: 'https://i1.sndcdn.com/artworks-000145172653-qtzq24-t500x500.jpg', title: 'bleach' },
     {userId: 2, songUrl: 'https://loudcloudbucket.s3.us-west-1.amazonaws.com/seed+song/anatu+-+inkling.mp3', imageUrl: 'https://i1.sndcdn.com/artworks-ODf6gutxV5UH-0-t500x500.jpg', title: 'inkling' },
     {userId: 3, songUrl: 'https://loudcloudbucket.s3.us-west-1.amazonaws.com/seed+song/nujabes+-+feather.mp3', imageUrl: 'https://i1.sndcdn.com/artworks-000020056702-95x314-t500x500.jpg', title: 'feather' },
     {userId: 3, songUrl: 'https://loudcloudbucket.s3.us-west-1.amazonaws.com/seed+song/nujabes+-+Luv+(sic.)+pt3.mp3', imageUrl: 'https://i1.sndcdn.com/artworks-000043371872-2haw1t-t500x500.jpg', title: 'Luv (sic.) pt3' },


   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Songs', null, {});
  }
};
