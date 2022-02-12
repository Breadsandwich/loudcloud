'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        refrences: { model: 'Users' }
      },
      profilePicUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://www.robives.com/wp-content/uploads/2016/10/boombox-a600-600x600.jpg'
      },
      name: {
        type: Sequelize.STRING,
        defaultValue: ' '
      },
      location: {
        type: Sequelize.STRING,
        defaultValue: ' '

      },
      bio: {
        type: Sequelize.TEXT,
        defaultValue: ' '
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Profiles');
  }
};
