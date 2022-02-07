'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-Disco-User',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'reallygoodmusician@user.io',
        username: 'anatu123',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'goodbops@user.io',
        username: 'nujabes',
        hashedPassword: bcrypt.hashSync('password')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-Disco-User', 'anatu123', 'nujabes'] }
    }, {});
  }
};
