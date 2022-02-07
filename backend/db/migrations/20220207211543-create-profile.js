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
        defaultValue: 'https://lh3.googleusercontent.com/8G2r77Vej8p3CglkaCFZCKIscdkLwy1l9lK1l-ThxgPEDp4dKvSfElgMxIAUNiM0-tlyxOjL4iTifX4JzbUeN2-X2zKAYWLC7i4AMw=w600'
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.TEXT
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
